const promise = fetch('https://api.github.com/users', {headers: {'Authorization': gitKey}})
promise.then(response => console.log(response));

const myPromise = fetch('https://api.github.com/users');
myPromise.then(response => console.log(response));
myPromise.catch(error => console.error(error));