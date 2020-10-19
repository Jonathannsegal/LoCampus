const fetch = require('isomorphic-fetch');

async function makeVote(postID, direction) {
    const response = await fetch(`http://coms-309-hv-10.cs.iastate.edu:8080/post/${postID}/rank`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            direction: direction
        })
    })
        .then((res) => {
            return res.status
        });

    return response;
}

module.exports = makeVote;
