import './card.css'

export const Card = ({transaction}) => {
        
    return (
    <div className="card">
      <h3 className='cardLabel'>{transaction.description}<span>{transaction.type}</span></h3>
      <p>R$ {transaction.value}</p>
    </div>
    )
}