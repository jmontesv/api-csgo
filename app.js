const express = require('express');
const app = express();
const routes = require('./routes/index');

//Config
app.set('PORT', process.env.PORT || 3000)

// Middleweares
app.use('/api/v1', routes)

app.listen('3000', () => {
  console.log('API HLTV funcionando en el puerto ' + app.get('PORT'));
});