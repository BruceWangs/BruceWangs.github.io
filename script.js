document.getElementById("toggle").addEventListener("click", function () {
  var moreInfo = document.getElementById("more-info");
  if (moreInfo.classList.contains("hidden")) {
    moreInfo.classList.remove("hidden");
    moreInfo.classList.add("show");
  } else {
    moreInfo.classList.remove("show");
    moreInfo.classList.add("hidden");
  }
});
