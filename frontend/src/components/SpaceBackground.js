import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Reinitialize stars when dimensions change
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 2000); // Adjust density

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05,
          hue: Math.random() > 0.5 ? 200 + Math.random() * 50 : 270 + Math.random() * 50, // Blue or purple tint
        });
      }
    };

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient - smoother gradient without vertical lines
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, 'rgba(15, 20, 35, 1)');
      gradient.addColorStop(1, 'rgba(8, 10, 20, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 2
        );

        gradient.addColorStop(0, `hsla(${star.hue}, 100%, 90%, ${star.opacity})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Twinkle effect
        star.opacity += Math.sin(Date.now() * star.speed) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
      });

      // Occasional shooting star
      if (Math.random() < 0.01) {
        drawShootingStar();
      }

      animationFrameId = requestAnimationFrame(drawStars);
    };

    // Draw shooting star
    const drawShootingStar = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height / 3); // Only in top third
      const length = 50 + Math.random() * 100;
      const angle = Math.PI / 4 + (Math.random() * Math.PI / 4);

      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      const gradient = ctx.createLinearGradient(x, y, endX, endY);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    };

    // Initialize and start animation
    setCanvasDimensions();
    drawStars();

    // Handle window resize
    window.addEventListener('resize', setCanvasDimensions);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default SpaceBackground;
