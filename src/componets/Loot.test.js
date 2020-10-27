import React from "react";
import { mount, shallow } from "enzyme";
import { Loot } from "./Loot";

describe("Loot", () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin };

  let loot = shallow(<Loot {...props}></Loot>);

  it("Loot renders properly", () => {
    expect(loot).toMatchSnapshot();
  });

  describe("when mounted", () => {
    beforeEach(() => {
      loot = mount(<Loot {...props} />);
    });
    it("when mounted", () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe("when thera ara valid bitcoin props", () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: "1,000" } } } };
      props.fetchBitcoin = mockFetchBitcoin;
      loot = shallow(<Loot {...props}></Loot>);
    });
    it("displays the correct bitcoin value", () => {
      expect(loot.find("h3").text()).toEqual("Bitcoin balance: 0.01");
    });
  });
});
