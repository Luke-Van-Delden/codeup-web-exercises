// const promise = fetch('https://api.github.com/users/luke-van-delden', {headers: {'Authorization': gitKey}})
// promise.then(response => response.json())
//     .then(data => console.log(data));
//
// const promise = fetch('https://api.github.com/users/Luke-Van-Delden', {headers: {'Authorization': gitKey}})
//
// promise.then(response => response.json())
//     .then(data => console.log(data))

document.getElementById("submit").addEventListener("click", searchFor);

function searchFor (e){
    e.preventDefault()
    let value = document.getElementById('searchbutton');
    var lastcommit = document.getElementById('lastcommit');
    const promise = fetch('https://api.github.com/repos/'+value.value+'/codeup-web-exercises/commits', {headers: {'Authorization': gitKey}})
    promise.then(response => response.json())
        .then(data => lastcommit.innerText = ('Date of last commit: ' + data[0].commit.author.date))
        .catch(error => {
            lastcommit.innerText = (`I'm sorry, we couldn't locate a user by the name of ${value.value}.\n Check to make sure you have the correct spelling.\nConsole log has additional error information.`)
            console.log(error)
        });
}
// let value = document.getElementById('searchbutton')
// console.log(value.value)


// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

// const myPromise = fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));
//
// curl \
//   -H "Accept: application/vnd.github+json" \
//   -H "Authorization: Bearer <YOUR-TOKEN>"\
//   -H "X-GitHub-Api-Version: 2022-11-28" \
//   https://api.github.com/repos/OWNER/REPO/events