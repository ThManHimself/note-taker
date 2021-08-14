const express = require("express");
const notesRoutes = require('./routes/apiRoutes')
const htmlRoutes = require("./routes/htmlRoutes");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
// parse incoming string to array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', notesRoutes);
app.use('/', htmlRoutes);

// host
app.listen(PORT, ()=>{
    console.log(`API server now on ${PORT}!`);
});