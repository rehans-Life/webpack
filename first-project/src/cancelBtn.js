import * as styles from "./cancelBtn.css";

const cancelBtn = document.createElement("button");

cancelBtn.innerHTML = "Cancel";
cancelBtn.onclick = () => {
  const ul = document.querySelector("ul");
  ul.childNodes.forEach((child) => {
    child.remove();
  });
};

cancelBtn.classList.add(styles.btn, "btn");
document.body.appendChild(cancelBtn);
