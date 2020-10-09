import Path from '../web_modules/path.js';

const grid = ({ x, y, width, height, cols, rows, close = true }) => {
  const lines = new Path().M(x, y);
  const extra = close ? 1 : 0;
  const colWidth = width / cols;
  const rowHeight = height / rows;
  Array.from({ length: cols + extra }).map((_, index) =>
    lines.M(x + index * colWidth, y).down(height),
  );
  Array.from({ length: rows + extra }).map((_, index) =>
    lines.M(x, y + index * rowHeight, y).right(width),
  );
  return lines.toElement({ stroke: '#ddd' });
};

export default grid;
