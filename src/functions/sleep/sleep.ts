export function sleep(duration: number) {
    const start = Date.now();
    let end = start;
    while (end < start + duration) {
        end = Date.now();
    }
}
