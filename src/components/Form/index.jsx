import { useState } from "react";
import "./style.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  const newTransaction = {
    description,
    type,
    value: Number(value),
  };

  const addTransaction = (addNew) => {
    setListTransactions([...listTransactions, addNew]);
  };

  const handleTransactions = (e) => {
    e.preventDefault();

    addTransaction(newTransaction);
  };

  return (
    <form onSubmit={handleTransactions}>
      <label className="labelDescription">
        Descrição
        <input
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <span>Ex: compra de roupas</span>
      </label>

      <div className="formInfoEntry">
        <label>
          Valor
          <input
            type="number"
            placeholder="R$"
            min="1"
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <label>
          Tipo de valor
          <select
            required
            name="tipo de valor"
            onChange={(e) => setType(e.target.value)}
          >
            <option hidden defaultValue>
              Selecione
            </option>
            <option>Entrada</option>
            <option>Despesa</option>
          </select>
        </label>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};
