import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Skills from './Components/Skills/Skills.jsx';
import Projects from './Components/Projects/Projects.jsx';
import "./style.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Contact from './Components/Contact/Contact.jsx';
    export default function App() {
      return (<>
        
        <Router>
          <Navbar></Navbar>
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path = '/projects' element = {<Projects/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
        
</Router>
        <div style={{width:'100%', height:'3vh',backgroundColor:"lightblue",color:"black",textAlign:'center'}}>
<h1> Designed and Developed by Raghav Agrawal </h1></div>
        
      </>
      )
    }

