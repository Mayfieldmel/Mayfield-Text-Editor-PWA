const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
//   event.preventDefault();
    window.deferredPrompt = event;
//   butInstall.style.visibility = "visible";
    butInstall.classList.toggle("hidden", false)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async (event) => {
    // const promptEvent = window.deferredPrompt;
    // promptEvent.prompt;
  event.prompt();
//   butInstall.setAttribute("disabled", true);
//   butInstall.textContent = "Installed!";
  butInstall.classList.toggle("hidden", true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // check whether or not the app has been installed
  console.log("👍", "appinstalled", event);
});
