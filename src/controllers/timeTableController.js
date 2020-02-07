import timeTableManifest from '../../public/timeTableManifest';

const timeTable = (req, res) => {
  res.render('timeTable', { pageTitle: '예배 시간', timeTableManifest });
};

export default timeTable;
