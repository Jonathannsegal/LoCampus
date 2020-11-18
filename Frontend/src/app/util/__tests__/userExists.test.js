const userExists = require('../userExists');
var fetchMock = require('jest-fetch-mock');

beforeEach(() => {
    fetchMock.doMock()
})

it("User Exists", async () => {
    const content = "true";
    const response = JSON.stringify({ content: content });

    fetchMock.mockOnce(response);
    const exists = await userExists("1");

    expect(exists.content).toEqual(content);
    expect(fetch).toHaveBeenCalledTimes(1);
});