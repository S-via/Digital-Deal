

const express = require('express');
const app = express();
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


app.use(express);

app.get('/', (req,res) => {
    //add window location later
    window.location()
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})
