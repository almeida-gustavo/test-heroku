import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AGORA USANDO O ESM');
});

app.listen(port, () => {
  console.log('servidor rodando na porta:', port);
});
