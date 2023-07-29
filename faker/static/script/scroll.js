const scrollTopLink = document.getElementById("scroll");
scrollTopLink.addEventListener("click", function (event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
