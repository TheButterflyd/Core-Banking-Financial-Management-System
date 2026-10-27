import AccountCard from "./AccountCard.jsx";

export default function AccountList({
  accounts = [],
  onTogglePriority,
  onDelete
}) {
  if (!accounts || accounts.length === 0) {
    return <p className="status">Lista goala</p>;
  }

  return (
    <ul className="entity-list">
      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          account={account}
          onTogglePriority={onTogglePriority}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}