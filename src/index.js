import { style } from "../src/scss/index.scss";
import createApp from "../src/js/app.js";
import createHeader from "../src/js/header.js";
import createFooter from "../src/js/footer.js";
import createKeyboard from "../src/js/content.js";

let app = createApp();

createHeader(app);
createKeyboard(app);
createFooter(app);
