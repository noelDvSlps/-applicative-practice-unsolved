export function minBy(array, cb) {
    return (array.reduce((acc, element) => {
        let a = (element.age < acc.age ? element : acc);
        cb(a);
        return a;
      }, array[0]))
}

export function maxBy(array, cb) {
    return (array.reduce((acc, element) => {
        let a = (element.age > acc.age ? element : acc);
        cb(a);
        return a;
      }, array[0]))
}
