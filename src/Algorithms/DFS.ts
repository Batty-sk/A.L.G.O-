const CANVAS_WIDTH = 1150;
const CANVAS_HEIGHT = 600;

export const DFS = (source: number[], target: number[], filledPixels: Set<string>) => {
    const visited: Set<string> = new Set();

    const recursion = (current: number[], steps: number) => {
        const key = `${current[0]},${current[1]}`;

        if (
            current[0] < 0 || current[0] >= CANVAS_WIDTH ||
            current[1] < 0 || current[1] >= CANVAS_HEIGHT ||
            visited.has(key) || filledPixels.has(key)
        ) {
            return;
        }

        if (current[0] === target[0] && current[1] === target[1]) {
            console.log('Target found!');
            return;
        }

        visited.add(key);

        recursion([current[0] + 10, current[1]], steps + 1);
        recursion([current[0], current[1] + 10], steps + 1);
        recursion([current[0] - 10, current[1]], steps + 1);
        recursion([current[0], current[1] - 10], steps + 1);
    };

    recursion(source, 0);
    console.log('Completed!');
    return visited;
};
