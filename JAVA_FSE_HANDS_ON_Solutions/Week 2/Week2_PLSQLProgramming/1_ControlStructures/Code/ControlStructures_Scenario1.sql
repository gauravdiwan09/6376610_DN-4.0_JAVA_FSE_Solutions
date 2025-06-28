-- as there is no customer whose age is greater than 60 then we need to add one
INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (3, 'Ramesh Rao', TO_DATE('1954-01-10', 'YYYY-MM-DD'), 2000, SYSDATE);

BEGIN
    FOR cust IN (SELECT CustomerID, DOB FROM Customers) LOOP
        IF TRUNC(MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12) > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID: ' || cust.CustomerID);
        END IF;
    END LOOP;
END;
/