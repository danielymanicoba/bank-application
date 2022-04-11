import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 },
  ]);

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />
      </header>

      <div className="App">
        <section className="sideBox">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          <TotalMoney listTransactions={listTransactions} />
        </section>

        <section className="list">
          <List listTransactions={listTransactions} />
        </section>
      </div>
    </>
  );
}

export default App;
