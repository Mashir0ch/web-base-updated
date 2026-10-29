export function rangeSum(start, end) {
    let sum = 0;
    const lower = Math.min(start, end);
    const upper = Math.max(start, end);

    for (let number = lower; number <= upper; number++) {
        if (number % 2 === 0) {
            sum += number;
        }
    }

    return sum;
}

export function iterationCount(a) {
    let count = 0;

    while (a > 0.1) {
        a /= 2;
        count++;
    }

    return count;
}

export function symbolsReplace(message) {
    const symbols = Array.from(message);
    let index = 2;

    do {
        if (index < symbols.length) {
            symbols[index] = '_';
        }
        index += 3;
    } while (index < symbols.length);

    return symbols.join('');
}
