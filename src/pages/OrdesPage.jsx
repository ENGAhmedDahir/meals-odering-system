// OrdersPage.js
import React from 'react';
import { useSelector } from 'react-redux';

const OrdersPage = () => {
  const orders = useSelector((store) => store.order.orders);

  return (
    <div className="orders-page">
      <h1> Orders</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="order-item">
            <div>
            <img
              src={order.foodImage || order.drinkImage}
              alt={order.foodName || order.drinkName}
              className="order-image"
            />
            <div className="order-details">
              <p><strong>name:</strong> {order.foodName || order.drinkName}</p>
              <p><strong>price:</strong> {order.price}</p>
              <p><strong>total:</strong> ${order.total}</p>
              <p><strong>Quantity:</strong> {order.item}</p>
            </div>
            </div>
            <div className="user-details">
              <h2>customer Info</h2>
              <p><strong>Name:</strong> {order.userInfo.name}</p>
              <p><strong>Email:</strong> {order.userInfo.email}</p>
              <p><strong>Phone:</strong> {order.userInfo.phone}</p>
              <p><strong>Location:</strong> {order.userInfo.location}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No orders have been placed yet.</p>
      )}
    </div>
  );
};

export default OrdersPage;
