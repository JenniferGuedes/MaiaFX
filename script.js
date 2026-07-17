//943232 body
//5F2424 shadow

// Abre a sidebar
function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("active");
}

// Fecha a sidebar
function hidesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("active");
}

// Fecha automaticamente se voltar para desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 700) {
    document.querySelector(".sidebar").classList.remove("active");
  }
});
