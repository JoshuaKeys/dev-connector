const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// INit Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client-react/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'client-react', 'build', 'index.html')
    );
  });
}

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
