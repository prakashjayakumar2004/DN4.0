# Stored Procedures

## Assumed Table Structures
accounts(account_id, customer_id, account_type, balance) <br>
employees(emp_id, name, department_id, salary)

## Scenario 1
The bank needs to process monthly interest for all savings accounts.
### Question 
Write a stored procedure ProcessMonthlyInterest that calculates and updates the balance of all savings accounts by applying an interest rate of 1% to the current balance.

### PL/SQL 
```
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR acc IN (SELECT account_id, balance FROM accounts WHERE account_type = 'SAVINGS') 
  LOOP
    UPDATE accounts SET balance = balance + (balance * 0.01) WHERE account_id = acc.account_id;
  END LOOP;
  COMMIT;
END;
``` 

## Scenario 2
The bank wants to implement a bonus scheme for employees based on their performance.
### Question
Write a stored procedure UpdateEmployeeBonus that updates the salary of employees in a given department by adding a bonus percentage passed as a parameter.

### PL/SQL
```
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(p_dept_id IN NUMBER, p_bonus_pct IN NUMBER) AS
BEGIN
  FOR emp IN (SELECT emp_id, salary FROM employees WHERE department_id = p_dept_id)
  LOOP
    UPDATE employees SET salary = salary + (salary * p_bonus_pct / 100) WHERE emp_id = emp.emp_id;
  END LOOP;
  COMMIT;
END;
```

## Scenario 3
Customers should be able to transfer funds between their accounts.
### Question 
Write a stored procedure TransferFunds that transfers a specified amount from one account to another, checking that the source account has sufficient balance before making the transfer.

### PL/SQL
```
CREATE OR REPLACE PROCEDURE TransferFunds(p_from_account IN NUMBER, p_to_account IN NUMBER, p_amount IN NUMBER) AS v_balance NUMBER;
BEGIN
  SELECT balance INTO v_balance FROM accounts WHERE account_id = p_from_account;
  IF v_balance >= p_amount THEN
    UPDATE accounts SET balance = balance - p_amount WHERE account_id = p_from_account;
    UPDATE accounts SET balance = balance + p_amount WHERE account_id = p_to_account;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Transfer successful.');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Insufficient funds. Transfer failed.');
  END IF;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('One of the accounts does not exist.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
```



