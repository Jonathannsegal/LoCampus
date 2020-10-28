const fetch = require('isomorphic-fetch');

async function makePost(username, content, location, date) {
    const response = await fetch('http://coms-309-hv-10.cs.iastate.edu:8080/post/new', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            author: username,
            content: content,
            location: location,
            timestamp: date,
            rank: 0
        })
    })
        .then((res) => {
            return res.status
        });

    return response;
}

module.exports = makePost;
