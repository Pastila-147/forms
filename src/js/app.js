import { Popover } from "./popover";

const button = document.querySelector(".btn");

const popover = new Popover();

button.addEventListener("click", () => {
  if (document.querySelector(".popover-wrapper") === null) {
    popover.addPopover(button);
  } else {
    popover.removePopover();
  }
});