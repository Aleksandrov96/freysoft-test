import { createSlice } from "@reduxjs/toolkit";

export interface Transaction {
  bankAccountName: string;
  transactionDate: string;
  transactionAmount: string;
  receiverImg: string;
}

export interface TransactionState {
  transactions: Transaction[];
}

const initialState: TransactionState = {
  transactions: [
    {
      bankAccountName: "Nike Super Store",
      transactionDate: "Fri, 05 April 2022",
      transactionAmount: "$475",
      receiverImg:
        "https://i.insider.com/53d29d5c6bb3f7a80617ada8?width=1000&format=jpeg&auto=webp",
    },
    {
      bankAccountName: "Puma Store",
      transactionDate: "Fri, 05 April 2022",
      transactionAmount: "$952",
      receiverImg:
        "https://st.depositphotos.com/38540216/59631/v/450/depositphotos_596311672-stock-illustration-puma-logo-black-symbol-with.jpg",
    },
  ],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
});

export default transactionsSlice.reducer;
