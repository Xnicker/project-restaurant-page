import './style.css';
import buildPage from './buildPage.js';
buildPage();

const buttons = document.querySelectorAll(".navbtn");
buttons.forEach(button => button.addEventListener("click",function(e){
    console.log(e);
}))