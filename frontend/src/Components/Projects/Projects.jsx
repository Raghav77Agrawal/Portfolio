import chatapp from "../../Assets/chatapp.png";
import blogify from "../../Assets/blogify.png";
import plants from "../../Assets/plants.png";
import amazonclone from "../../Assets/amazonclone.png";
import calculator from "../../Assets/calculator.png";
import musematch from "../../Assets/musematch.png";
import ProjectCards from "./ProjectCards";
export default function Projects() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          paddingTop: "5rem",
          height: "30vh",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "white",
            paddingBottom: "1rem",
          }}
        >
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects I've worked on recently.
        </p>
</div>
        <div
          style={{
            height:'75vh',
            width:'100%',
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            paddingTop: "3rem",
            backgroundColor:'black'
          }}
        >
        
            <ProjectCards
              imgPath={chatapp}
              title="ChatApp"
              description="This is a real-time, one-on-one chat application where users can connect anonymously with random strangers. Built using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO, the app allows users to initiate spontaneous conversations and skip to a new person at any time — similar to platforms like Omegle"
              ghLink="https://github.com/Raghav77Agrawal/ChatApp"
            />
          
            <ProjectCards
              imgPath={plants}
              title="Plants App"
              description="This is a simple and visually engaging Plant Information Website created using HTML and CSS, designed to showcase various categories of plants like climbers, creepers, herbs, shrubs, and trees. The app provides a clean, organized layout with vibrant visuals and structured information, making it ideal for beginners, students, or nature lovers."
              ghLink="https://github.com/Raghav77Agrawal/PlantWebsite"
            />
          
            <ProjectCards
              imgPath={blogify}
              title="Blogify"
              description="Blogify is a dynamic blogging web application where users can create and delete blogs, as well as comment on others' posts. It features a secure login and signup system using JWT-based authentication and authorization. Users can also create and update their profiles, including uploading profile pictures using Multer."
              ghLink="https://github.com/Raghav77Agrawal/Blogify"
            />
          
        </div>
          <div style={{backgroundColor:'black',height:'10vh',width:'100%'}}></div>
        <div
          style={{
            height:'75vh',
            width:'100%',
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            paddingTop: "3rem",
            backgroundColor:'black'
          }}
        >
         
            <ProjectCards
              imgPath={calculator}
              title="Calculator"
              description="This is a simple and functional calculator built using HTML, CSS, and JavaScript, designed to perform basic arithmetic operations like addition (+), subtraction (−), multiplication (×), division (÷), and percentage (%). The app features a clean user interface and handles both keyboard and button input for ease of use"
              ghLink="https://github.com/Raghav77Agrawal/Calculator"
            />
          
            <ProjectCards
              imgPath={amazonclone}
              title="Amazon Clone"
              description="This is a static clone of Amazon's homepage built using only HTML and CSS. It replicates the look and feel of the original Amazon website, including its header, navigation bar, product sections, and footer. The layout is responsive and visually structured to reflect the core design of a real-world e-commerce platform."
              ghLink="https://github.com/Raghav77Agrawal/AmazonClone"
            />
          
            <ProjectCards
              imgPath={musematch}
              title="MuseMatch"
              description="Musematch is a sleek and modern digital marketing platform developed using HTML, CSS, and Bootstrap. It features smooth animations and a fully responsive design to deliver an engaging user experience across all devices. The platform helps brands effectively target and connect with their audiences through intuitive interfaces and powerful analytics tools. "
              ghLink="https://github.com/Raghav77Agrawal/Musematch"
            />
         
        </div>
      <div style={{backgroundColor:'black',height:'10vh',width:'100%'}}></div>
    </>
  );
}
