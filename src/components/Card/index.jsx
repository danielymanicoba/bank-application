import "./style.css";

export const Card = ({ transaction, index }) => {
  const cardColor = transaction.type === "Entrada" ? "Income" : "Expense";
  return (
    <div className={`card card${cardColor}`} key={index}>
      <h3 className="cardLabel">
        {transaction.description}
        <span>{transaction.type}</span>
      </h3>
      <p>R$ {transaction.value}</p>
    </div>
  );
};
