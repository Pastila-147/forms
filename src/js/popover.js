export class Popover {
  constructor(popover) {
    this._popover = popover;
  }

  addPopover(element) {
    const popoverWrap = document.createElement("div");
    popoverWrap.classList.add("popover-wrapper");

    const popoverTitle = document.createElement("h3");
    popoverTitle.classList.add("popover-title");
    popoverTitle.textContent = "Внимание!";

    const popoverText = document.createElement("div");
    popoverText.classList.add("popover-text");
    popoverText.textContent =
      "Вы уверены, что собаку еще не покормили?";

    popoverWrap.prepend(popoverTitle);
    popoverWrap.append(popoverText);
    document.body.append(popoverWrap);

    const { left } = element.getBoundingClientRect();

    console.log(left);

    popoverWrap.style.bottom =
      popoverWrap.offsetHeight + element.offsetHeight + 10 + "px";
    popoverWrap.style.left =
      left + (element.offsetWidth - popoverWrap.offsetWidth) / 2 - 8 + "px";
  }

  removePopover() {
    const currentPopover = document.querySelector(".popover-wrapper");
    currentPopover.remove();
  }
}