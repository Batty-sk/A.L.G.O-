
// get the canvas ref and manuplate the canvas pixels
const CANVAS_WIDTH = 1500
const CANVAS_HEIGHT = 600;

export const DFS = (source:number[],target: number[],interval:number,CanvasRef:any)=>
{
    let visited:Set<string> = new Set()
    console.log('coming herere')
   const recursion=(source:number[])=>{
        if(source[0] > -1 && source[0]<=CANVAS_WIDTH && source[1] >-1  && source[1] <=CANVAS_HEIGHT){

            if(source[0]==target[0] && source[1]==target[1]){
                console.log('target found !')
                return
            }
            if(visited.has(`${source[0]},${source[1]}`))
                {
                    return
                }
            visited.add(`${source[0]},${source[1]}`);

            setTimeout(() => {
                CanvasRef.fillStyle = 'blue';
                CanvasRef.fillRect(source[0], source[1], 10, 10);
                recursion([source[0] + 10, source[1]]);
                recursion([source[0], source[1] + 10]);
                recursion([source[0] - 10, source[1]]);
                recursion([source[0], source[1] - 10]);
            }, 800)
            
            
        }
    }
    recursion([source[0],source[1]])

    console.log('completed ! ')
}   