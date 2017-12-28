const ip = require('ip');
const bodyParser = require('body-parser');
const express = require('express');
const app = express(); // app is server
const port = 8888;
const drink = [
  {
    name: 'pepsi',
    volume: '200ml',
    cost: 200,
    OE: true,
    shelf_num: 1,
    img: 'https://vignette.wikia.nocookie.net/doraemon/images/c/c0/Doraemon_%282002%29.png/revision/latest/scale-to-width-down/350?cb=20170327161129&path-prefix=en'
  }
]

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Router handler functions
app.post('/api/add', (req, res) => {
  drink.push(req.body);
  res.send({
    success: true
  });
})

app.post('/login', (req, res) => {
  console.log(req.body);
  if( req.body.id === 'admin' && req.body.password === '123' ) {
    res.sendFile(__dirname + '/pages/listPage.html');
  }
  else {
    res.redirect('/login');
  }
  // แปลง string ให้เปน JSON
  // console.log( JSON.parse(req.body) );
  // res.send({ success: true});
});

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/pages/home.html' );
})

app.get('/secret', (req, res) => {
  res.sendFile( __dirname + '/admin/dashboard.html' );
})

app.get('/login', (req, res) => {
  res.sendFile( __dirname + '/pages/login.html' );
});

app.get('/drinks', (req, res) => {
  res.send( drink );
});

app.get('/addPage', (req, res) => {
  res.sendFile( __dirname + '/pages/addPage.html' );
});

app.get('/listPage', (req, res) => {
  res.sendFile( __dirname + '/pages/listPage.html' );
});

// app.get('/:page', (req, res) => {
//   const page = req.params.page;
//   res.sendFile(__dirname + `/pages/${page}.html`);
// })

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/404.html');
  // res.redirect('/')
})

app.listen(port, () => {
  console.log(`Server started on ${ip.address()}:${port}`)
})
