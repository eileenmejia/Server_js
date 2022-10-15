const { response } = require('express')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))

app.get('/',function(req, res){ 
res.sendFile('index.html');
});

app.get('/eileen', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'eileen.html'))
    })
    
const students = [
  {
    student: 'jhesselyn'
  },
  {
    student: 'eileen'
  },
  {
    student: 'cherno'
  },
  {
    student: 'jeremy'
  },
  {
    student: 'nikita'
  }
]

app.get('/comment', (req,res) => {
res.send(students);
});

app.post('/comment', (req, res) => {
console.log(req.body);
students.push(req.body);
res.send(201);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})