import Path from '../web_modules/@joemaddalone/path.js';

const pie = ({ size, cx, cy, data }) => {
  const percentToDegree = (p) => (p / 100) * 360;
  const sectors = [];
  let total = 0;
  data.forEach((d, i) => {
    const startAngle = percentToDegree(total);
    const endAngle = percentToDegree(total + d.percent);
    const p = new Path();
    p.sector(cx, cy, size, startAngle, endAngle);
    sectors.push(p.toElement({ fill: d.color }));
    total = total + d.percent;
  });

  return sectors;
};

export default pie;
