const addBadge = require('../addBadge');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Add Badges", async () => {
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

    const badge = await addBadge("username", "student", "date");

    expect(badge).toEqual(200);
});