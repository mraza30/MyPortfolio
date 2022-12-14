import React, { useEffect } from "react";
import { Particle } from "../class";

export function useCanvasAnim() {
  useEffect(() => {
    // getting canvas element from dom
    const canvas = document.getElementById("canvasHome") as HTMLCanvasElement;
    // css for canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //canvas context
    const ctx = canvas.getContext("2d");
    // mouse position tracker
    const mouse = {
      x: 0,
      y: 0,
    };
    //particles array to store particles which will appear on screen when mouse move
    const particlesArray: Particle[] = [];
    // select random color on startup and change after every animate
    let hue = Math.floor(Math.random() * 360 + 1);
    // setting canvas width and height for greater medium screen
    function setCanvasSize() {
      canvas.width = window.innerWidth - 160;
      canvas.height = window.innerHeight;
    }
    // storing mouse position and creating new particles
    function createParticle(event: MouseEvent) {
      mouse.x = event.x;
      mouse.y = event.y;
      particlesArray.push(new Particle(mouse, hue, ctx));
    }

    function updateParticles() {
      if (!ctx) return;
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 40) {
            ctx.beginPath();
            ctx.strokeStyle = `hsl(${hue},100%,50%)`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }

        if (particlesArray[i].time > 30) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      hue += 1;
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", setCanvasSize);

    window.addEventListener("mousemove", createParticle);

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", createParticle);
    };
  }, []);
}
