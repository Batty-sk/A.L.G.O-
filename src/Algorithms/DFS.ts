
const CANVAS_WIDTH = 1500
const CANVAS_HEIGHT = 600;

export const DFS = (source:number[],target: number[],FilledPixels:Set<string>,interval:number,CanvasRef:any)=>
{
    let visited:Set<string> = new Set()
    let waysToExit:number = 0
    let shortest:number = 999999

    console.log('coming herere')
   const recursion=(source:number[],steps:number )=>{
        if(source[0] > -1 && source[0]<=CANVAS_WIDTH && source[1] >-1  && source[1] <=CANVAS_HEIGHT){
        
            if(source[0]==target[0] && source[1]==target[1]){
                if(steps<shortest)
                    shortest = steps
                waysToExit+=1
                return
            }
            if(visited.has(`${source[0]},${source[1]}`))
                {
                    return
                }
            if(FilledPixels.has(`${source[0]},${source[1]}`))
                {
                    return
                }
            visited.add(`${source[0]},${source[1]}`);
            console.log('dfsing',source[0],source[1])
                recursion([source[0] + 10, source[1]],steps+1);
                recursion([source[0], source[1] + 10],steps+1);
                recursion([source[0] - 10, source[1]],steps+1);
                recursion([source[0], source[1] - 10],steps+1);
            
            
        }
    }
    recursion([source[0],source[1]],0)

    console.log('completed ! ')
}   