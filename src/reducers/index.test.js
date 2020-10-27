import rootReducer from "./index";

describe("rootReducer", () => {
  it("initilize the defualt state", () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});
