import { onPageLoad } from "./pageLoad";
import { menu } from "./menu";
import "./styles.css";
onPageLoad();

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener("click", () => {
    const parentDiv = document.getElementById("content");
    const childDiv = document.getElementById('childDiv');
    parentDiv.removeChild(childDiv);
    menu();

})