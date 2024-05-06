// components/PixelCanvas.tsx
import { useRef, useEffect } from 'react';

const PIXEL_SIZE = 10; // Size of each pixel block
const GRID_COLOR = 'lightgray'; // Color of the grid lines

const PixelCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctxRef.current = ctx;

    // Set initial canvas size
    canvas.width = 400;
    canvas.height = 400;

    // Initialize drawing styles
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    drawGrid();

    let isDrawing = false;
    
    // Event handlers for drawing
    const draw = (e: MouseEvent) => {
      if (!isDrawing || !ctxRef.current) return;

      const x = Math.floor(e.offsetX / PIXEL_SIZE) * PIXEL_SIZE;
      const y = Math.floor(e.offsetY / PIXEL_SIZE) * PIXEL_SIZE;

      ctxRef.current.fillStyle = 'black';
      ctxRef.current.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
    };

    const startDrawing = (e: MouseEvent) => {
      isDrawing = true;
      draw(e);
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, []);

  const drawGrid = () => {
    if (!ctxRef.current) return;

    ctxRef.current.strokeStyle = GRID_COLOR;
    ctxRef.current.lineWidth = 0.5;

    // Draw vertical grid lines
    for (let x = 0; x <= canvasRef.current!.width; x += PIXEL_SIZE) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(x, 0);
      ctxRef.current.lineTo(x, canvasRef.current!.height);
      ctxRef.current.stroke();
    }

    // Draw horizontal grid lines
    for (let y = 0; y <= canvasRef.current!.height; y += PIXEL_SIZE) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(0, y);
      ctxRef.current.lineTo(canvasRef.current!.width, y);
      ctxRef.current.stroke();
    }
  };

  return <canvas ref={canvasRef}></canvas>;
};

export default PixelCanvas;
