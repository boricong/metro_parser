import express, { Application, Request, Response } from 'express';
import path from 'path';
// import HomeController from './src/controllers/HomeController';
import HomeController from './src/routes/HomeController';

const app: Application = express();


// 정적 파일을 제공하기 위한 경로(/public) 등록  (__dirname : 현재 파일 경로)
app.use(express.static(path.join(__dirname, '/public')));

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

// GET 요청 처리 (필요에 따라)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// HomeController를 사용하여 /home 경로로의 GET 요청을 처리합니다.
app.get('/home', HomeController.index);

// 서버 시작
app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});