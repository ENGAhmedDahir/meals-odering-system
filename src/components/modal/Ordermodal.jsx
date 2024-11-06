import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { setOrder, addItem, decItem, submitOrder } from '../../features/order/orderSlice';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const OrderModal = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector((store) => store.modal);
  const { currentOrder, item, total } = useSelector((store) => store.order);

  const closeModal = () => {
    dispatch(handleModal());
  };

  const increaseItem = () => {
    dispatch(addItem());
  };

  const decreaseItem = () => {
    dispatch(decItem());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitOrder({ name, email , phone, location }));
    setName('');
    setEmail('');
    setPhone('');
    setLocation('');

    closeModal();
   
  };
 

  return (
    <div>
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Order Modal"
      >
        <div className="modal-container">
          <div className="left-side">
            <div className="food-info">
              <img src={currentOrder?.foodImage || currentOrder?.drinkImage} alt="Item" />
              <span>Price: {currentOrder?.price}</span>
            </div>
            <div className="add-item">
              <span>Add more than one</span>
              <div className="btns">
                <button onClick={decreaseItem}>
                  <AiOutlineMinus className="icon" />
                </button>
                <span style={{ padding: 10, fontSize: "1.5rem"}}>  {item} </span>
                <button onClick={increaseItem}>
                  <AiOutlinePlus className="icon" />
                </button>
              </div>
            </div>
            <span className="total">Total: ${total}</span>
          </div>
          <div className="user-info">
            <h2>Your information</h2>
            <form className="form-control" onSubmit={handleSubmit}>
              <label htmlFor="name">Full name</label>
              <input type="text" placeholder="Enter your full name" required 
              id='name'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
               <label htmlFor="name">Email</label>
              <input type="text" placeholder="Enter your email address" required 
              id='email' 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
              <label htmlFor="phone">Your number</label>
              <input type="number" placeholder="Enter your number" required 
              id='number'
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              
              />
              <label htmlFor="location">Your location</label>
              <input type="text" placeholder="Enter your location" required 
              id='location'
              value={location}
              onChange={(e)=>setLocation(e.target.value)}

              
              />
              <div className="pay">
                <label  htmlFor="pay">Pay the bills</label>
                <input type="number" className="input" placeholder="Enter your number " 
                
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrderModal;
