const path=require('path');
const express = require('express')
const cors=require('cors')


const sequelize=require('./util/database');

const app = express();
const loginRoutes = require('./routes/login');

app.use(cors());

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoutes);


sequelize
.sync()
.then(result=>{
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
      });
})
.catch(err=>{
    console.log(err);
})