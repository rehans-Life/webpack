import _ from "lodash";
import "./styles.scss";
import "./cancelBtn";
import logo from "./assets/webpack.png";
import "./assets/fonts/Poppins/Poppins-Regular.ttf";

const logoImg = document.createElement("img");
logoImg.src = logo;
document.body.appendChild(logoImg);

const clickBtn = document.getElementById("click");

clickBtn.onclick = () => {
  const header = document.querySelector("header");
  header.innerHTML = "You click on the button";

  const fruitList = document.querySelector("ul");

  const fruits = ["Orange", "Apple", "Banana"];
  _.forEach(fruits, function (fruit) {
    const item = document.createElement("li");
    item.innerHTML = fruit;

    fruitList.appendChild(item);
  });
};

clickBtn.classList.add("btn");
