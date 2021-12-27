import Path from '../web_modules/@joemaddalone/path.js';

export const degreeToAngle = (value, division, cx, cy, radius) => {
  const degree = (360 / division) * value;
  const { x: ex, y: ey } = Path.clockwisePoint(cx, cy, radius, degree);
  return { ex, ey };
};

export const time = () => {
  const d = new Date();
  return {
    second: d.getSeconds(),
    minute: d.getMinutes(),
    hour: d.getHours(),
  };
};



export const clock = (canvas) => {
  const w = 250;
  const h = 250;
  const cx = w / 2;
  const cy = h / 2;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  const clockSize = 240;
  const clockRadius = clockSize / 2;

  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    const c = new Path().circle(clockSize, w / 2, h / 2).toString();
    ctx.strokeStyle = 'black';
    ctx.stroke(new Path2D(c));
    const r1 = new Path()
      .radialLines(clockSize, clockSize * 0.9, 12, cx, cy)
      .toString();
    ctx.stroke(new Path2D(r1));
    const r2 = new Path()
      .radialLines(clockSize, clockSize * 0.95, 60, cx, cy)
      .toString();
    ctx.stroke(new Path2D(r2));
    const hourEnd = degreeToAngle(time().hour, 12, cx, cy, clockRadius * 0.5);
    const hourHand = new Path()
      .M(cx, cy)
      .lineTo(hourEnd.ex, hourEnd.ey)
      .toString();
    ctx.strokeStyle = 'green';
    ctx.stroke(new Path2D(hourHand));
    const minuteEnd = degreeToAngle(
      time().minute,
      60,
      cx,
      cy,
      clockRadius * 0.75,
    );
    const minuteHand = new Path()
      .M(cx, cy)
      .lineTo(minuteEnd.ex, minuteEnd.ey)
      .toString();
    ctx.strokeStyle = 'blue';
    ctx.stroke(new Path2D(minuteHand));
    const secondEnd = degreeToAngle(
      time().second,
      60,
      cx,
      cy,
      clockRadius * 0.9,
    );
    const secondHand = new Path()
      .M(cx, cy)
      .lineTo(secondEnd.ex, secondEnd.ey)
      .toString();
    ctx.strokeStyle = 'red';
    ctx.stroke(new Path2D(secondHand));

    requestAnimationFrame(animate);
  };

  animate();
};
