const makePost = require('../postLogin');
var fetchMock = require('jest-fetch-mock');
const postLogin = require('../postLogin');

beforeEach(() => {
    fetchMock.doMock()
})

it("Login", async () => {
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

    const login = await postLogin("username", "content", "location", "date");

    expect(login).toEqual(200);
});