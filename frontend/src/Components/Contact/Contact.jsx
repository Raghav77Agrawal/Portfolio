import { useState } from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact(){
const [email,setemail] = useState('');
const [msg,setmsg] = useState('');
 const xr = import.meta.env.VITE_URL;
const handlesubmit = async (e)=>{

e.preventDefault();
console.log("Env URL:", xr);
  const x = await fetch(`${xr}`,{
    method:'POST',
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({email,msg}),
  });
if(x.ok){
  alert('I will reach you soon');
  setemail('');
  setmsg('');
}
else{
  alert( 'an error occured');
}
}

  
    return (<>
    <div style={{backgroundColor:'black'}}>
    <h1 style={{fontSize:'2rem',padding:'2rem',textAlign:'center',backgroundColor:'black',color:'white',paddingTop:'5rem'}}>
           <strong className="blue">Contact </strong> me
        </h1>
        
        <div  style={{backgroundColor:'black',color:'white'}} className="container">
    <div className="mb-3" >
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" value = {email} onChange={(e)=>setemail(e.target.value)}/>
</div>
<div className="mb-3" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={msg} onChange={(e)=>setmsg(e.target.value)}></textarea>
</div>
<button type="submit" className="btn btn-info" onClick={handlesubmit}>Submit</button>
    </div>

    <div style={{height:'20vh',width:'100%',textAlign:'center',backgroundColor:'rgb(2,4,7)',color:'white',marginTop:'10rem'}}>
      <h1 style={{fontSize:'2rem',textAlign:'center',marginBottom:'0.5rem'}}>FIND ME ON</h1>
                <p>
                  Feel free to <span className="blue">connect </span>with me
                </p>
               <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Raghav77Agrawal"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://x.com/RaghavAgra80492"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaXTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a 
                      href="https://www.linkedin.com/in/raghav-agrawal-a72362280"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/raghavagrawal748/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram/>
                    </a>
                  </li>
                </ul>
    </div>
    </div>
    </>)
}