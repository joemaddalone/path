import Path from 'path';

const sparkline = ({ width, height, data }) => {
  const line = new Path();
  const zero = height / 2;
  const pointDistance = parseInt(width / data.length);
  const points = data.map((d, index) => {
    if (index !== 0) {
      const prev = data[index - 1];
      return [pointDistance, prev - d];
    } else {
      return [pointDistance, d];
    }
  });
  points.unshift([0, zero + data.reduce((a, b) => a + b) / 2 - 10]);
  return line.polyline(points, true).toElement({ stroke: 'red', fill: 'none' });
};

export default sparkline;
