import Path from '@joemaddalone/path';

const donut = ({ size, width, cx, cy, data }) => {
  const percentToDegree = (p) => (p / 100) * 360;
  const segments = [];
  let total = 0;
  data.forEach((d, i) => {
    const startAngle = percentToDegree(total);
    const endAngle = percentToDegree(total + d.percent);
    const p = new Path();
    p.segment(cx, cy, size - width, startAngle, endAngle);
    segments.push(
      p.toElement({
        'stroke-width': width,
        stroke: d.color,
        fill: 'none',
      }),
    );
    total = total + d.percent;
  });

  return segments;
};

export default donut;
