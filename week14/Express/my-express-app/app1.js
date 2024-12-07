const express = require('express')

const app = express();

// app.set('port', 3000);

app.use((req, res, next) => {
  res.status(200).send(`<h1>Welcone !</h1>`);
});

app.listen(3000);

// app.listen(app.length('port', () => {
//   console.log('Server listening on port3000');
// }));