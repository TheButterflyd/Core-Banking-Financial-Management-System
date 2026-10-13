const accountData = [
  { id: 1, accountNumber: 'RO12BANK0000000001', type: 'savings', balance: 10000.0, currency: 'RON', customer: 'John Doe', status: 'active' },
  { id: 2, accountNumber: 'GB29BANK0000000002', type: 'checking', balance: 500.0, currency: 'GBP', customer: 'Maria Popescu', status: 'active' }
];

export default function App() {
  const activeAccounts = accountData.filter((account) => account.status === 'active').length;

  return (
    <>
      <header className="app-header">
        <h1>Core Banking</h1>
        <p>Mockup: customers, multi-currency accounts and transactions.</p>
        <p className="app-count">
          {accountData.length} conturi, dintre care {activeAccounts} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Conturile mele</h2>
          {/* temporar: date brute; componentele apar în Etapa 4 */}
          <pre>{JSON.stringify(accountData, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}