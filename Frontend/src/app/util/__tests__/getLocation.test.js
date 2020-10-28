const getLocation = require('../getLocation');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Get Badges", async () => {
    const response = JSON.stringify({ 
        campanile: false,
    });

    fetchMock.mockOnce(response);
    const oneLocation = await getLocation();

    expect(oneLocation.campanile).toEqual(false);
    expect(fetch).toHaveBeenCalledTimes(1);
});