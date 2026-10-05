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

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini Ai | Transaction flow, ACID considerations, UI mockup suggestions |
| Copilot Ai | Used for HTML interface and CSS design for bigger and smaller screens.

Details per stage: see the ai-log/ folder.

## AI log for stage 1
Details per stage: see the ai-log/ folder.


## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
- [ ] Stage 3: database schema & migrations
- [ ] Stage 4: backend transaction processing & tests
