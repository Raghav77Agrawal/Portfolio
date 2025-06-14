const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); 
const app = express();
app.use(cors());
app.use(express.json());
app.post('/',(req,res)=>{
const {email,msg} = req.body;
if (!email || !msg) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const timestamp = new Date().toLocaleString();
  const entry = `\n[${timestamp}] Email: ${email}\nMessage: ${msg}\n`;

  const filePath = path.join(__dirname, "data.txt");

  // Append to file
  fs.appendFile(filePath, entry, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ message: "Failed to save message" });
    }
  })
  res.json({message:'Message sent successfully'});
});
app.listen(8000,()=>{
console.log('Port running');
})