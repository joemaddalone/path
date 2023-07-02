import Path from '@joemaddalone/path';

export const particles = (canvas) => {
  const w = 755;
  const h = 120;
  let parts = [];
  let tick = 0;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  function createParticles() {
    //add particle if fewer than 100
    if (parts.length < 100) {
      parts.push({
        x: Math.random() * canvas.width, //between 0 and canvas width
        y: 0,
        speed: 0.5 + Math.random() * 1, //between 0.5 and 1
        radius: 2 + Math.random() * 8, //between 5 and 10
		shape: 'circle'
      });
    }
  }

  function updateParticles() {
    for (var i in parts) {
      var part = parts[i];
      part.y += part.speed;
    }
  }

  function killParticles() {
    parts = parts.filter((p) => p.y < canvas.height);
  }

  function drawParticles(particlesSvg) {
    const p = new Path();
    for (var i in parts) {
      var part = parts[i];
	  console.log(part.radius * 2, part.x, part.y)
      p[part.shape](part.radius * 2, part.x, part.y);
    }
    const r1 = new Path2D(p.toString());
    ctx.fillStyle = '#ffffffdd';
    ctx.fill(r1);
  }

  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.globalCompositeOperation = "destination-out";
    createParticles();
    drawParticles();
    updateParticles();
    killParticles();
    requestAnimationFrame(animate);
  };

  animate();
};
