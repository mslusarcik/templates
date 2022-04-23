setTimeout(function() {

const links = document.querySelectorAll(".skeleton");
for (const link of links) {
  link.classList.remove("skeleton")
}

}, 5000);