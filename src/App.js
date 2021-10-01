import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useEffect} from "react"
import Scrollbar from 'smooth-scrollbar'
import { motion, AnimatePresence } from "framer-motion"
import Header from "./Header"
import LandingPage from "./LandingPage"
import Footer from "./Footer"
import WeAre180 from "./WeAre180"
import Programs from "./Programs"
import Coaches from "./Coaches"
import Clubs from "./Clubs"
import Pricing from "./Pricing"
import Contact from "./Contact"
import Join from "./Join"
import './App.css';

function App() {

  return (
    <Router>
      <Header/>    
      <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/we-are-180" component={WeAre180} />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/coaches" component={Coaches}/>
          <Route exact path="/clubs" component={Clubs}/>
          <Route exact path="/pricing" component={Pricing}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/join" component={Join}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
