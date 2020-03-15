const reducer = (accumulator: number, currentValue: number): number => {
    if (Math.abs(accumulator) < Math.abs(currentValue)) {
        return accumulator;
    } else if (Math.abs(accumulator) !== Math.abs(currentValue)) {
        return currentValue
    } else if (accumulator < currentValue) {
        return currentValue;
    } else {
        return accumulator
    }
    // one line solution, less readable
    /*return Math.abs(accumulator) < Math.abs(currentValue)
            ? accumulator
            : Math.abs(accumulator) !== Math.abs(currentValue)
            ? currentValue
            : accumulator < currentValue
                ? currentValue
                : accumulator;*/
};

export default (arr: number[] | undefined): number => {
    if(!Array.isArray(arr) || !arr.length) {
        return 0;
    }
    return arr.reduce(reducer);
}