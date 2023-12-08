import db from "../config/database.js";

export const getOrder = (result) => {
    db.query("SELECT Orders.idOrder, Orders.Weight, Orders.OrderDate, Orders.RecycleProductId, Customer.OrganizationOrFullName, Customer.Phone, Orders.Priority FROM Orders LEFT JOIN Customer ON Orders.CustomerId = Customer.idCustomer", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getOrderById = (id, result) => {
    db.query("SELECT * FROM Orders WHERE idOrder = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const getOrderBySearch = (text, result) => {
    let query = `SELECT Orders.idOrder, Orders.Weight, Orders.OrderDate, Orders.RecycleProductId, Customer.OrganizationOrFullName, Customer.Phone, Orders.Priority FROM Orders LEFT JOIN Customer ON Orders.CustomerId = Customer.idCustomer WHERE Orders.idOrders LIKE '%${text}%' OR Orders.Weight LIKE '%${text}%' OR Orders.OrderDate LIKE '%${text}%' OR Orders.RecycleProductId LIKE '%${text}%' OR Customer.OrganizationOrFullName LIKE '%${text}%' OR Customer.Phone LIKE '%${text}%' OR Orders.Priority LIKE '%${text}%';`;
    db.query(query, [text], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getOrdersOrderBy = (atr, result) => {
    let query = `SELECT Orders.idOrder AS 'idOrder', Orders.Weight AS 'Weight', Orders.OrderDate AS 'OrderDate', Orders.RecycleProductId AS 'RecycleProductId', Customer.OrganizationOrFullName AS 'OrganizationOrFullName', Customer.Phone AS 'Phone', Orders.Priority AS 'Priority' FROM Orders LEFT JOIN Customer ON Orders.CustomerId = Customer.idCustomer ORDER BY ${atr[0]} ${atr[1]=='true' ? 'DESC' : ''};`;
    db.query(query, (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const insertOrder = (data, result) => {
    db.query("INSERT INTO Orders SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateOrderById = (data, id, result) => {
    db.query("UPDATE Orders SET Weight = ?, OrderDate = ?, RecycleProductId = ?, CustomerId = ?, Priority = ? WHERE idOrder = ?", [data.product_name, data.product_price, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteOrderById = (id, result) => {
    db.query("DELETE FROM Orders WHERE idOrder = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}