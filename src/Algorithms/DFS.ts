
import { CANVAS_HEIGHT,CANVAS_WIDTH,PIXEL_SIZE } from "@/constants";
export const DFS = (source: number[], target: number[], filledPixels: Set<string>) => {
    const visited: Set<string> = new Set();
    let shortest:number = 9999999
    let CorrectPaths: Array<string> []= []
    let ShortestPath:string [] = []
    console.log('in DFS')
    const recursion = (current: number[], steps: number,currentPath:string []) => {
        const key = `${current[0]},${current[1]}`;

        if (
            current[0] <= -1 || current[0] >= CANVAS_WIDTH ||
            current[1] <= -1 || current[1] >= CANVAS_HEIGHT ||
            visited.has(key) || filledPixels.has(key)
        ) {
            return;
        }

        if (current[0] === target[0] && current[1] === target[1]) {
            if (steps < shortest)
                {
                    shortest = steps
                    ShortestPath = [...currentPath]
                    return
                }
            CorrectPaths.push([...currentPath])
            console.log('Target found!',currentPath);
            return;
        }
        console.log('visiting',key)
        visited.add(key);

        recursion([current[0] + PIXEL_SIZE, current[1]], steps + 1,[...currentPath,`${current[0]},${current[1]}`]);
        recursion([current[0], current[1] + PIXEL_SIZE], steps + 1,[...currentPath,`${current[0]},${current[1]}`]);
        recursion([current[0] - PIXEL_SIZE, current[1]], steps + 1,[...currentPath,`${current[0]},${current[1]}`]);
        recursion([current[0], current[1] - PIXEL_SIZE], steps + 1,[...currentPath,`${current[0]},${current[1]}`]);
    };

    recursion(source, 0,[`${source[0]},${source[1]}`]);
    console.log('shortest paths',ShortestPath,'correct paths',CorrectPaths)
    console.log('Completed!');
    return [visited,ShortestPath,CorrectPaths];
};
