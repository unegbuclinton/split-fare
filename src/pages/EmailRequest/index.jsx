import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Index';
import EmailContext from '../../components/emailContext/EmailContext';
import EmailInput from '../../components/emailInput';
import { DPIconAddIcon, DPIconClose, DPIconSplitLogo } from '../../icons';
import { FONTSIZES } from '../CheckoutPage/constatnts/font-size';

const EmailRequest = () => {
  const [showInputBox, setShowInputBox] = useState(false);
  const { emailInput } = useContext(EmailContext);
  return (
    <Wrapper>
      <div className="logo">
        <DPIconSplitLogo />
      </div>
      <SubText>Add email of other parties to split payment</SubText>

      <EmailList>
        {Object.keys(emailInput).map((e, index) => (
          <p key={index} className="list-item">
            {emailInput[e]} <DPIconClose />
          </p>
        ))}
      </EmailList>

      <AddEmail onClick={() => setShowInputBox((prev) => !prev)}>
        <DPIconAddIcon />
        <p className="add-text">Add Email</p>
      </AddEmail>

      <EmailInput show={showInputBox} />

      <Footer>
        <Button text="Split Payment" />
      </Footer>
    </Wrapper>
  );
};

export default EmailRequest;

const Wrapper = styled.div`
  padding: 5.2rem 3rem;

  .logo {
    display: flex;
    justify-content: center;
  }
`;

const SubText = styled.p`
  font-size: ${FONTSIZES.small};
  text-align: center;
  margin: 3.2rem 0;
`;

const AddEmail = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: start;
  padding: 1.1rem;
  background-color: rgba(217, 217, 217, 0.49);
  border-radius: 0.9rem;

  .add-text {
    font-size: 1.7rem;
  }
`;
const EmailList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${FONTSIZES.lg};
  margin-top: 2rem;

  .list-item {
    margin-bottom: 1.2rem;
  }
`;

const Footer = styled.footer`
  width: 100%;
  bottom: 10px;
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
  margin-top: 3rem;
`;
