import React, { useEffect } from 'react'
import './App.scss';
import Home from "./Components/home/Home.js"
import Book from "./Components/book/Book.js"
import WhyChoose from "./Components/whychoose/WhyChoose.js"
import Sale from "./Components/sale/Sale.js"
import Plans from "./Components/plans/Plans.js"
import Footer from "./Components/footer/Footer.js"
import PrivacyPolicy from "./Components/footer/PrivacyPolicy.js"
import Cancellationpolicy from "./Components/footer/Cancellationpolicy.js"
import TermsAndCondition from "./Components/footer/TermsAndCondition.js"
import Aboutus from "./Components/footer/Aboutus.js"
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import axios from "axios";
// import queryString from 'query-string'
import { useLocation } from "react-router-dom";

function App() {

  // const [api, setApi] = useState("")
  const book = useLocation().pathname.split('/')[1];
  const search = useLocation().search;
  const payment_id = new URLSearchParams(search).get('payment_id');

  const Url = "/api/receipt";

  let sendData = () => {
    axios.get(`${Url}?payment_id=${payment_id}&book=${book}`)
      .then(res => {
        console.log(res)
        window.location.href='/';
      })
      .catch(err => console.log(err.data))
  }

  let checkServer = () => {
    axios.get(`/api/`)
      .then(res => {console.log(res)})
      .catch(err => console.log(err.data))
  }

  useEffect(() => {
    checkServer()
    if(book!=='' && payment_id!=null){
      sendData();
    }
  })

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />          
          <Book />
          <Sale />
          <WhyChoose />
          <Plans />
          <Footer />
        </Route>
        <Route path="/PrivacyPolicy">
          <PrivacyPolicy/>
        </Route>
        <Route path="/Cancellationpolicy">
          <Cancellationpolicy/>
        </Route>
        <Route path="/TermsAndCondition">
          <TermsAndCondition/>
        </Route>
        <Route path="/Aboutus">
          <Aboutus/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
