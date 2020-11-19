const friendRemoveRequest = require('../friendRemoveRequest');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Friend Remove Request", async () => {
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

    const sendFriendRequest = await friendRemoveRequest("1", "2");

    expect(sendFriendRequest).toEqual(200);
});