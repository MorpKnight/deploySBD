const express = require('express');
const bodyParser = require('body-parser');
const eventRepo = require('./repositories/repository.event');

const port = 6084;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/events', eventRepo.addEvent);
app.get('/events', eventRepo.getAllEvents);
app.put('/events/:id', eventRepo.updateEvent);
app.delete('/events/:id', eventRepo.deleteEvent);

app.listen(port, () => {
    console.log("🚀 Server is running and listening on port ", port);
});