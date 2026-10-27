const TIP_CONT = {
  savings: "Economii",
  checking: "Cont curent"
};

const STARE_CONT = {
  active: "Activ",
  blocked: "Blocată"
};

export default function AccountCard({
  account,
  onTogglePriority,
  onDelete
}) {
  return (
    <li className={account.status === "active" ? "account-card active" : "account-card blocked"}>
      <div className="account-top">
        <h3>{account.accountNumber}</h3>
        <span className={`badge badge-${account.status}`}>
          {STARE_CONT[account.status]}
        </span>
      </div>

      <p className="customer">{account.customer}</p>

      <div className="account-meta">
        <span>{TIP_CONT[account.type]}</span>
        <span>{account.currency}</span>
      </div>

      <strong className="balance">
        {Number(account.balance).toLocaleString("ro-RO", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} {account.currency}
      </strong>

      <label className="account-toggle">
        <input
          type="checkbox"
          checked={account.isPriority}
          onChange={() => onTogglePriority(account.id)}
        />
        <span>Prioritar</span>
      </label>

      <button
        className="btn-danger"
        onClick={() => onDelete(account.id)}
        aria-label={`Șterge contul ${account.accountNumber}`}
      >
        Șterge
      </button>
    </li>
  );
}