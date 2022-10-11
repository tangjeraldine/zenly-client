import * as yup from "yup";

const TransactionNoValidation = yup.object({
  transaction_no: yup
    .string()
    .matches(
      /^[A-Za-z0-9_-]{8,25}$/,
      {
        message: "Transaction no. can only contain alphabets, '-', and numerals and have at least 8 characters.",
        excludeEmptyString: true,
      }
    )
    .required("Transaction number is required."),
});

export default TransactionNoValidation;
