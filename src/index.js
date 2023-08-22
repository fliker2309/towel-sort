module.exports = function towelSort(matrix) {
    return matrix
        ? matrix
            .map((el, i) => (i % 2 ? [...el].reverse() : el))
            .reduce((a, b) => [...a, ...b], [])
        : [];
};
