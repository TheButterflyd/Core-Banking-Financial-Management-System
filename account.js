const accountData = [
    { id: 1, accountNumber: 'RO12BANK0000000001', type: 'savings', balance: 10000.00, currency: 'RON', customer: 'John Doe', status: 'active' },
    { id:2, accountNumber: 'GB29BANK0000000002' ,type:'checking', balance: 500.00, currency:'GBP', customer:'Maria Popescu', status: 'active'}
]

// Functia listare //
function listAccounts(accounts) {
  console.group('📋 LISTA CONTURI');
  accounts.forEach(acc => {
    console.log(`${acc.accountNumber} — ${acc.type} — ${acc.balance} ${acc.currency} — ${acc.status}`);
  });
  console.groupEnd();
}

// TESTEAZĂ: listAccounts(accountData);

// functia de numarare //
function countActiveAccounts(accounts) {
  const active = accounts.filter(acc => acc.status === 'active').length;
  console.log(` Conturi active: ${active}/${accounts.length}`);
  return active;
}

// TESTEAZĂ: countActiveAccounts(accountData);

// Functia de cautare cont dupa numar //
function findAccount(accounts, accountNumber) {
  const account = accounts.find(acc => acc.accountNumber === accountNumber);
  if (account) {
    console.log(` Găsit: ${account.accountNumber} — Balanță: ${account.balance} ${account.currency}`);
    return account;
  } else {
    console.log(` Contul ${accountNumber} nu a fost găsit`);
    return null;
  }
}

// TESTEAZĂ: findAccount(accountData, 'RO12BANK0000000001');



// Functie pentru depunere //
function deposit(accounts, accountNumber, amount) {
  console.group(` DEPUNERE ÎN ${accountNumber}`);
  
  if (amount <= 0) {
    console.error(' Suma trebuie să fie pozitivă');
    console.groupEnd();
    return accounts;
  }
  
  const newAccounts = accounts.map(acc => {
    if (acc.accountNumber === accountNumber) {
      const newBalance = acc.balance + amount;
      console.log(`Depus ${amount}. Balanță nouă: ${newBalance} ${acc.currency}`);
      return { ...acc, balance: newBalance };
    }
    return acc;
  });
  
  console.groupEnd();
  return newAccounts;
}

// TESTEAZĂ: accountData = deposit(accountData, 'RO12BANK0000000001', 500);




// Functie pt schimbarea starii contului (active -> blocked) //
function toggleAccountStatus(accounts, accountNumber) {
  console.group(` COMUTARE STARE: ${accountNumber}`);
  
  const newAccounts = accounts.map(acc => {
    if (acc.accountNumber === accountNumber) {
      const newStatus = acc.status === 'active' ? 'blocked' : 'active';
      console.log(` Stare schimbată în: ${newStatus}`);
      return { ...acc, status: newStatus };
    }
    return acc;
  });
  
  console.groupEnd();
  return newAccounts;
}

// TESTEAZĂ: accountData = toggleAccountStatus(accountData, 'RO12BANK0000000001');

//  Functie pt stergerea unui cont //
function deleteAccount(accounts, accountNumber) {
  console.group(` ȘTERGERE: ${accountNumber}`);
  
  const account = accounts.find(acc => acc.accountNumber === accountNumber);
  if (!account) {
    console.error(' Contul nu a fost găsit');
    console.groupEnd();
    return accounts;
  }
  
  if (account.balance > 0) {
    console.warn(` Avertisment: Balanță de ${account.balance}`);
  }
  
  const newAccounts = accounts.filter(acc => acc.accountNumber !== accountNumber);
  console.log(` Cont șters. Rămase: ${newAccounts.length} conturi`);
  console.groupEnd();
  return newAccounts;
}

// TESTEAZĂ: accountData = deleteAccount(accountData, 'GB29BANK0000000002');

// ===== Functie statistici =====
function getAccountStatistics(accounts) {
  console.group(' STATISTICI');
  
  const stats = accounts.reduce((acc, curr) => {
    return {
      totalBalance: acc.totalBalance + curr.balance,
      byCurrency: {
        ...acc.byCurrency,
        [curr.currency]: (acc.byCurrency[curr.currency] || 0) + curr.balance
      },
      byType: {
        ...acc.byType,
        [curr.type]: (acc.byType[curr.type] || 0) + 1
      }
    };
  }, { totalBalance: 0, byCurrency: {}, byType: {} });
  
  console.log(` Balanță totală: ${stats.totalBalance}`);
  console.log(' După monedă:', stats.byCurrency);
  console.log('După tip:', stats.byType);
  console.groupEnd();
  return stats;
}
// calculeaza statistici //

console.log('Sistem de Conturi încărcat!');