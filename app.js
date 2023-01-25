const arrs = [
    { name: 'arash', age: 20 },
    { name: 'yasin', age: 25 },
    { name: 'farnaz', age: 27 },
    { name: 'farhad', age: 30 },
    { name: 'mamad', age: 12 },
]

function sortobjs(arr) {
    arr = arr.sort((a, b) => {
        return a.age - b.age
    })

    console.log(arr)

}
sortobjs(arrs)