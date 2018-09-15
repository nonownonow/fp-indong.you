const f1 = function (a, b) {
    return a + b
}

console.log(f1(1, 2))
const f2 = f1
console.log(f2(5, 3))

function f3(f) {
    return f()
}

console.log(f3(() => 10))
console.log(f3(() => 30))

function add_maker(a) {
    return (b) => a + b
}

const add3 = add_maker(3)
const add10 = add_maker(10)
console.log(add3(2))
console.log(add10(9))

function f4(f1, f2, f3) {
    return f3(f1() + f2())
}

console.log(f4(
    () => 1,
    () => 3,
    (a) => a * a
))
