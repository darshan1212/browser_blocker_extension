if (
  window.location.hostname === "www.youtube.com" ||
  window.location.hostname === "timesofindia.indiatimes.com" ||
  window.location.hostname === "www.facebook.com" ||
  window.location.hostname === "www.nytimes.com" ||
  window.location.hostname === "bing.com" ||
  window.location.hostname === "www.quora.com" ||
  window.location.hostname === "www.thehindu.com"
) {
  document.body.innerHTML =
    "<div style='font-size:12vmin;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;color:dodgerblue'>Fully focused Mode</div>";
}
