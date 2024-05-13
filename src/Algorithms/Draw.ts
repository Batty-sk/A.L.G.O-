import { PIXEL_SIZE } from "@/constants";

export const Draw = ( filledPixels: Set<string>, interval: number, canvasRef: any,Path:any = null,shortestP:any = null) => {
    const pixelsArray = Array.from(filledPixels);
    const path = Path?new Set(Path):null
    const shortestPath = shortestP?new Set(shortestP):null
      console.log('filled pixels',filledPixels,'path', path,'shortest Path',shortestPath)

    const drawPixelWithDelay = (index: number) => {
        if (index >= pixelsArray.length) { 
            return;
        }
  
        const pixel = pixelsArray[index].split(",");
        if (path?.has(pixelsArray[index])){
            canvasRef.fillStyle = 'cyan';
            canvasRef.fillRect(Number(pixel[0]), Number(pixel[1]), PIXEL_SIZE, PIXEL_SIZE);
        }
        else if(shortestPath?.has(pixelsArray[index])){
            canvasRef.fillStyle = 'blue';
            canvasRef.fillRect(Number(pixel[0]), Number(pixel[1]), PIXEL_SIZE, PIXEL_SIZE);
        }
        else{
        canvasRef.fillStyle = '#FFDF00' 
        canvasRef.fillRect(Number(pixel[0]), Number(pixel[1]), PIXEL_SIZE, PIXEL_SIZE);
        }
        canvasRef.strokeStyle = 'black';
        canvasRef.lineWidth = 1;
        canvasRef.strokeRect(Number(pixel[0]), Number(pixel[1]), PIXEL_SIZE, PIXEL_SIZE);


        setTimeout(() => {
            drawPixelWithDelay(index + 1);
        }, interval);
    };

    drawPixelWithDelay(0);
};
