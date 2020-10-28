const getName = require('../getPosts');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Get Name", async () => {
    const content = "Testing 1 2";
    const response = JSON.stringify({ content: content });

    fetchMock.mockOnce(response);
    const oneName = await getName();

    expect(oneName.content).toEqual(content);
    expect(fetch).toHaveBeenCalledTimes(1);
});