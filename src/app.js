import express from 'express';
import { dbConnection } from './config/db.js';
import { port } from './config/index.js';

const app = express();

app.get('/', (request, response, error) => {

  response.send('status: OK')

});

app.listen(port, (error) => {

  if(error) {
    console.log('server Error: Failed');
    process.exit(1);
  }
  console.log('server listening in port ' + port)
})

