const express = require("express");
const app = express();

const port = process.env.PORT || 5279;

app.listen(port, (err)=>{
  if(err) console.log('Error connecting to server');
  console.log('Server created successfully');
})
