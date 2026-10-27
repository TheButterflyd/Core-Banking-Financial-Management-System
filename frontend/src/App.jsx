import { useState, useEffect } from "react";
import AccountList from "./components/AccountList.jsx";
import "./App.css";

const accountData = [
  {
    id: 1,
    accountNumber: "RO12BANK0000000001",
    type: "savings",
    balance: 10000.0,
    currency: "RON",
    customer: "John Doe",
    status: "active",
    isPriority: true
  },
  {
    id: 2,
    accountNumber: "GB29BANK0000000002",
    type: "checking",
    balance: 500.0,
    currency: "GBP",
    customer: "Maria Popescu",
    status: "active",
    isPriority: false
  }
];

function temaInitiala() {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

function HeaderStats({ accounts }) {
  const activeCount = accounts.filter((account) => account.status === "active").length;
  const blockedCount = accounts.filter((account) => account.status === "blocked").length;

  return (
    <div className="header-stats">
      <span>Număr conturi: {accounts.length}</span>
      <span>Active: {activeCount}</span>
      <span>Blocate: {blockedCount}</span>
    </div>
  );
}

export default function App() {
  const [accounts, setAccounts] = useState(accountData);
  const [tema, setTema] = useState(temaInitiala);

  // Sincronizează atributul pe <html> la schimbarea temei
  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

  function handleTema() {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  }

  function handleTogglePriority(id) {
    setAccounts((prev) =>
      prev.map((account) =>
        account.id === id
          ? { ...account, isPriority: !account.isPriority }
          : account
      )
    );
  }

  function handleDelete(id) {
    setAccounts((prev) => prev.filter((account) => account.id !== id));
  }

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>Core Banking</h1>
        <p>Mockup: customers, multi-currency accounts and transactions.</p>
        <HeaderStats accounts={accounts} />
      </header>

      <main className="container">
        <section className="panel">
          <h2>Conturile mele</h2>
          <AccountList
            accounts={accounts}
            onTogglePriority={handleTogglePriority}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}