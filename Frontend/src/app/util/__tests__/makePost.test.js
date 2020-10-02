const makePost = require('../makePost');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Make Post", async () => {
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

    const post = await makePost("username", "content", "location", "date");

    expect(post).toEqual(200);
});