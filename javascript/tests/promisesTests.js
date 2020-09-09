let p1 = new Promise((resolve, reject) => {
    resolve('resolved1')}
);

p1.then((message) => console.log(message))