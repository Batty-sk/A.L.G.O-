import { PIXEL_SIZE } from "@/constants";
export const Draw = ( filledPixels: Set<string>, interval: number, canvasRef: any,shortestPath:string[],correctPaths:Array<string []>) => {
    const pixelsArray = Array.from(filledPixels);
    const ShortestPath = new Set(shortestPath)
    const CorrectPaths = new Set()

    correctPaths.forEach(path => {
        path.forEach(point => {
          CorrectPaths.add(point);
        });
      });

      console.log('filled pixels',filledPixels,'shortest path', ShortestPath,'correctpaths',CorrectPaths)

    const drawPixelWithDelay = (index: number) => {
        if (index >= pixelsArray.length) {
            return;
        }
  
        const pixel = pixelsArray[index].split(",");
        canvasRef.fillStyle = 'blue';
        canvasRef.fillRect(Number(pixel[0]), Number(pixel[1]), PIXEL_SIZE, PIXEL_SIZE);
        canvasRef.strokeStyle = 'black';
        canvasRef.lineWidth = 1;
        canvasRef.strokeRect(Number(pixel[0]), Number(pixel[1]), PIXEL_SIZE, PIXEL_SIZE);


        setTimeout(() => {
            drawPixelWithDelay(index + 1);
        }, interval);
    };

    drawPixelWithDelay(0);
};
