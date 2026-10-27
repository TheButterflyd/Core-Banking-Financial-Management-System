# Core Banking Financial Management System

     Manages secure customer records, multi-currency accounts, loans and ACID-compliant transaction processing for banks and financial institutions. Intended for banks, credit unions, and developers building core-banking prototypes.

## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| Customer | relation | id, name (text, required, max 100 chars), contact, KYC data |
| Account | relation | id, account_number (text), type (savings/checking), balance (decimal), currency (relation), customer (relation) |
| Transaction | relation | id, from_account (relation), to_account (relation), amount (decimal), currency (relation), timestamp, status (pending/posted) |
| Loan | relation | id, customer (relation), principal (decimal), interest_rate (decimal), term_months (int), status (active/closed) |
| User | relation | system user/owner, role (admin/teller/auditor), auth info |

Sample data used across all stages:
1. Customer: John Doe — active, VIP  
2. Customer: Maria Popescu — active, retail  
3. Account: RO12BANK0000000001 — savings, RON, balance 10,000.00  
4. Account: GB29BANK0000000002 — checking, GBP, balance 2,500.50  
5. Transaction: internal transfer, 2024-09-01, posted

Tehnologii Web · Etapa 1: Mockup al interfeței (HTML și CSS)

## How to run
Open `index.html` in a browser. No build step, no server.
end
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).


## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini Ai | Transaction flow, ACID considerations, UI mockup suggestions |
| Copilot Ai | Used for HTML interface and CSS design for bigger and smaller screens.

Details per stage: see the ai-log/ folder.


## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React projectons
- [x] Stage 4: backend transaction processing & tests
- [x] Stage 5: local state and events

## Stage 1: static 
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | index.html#L..-L.. | open the page |
| S1-R5 | finished card looks different | style.css#L.. (.blocked / .active) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | style.css#L.. (@media) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | style.css#L.. | Tab; dark mode |
| S1-R8 | commit “Stage 1” pushed | link to the commit | commit history |

 [x] S1-R1 Tema este aprobată, iar README.md conține descrierea sistemului Core Banking, câmpurile (Customer, Account, Transaction, Loan, User), datele de test și modul de rulare.  
 [x] S1-R2 README.md conține secțiunea AI usage (sau mențiunea că nu s-au utilizat instrumente AI).   
 [x] S1-R3 Fișierul ai-log/etapa-01.md este completat conform șablonului cerut.   
 [x] S1-R4 Pagina conține antetul (header), formularul de creare/căutare cont (câmp text pentru titular/IBAN + listă select pentru tipul de cont savings/checking), precum și 3 carduri cu date de conturi bancare.  
 [x] S1-R5 Un card de cont este marcat vizibil ca diferit (de exemplu, cont inactiv/blocat .blocked comparativ cu cele active .active).  
 [x] S1-R6 Pe desktop interfața afișează 2 coloane (formular + listă conturi), iar sub 700 px trece automat pe o singură coloană.   
 [x] S1-R7 Focusul este vizibil la navigarea cu tasta Tab pe butoane/inputuri, iar tema întunecată este lizibilă și contrastantă.   
 [x] S1-R8 Codul este publicat pe repozitoriul GitHub, cu commit-ul dedicat Stage 1: ... împins pe remote.   Criterii de calitate urmărite: toate culorile sunt definite prin variabile CSS (:root); tema întunecată funcționează fără reguli duplicate; cardurile bancare și butoanele reacționează la cursor (:hover, :focus-visible); marcajul pentru listă goală (clasa .empty) este pregătit; structura folosește elemente HTML semantice (<header>, <main>, <section>, <article>, <button>), nu exclusiv <div>-uri. 

## Stage 2: data logic in JavaScript


| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | index.html#L.. (script) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | accounts.js#L..-L.. | read |
| S2-R3 | list, count, search, add, toggle, delete | accounts.js#L..-L.. | console output |
| S2-R4 | add rejects empty name and invalid tag | accounts.js#L..-L.. | last 2 console lines |
| S2-R5 | original array unchanged after add | accounts.js#L.. | console line |
| S2-R6 | README Stage 2 section + AI log | README.md, ai-log/etapa-02.md | read |
| S2-R7 | commit “Stage 2” pushed | link to the commit | commit history |

[x] S2-R1 Fișierul JavaScript (accounts.js sau conturi.js) este legat de pagina HTML prin tag-ul <script> și scrie un mesaj în consolă la încărcarea paginii.  
[x] S2-R2 Array-ul de conturi conține cel puțin 3 elemente cu structura din schemă: id, titular/nume (customer), număr cont (accountNumber), tip (savings/checking), stare (active/blocked sau prioritate).  
[x] S2-R3 Funcțiile de manipulare a conturilor (listare, numărare, căutare după IBAN/titular, adăugare cont nou, comutare stare/prioritate și ștergere cont) funcționează corect și afișează rezultatele în consolă.  
[x] S2-R4 Funcția de adăugare cont validează datele de intrare și respinge numele gol de client sau tipul de cont invalid (altul decât savings sau checking), afișând mesaje clare de eroare în consolă.  
[x] S2-R5 Array-ul inițial de conturi bancare rămâne neschimbat după operația de adăugare (demonstrarea imutabilității prin afișare comparativă în consolă).   
[x] S2-R6 README.md conține secțiunea completată dedicată etapei Stage 2, iar fișierul ai-log/etapa-02.md este completat conform cerințelor.  
[x] S2-R7 Commit-ul cu denumirea Stage 2: ... este creat și publicat (pushed) pe repozitoriul GitHub
## Stage 3: Vite and React projectons

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S3-R1 | npm run dev starts without errors | frontend/package.json | npm install, npm run dev |
| S3-R2 | app name (Core Banking) and counter computed from data | frontend/src/App.jsx#L..-L.. | edit data, save |
| S3-R3 | data from README (accounts/banking schema), not from the example | frontend/src/App.jsx#L..-L.. | compare with README |
| S3-R4 | stage 1 styles reused | frontend/src/App.css | look at the page |
| S3-R5 | node_modules ignored, build passes | frontend/.gitignore | npm run build |
| S3-R6 | README Stage 3 section + AI log | README.md, ai-log/etapa-03.md | read |
| S3-R7 | commit “Stage 3” pushed | link to the commit | commit history |

