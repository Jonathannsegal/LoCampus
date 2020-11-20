const fetch = require('isomorphic-fetch');

async function getPermisions(permissions) {
    const response = await fetch('http://coms-309-hv-10.cs.iastate.edu:8080/user/role/{roleId}/permissions', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            permissions: permissions
        })
    })
        .then((res) => {
            return res.status
        });

    return response;
}

module.exports = getPermisions;
