-- add customer with highest balance
INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified, IsVIP)
VALUES (6, 'Gaurav Diwan', TO_DATE('1975-08-10', 'YYYY-MM-DD'), 25000, SYSDATE, 'FALSE');

BEGIN
    FOR cust IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust.CustomerID || ' promoted to VIP.');
        END IF;
    END LOOP;
END;
/
