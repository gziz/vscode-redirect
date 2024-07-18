const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Server waiting to redirect you to your favorite IDE...!');
});

app.get('*', (req, res) => {
  const fullLink = req.url.slice(1);
  const vscodePrefix = "vscode:/";
  if (fullLink.startsWith(vscodePrefix)) {
    const vscodeLink = fullLink.replace('vscode:/', 'vscode://');
    console.log(`Redirecting to: ${vscodeLink}`);
    res.redirect(vscodeLink);
  } else {
    res.status(400).send('Invalid VSCode URL format');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;