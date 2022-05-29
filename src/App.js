import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import logo from "./img/Nu Kenzielogo.svg";
import emptyList from "./img/empty.jpg";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />
        <button>Início</button>
      </header>

      <main className="App">
        <section className="sideBox">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          <TotalMoney listTransactions={listTransactions} />
        </section>

        <section className="list">
          <nav className="navBar">
            <h2>Resumo financeiro</h2>
            <div className="btnsContainer">
              <button className="navBarButton">Todos</button>
              <button className="navBarButton">Entradas</button>
              <button className="navBarButton">Despesas</button>
            </div>
          </nav>
          <div>
            {listTransactions.length === 0 ? (
              <img className="emptyList" src={emptyList} alt="vazio" />
            ) : (
              <List listTransactions={listTransactions} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
