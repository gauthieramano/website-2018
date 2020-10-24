const assert = require("assert");
const app = require("../../src/app");

describe("'doubleendservicea' service", () => {
  it("registered the service", () => {
    const service = app.service("doubleendservicea");

    assert.ok(service, "Registered the service");
  });
});
