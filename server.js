const express = require('express');
const path = require('path');
const app = express();

// run the app by serving static files

app.use(express.static(__dirname + '/dist'));

app.use(express.static(path.resolve(__dirname, "dist")));


app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(process.env.PORT || 8010);
