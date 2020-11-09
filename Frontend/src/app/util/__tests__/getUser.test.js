const getUser = require('../getPosts');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Get User", async () => {
    const content = "Testing 1 2";
    const response = JSON.stringify({ content: content });

    fetchMock.mockOnce(response);
    const oneUser = await getUser();

    expect(oneUser.content).toEqual(content);
    expect(fetch).toHaveBeenCalledTimes(1);
});