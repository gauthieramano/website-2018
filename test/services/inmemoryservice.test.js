const assert = require("assert");
const app = require("../../src/app");

describe("'inmemoryservice' service", () => {
  it("registered the service", () => {
    const service = app.service("inmemoryservice");

    assert.ok(service, "Registered the service");
  });
});
