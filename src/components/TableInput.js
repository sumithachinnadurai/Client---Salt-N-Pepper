import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 40px 20px;
  background-color: #f5f5f5;
`;

const InputContainer = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 25px;
  border: 2px solid #ccc;
  width: 50%;
  max-width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const TableInput = () => {
  const [tableNumber, setTableNumber] = useState("");

  const handleSubmit = () => {
    alert(`Table Number: ${tableNumber}`);
  };

  return (
    <Section>
      <h2>
        <c>Enter Table Number:</c>
      </h2>
      <InputContainer>
        <Input
          type="text"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          placeholder="Please Enter Table Number to Order"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </InputContainer>
    </Section>
  );
};

export default TableInput;
/*
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 40px 20px;
  background-color: #f5f5f5;
`;

const InputContainer = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 25px;
  border: 2px solid #ccc;
  width: 300px;
  max-width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const TableInput = () => {
  const [tableNumber, setTableNumber] = useState('');

  const handleSubmit = () => {
    alert(`Table Number: ${tableNumber}`);
  };

  return (
    <Section>
      <h2>Enter Table Number:</h2>
      <InputContainer>
        <Input
          type="text"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          placeholder="Please Enter Table Number to Order"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </InputContainer>
    </Section>
  );
};

export default TableInput;
*/
