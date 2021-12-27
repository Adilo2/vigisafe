import Header from './components/Header'
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Services from './components/Services';
import  {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Appointment from './components/Appointment.js';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Routes>
    < Route  path ="/" exact element={<Body/>}/>
    < Route path="/Appointment" exact  element={<Appointment/>}/>
    < Route path="/Services" exact  element={<Services/>}/>
    < Route path="/AboutUs" exact  element={<AboutUs/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
