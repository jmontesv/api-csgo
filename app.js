const express = require('express');
const app = express();
const routes = require('./routes/index');
const cors = require('cors');
const { HLTV } = require('hltv');

//Config
app.set('PORT', process.env.PORT || 3000)

// Middleweares
app.use(cors());
app.use('/api/v1', routes);

app.listen(app.get('PORT'), () => {
  console.log('API HL TV funcionando en el puerto ' + app.get('PORT'));
});
