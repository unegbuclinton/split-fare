import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './pages/CheckoutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Checkout />} />
          {/* <Route path="/signup" element={<SignUpPage />} />
          <Route path="/lock" element={<Lockscreen />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/approval" element={<ApprovalPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
