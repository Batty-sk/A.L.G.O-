import { CANVAS_HEIGHT, CANVAS_WIDTH, PIXEL_SIZE } from "@/constants";

type Position = [number, number];
type Path = Position[];

export const BFS = (source: Position, target: Position, filledPixels: Set<string>): [Set<string>, Path] => {
    const visited: Set<string> = new Set();
    const queue: [Position, any][] = []; 
    const directions: Position[] = [[1, 0], [0, 1], [-1, 0], [0, -1]]; 

    queue.push([source, [`${source[0]},${source[1]}`]]); 

    while (queue.length > 0) {
        const [current, path] = queue.shift()!; 

        const key = `${current[0]},${current[1]}`;
        if (visited.has(key)) continue; 
        if (!(current[0] === source[0] && current[1] === source[1] || current[0]===target[0] && current[1] ===target[1]))
            visited.add(key);

        if (current[0] === target[0] && current[1] === target[1]) {

            return [visited, path];
        }

        for (const [dx, dy] of directions) {
            const nextX = current[0] + dx * PIXEL_SIZE;
            const nextY = current[1] + dy * PIXEL_SIZE;
            const nextKey = `${nextX},${nextY}`;
            
            if (
                nextX >= 0 && nextX < CANVAS_WIDTH &&
                nextY >= 0 && nextY < CANVAS_HEIGHT &&
                !filledPixels.has(nextKey)
            ) {
                queue.push([[nextX, nextY], [...path, `${nextX},${nextY}`]]);
            }
        }
    }
    return [visited, []];
};
