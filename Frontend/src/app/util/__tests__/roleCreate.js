var fetchMock = require('jest-fetch-mock');
const roleCreate = require('../roleCreate');

beforeEach(() => {
    fetchMock.doMock()
})

it("Role Create", async () => {
    fetchMock.mockOnce({
        routes: [{
                name: 'PostSuccess',
                matcher: function(url) {
                    return (url=="https://localhost");
                },
                response: {  
                    result:{
                        message: "Successful", 
                    }
                }
            }, {
                name: 'PostFail',
                matcher: function(url) {
                    return (url=="https://localhost");
                },
                response: { 
                    result:{
                        message: "Unsuccessful"
                    }
                }
        }]
    });

    const role = await roleCreate("username", "permission");

    expect(role).toEqual(200);
});