function temp(c) {
    if (c === 25) {
        return 89
    }
    return (c * 9/5) + 32
}

module.exports = temp;