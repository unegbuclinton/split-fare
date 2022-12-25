import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Index';
import { DPIconAddIcon, DPIconClose, DPIconSplitLogo } from '../../icons';
import { FONTSIZES } from '../CheckoutPage/constatnts/font-size';

const EmailRequest = () => {
  const [formValues, setFormValues] = useState([{ email: '' }]);
  const inputField = useRef(null);

  const onBlurChange = (c) => {
    if (c.value === '') {
      console.log('empty');
    } else {
      console.log('great');
    }
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { email: '' }]);
  };

  let removeFormFields = (i) => {
    console.log(i);
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div className="logo">
        <DPIconSplitLogo />
      </div>
      <SubText>Add email of other parties to split payment</SubText>

      <AddEmail onClick={() => addFormFields()}>
        <DPIconAddIcon />
        <p className="add-text">Add Email</p>
      </AddEmail>

      {formValues?.map((__, index) => (
        <div className="input-wrapper" key={index}>
          <InputField
            placeholder="Enter email"
            name="email"
            type="email"
            ref={inputField}
            onChange={(e) => handleChange(index, e)}
            onBlur={() => onBlurChange(inputField.current)}
          />
          {index ? (
            <DPIconClose
              className="cancel"
              onClick={() => removeFormFields(index)}
            />
          ) : null}
        </div>
      ))}

      <Footer>
        <Button type="submit" text="Split Payment" />
      </Footer>
    </Wrapper>
  );
};

export default EmailRequest;

const Wrapper = styled.form`
  max-width: 55rem;
  margin: 0 auto;
  padding: 5.2rem 3rem 1rem 3rem;

  .logo {
    display: flex;
    justify-content: center;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cancel {
    margin-top: 3rem;
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

const Footer = styled.footer`
  width: 100%;
  bottom: 10px;
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
  margin-top: 3rem;
`;

const InputField = styled.input`
  width: 90%;
  border: 1px solid rgba(217, 217, 217, 0.49);
  height: 4.8rem;
  border-radius: 0.9rem;
  margin-top: 3.2rem;
  padding: 1rem;
`;
