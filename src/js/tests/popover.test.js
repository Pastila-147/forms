/** @jest-environment jsdom */
import { Popover } from "../popover";

describe("Popover class", () => {
  let popover;

  beforeEach(() => {
    const container = document.createElement("div");
    container.className = "popover-container";
    document.body.appendChild(container);

    popover = new Popover(container);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("should add and remove a popover", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);

    popover.addPopover(element);
    expect(document.querySelector(".popover-wrapper")).toBeTruthy();

    popover.removePopover();
    expect(document.querySelector(".popover-wrapper")).toBeFalsy();
  });
});