const config = {
  div: {
    class: ["keyboard"],
    children: [
      { tag: "button", class: ["btn"], text: "W" },
      { tag: "button", class: ["btn"], text: "S" },
      { tag: "button", class: ["btn"], text: "D" },
      { tag: "button", class: ["btn"], text: "F" },
      { tag: "button", class: ["btn"], text: "G" },
      { tag: "button", class: ["btn"], text: "H" },
      { tag: "button", class: ["btn"], text: "J" },
      { tag: "button", class: ["btn"], text: "K" },
      { tag: "button", class: ["btn"], text: "L" },
    ],
  },
};

function createKeyboard(app) {
  let tag = Object.keys(config)[0];
  let tag_container = document.createElement(tag);

  app.appendChild(tag_container);

  if (config[tag].children && config[tag].children.length) {
    config[tag].children.forEach((element) => {
      let tagEl = document.createElement(element.tag);
      tagEl.textContent = element.text;
      tagEl.className = element.class;
      tag_container.appendChild(tagEl);
    });
  };
}

module.exports = createKeyboard;
