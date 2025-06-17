require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); 
const app = express();
const port = process.env.port || 8000;
app.use(cors());
app.use(express.json());
app.post('/contact',(req,res)=>{
const {email,msg} = req.body;

if (!email || !msg) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const timestamp = new Date().toLocaleString();
  const entry = `\n[${timestamp}] Email: ${email}\nMessage: ${msg}\n`;

  const filePath = path.join(__dirname, "data.txt");

  fs.appendFile(filePath, entry, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ message: "Failed to save message" });
    }
  })
  res.json({message:'Message sent successfully'});
});
//new route to download data
app.get('/download-data', (req, res) => {
  const filePath = path.join(__dirname, 'data.txt');
  res.download(filePath, 'messages.txt', (err) => {
    if (err) {
      console.error('Download error:', err);
      res.status(500).send('Error downloading the file.');
    }
  });
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port,()=>{
console.log('Port running');
})