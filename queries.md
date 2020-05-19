# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName
FROM Products
inner JOIN Categories on Products.CategoryID = Categories.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName
FROM Orders
inner JOIN Shippers on Orders.ShipperID = Shippers.ShipperID
WHERE OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity
FROM Products
inner JOIN OrderDetails on Products.ProductID = OrderDetails.ProductID
WHERE OrderDetails.OrderID = '10251'
ORDER BY ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName
FROM Orders
inner JOIN Customers on Orders.CustomerID = Customers.CustomerID
inner JOIN Employees on Orders.EmployeeID = Employees.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
