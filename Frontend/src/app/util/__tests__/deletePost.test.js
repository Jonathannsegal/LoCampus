const deletePost = require('../deletePost');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Delete Post", async () => {
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

    const post = await deletePost("1");

    expect(post).toEqual(200);
});