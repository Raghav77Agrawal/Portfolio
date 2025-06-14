
import "../../style.css"
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/image.png";

function Skills() {
  return (
  

<>
<div style={{backgroundColor:'black',color:'white'}}>
 <div style={{height:'20vh',width:'100%'}}></div>
 
  <h1 style={{fontSize:'2rem',width:'40%',textAlign:'center',marginLeft:'5rem'}}>Know Who <span className="blue"><b>I'M</b></span></h1>
        <div style={{height:'60vh',width:'100%',display:'flex',justifyContent:'center'}}>
          <div style={{width:'40%',height:'40vh',paddingTop:'3rem',fontSize:'1.2rem'}}>
            <p>
Hi Everyone, I am <span className="blue">Raghav Agrawal</span> from <span className="blue">Indore,India</span>.<br></br>
I am currently aspiring web developer<br></br>
I am pursuing Bachelor of Engineering in Information Technology at IET DAVV Indore.<br></br>
<br></br>
Apart from coding, some other activities that I love to do!

            </p>
            
            <ul className="blue">
            <li>
              Playing Chess
            </li>
            <li >
             Singing
            </li>
            <li >
              Solving puzzles
            </li>
          </ul>

          </div>
          <div style={{width:'40%',height:'60vh'}}>
           <img src={laptopImg} alt="about" className="img-fluid" />
          </div>
        </div>
      
        <h1 style={{fontSize:'2rem',textAlign:'center',padding:'2rem'}}>
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />

<h1 style={{fontSize:'2rem',textAlign:'center',padding:'2rem'}}>
           <strong className="blue">Tools </strong> I use
        </h1>
        <Toolstack />

        <Github />
        </div>
    </>
  );
}

export default Skills;