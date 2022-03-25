import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    property: Model,
    laboratory: Model
  },
  seeds(server) {
    server.db.loadData({
      properties: [{
        id: 1,
        name: "Agrotis 1",
        cnpj: '04.909.987/0001-88',
      }, {
        id: 2,
        name: "Agrotis 2",
        cnpj: '04.409.997/0001-58',
      }],
      laboratories: [{
        id: 3,
        name: "Agro Skynet",
      }, {
        id: 4,
        name: "Osborn Agro",
      }]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/properties', () => {
      return this.schema.all('property')
    })

    this.get('/laboratories', () => {
      return this.schema.all('laboratory')
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
