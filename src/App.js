import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddEmailContext } from './components/emailContext/EmailContext';
import ApprovalPage from './pages/Approval';
import Checkout from './pages/CheckoutPage';
import Dashboard from './pages/Dashboard';
import EmailRequest from './pages/EmailRequest';

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <AddEmailContext>
        <Router>
          <Routes>
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/" element={<EmailRequest />} />
            <Route exact path="/approval" element={<ApprovalPage />} />
          </Routes>
        </Router>
      </AddEmailContext>
    </div>
  );
}

export default App;
