import { Card } from "../Card";

export const List = ({ listTransactions }) => {
  const listCards = listTransactions.map((transaction, index) => (
    <Card transaction={transaction} key={index} />
  ));
  return <>{listCards}</>;
};
