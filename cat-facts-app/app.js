const express = require('express');
const catFacts = require('cat-facts');
const path = require('path');

const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');
// Optional: Specify the views directory (Express defaults to 'views')
// app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  try {
    const randomFact = catFacts.random();
    // Render the view, passing the fact
    res.render('index', { fact: randomFact });
  } catch (error) {
    console.error("Error fetching cat fact or rendering view:", error);
    // Send error response
    res.status(500).send('Sorry, could not fetch a cat fact or display the page right now.');
  }
});

app.listen(port, () => {
  console.log(`Cat Facts app listening at http://localhost:${port}`);
}); 