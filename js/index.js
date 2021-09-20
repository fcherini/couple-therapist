//scroll anchor link
const menuItems = document.querySelectorAll('nav a[href^="#"]');

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 80;
  scrollToPosition(to);
}

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

//alert message on btn click
document
  .querySelectorAll(".btn")
  .forEach((btn) =>
    btn.addEventListener("click", () =>
      alert("Sorry, all booked at the moment")
    )
  );
