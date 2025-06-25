# Control Structures

## Assumed Table Structure

customers(id, name, age, balance, isVIP)  <br>
loans(loan_id, customer_id, interest_rate, due_date)

## Scenario 1
The bank wants to apply a discount to loan interest rates for customers above 60 years old.
### Question 
Write a PL/SQL block that loops through all customers, checks their age, and if they are above 60, apply a 1% discount to their current loan interest rates.

### PL/SQL
```
BEGIN
  FOR cust IN (SELECT c.id AS customer_id, l.loan_id, l.interest_rate, c.age FROM customers c JOIN loans l ON c.id = l.customer_id) 
  LOOP
    IF cust.age > 60 THEN
      UPDATE loans SET interest_rate = interest_rate - 1 WHERE loan_id = cust.loan_id;
    END IF;
  END LOOP;
  COMMIT;
END;
```
## Scenario 2 
A customer can be promoted to VIP status based on their balance.
### Question 
Write a PL/SQL block that iterates through all customers and sets a flag IsVIP to TRUE for those with a balance over $10,000.

### PL/SQL
```
BEGIN
  FOR cust IN (SELECT id, balance FROM customers) 
  LOOP
    IF cust.balance > 10000 THEN
      UPDATE customers SET isVIP = 'TRUE' WHERE id = cust.id;
    END IF;
  END LOOP;
  COMMIT;
END;
```
 ## Scenario 3
The bank wants to send reminders to customers whose loans are due within the next 30 days.
### Question
Write a PL/SQL block that fetches all loans due in the next 30 days and prints a reminder message for each customer.  
### PL/SQL
```
DECLARE v_name customers.name%TYPE;
BEGIN
  FOR loan_rec IN (SELECT l.customer_id, l.due_date, c.name FROM loans l JOIN customers c ON l.customer_id = c.id WHERE l.due_date <= SYSDATE + 30)
  LOOP
    IF loan_rec.due_date <= SYSDATE + 30 THEN
      DBMS_OUTPUT.PUT_LINE('Reminder: Loan is due on ' || TO_CHAR(loan_rec.due_date, 'DD-MON-YYYY') || ' for customer: ' || loan_rec.name);
    END IF;
  END LOOP;
END;
```
