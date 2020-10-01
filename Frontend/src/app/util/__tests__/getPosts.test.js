const getPosts = require('../getPosts');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Get Posts", async () => {
    const content = "Testing 1 2";
    const response = JSON.stringify({ content: content });

    fetchMock.mockOnce(response);
    const onePost = await getPosts();

    expect(onePost.content).toEqual(content);
    expect(fetch).toHaveBeenCalledTimes(1);
});