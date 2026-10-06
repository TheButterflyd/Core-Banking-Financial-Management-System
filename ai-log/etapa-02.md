# Etapa 2 — Log de dezvoltare și explicații

## Model folosit
AI model: MAI-Code-1.1-Flash

## Scopul etapei
Separarea logicii aplicației de interfață, prin mutarea datelor într-un fișier JavaScript și testarea funcțiilor în consola browserului, fără să se modifice HTML-ul sau DOM-ul.

## Conținut discuției

### 1. Varianta recomandată de fișier JavaScript
S-a discutat despre integrarea unui fișier `account.js` ca punct de pornire pentru logica aplicației. A fost recomandat ca primul pas să fie logica pentru conturi bancare, deoarece este direct legată de modelul datelor din proiect.

### 2. Structura datelor
S-a decis că datele aplicației trebuie păstrate sub formă de array de obiecte, de exemplu:

```js
const accountsData = [
  { id: 1, accountNumber: 'RO12BANK0000000001', type: 'savings', balance: 10000.00, currency: 'RON', customer: 'John Doe', status: 'active' },
  { id: 2, accountNumber: 'GB29BANK0000000002', type: 'checking', balance: 2500.50, currency: 'GBP', customer: 'Maria Popescu', status: 'active' }
];
```

### 3. Funcții de bază discutate
S-au analizat și explicat următoarele funcții:
- `listAccounts()` — afișează toate conturile
- `countActiveAccounts()` — numără conturile active
- `findAccount()` — caută un cont după număr
- `addAccount()` — adaugă cont nou cu validare
- `deposit()` — depune bani
- `withdraw()` — retrage bani
- `toggleAccountStatus()` — comută statusul contului
- `deleteAccount()` — șterge un cont
- `getAccountStatistics()` — calculează statistici generale

### 4. Principiul de imutabilitate
A fost subliniat că în această etapă funcțiile nu modifică datele primite, ci returnează un array nou. Acest principiu este important pentru React și pentru aplicațiile moderne:

```js
return [...accounts, account];
```

sau

```js
return accounts.map(acc => ({ ...acc, balance: acc.balance + amount }));
```

### 5. Validare
S-a explicat că în etapa de logică se verifică datele înainte de a le introduce în listă:
- numărul de cont nu poate fi gol
- balanța nu poate fi negativă
- contul nu poate exista deja
- suma pentru depunere/retragere trebuie să fie pozitivă

### 6. Testare doar în consolă
S-a stabilit că JavaScript-ul se leagă de pagina din Etapa 1, dar nu modifică interfața. Funcțiile se rulează în consola browserului (`F12 > Console`) și rezultatele se afișează grupate cu `console.group()`.

### 7. Utilizarea metodelor JavaScript
S-au identificat metodele folosite:
- `forEach()` — pentru listare
- `filter()` — pentru filtrare și numărare
- `find()` — pentru căutare
- `map()` — pentru transformarea datelor
- `reduce()` — pentru statistici
- `some()` — pentru validarea existenței datelor

### 8. întrebări și clarificări
S-a explicat și diferența dintre:
- ghilimele simple `'...'` și duble `"..."` față de backticks `` `...` ``
- utilizarea dolarului `$` în template strings:

```js
console.log(`${acc.accountNumber} — ${acc.type}`);
```

Backticks permit interpolarea variabilelor. Ghilimelele simple/duble nu fac asta.

### 9. Observație finală
În această etapă, scopul principal este să dezvoltăm logica aplicației independent de UI, astfel încât apoi să poată fi reutilizată fără modificări mari în următoarele etape, inclusiv în React.

## Concluzie
Etapa 2 are ca obiectiv principal: mutarea datelor într-un array de obiecte și implementarea funcțiilor de bază ale aplicației, fără să se atingă pagina HTML. Logica este pregătită pentru extindere în etapele următoare.
