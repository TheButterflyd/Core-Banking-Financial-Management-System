export default function AccountList({ accounts = [] }) {
  if (!accounts || accounts.length === 0) {
    return <p className="status">Lista goala</p>;
  }

  return (
    <ul className="entity-list">
      {accounts.map((acc) => (
        <li 
          key={acc.id} 
          className={acc.isPriority ? "priority" : ""}
        >
          <div>
            <strong>{acc.customer}</strong> — {acc.accountNumber}
            <small>({acc.type})</small>
          </div>
          <div>
            <span>{acc.balance.toLocaleString()} {acc.currency}</span>
            {acc.isPriority && (
              <span className="badge badge-priority" style={{ marginLeft: "8px" }}>
                Prioritar
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}