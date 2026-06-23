const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Aether webhook is live'));
app.post('/webhook', (req, res) => {
  console.log('Received:', req.body);
  res.status(200).json({ received: true });
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
