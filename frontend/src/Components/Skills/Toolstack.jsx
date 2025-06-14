import React from "react";

import { FaGithub } from "react-icons/fa";
import {
 
  SiPostman,
  SiVercel,
 
} from "react-icons/si";

function Toolstack() {
  return (
    <>
<div className="tech-box">
    <div className="tech-icons">
      <SiPostman></SiPostman>
    </div>
     <div className="tech-icons">
      <SiVercel></SiVercel>
     </div>
       <div className="tech-icons">
      <FaGithub></FaGithub>
    </div>
   </div>
  
    </>
  );
}

export default Toolstack;