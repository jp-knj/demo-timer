import express from 'express';
import server from './server/index';

const app = express();

// 3000番ポートでWebサーバを立てる
app.listen(3000);

// https://localhost:3000 にアクセスがあったら server() を返す
app.get('/', (_, res) => {
  res.send(server());
});
