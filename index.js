import express from 'express';

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Server worked')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
