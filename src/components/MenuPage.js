/*// src/components/MenuPage.js
import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const MenuSection = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const ItemPrice = styled.span`
  color: #777;
`;

const MenuPage = () => {
  const menu = {
    appetizers: [
      { name: 'Spring Rolls', price: '$5.99' },
      { name: 'Garlic Bread', price: '$4.99' },
    ],
    mainCourses: [
      { name: 'Grilled Chicken', price: '$12.99' },
      { name: 'Beef Steak', price: '$15.99' },
      { name: 'Vegetable Stir Fry', price: '$10.99' },
    ],
    desserts: [
      { name: 'Chocolate Cake', price: '$6.99' },
      { name: 'Ice Cream Sundae', price: '$5.99' },
    ],
    beverages: [
      { name: 'Coke', price: '$1.99' },
      { name: 'Orange Juice', price: '$2.99' },
    ],
  };

  return (
    <MenuContainer>
      <h1>Menu</h1>
      <MenuSection>
        <SectionTitle>Appetizers</SectionTitle>
        {menu.appetizers.map((item, index) => (
          <MenuItem key={index}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
          </MenuItem>
        ))}
      </MenuSection>
      <MenuSection>
        <SectionTitle>Main Courses</SectionTitle>
        {menu.mainCourses.map((item, index) => (
          <MenuItem key={index}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
          </MenuItem>
        ))}
      </MenuSection>
      <MenuSection>
        <SectionTitle>Desserts</SectionTitle>
        {menu.desserts.map((item, index) => (
          <MenuItem key={index}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
          </MenuItem>
        ))}
      </MenuSection>
      <MenuSection>
        <SectionTitle>Beverages</SectionTitle>
        {menu.beverages.map((item, index) => (
          <MenuItem key={index}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
          </MenuItem>
        ))}
      </MenuSection>
    </MenuContainer>
  );
};

export default MenuPage;
*/
import React from 'react';

const MenuPage = () => {
  return (
    <div>
      <h1>Menu</h1>
      <div>
        <h2>Appetizers</h2>
        <ul>
          <li>Spring Rolls</li>
          <li>Garlic Bread</li>
          <li>Stuffed Mushrooms</li>
        </ul>
      </div>
      <div>
        <h2>Main Courses</h2>
        <ul>
          <li>Grilled Chicken</li>
          <li>Beef Steak</li>
          <li>Vegetable Pasta</li>
        </ul>
      </div>
      <div>
        <h2>Desserts</h2>
        <ul>
          <li>Chocolate Cake</li>
          <li>Ice Cream</li>
          <li>Fruit Salad</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuPage;
