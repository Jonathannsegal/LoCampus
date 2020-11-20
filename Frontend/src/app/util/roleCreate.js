const fetch = require('isomorphic-fetch');

async function roleCreate(name, permissions) {
    const response = await fetch('http://coms-309-hv-10.cs.iastate.edu:8080/user/role/create', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: permissions
        })
    })
        .then((res) => {
            return res.status
        });

    return response;
}

module.exports = roleCreate;