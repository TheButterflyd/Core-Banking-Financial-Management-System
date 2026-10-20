import AccountList from "./components/AccountList.jsx";
import "./App.css"; // sau calea către fișierul tău de stiluri
const accountData = [
 
];

export default function App() {
  return (
    <>
      <header className="app-header">
        <h1>Core Banking</h1>
        <p>Mockup: customers, multi-currency accounts and transactions.</p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Conturile mele</h2>
          <AccountList accounts={accountData} />
        </section>
      </main>
    </>
  );
}