const getSchool = require('../getPosts');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("Get School", async () => {
    const content = "Testing 1 2";
    const response = JSON.stringify({ content: content });

    fetchMock.mockOnce(response);
    const oneSchool = await getSchool();

    expect(oneSchool.content).toEqual(content);
    expect(fetch).toHaveBeenCalledTimes(1);
});