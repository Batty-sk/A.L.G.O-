import { CANVAS_HEIGHT, CANVAS_WIDTH, PIXEL_SIZE } from "@/constants";

export const BFS = (source: number[], target: number[], filledPixels: Set<string>) => {
    const visited: Set<string> = new Set();
    const queue: { point: number[]; path: string[] }[] = [];
    const paths: string[][] = [];

    queue.push({ point: source, path: [] });

    while (queue.length > 0) {
        const { point, path } = queue.shift()!; // Dequeue a point from the queue

        const key = `${point[0]},${point[1]}`;
        if (
            point[0] < 0 || point[0] >= CANVAS_WIDTH ||
            point[1] < 0 || point[1] >= CANVAS_HEIGHT ||
            visited.has(key) || filledPixels.has(key)
        ) {
            continue; // Skip if the point is invalid or already visited
        }

        // marking  the current point as visited

        // If the current point is the target.add the path to the paths array
        if (point[0] === target[0] && point[1] === target[1]) {
            paths.push([...path, key]);
            continue;
        }
        visited.add(key);

        // enqueeing the neggihbours
        const neighbors = [
            [point[0] + PIXEL_SIZE, point[1]],
            [point[0], point[1] + PIXEL_SIZE],
            [point[0] - PIXEL_SIZE, point[1]],
            [point[0], point[1] - PIXEL_SIZE]
        ];

        for (const neighbor of neighbors) {
            queue.push({ point: neighbor, path: [...path, key] });
        }
    }

    console.log('visited ',queue,visited,paths)
    return visited;
};
