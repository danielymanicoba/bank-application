import './totalMoney.css'

export const TotalMoney = ({listTransactions}) => {
        
    return  (
        
        <div className="totalMoney">
            <p className='labelTotalMoney'>Valor total: <span>O valor se refere ao saldo</span></p>
            $ {listTransactions.reduce(
              (acc, listTransactions) => acc + listTransactions.value , 0
            )}
        </div>
    )
}