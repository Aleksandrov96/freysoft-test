import { Avatar, Box, Container, Typography } from "@mui/material";
import { Transaction } from "@/store/transactionsSlice";

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <Container
      sx={{
        backgroundColor: "#FAFAFA",
        p: "10px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: "1rem",
      }}
    >
      <Avatar
        alt={transaction.bankAccountName}
        src={transaction.receiverImg}
        sx={{ mr: "1rem" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="body1" fontWeight="bold">
            {transaction.bankAccountName}
          </Typography>
          <Typography variant="caption" color="#A3A3A3">
            Bank Account
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexFlow: "column" }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="#2BB272"
            textAlign="right"
          >
            {transaction.transactionAmount}
          </Typography>
          <Typography variant="caption" color="#A3A3A3" textAlign="right">
            {transaction.transactionDate}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TransactionItem;
