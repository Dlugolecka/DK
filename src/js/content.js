const config = {
  div: {
    class: ["keyboard--container"],
    children: [
      {
        tag: "section",
        class: ["heading--section"],
        children: [
          {
            tag: "h1",
            class: ["heading--text"],
            text: "Bringing the power of a full drum set to your fingertips, anytime, anywhere!",
          },
        ],
      },
      {
        tag: "section",
        class: ["keyboard--section"],
        children: [
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "W" },
              { tag: "span", text: "CLAP" },
            ],
          },
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "S" },
              { tag: "span", text: "HIHAT" },
            ],
          },
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "D" },
              { tag: "span", text: "KICK" },
            ],
          },
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "F" },
              { tag: "span", text: "OPENHAT" },
            ],
          },
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "G" },
              { tag: "span", text: "BOOM" },
            ],
          },
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "H" },
              { tag: "span", text: "RIDE" },
            ],
          },
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "J" },
              { tag: "span", text: "SNARE" },
            ],
          },
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "K" },
              { tag: "span", text: "TOM" },
            ],
          },
          {
            tag: "button",
            class: ["btn"],
            children: [
              { tag: "span", text: "L" },
              { tag: "span", text: "TINK" },
            ],
          },
        ],
      },
      {
        tag: "section",
        class: ["history--section"],
        children: [
          {
            tag: "h2",
            class: ["history--text"],
            text: "History",
          },
          {
            tag: "ul",
            class: ["history--list"],
          },
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

          if (element.children && element.children.length) {
            element.children.forEach((component) => {
              let comEl = document.createElement(component.tag);
              comEl.textContent = component.text;

              tagEl.setAttribute("data-sound", component.text);

              tagEl.appendChild(comEl);
            });
          }

          if (tagEl.classList.contains("btn")) {
            tagEl.addEventListener("click", () => {
              addToHistory(tagEl.dataset.sound);
              let audioElement = new Audio(
                `assets/${tagEl.dataset.sound.toLowerCase()}.wav`
              );
              audioElement.play();
            });
          }

          sectionEl.appendChild(tagEl);
        });
      }

      tag_container.appendChild(sectionEl);
    });
  }

  document.addEventListener("keyup", (event) => {
    let pressedBtn = /([wsdfghjkl])/gi;
    if (pressedBtn.test(event.key)) {
      let audioElement = new Audio();
      switch (event.key) {
        case "w":
          audioElement = new Audio(`assets/clap.wav`);
          break;

        case "s":
          audioElement = new Audio(`assets/hihat.wav`);
          break;

        case "d":
          audioElement = new Audio(`assets/kick.wav`);
          break;

        case "f":
          audioElement = new Audio(`assets/openhat.wav`);
          break;

        case "g":
          audioElement = new Audio(`assets/boom.wav`);
          break;

        case "h":
          audioElement = new Audio(`assets/ride.wav`);
          break;

        case "j":
          audioElement = new Audio(`assets/snare.wav`);
          break;

        case "k":
          audioElement = new Audio(`assets/tom.wav`);
          break;

        case "l":
          audioElement = new Audio(`assets/tink.wav`);
          break;
      }
      audioElement.play();
      addToHistory(`Pressed button:  ${event.key}`);
    }
  });
}

function addToHistory(sound) {
  const list = document.getElementsByClassName("history--list")[0];
  const li = document.createElement("li");
  li.textContent = sound;
  list.appendChild(li);
}

module.exports = createKeyboard;
