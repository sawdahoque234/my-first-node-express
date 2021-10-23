const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000
app.get('/', (req, res) => {
    res.send('wertyuiopoihgfdzxcvbnjiuytfvbnjuygtfvbnjuhg hey sawda in node journey')
});

const users = [
    {id:0,name:"sawda",age:22,email:"sawda@mail.com"},
    {id:1,name:"priya",age:22,email:"priya@mail.com"},
    {id:2,name:"prita",age:22,email:"prita@mail.com"},
    {id:3,name:"bulbul",age:22,email:"bulbul@mail.com"},
    {id:4,name:"fulkoli",age:22,email:"fulkoli@mail.com"},
    {id:5,name:"moli",age:22,email:"moli@mail.com"},
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchresult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchresult)
    }
    else {
        res.send(users)
        
    }
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id= users.length;
    users.push(newUser)
    // res.send('JSON.stringify(newUser)')
    res.json(newUser)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user=users[id]
    res.send(user)
})
app.listen(port, () => {
    console.log('helloport', port);
  })