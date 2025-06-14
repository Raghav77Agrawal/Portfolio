
import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
} from "react-icons/di";
import { FaHtml5,FaGithub,FaBootstrap} from "react-icons/fa";
import { SiCss3 } from "react-icons/si";

function Techstack() {
  return (
   <>
   <div className="tech-box">
    <div className="tech-icons">
      <DiJava></DiJava>
    </div>
     <div className="tech-icons">
      <CgCPlusPlus></CgCPlusPlus>
     </div>
      <div className="tech-icons">
        <DiNodejs></DiNodejs>
      </div>
   </div>
   <div className="tech-box">
    <div className="tech-icons">
      <DiMongodb></DiMongodb>
    </div>
     <div className="tech-icons">
      <DiReact></DiReact>
     </div>
      <div className="tech-icons">
        <FaBootstrap></FaBootstrap>
      </div>
   </div>
  <div className="tech-box">
    <div className="tech-icons">
      <FaHtml5></FaHtml5>
    </div>
     <div className="tech-icons">
     <SiCss3></SiCss3>
     </div>
      <div className="tech-icons">
        <DiJavascript1></DiJavascript1>
      </div>
   </div>
  
    
   
   </>
  );
}

export default Techstack;