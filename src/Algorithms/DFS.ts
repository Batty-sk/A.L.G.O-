
import { CANVAS_HEIGHT,CANVAS_WIDTH,PIXEL_SIZE } from "@/constants";
export const DFS = (source: number[], target: number[], filledPixels: Set<string>) => {
    const visited: Set<string> = new Set();
    filledPixels.add(`${source[0]},${source[1]}`)
    let paths = 0
    let hashMap:any={}
    console.log('in DFS')
    const recursion = (current: number[], steps: number) => {
        const key = `${current[0]},${current[1]}`;

        if (
            current[0] <= -1 || current[0] >= CANVAS_WIDTH ||
            current[1] <= -1 || current[1] >= CANVAS_HEIGHT ||
             filledPixels.has(key) && steps
        ) {
            return [Infinity,[]];
        }

        if (current[0] === target[0] && current[1] === target[1]) {
            paths+=1
            return [0,[]];
        }

        if (hashMap[`${current[0]},${current[1]}`])
            {
                return [hashMap[`${current[0]},${current[1]}`].min,hashMap[`${current[0]},${current[1]}`].path]
            }

        if (visited.has(key))
            {
                return [Infinity,[]]
            }
        console.log('visiting',key)
        if (steps)
        visited.add(key);

        let right:any=recursion([current[0] + PIXEL_SIZE, current[1]], steps + 1);
        let down:any = recursion([current[0], current[1] + PIXEL_SIZE], steps + 1);
        let left:any =recursion([current[0] - PIXEL_SIZE, current[1]], steps + 1);
        let up:any =recursion([current[0], current[1] - PIXEL_SIZE], steps + 1);

        let min=Math.min(right[0],down[0],left[0],up[0])
        console.log('minimum',min)
        switch (min){
            case right[0]:
                hashMap[`${current[0]},${current[1]}`] = {min:min+1,path:[`${current[0]},${current[1]}`,...right[1]]}
                
                return[1+min,[`${current[0]},${current[1]}`,...right[1]]]
            case down[0]:
                hashMap[`${current[0]},${current[1]}`] = {min:min+1,path:[`${current[0]},${current[1]}`,...down[1]]}

                return[1+min,[`${current[0]},${current[1]}`,...down[1]]]
            case up[0]:
                hashMap[`${current[0]},${current[1]}`] = {min:min+1,path:[`${current[0]},${current[1]}`,...up[1]]}

                return[1+min,[`${current[0]},${current[1]}`,...up[1]]]
            case left[0]: 
                hashMap[`${current[0]},${current[1]}`] = {min:min+1,path:[`${current[0]},${current[1]}`,...left[1]]}

                return[1+min,[`${current[0]},${current[1]}`,...left[1]]]

        }
    };

    let result:any=recursion(source, 0)
    
    console.log('minimum path',result[0],result[1])
    return [visited,result[1],paths];
};
