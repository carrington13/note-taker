const express = require('express');

// Router/HTML Paths
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// -------------------------
// Express Vars & Middleware
// -------------------------
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// HTML Imported Routes/Router
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})

