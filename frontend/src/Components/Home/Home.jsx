import Type from "./Type.jsx";
import Home2 from "./Home2.jsx";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(2, 4, 7)",
          height: "70vh",
          width: "100%",
          display: "flex",
          paddingTop: "6rem",
          color: "white",
          gap:'1rem'
        }}
      >
        <div
          style={{
            height: "60vh",
            width: "50vw",
            paddingTop:'3rem',
          }}
          className="rx"
        >
          <h2 style={{  paddingBottom: "1rem" }}>
            Hi there!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>{" "}
          </h2>

          <h2 style={{  }}>
            I am <b style={{ color: "rgb(39, 170, 222)" }}>Raghav Agrawal</b>{" "}
          </h2>
          <div
            className="my-6"
            style={{
              color: "rgb(39, 170, 222)",
              paddingTop: "3rem",
              
            }}
          >
            <b>
              <Type></Type>
            </b>
          </div>
        </div>
        <img src="/ff.png"  className="rrr"></img>
      </div>

      <div style={{ height: "20vh", backgroundColor: "rgb(2,4,7)" }}></div>
      <div
        style={{
          backgroundColor: "rgb(2,4,7)",
          color: "white",
          paddingLeft: "3rem",
          height: "80vh",
          width: "100%",
        }}
      >
        <Home2></Home2>
      </div>
      <div style={{ backgroundColor: "rgb(2,4,7)", height: "5vh" }}></div>
      <div
        style={{
          height: "20vh",
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgb(2,4,7)",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          FIND ME ON
        </h1>
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
              <AiFillGithub />
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
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
