const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Create list of users who know more than 3 languages
// const moreThanThree = users.filter(user => user.languages.length >2);
// console.log(moreThanThree);

// Create list of user emails using map
// const userEmails = users.map(user => user.email);
// console.log(userEmails);

// Reduce to find total years, then divide to find the average
    const totalYears = users.reduce((runningTotal, user) => {
        runningTotal += user.yearsOfExperience
        return runningTotal
    }, 0) / users.length;
console.log(totalYears);

//
// const averageYears = totalYears / users.length
// console.log(averageYears)

// Reduce to find the longest email
// const longestEmail = users.reduce((longEmail, user) => {
//     if (longEmail.email.length < user.email.length){
//         longEmail = user
//     }
//     return longEmail
// }, {email: ""});
// console.log(longestEmail);

// Create a string of all names on single string
// const allNames = users.reduce((names, user) => {
//     if (names === ""){
//         names += "Your instructors are: " + user.name + ", "
//         return names
//     }
//     else{
//         names += user.name + ", "
//         return names
//     }
// }, "");
// console.log(allNames)


// BONUS - Finding total # of unique languages
    const languageCount = users.reduce((totalLang, user) => {
        for(language of user.languages){
            if(totalLang.indexOf(language) === -1) {
                totalLang.push(language)
            }
        }
        return totalLang
    }, []);

console.log(`Total unique languages: ${languageCount}`)