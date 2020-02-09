import dotenv from 'dotenv';

dotenv.config();

const map = (req, res) => {
  const { NAVER_CLIENT_ID } = process.env;
  res.render('map', { pageTitle: '찾아오시는 길', NAVER_CLIENT_ID });
};

export default map;
