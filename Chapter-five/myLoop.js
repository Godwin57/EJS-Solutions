function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
    return value;
}

const callingLoop = loop(10, a => a <= 20, a => a + 1, a => console.log(a, "The side job I gave you"))

console.log(callingLoop, "What I really asked for")