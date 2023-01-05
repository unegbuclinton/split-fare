import { createContext, useState } from 'react';

const EmailContext = createContext();

export function AddEmailContext({ children }) {
  const [input, setInput] = useState('');
  const [emailInput, setEmailInput] = useState([{ email: '' }]);

  const inputEmail = (e) => {
    setInput(e.target.value);
  };
  const addEmail = () => {
    setEmailInput((emailInput) => [...emailInput, input]);
    setInput('');
  };

  //   const removeEmail = () => {};
  return (
    <EmailContext.Provider value={{ addEmail, inputEmail, emailInput, input }}>
      {children}
    </EmailContext.Provider>
  );
}

export default EmailContext;