[x] S3-R1 Comanda npm run dev pornește fără erori pe calculatorul studentului în folderul frontend.

[x] S3-R2 Pagina afișează numele aplicației (Core Banking) și contoarele de conturi (total, active, blocate) calculate dinamic direct din vectorul de date.

[x] S3-R3 Datele inițiale sunt cele din README.md specifice temei alese (conturi bancare cu IBAN, titular, tip cont savings/checking, sold, monedă, stare), nu cele generice cu task-uri din exemplul de la curs.

[x] S3-R4 Stilurile CSS din Etapa 1 (variabile, panouri, layout-ul responsive, tema luminoasă/întunecată) se regăsesc integrate în frontend/src/App.css.

[x] S3-R5 Directorul node_modules/ este ignorat prin frontend/.gitignore (nu apare pe GitHub), iar comanda npm run build rulează și produce pachetul fără erori de compilare.

[x] S3-R6 README.md conține secțiunea dedicată etapei Stage 3 actualizată, iar fișierul ai-log/etapa-03.md este completat conform cerințelor.

[x] S3-R7 Commit-ul cu denumirea Stage 3: ... este creat și publicat (pushed) pe repozitoriul GitHub.
## Stage 4: backend transaction processing & tests

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | frontend/src/components/ | open folder |
| S4-R2 | card receives data through props | AccountCard.jsx#L..-L.. | read |
| S4-R3 | map + key={id}, no console warnings | AccountList.jsx#L..-L.. | F12, Console |
| S4-R4 | message for empty list | AccountList.jsx#L..-L.. | set array to [] |
| S4-R5 | state changes the card look | AccountCard.jsx#L.. | toggle a status/priority flag |
| S4-R6 | README Stage 4 section + AI log | README.md, ai-log/etapa-04.md | read |
| S4-R7 | commit “Stage 4” pushed | link to the commit | commit history |

[x] S4-R1 Există cel puțin două componente în src/components/ (AccountList.jsx, AccountCard.jsx), câte una pe fișier.   
[x] S4-R2 Cardul (AccountCard) primește datele contului prin props (account) și nu citește array-ul direct.  
[x] S4-R3 Lista de conturi este randată cu map și key={account.id}, fără avertismente în consolă.   
[x] S4-R4 Lista goală afișează un mesaj (ex: „Nu există niciun cont bancar.”) când array-ul este gol.  
[x] S4-R5 Starea elementului (cont activ/blocat sau prioritar) modifică aspectul cardului (stiluri diferite, clase CSS diferite).   ☐ S4-R6 README-ul este actualizat, iar ai-log/etapa-04.md este completat.  
[x] S4-R7 Commit-ul Stage 4: ... este publicat pe GitHub.

## Stage 5: local state and events

| S5-R1 | accounts list kept in useState, in App | App.jsx#L.. | read |
| S5-R2 | toggling priority changes state and card look | App.jsx#L..-L.., AccountCard.jsx#L.. | click a checkbox |
| S5-R3 | delete removes the account item | App.jsx#L..-L.., AccountCard.jsx#L.. | click Delete |
| S5-R4 | header counter derived, not in state | App.jsx#L.. | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | App.jsx#L..-L.. | read |
| S5-R6 | light / dark toggle: state + data-theme on html | App.jsx#L..-L.., App.css#L..-L.. | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | README.md, ai-log/etapa-05.md | F12, Console |
| S5-R8 | commit “Stage 5” pushed | link to the commit | commit history |


[x] S5-R1 Lista de conturi bancare (accounts) este păstrată în useState, în componenta părinte (App).
[x] S5-R2 Bifarea priorității schimbă starea contului (isPriority) și aspectul cardului (AccountCard).
[x] S5-R3 Ștergerea elimină contul bancar respectiv din listă.
[x] S5-R4 Contoarele din antet (total conturi, active, blocate) se actualizează automat, fără să fie păstrate în state.
[x] S5-R5 Actualizările sunt imutabile: nu există push, splice sau atribuiri pe elementele din state (folosire map, filter).
[x] S5-R6 Butonul din antet comută între tema luminoasă și cea întunecată, în ambele direcții, indiferent de tema sistemului.
[x] S5-R7 Consola nu conține avertismente; README-ul și ai-log/etapa-05.md sunt actualizate.
[x] S5-R8 Commit-ul Stage 5: ... este publicat pe GitHub.