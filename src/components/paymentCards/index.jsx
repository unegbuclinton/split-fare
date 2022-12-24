import React from 'react';
import styled from 'styled-components';
import { PaymentMethod } from '../../utilities/PaymentMethods';

const PaymentCard = ({ color, icon }) => {
  return (
    <Wrapper>
      {PaymentMethod?.map(({ icon, color }, idx) => (
        <Card color={color} key={idx}>
          {icon}
        </Card>
      ))}
    </Wrapper>
  );
};

export default PaymentCard;

const Card = styled.div`
  width: fit-content;
  background-color: ${({ color }) => color};
  padding: 1.5rem 1rem;
  border-radius: 0.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  flex-wrap: wrap;
  gap: 1rem;
`;
