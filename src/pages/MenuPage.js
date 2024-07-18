import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./MenuPage.css";

const MenuPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const dishes = [
    {
      id: 1,
      title: 'Chicken Tikka Biryani',
      price: 399,
      //discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers and layered between aromatic rice. Served with Raita. Kcal – 814',
      rating: 3.6,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 2,
      title: 'Boneless Chicken Biryani',
      price: 389,
      //discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum.',
      rating: 4.5,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 3,
      title: 'Mutton Biryani',
      price: 429,
      //discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Succulent pieces of mutton slow cooked on bed of aromatic rice with in-house blend of spices and seasonings and served with raita.',
      rating: 4.2,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 4,
      title: 'Tandoori Tangdi (3Pcs)',
      price: 349,
      //discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Chicken Drumstick marinated in Indian spices and hung curd cooked in clay oven –Tandoor and served with Salad mix and Mint Chutney.',
      rating: 4.6,
      image: '/images/biriyani for menu.jpeg'
    },
  ];

  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  const removeFromCart = (dishId) => {
    setCartItems(cartItems.filter((item) => item.id !== dishId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setCartItems([]); // Clear the cart
  };

  return (
    <div className="container menu-page">
      <h1 className="title">Welcome to Salt-N-Pepper</h1>
      <p className="subtitle">ORDER ONLINE</p>
      <div className="menu-tabs">
        <button className={`tab ${!showCart ? 'active' : ''}`} onClick={() => setShowCart(false)}>Food Items</button>
        <button className={`tab ${showCart ? 'active' : ''}`} onClick={() => setShowCart(true)}>Cart ({cartItems.length})</button>
      </div>
      {showCart ? (
        <div className="cart">
          <h3>Cart Items</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>-</button>
                {item.title} - ₹{item.price}
              </li>
            ))}
          </ul>
          <p>Total: ₹{calculateTotal()}</p>
          <button className="place-order-button" onClick={placeOrder}>Place Order</button>
          {orderPlaced && <p className="order-confirmation">Thank you! Your order has been placed.</p>}
        </div>
      ) : (
        <div className="menu-items">
          {dishes.map((dish, index) => (
            <div className="menu-item" key={index}>
              <img className="menu-item-image" src={dish.image} alt={dish.title} />
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{dish.title}</h3>
                  <div className="menu-item-rating">
                    <FaStar className="star-icon" />
                    <span>{dish.rating}</span>
                  </div>
                </div>
                <p className="menu-item-description">{dish.description}</p>
                <div className="menu-item-footer">
                  <span className="menu-item-price">₹{dish.price}</span>
                  <span className="menu-item-discount">{dish.discount}</span>
                  <button className="menu-item-button" onClick={() => addToCart(dish)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <footer className="footer">
        {/* <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms of Service</a>
        </div> */}
      </footer>
    </div>
  );
};

export default MenuPage;

/*
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./MenuPage.css"; // Ensure to import your CSS

const MenuPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const dishes = [
    {
      id: 1,
      title: 'Chicken Tikka Biryani',
      price: 399,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers and layered between aromatic rice. Served with Raita. Kcal – 814',
      rating: 3.6,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 2,
      title: 'Boneless Chicken Biryani',
      price: 389,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum.',
      rating: 4.5,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 3,
      title: 'Mutton Biryani',
      price: 429,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Succulent pieces of mutton slow cooked on bed of aromatic rice with in-house blend of spices and seasonings and served with raita.',
      rating: 4.2,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 4,
      title: 'Tandoori Tangdi (3Pcs)',
      price: 349,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Chicken Drumstick marinated in Indian spices and hung curd cooked in clay oven –Tandoor and served with Salad mix and Mint Chutney.',
      rating: 4.6,
      image: '/images/biriyani for menu.jpeg'
    },
  ];

  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  const removeFromCart = (dishId) => {
    setCartItems(cartItems.filter((item) => item.id !== dishId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setCartItems([]); // Clear the cart
  };

  return (
    <div className="container menu-page">
      <h1 className="title">Welcome to Salt-N-Pepper</h1>
      <p className="subtitle">ORDER ONLINE</p>
      <div className="menu-tabs">
        <button className={`tab ${!showCart ? 'active' : ''}`} onClick={() => setShowCart(false)}>Food Items</button>
        <button className={`tab ${showCart ? 'active' : ''}`} onClick={() => setShowCart(true)}>Cart ({cartItems.length})</button>
      </div>
      {showCart ? (
        <div className="cart">
          <h3>Cart Items</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>-</button>
                {item.title} - ₹{item.price}
              </li>
            ))}
          </ul>
          <p>Total: ₹{calculateTotal()}</p>
          <button className="place-order-button" onClick={placeOrder}>Click to place order</button>
          {orderPlaced && <p className="order-confirmation">Your order has been placed!</p>}
        </div>
      ) : (
        <div className="menu-items">
          {dishes.map((dish, index) => (
            <div key={index} className="menu-item card">
              <img src={dish.image} alt={dish.title} className="menu-item-image" />
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h2 className="menu-item-title">{dish.title}</h2>
                  <div className="menu-item-rating">
                    <FaStar className="star-icon" /> {dish.rating} ({dish.reviews})
                  </div>
                </div>
                <p className="menu-item-description">{dish.description}</p>
                <div className="menu-item-footer">
                  <p className="menu-item-price">₹{dish.price} <span className="menu-item-discount">{dish.discount}</span></p>
                  <button className="menu-item-button" onClick={() => addToCart(dish)}>ADD</button>
                  <p className="customisable-text">Customisable</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage;

*/
//export default MenuPage;
/*
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./MenuPage.css"; // Ensure to import your CSS

const MenuPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const dishes = [
    {
      id: 1,
      title: 'Chicken Tikka Biryani',
      price: 399,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers and layered between aromatic rice. Served with Raita. Kcal – 814',
      rating: 3.6,
      
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 2,
      title: 'Boneless Chicken Biryani',
      price: 389,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum.',
      rating: 4.5,
      
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 3,
      title: 'Mutton Biryani',
      price: 429,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Succulent pieces of mutton slow cooked on bed of aromatic rice with in-house blend of spices and seasonings and served with raita.',
      rating: 4.2,
      
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 4,
      title: 'Tandoori Tangdi (3Pcs)',
      price: 349,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Chicken Drumstick marinated in Indian spices and hung curd cooked in clay oven –Tandoor and served with Salad mix and Mint Chutney.',
      rating: 4.6,
      
      image: '/images/biriyani for menu.jpeg'
    },
  ];

  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  const removeFromCart = (dishId) => {
    setCartItems(cartItems.filter((item) => item.id !== dishId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setCartItems([]); // Clear the cart
  };

  return (
    <div className="container menu-page">
      <h1 className="title">Welcome to Salt-N-Pepper</h1>
      <p className="subtitle">ORDER ONLINE</p>
      <div className="menu-tabs">
        <button className={`tab ${!showCart ? 'active' : ''}`} onClick={() => setShowCart(false)}>Food Items</button>
        <button className={`tab ${showCart ? 'active' : ''}`} onClick={() => setShowCart(true)}>Cart ({cartItems.length})</button>
      </div>
      {showCart ? (
        <div className="cart">
          <h3>Cart Items</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - ₹{item.price}
                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ₹{calculateTotal()}</p>
          <button className="place-order-button" onClick={placeOrder}>Click to place order</button>
          {orderPlaced && <p className="order-confirmation">Your order has been placed!</p>}
        </div>
      ) : (
        <div className="menu-items">
          {dishes.map((dish, index) => (
            <div key={index} className="menu-item card">
              <img src={dish.image} alt={dish.title} className="menu-item-image" />
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h2 className="menu-item-title">{dish.title}</h2>
                  <div className="menu-item-rating">
                    <FaStar className="star-icon" /> {dish.rating} ({dish.reviews})
                  </div>
                </div>
                <p className="menu-item-description">{dish.description}</p>
                <div className="menu-item-footer">
                  <p className="menu-item-price">₹{dish.price} <span className="menu-item-discount">{dish.discount}</span></p>
                  <button className="menu-item-button" onClick={() => addToCart(dish)}>ADD</button>
                  <p className="customisable-text">Customisable</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage;

*/
/*
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "./MenuPage.css"; // Ensure to import your CSS

const AddToCartButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  display: block;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  &:hover {
    background-color: #555;
  }
`;

const MenuPage = () => {
  const location = useLocation();
  const tableNumber = location.state?.tableNumber || "";
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const dishes = [
    {
      id: 1,
      title: 'Chicken Tikka Biryani',
      price: 399,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers and layered between aromatic rice. Served with Raita. Kcal – 814',
      rating: 3.6,
      reviews: 3116,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 2,
      title: 'Boneless Chicken Biryani',
      price: 389,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum.',
      rating: 4.5,
      reviews: 2000,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 3,
      title: 'Mutton Biryani',
      price: 429,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Succulent pieces of mutton slow cooked on bed of aromatic rice with in-house blend of spices and seasonings and served with raita.',
      rating: 4.2,
      reviews: 1500,
      image: '/images/biriyani for menu.jpeg'
    },
    {
      id: 4,
      title: 'Tandoori Tangdi (3Pcs)',
      price: 349,
      discount: '17% OFF USE UBD17',
      description: 'Serves 1 | Chicken Drumstick marinated in Indian spices and hung curd cooked in clay oven –Tandoor and served with Salad mix and Mint Chutney.',
      rating: 4.6,
      reviews: 650,
      image: '/images/biriyani for menu.jpeg'
    },
  ];

  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  const removeFromCart = (dishId) => {
    setCartItems(cartItems.filter((item) => item.id !== dishId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setCartItems([]); // Clear the cart
  };

  return (
    <div className="container menu-page">
      <h1 className="title">Welcome to Salt-N-Pepper</h1>
      <p className="subtitle">ORDER ONLINE</p>
      <div className="menu-tabs">
        <button className={`tab ${!showCart ? 'active' : ''}`} onClick={() => setShowCart(false)}>Food Items</button>
        <button className={`tab ${showCart ? 'active' : ''}`} onClick={() => setShowCart(true)}>Cart ({cartItems.length})</button>
      </div>
      {showCart ? (
        <div className="cart">
          <h3>Cart Items</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - ₹{item.price}
                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ₹{calculateTotal()}</p>
          <p>Table Number: {tableNumber}</p>
          <button className="place-order-button" onClick={placeOrder}>Click to place order</button>
          {orderPlaced && <p className="order-confirmation">Your order has been placed!</p>}
        </div>
      ) : (
        <div className="menu-items">
          {dishes.map((dish, index) => (
            <div key={index} className="menu-item card">
              <img src={dish.image} alt={dish.title} className="menu-item-image" />
              <div className="menu-item-content">
                <div className="menu-item-title">{dish.title}</div>
                <div className="menu-item-description">{dish.description}</div>
                <div className="menu-item-rating">
                  <FaStar className="star-icon" />
                  <span>{dish.rating}</span> ({dish.reviews} reviews)
                </div>
                <div className="menu-item-price">₹{dish.price} <span className="discount">{dish.discount}</span></div>
                <AddToCartButton onClick={() => addToCart(dish)}><c>Add to cart</c></AddToCartButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage;
*/