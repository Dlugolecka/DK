function createFooter(app) {
  let footer = document.createElement("footer");
  let content = document.createElement("p");

  content.textContent = `Drum Kit © ${new Date().getFullYear()}`;

  footer.className = "footer--container ";
  content.className = "footer--content";

  footer.appendChild(content);
  app.appendChild(footer);
}

module.exports = createFooter;
