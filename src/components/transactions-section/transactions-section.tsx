import { Box, Container, Typography } from "@mui/material";
import TransactionItem from "./transaction-item";
import { useAppSelector } from "../../store/store";
import { Transaction } from "../../store/transactionsSlice";

export default function TransactionsSection() {
  const { transactions } = useAppSelector((state) => state.transactions);

  return (
    <Container sx={{ p: { md: 0, xs: 0 }, mb: "4rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mt: "24px",
          mb: "24px",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Transactions
        </Typography>
        <Typography
          variant="caption"
          color="#A3A3A3"
          sx={{ cursor: "pointer" }}
        >
          View All
        </Typography>
      </Box>
      {transactions.map((transaction: Transaction) => (
        <TransactionItem
          transaction={transaction}
          key={transaction.bankAccountName}
        />
      ))}
    </Container>
  );
}
