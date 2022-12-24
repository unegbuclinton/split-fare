import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '../Button/Index';
import EmailContext from '../emailContext/EmailContext';

const EmailInput = ({ className, show }) => {
  const { addEmail, emailInput, inputEmail, input } = useContext(EmailContext);

  console.log({ emailInput, input });
  return (
    <Wrapper className={className} show={show}>
      <InputField
        placeholder="Enter email"
        type="email"
        value={input}
        onChange={inputEmail}
      />
      <Button text="Add Email" onClick={() => addEmail()} />
    </Wrapper>
  );
};

export default EmailInput;

const Wrapper = styled.div`
  height: ${({ show }) => (show ? '100%' : '0')};
  overflow: ${({ show }) => (show ? 'auto' : 'hidden')};
  margin-top: 2rem;
  /* transition: height 0.2s ease-in; */
`;

const InputField = styled.input`
  width: 100%;
  border: 1px solid rgba(217, 217, 217, 0.49);
  height: 4.8rem;
  border-radius: 0.9rem;
  margin-bottom: 3.2rem;
  padding: 1rem;
`;
