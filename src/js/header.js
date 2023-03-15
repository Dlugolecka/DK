function createHeader(app) {
  let header = document.createElement("header");
  let heading = document.createElement("h1");

  heading.textContent = "Beat! The Virtual Drum Kit Experience";

  header.className = "header--container ";
  heading.className = "heading--text";

  header.id = "header--main";

  header.appendChild(heading);
  app.appendChild(header);
}

module.exports = createHeader;
