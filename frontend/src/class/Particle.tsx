export class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  time: number;
  color: string;
  ctx: CanvasRenderingContext2D | null;
  constructor(mouse: mouse, hue: number, ctx: CanvasRenderingContext2D | null) {
    this.x = mouse.x;
    this.y = mouse.y;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.size = 3;
    this.time = 0;
    this.color = `hsl(${hue},100%,50%)`;
    this.ctx = ctx;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.time += 0.5;
  }
  draw() {
    if (!this.ctx) return;
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

type mouse = {
  x: number;
  y: number;
};
