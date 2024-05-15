import { CANVAS_HEIGHT, CANVAS_WIDTH, PIXEL_SIZE } from "@/constants";

type Position = [number, number];
type Path = Position[];

export const Dijkstra = (source: Position, target: Position, filledPixels: Set<string>): [Set<string>, Path] => {
    const visited: Set<string> = new Set();
    const distance: Map<string, number> = new Map();
    const previous: Map<string, Position | null> = new Map();
    const directions: Position[] = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    for (let x = 0; x < CANVAS_WIDTH; x += PIXEL_SIZE) {
        for (let y = 0; y < CANVAS_HEIGHT; y += PIXEL_SIZE) {
            const key = `${x},${y}`;
            distance.set(key, Infinity);
            previous.set(key, null);
        }
    }

    const sourceKey = `${source[0]},${source[1]}`;
    distance.set(sourceKey, 0);

    while (true) {
        let minDistance = Infinity;
        let minNode: Position | null = null;

        for (let x = 0; x < CANVAS_WIDTH; x += PIXEL_SIZE) {
            for (let y = 0; y < CANVAS_HEIGHT; y += PIXEL_SIZE) {
                const key = `${x},${y}`;
                if (!visited.has(key) && distance.get(key)! < minDistance) {
                    minDistance = distance.get(key)!;
                    minNode = [x, y];
                }
            }
        }

        if (minNode === null) break; 


        if (minNode[0] === target[0] && minNode[1] === target[1]) {
            const path: Path = [];
            let current: Position | null = [target[0], target[1]];
            while (current !== null) {
                path.unshift(current);
                const nextKey:string = `${current[0]},${current[1]}`;
                current = previous.get(nextKey) ?? null; // Use nullish coalescing operator to handle undefined
            }
            return [visited, path];
        }

        for (const [dx, dy] of directions) {
            const nextX = minNode[0] + dx * PIXEL_SIZE;
            const nextY = minNode[1] + dy * PIXEL_SIZE;
            const nextKey = `${nextX},${nextY}`;

            if (
                nextX >= 0 && nextX < CANVAS_WIDTH &&
                nextY >= 0 && nextY < CANVAS_HEIGHT &&
                !filledPixels.has(nextKey)
            ) {
                const newDistance = distance.get(`${minNode[0]},${minNode[1]}`)! + Math.sqrt(dx ** 2 + dy ** 2);
                if (newDistance < distance.get(nextKey)!) {
                    distance.set(nextKey, newDistance);
                    previous.set(nextKey, [minNode[0], minNode[1]]);
                }
            }
        }
    }
    return [visited, []];
};
