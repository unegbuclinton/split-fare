import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  FONTSIZES,
  FONTWEIGHTS,
} from '../../pages/CheckoutPage/constatnts/font-size';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabWrapper>
      <TabContainer>
        <div className="container">
          {tabs?.map((tab, index) => (
            <TabButton
              key={index}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </TabButton>
          ))}
        </div>
      </TabContainer>
      <TabContent>{tabs && tabs[activeTab]?.component}</TabContent>
    </TabWrapper>
  );
};

export default Tabs;
const TabWrapper = styled.div`
  width: 100%;

  .container {
    display: flex;
    flex-wrap: nowrap;
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3.204rem 2.5rem 1.6rem;
  overflow-x: auto;
  .container {
    display: flex;
    flex-wrap: nowrap;
    background-color: rgba(88, 168, 248, 0.78);
    border-radius: 3rem;
  }
`;
const TabButton = styled.button`
  width: 14.4rem;
  height: 100%;
  border: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background: transparent;
  padding: 1.5rem;
  color: #fff;
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  text-transform: capitalize;

  ${({ active }) =>
    active &&
    css`
      font-weight: ${FONTWEIGHTS.bold};
      cursor: default;
      background: rgba(255, 255, 255, 0.41);
      border-radius: 3rem;
      transition: 0.2s ease-in-out;
    `};
`;

const TabContent = styled.div`
  height: 100%;
  height: 100%;
`;
