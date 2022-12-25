import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddEmailContext } from './components/emailContext/EmailContext';

import Checkout from './pages/CheckoutPage';
import Dashboard from './pages/Dashboard';
import EmailRequest from './pages/EmailRequest';

function App() {
  return (
    <div className="App">
      <AddEmailContext>
        <Router>
          <Routes>
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/" element={<EmailRequest />} />
          </Routes>
        </Router>
      </AddEmailContext>
    </div>
  );
}

export default App;
