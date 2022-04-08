import { Card } from "./Card"

export const List = ({listTransactions}) => {
    return (
        <>
            {listTransactions.map((transaction) => 
                <Card transaction={transaction}/>
            )}
        </>
    ) 
}
