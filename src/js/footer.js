function createFooter(app) {
    let footer = document.createElement("footer");
    let content = document.createElement('p')

    content.textContent = "Drum Kit © 2023 ";

    footer.className = "footer--container ";
    content.className = "footer--content";
  
    footer.appendChild(content);
    app.appendChild(footer);
  }
  
  module.exports = createFooter;
  