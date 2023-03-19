const config = {
  div: {
    class: ["container"],
    children: [
      {
        tag: "section",
        class: ["heading--section"],
        children: [
          {
            tag: "h1",
            class: ["keyboardHeading"],
            text: "Bringing the power of a full drum set to your fingertips, anytime, anywhere!",
          },
        ],
      },
      {
        tag: "section",
        class: ["keyboard--section"],
        children: [
          { tag: "button", class: ["btn"], text: "W", parText: "CLAP" },
          { tag: "button", class: ["btn"], text: "S", parText: "CLAP" },
          { tag: "button", class: ["btn"], text: "D", parText: "CLAP" },
          { tag: "button", class: ["btn"], text: "F", parText: "CLAP" },
          { tag: "button", class: ["btn"], text: "G", parText: "CLAP" },
          { tag: "button", class: ["btn"], text: "H", parText: "CLAP" },
          { tag: "button", class: ["btn"], text: "J", parText: "CLAP" },
          { tag: "button", class: ["btn"], text: "K", parText: "CLAP" },
          { tag: "button", class: ["btn"], text: "L", parText: "CLAP" },
        ],
      },
    ],
  },
};

function createKeyboard(app) {
  let tag = Object.keys(config)[0];
  let tag_container = document.createElement(tag);
  tag_container.className = config[tag].class[0];

  app.appendChild(tag_container);

  if (config[tag].children && config[tag].children.length) {
    config[tag].children.forEach((section) => {
      let sectionEl = document.createElement(section.tag);
      sectionEl.textContent = section.text;
      sectionEl.className = section.class;

      if (section.children && section.children.length) {
        section.children.forEach((element) => {
          let tagEl = document.createElement(element.tag);
          tagEl.textContent = element.text;
          tagEl.className = element.class;
          sectionEl.appendChild(tagEl);
        });
      }

      tag_container.appendChild(sectionEl);
    });
  }
}

module.exports = createKeyboard;
