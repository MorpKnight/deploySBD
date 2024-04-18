const express = require('express');
const bodyParser = require('body-parser');
const eventRepo = require('./repositories/repository.event');
const morganMiddleware = require('./src/middlewares/morgan.middleware');
const helmet = require('helmet');

const port = 6084;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morganMiddleware);
app.use(helmet());

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'https://fonts.googleapis.com'", "'https://fonts.gstatic.com'"],
    }
}));

app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hsts({ maxAge: 7776000000, preload: true }));

app.post('/events', eventRepo.addEvent);
app.get('/events', eventRepo.getAllEvents);
app.put('/events/:id', eventRepo.updateEvent);
app.delete('/events/:id', eventRepo.deleteEvent);

app.listen(port, () => {
    console.log("🚀 Server is running and listening on port ", port);
});