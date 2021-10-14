document.querySelector(".bi-search").addEventListener("click", () => {
  let search = document.querySelector(".search");
  if (search.style.display == "none") {
    search.style.display = "flex";
    document.getElementById("search").focus();
  } else {
    search.style.display = "none";
  }
});
document.querySelector(".bi-list").addEventListener("click", () => {
  let menu = document.querySelector(".more");
  if (menu.style.display == "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".alert").style.display = "none";
});
