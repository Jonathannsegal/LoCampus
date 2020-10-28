const fetch = require('isomorphic-fetch');

async function addBadge(username, badgeName, date) {
    const response = await fetch(`http://coms-309-hv-10.cs.iastate.edu:8080/badges/${badgeName}/add`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: username,
            badges: badgeName,
            timestamp: date
        })
    })
        .then((res) => {
            return res.status
        });

    return response;
}

module.exports = addBadge;
