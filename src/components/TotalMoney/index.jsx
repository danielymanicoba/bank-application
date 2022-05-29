import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce(
    (acc, listTransactions) =>
      listTransactions.type === "Entrada"
        ? acc + listTransactions.value
        : acc - listTransactions.value,

    0
  );

  return (
    <div className="totalMoney">
      <p className="labelTotalMoney">
        Valor total: <span>O valor se refere ao saldo</span>
      </p>
      $ {total}
    </div>
  );
};
