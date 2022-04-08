import './form.css'
import { useState } from "react"

export const Form = ({listTransactions, setListTransactions}) => {
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [value, setValue] = useState("")

  const newTransaction = {
    description,
    type, 
    value: Number(value)
  }

  const addTransaction = (addNew) => {
    setListTransactions([...listTransactions, addNew])
  }

  const handleTransactions = (e) => {
    e.preventDefault()

    addTransaction(newTransaction)
  }

    return (
    <div className='form'>
      <form onSubmit={handleTransactions}>
        
        <label>Descrição</label>

        <input className='description'
        placeholder='Digite aqui sua descrição'
        type='text' 
        onChange={(e) => setDescription(e.target.value)}
        />
        
        <label>Valor</label>
        <input 
        placeholder='R$'
        type='text'
        onChange={(e) => setValue(e.target.value)}
        />

        <select onChange={(e) => setType(e.target.value)}>
          <option value="" disabled selected hidden>Selecione</option>
          <option>Entrada</option>
          <option>Saída</option>
        </select>
        
        
        <button type="submit">Inserir valor</button>
        
        
      </form>
    </div>
    )
    
  }