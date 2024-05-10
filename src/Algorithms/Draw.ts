export const Draw = (source: number[], target: number[], filledPixels: Set<string>, interval: number, canvasRef: any) => {
    const pixelsArray = Array.from(filledPixels);

    const drawPixelWithDelay = (index: number) => {
        if (index >= pixelsArray.length) {
            return;
        }

        const pixel = pixelsArray[index].split(",");
        canvasRef.fillStyle = 'blue';
        canvasRef.fillRect(Number(pixel[0]), Number(pixel[1]), 10, 10);

        setTimeout(() => {
            drawPixelWithDelay(index + 1);
        }, interval);
    };

    drawPixelWithDelay(0);
};
