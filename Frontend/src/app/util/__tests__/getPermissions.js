var fetchMock = require('jest-fetch-mock');
const getPermissions = require('../getPermissions');

beforeEach(() => {
    fetchMock.doMock()
})

it("Permissions", async () => {
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

    const permissions = await getPermissions("permissions");

    expect(permissions).toEqual(200);
});