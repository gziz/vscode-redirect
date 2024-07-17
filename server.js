const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
  const fullUrl = req.url.slice(1);  // Remove leading slash
  const vscodePrefix = 'vscode://';
  
  if (fullUrl.startsWith(vscodePrefix)) {
    const vscodeUrl = fullUrl;
    console.log(`Redirecting to: ${vscodeUrl}`);
    res.redirect(vscodeUrl);
  } else {
    res.status(400).send('Invalid URL format');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;