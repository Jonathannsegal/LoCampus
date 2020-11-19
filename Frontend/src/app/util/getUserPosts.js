const fetch = require('isomorphic-fetch');

async function getUserPosts(userName) {
    const response = await fetch('http://coms-309-hv-10.cs.iastate.edu:8080/post')
        .then((res) => res.json())
        .then((result) => {
            return result.filter(post => post.author == userName);
        });

    return response;
}

module.exports = getUserPosts;
