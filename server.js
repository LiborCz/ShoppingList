const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

const path = require('path');
const cors = require('cors');
const config = require('./config');

// routes
// import authRoutes from './routes/api/auth';
// import userRoutes from './routes/api/users';
const itemRoutes = require('./routes/api/items');

const app = express();

// CORS Middleware
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
// const { MONGO_URI, MONGO_DB_NAME } = config;
// const db = `${MONGO_URI}/${MONGO_DB_NAME}`;
const db = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@cluster0-depo4.mongodb.net/ShoppingList`;


// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', itemRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
else {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server started on port ${port}`));
}
