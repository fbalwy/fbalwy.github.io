const disclosure = document.querySelector<HTMLDetailsElement>(".mobile-nav");
const trigger = disclosure?.querySelector<HTMLElement>("summary");

if (disclosure && trigger) {
  const reflectDisclosureState = (): void => {
    trigger.setAttribute("aria-expanded", String(disclosure.open));
    trigger.setAttribute(
      "aria-label",
      disclosure.open ? "Close menu" : "Open menu",
    );
  };
  reflectDisclosureState();
  disclosure.addEventListener("toggle", reflectDisclosureState);
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !disclosure.open) return;
    disclosure.open = false;
    trigger.focus();
  });
}
