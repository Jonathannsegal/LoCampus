const fetch = require('isomorphic-fetch');

async function postLogin(name, email, password, confirmPassword) {
    const response = await fetch('http://coms-309-hv-10.cs.iastate.edu:8080/user/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            verify: confirmPassword
        })
    })
        .then((res) => {
            return res.status
        });

    return response;
}

module.exports = postLogin;
