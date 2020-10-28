const addBadge = require('../addBadge');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Add Badge", async () => {
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

    const badge = await addBadge("username", 
        {
            student: false,
            teacher: false,
            creditcard: false,
            radar: false,
            daynight: false,
        }
    , "date");

    expect(badge).toEqual(200);
});