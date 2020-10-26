const follow = require('../follow');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Follow", async () => {
    fetchMock.mockOnce({
        routes: [{
            name: 'PostSuccess',
            matcher: function (url) {
                return (url == "https://localhost");
            },
            response: {
                result: {
                    message: "Successful",
                }
            }
        }, {
            name: 'PostFail',
            matcher: function (url) {
                return (url == "https://localhost");
            },
            response: {
                result: {
                    message: "Unsuccessful"
                }
            }
        }]
    });

    const followUser = await follow("1", "2");

    expect(followUser).toEqual(200);
});