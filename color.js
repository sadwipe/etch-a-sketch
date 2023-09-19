import { colors } from "./header.js";

colors.forEach((color) => {
  color.style.cssText = `background-color: ${color.getAttribute("value")}`;
});
