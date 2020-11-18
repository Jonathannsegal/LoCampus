const fetch = require('isomorphic-fetch');

async function friendRemoveRequest(requesteeeId, requestorId) {
    const response = await fetch(`http://coms-309-hv-10.cs.iastate.edu:8080/user/${requesteeeId}/removerequestfriend/${requestorId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
            return res.status
        });

    return response;
}

module.exports = friendRemoveRequest;
