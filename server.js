const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/user.routes');
require('dotenv').config();

const app = express();
require('./src/db/connectDB').connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true}));

app.get('/', (req, res) => {
  res.send('Welcome to Giovan Christoffel Sihombing - Modul 7 SBD');
});
app.use('/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});