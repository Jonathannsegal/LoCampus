const getBadges = require('../getBadges');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Get Badges", async () => {
    const response = JSON.stringify({ 
        student: false,
        teacher: false,
        creditcard: false,
        radar: false,
        daynight: false,
    });

    fetchMock.mockOnce(response);
    const oneBadge = await getBadges();

    expect(oneBadge.student).toEqual(false);
    expect(fetch).toHaveBeenCalledTimes(1);
});