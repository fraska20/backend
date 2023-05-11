const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    const data = {
      message: 'Halo, ini adalah contoh API sederhana di Express.js',
      author: 'jipies',
      date: new Date()
    };
  
    res.json(data);
  });

// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
  });