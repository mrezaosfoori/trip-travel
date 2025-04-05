import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Withdraws from "./components/Withdraws";
import Incomes from "./components/Incomes";
import Bills from "./components/Bills";
import ForgetPass from "./components/ForgetPass";
import Exchange from "./components/Exchange";
import ExchangeHistory from "./components/ExchangeHistory";
import Profile from "./components/Profile";
import WithdrawAuth from "./components/WithdrawAuth";
import ForgetPass1 from './components/ForgetPass1';
import ForgetPass2 from './components/ForgetPass2';
import Checkout from './components/Checkout';
import PaymentDetails from './components/PaymentDetails';
import CheckoutSearch from './components/CheckoutSearch';
import Receipts from './components/Receipts';
import IncomeAdvancedSearch from './components/IncomeAdvancedSearch';

const isAuthenticated = () => {
    // Check if authToken exists in cookies
    return Cookies.get('token') ? true : false;
};

function App2() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={isAuthenticated() ? <Navigate replace to="/dashboard" /> : <Login />} /> */}
                <Route path="/" element={<Login/>}/>
                <Route>
                    {/* <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate replace to="/" />} > */}
                    <Route path="incomes" element={<Incomes/>}/>
                    <Route path="withdraws" element={<Withdraws/>}/>
                    <Route path="bills" element={<Bills/>}/>
                    <Route path="exchange" element={<Exchange/>}/>
                    <Route path="exchange-history" element={<ExchangeHistory/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>
                <Route path="configs" element={<WithdrawAuth/>}/>
                <Route path="/forget-password" element={<ForgetPass/>}/>
                <Route path="/forget-password1" element={<ForgetPass1/>}/>
                <Route path="/forget-password2" element={<ForgetPass2/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path='/payment' element={<PaymentDetails/>}/>
                <Route path='/checkoutsearch' element={<CheckoutSearch/>}/>
                <Route path='/receipts' element={<Receipts/>}/>
                <Route path='/lastreceived' element={<IncomeAdvancedSearch/>}/>
            </Routes>
        </>
    );
}

export default App;
