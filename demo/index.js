import classifier from '@ali/antd-icon-classifier';

window.onload = async () => {
  await classifier.load();
  console.log('loaded');
  const imgEl = document.querySelector('img');
  await classifier.predict(imgEl).then(console.log);
  await classifier.predict(imgEl).then(console.log);
};
