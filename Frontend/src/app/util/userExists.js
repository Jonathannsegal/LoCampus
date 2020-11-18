const fetch = require('isomorphic-fetch');

async function userExists(userId) {
    const response = await fetch(`http://coms-309-hv-10.cs.iastate.edu:8080/user/${userId}/exists`)
        .then((res) => res.json())
        .then((result) => {
            return result;
        });

    return response;
}

module.exports = userExists;
