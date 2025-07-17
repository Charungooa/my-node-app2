import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('Hello, this is my web application-V2');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});