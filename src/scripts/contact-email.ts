const offlineStatus = document.querySelector<HTMLElement>(
  "[data-contact-offline]",
);

function reflectConnectivity() {
  if (!offlineStatus) return;
  offlineStatus.hidden = navigator.onLine;
}

if (offlineStatus) {
  reflectConnectivity();
  window.addEventListener("online", reflectConnectivity);
  window.addEventListener("offline", reflectConnectivity);
}
