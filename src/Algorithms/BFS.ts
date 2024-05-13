import { CANVAS_HEIGHT, CANVAS_WIDTH, PIXEL_SIZE } from "@/constants";

type Position = [number, number];
type Path = Position[];

export const BFS = (source: Position, target: Position, filledPixels: Set<string>): [Set<string>, Path] => {
    const visited: Set<string> = new Set();
    const queue: [Position, Path][] = []; // Queue of [position, path] pairs
    const directions: Position[] = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // Right, Down, Left, Up

    queue.push([source, [source]]); // Start from the source position with a path containing only the source

    while (queue.length > 0) {
        const [current, path] = queue.shift()!; // Dequeue the front element

        const key = `${current[0]},${current[1]}`;
        if (visited.has(key)) continue; 
        visited.add(key);

        if (current[0] === target[0] && current[1] === target[1]) {
            // Reached the target, return the shortest path
            return [visited, path];
        }

        // Explore neighboring nodes
        for (const [dx, dy] of directions) {
            const nextX = current[0] + dx * PIXEL_SIZE;
            const nextY = current[1] + dy * PIXEL_SIZE;
            const nextKey = `${nextX},${nextY}`;
            
            if (
                nextX >= 0 && nextX < CANVAS_WIDTH &&
                nextY >= 0 && nextY < CANVAS_HEIGHT &&
                !filledPixels.has(nextKey)
            ) {
                // Add the neighboring position to the queue along with the updated path
                queue.push([[nextX, nextY], [...path, [nextX, nextY]]]);
            }
        }
    }
    // If target is unreachable, return an empty path
    return [visited, []];
};
