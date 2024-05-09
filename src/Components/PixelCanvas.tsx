// components/PixelCanvas.tsx
import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCanvasRef } from '@/store/CanvasSlice';
import { useSelector } from 'react-redux';
import { setSource,setFilledPixels,setTarget } from '@/store/CanvasSlice';
const PIXEL_SIZE = 10; // Size of each pixel block
const GRID_COLOR = 'lightgray'; // Color of the grid lines
const CANVAS_WIDTH = 1150;
const CANVAS_HEIGHT = 600;



  let Filled_P:Set<string>=new Set()
  
const PixelCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [startPos,setStartPos] = useState<number []|null>(null)
  const [endPos,setEndPos] = useState<number []|null>(null)
  const [canvasObj,setCanvasObj] = useState <HTMLCanvasElement|null>(null)
  const RunCommandSubscriber = useSelector((store:any)=>store.Command)
  const CleanCanvas = useSelector((store:any)=>store.Toolbar.trash)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if (CleanCanvas){
        console.log('oh yeah clean me')
        if(ctxRef.current !=null){
            Filled_P.forEach((value:string,value2:string)=>{
                let arr=value.split(',')
                ctxRef.current.fillStyle = 'white';
                ctxRef.current.fillRect(parseInt(arr[0]),parseInt(arr[1]),10,10)
                
            })
            Filled_P.clear()
        }
    }
  },[CleanCanvas])
  useEffect(()=>{
    console.log('run Command Initiated !!',startPos,endPos,Filled_P)
    dispatch(setSource(startPos))
    dispatch(setTarget(endPos))
    dispatch(setFilledPixels(Filled_P))
  },[RunCommandSubscriber]) 

 useEffect(()=>{   
        const canvas = canvasRef.current;
        setCanvasObj(canvas)
          // diaspatch the event to store the ref of the canvas to the store
        if (!canvas) return;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        ctxRef.current = ctx;
        dispatch(setCanvasRef(ctx))
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

    
        //initialize drawing styles
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        // drawing  grid lines
        drawGrid();},[])

  useEffect(() => {
    let isDrawing = false;
    
    // Event handlers for drawing
    const draw = (e: MouseEvent) => {
      if (!isDrawing || !ctxRef.current) return;

      const x = Math.floor(e.offsetX / PIXEL_SIZE) * PIXEL_SIZE;
      const y = Math.floor(e.offsetY / PIXEL_SIZE) * PIXEL_SIZE;
      console.log('starting',startPos,'ending',endPos)

      console.log('X',x,'Y',y
      )
      if (startPos && endPos )
        if (x == startPos[0] && y==startPos[1]  || x == endPos[0] && y==endPos[1])
                return

      ctxRef.current.fillStyle = 'black';
      ctxRef.current.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
      
      const pixelKey = `${x},${y}`;

      if (!Filled_P.has(pixelKey)){
        Filled_P.add(pixelKey)
        console.log(Filled_P)
      }
    };

    const startDrawing = (e: MouseEvent) => {
      isDrawing = true;
      draw(e);
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvasObj?.addEventListener('mousedown', startDrawing);
    canvasObj?.addEventListener('mousemove', draw);
    canvasObj?.addEventListener('mouseup', stopDrawing);
    canvasObj?.addEventListener('mouseout', stopDrawing);

    return () => {
      canvasObj?.removeEventListener('mousedown', startDrawing);
      canvasObj?.removeEventListener('mousemove', draw);
      canvasObj?.removeEventListener('mouseup', stopDrawing);
      canvasObj?.removeEventListener('mouseout', stopDrawing);
    };
  }, [startPos,endPos,canvasObj]);

  useEffect(()=>{
    const startX = Math.floor(Math.random() * (CANVAS_WIDTH / PIXEL_SIZE)) * PIXEL_SIZE;
    const startY = Math.floor(Math.random() * (CANVAS_HEIGHT / PIXEL_SIZE)) * PIXEL_SIZE;
    const endX = Math.floor(Math.random() * (CANVAS_WIDTH / PIXEL_SIZE)) * PIXEL_SIZE;
    const endY = Math.floor(Math.random() * (CANVAS_HEIGHT / PIXEL_SIZE)) * PIXEL_SIZE;  

    setStartPos([startX, startY]);
    setEndPos([endX, endY]);
    drawBlock(startX, startY,'red');
    drawBlock(endX, endY,'green')

},[])

const drawBlock = (x: number, y: number,color: string) => {
    if (!ctxRef.current) return;
    ctxRef.current.fillStyle = color;
    ctxRef.current.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
  };

  const drawGrid = () => {
    if (!ctxRef.current) return;

    ctxRef.current.strokeStyle = GRID_COLOR;
    ctxRef.current.lineWidth = 0.5;

    for (let x = 0; x <= canvasRef.current!.width; x += PIXEL_SIZE) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(x, 0);
      ctxRef.current.lineTo(x, canvasRef.current!.height);
      ctxRef.current.stroke();
    }

    for (let y = 0; y <= canvasRef.current!.height; y += PIXEL_SIZE) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(0, y);
      ctxRef.current.lineTo(canvasRef.current!.width, y);
      ctxRef.current.stroke();
    }
  };

  return <canvas ref={canvasRef} id='canvas-element'></canvas>;
};

export default PixelCanvas;
