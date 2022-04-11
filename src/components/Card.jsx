import "./card.css";

export const Card = ({ transaction }) => {
  const cardColor = transaction.type === "Entrada" ? "Entrance" : "Out";

  return (
    <div className={`card card${cardColor}`}>
      <h3 className="cardLabel">
        {transaction.description}
        <span>{transaction.type}</span>
      </h3>
      <p>R$ {transaction.value}</p>
    </div>
  );
};
