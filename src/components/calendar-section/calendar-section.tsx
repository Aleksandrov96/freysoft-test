import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Container, IconButton, Typography } from "@mui/material";
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import "@/components/calendar-section/calendar-section.css";

const CalendarSection: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const changeWeekHandle = (btnType: string) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
    }
  };

  const onDateClickHandle = (day: Date) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header">
        <IconButton onClick={() => changeWeekHandle("prev")}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="h6">{format(currentMonth, dateFormat)}</Typography>
        <IconButton onClick={() => changeWeekHandle("next")}>
          <ChevronRightIcon />
        </IconButton>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EE";
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat).charAt(0)}
        </div>
      );
    }
    return <div className="row">{days}</div>;
  };

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const marked = i === 1 || i === 2 || i === 3 ? "marked" : "";
        let classNames;
        if (isSameDay(day, new Date())) {
          classNames = "col today";
        }
        if (isSameDay(day, selectedDate)) {
          classNames = "col selected";
        } else {
          classNames = `col ${marked}`;
        }
        days.push(
          <div
            className={classNames}
            key={i}
            onClick={() => {
              onDateClickHandle(cloneDay);
            }}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day as unknown as string}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  return (
    <Container className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </Container>
  );
};

export default CalendarSection;
