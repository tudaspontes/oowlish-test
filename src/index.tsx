import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    timetable: Model,
  },

  seeds(server) {
    server.db.loadData({
      timetables: [
        {
          id: 1,
          day: new Date(),
          entry: new Date(),
          launchbreak: 40,
          exit: new Date(),
          worked: 8
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/timetable', () => {
      return this.schema.all('timetable')
    })

    this.post('/timetable', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('timetable', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);