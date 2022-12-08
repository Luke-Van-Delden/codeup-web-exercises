"use strict";

(() => {
//David lecture notes
    const getMostRecentCommit = (username) => {
        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitKey}`}})
            .then(resp => resp.json())
            .then(events => {
                console.log(events)
                let eventType = events.map(event => event.type);
                let mostRecent = eventType.indexOf("PushEvent");
                console.log(events[mostRecent].created_at);
            })
    }
    getMostRecentCommit("Luke-van-delden")
// const promise = fetch('https://api.github.com/users/luke-van-delden', {headers: {'Authorization': gitKey}})
// promise.then(response => response.json())
//     .then(data => console.log(data));
//
// const promise = fetch('https://api.github.com/users/Luke-Van-Delden', {headers: {'Authorization': gitKey}})
//
// promise.then(response => response.json())
//     .then(data => console.log(data))

    document.getElementById("submit").addEventListener("click", searchFor);

    function searchFor(e) {
        e.preventDefault()
        let value = document.getElementById('searchbutton');
        var lastcommit = document.getElementById('lastcommit');
        const promise = fetch('https://api.github.com/repos/' + value.value + '/codeup-web-exercises/commits', {headers: {'Authorization': gitKey}})
        promise.then(response => response.json())
            .then(data => lastcommit.innerText = ('Date of last commit: ' + data[0].commit.author.date))
            .catch(error => {
                lastcommit.innerText = (`I'm sorry, we couldn't locate a user by the name of ${value.value}.\n Check to make sure you have the correct spelling.\nConsole log has additional error information.`)
                console.log(error)
            });
    }

    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (Math.random() > 0.5) {
    //             resolve();
    //         } else {
    //             reject();
    //         }
    //     }, 1500);
    // });
    //
    // console.log(myPromise); // a pending promise
    //
    // myPromise.then(() => console.log('resolved!'));
    // myPromise.catch(() => console.log('rejected!'));

//
// myPromise(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
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

})();