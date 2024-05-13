import { PIXEL_SIZE } from "@/constants";
export const Draw = ( filledPixels: Set<string>, interval: number, canvasRef: any,shortestPath:string[] = []) => {
    const pixelsArray = Array.from(filledPixels);
    const ShortestPath = new Set(shortestPath)

      console.log('filled pixels',filledPixels,'shortest path', ShortestPath)

    const drawPixelWithDelay = (index: number) => {
        if (index >= pixelsArray.length) {
            return;
        }
  
        const pixel = pixelsArray[index].split(",");
        if (ShortestPath.has(pixelsArray[index])){
            canvasRef.fillStyle = 'cyan';
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
