const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0.qx7zcjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');

app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes); 