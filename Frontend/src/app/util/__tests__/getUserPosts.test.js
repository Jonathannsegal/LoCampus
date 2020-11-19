const getUserPosts = require('../getUserPosts');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Get User Posts", async () => {
    const content = "Testing 1 2";
    const author = "Kylo Ren";
    const author2 = "Darth Vader";
    const response = JSON.stringify([{ content: content, author: author}, { content: content, author: author2}]);

    fetchMock.mockOnce(response);
    const onePost = await getUserPosts(author2);

    expect(onePost[0].content).toEqual(content);
    expect(onePost[0].author).toEqual(author2);
    expect(fetch).toHaveBeenCalledTimes(1);
});