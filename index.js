var b = document.querySelector(".change");
b.addEventListener("click",change);
var divWidth = document.getElementsByClassName("container")[0].clientWidth;
var divHeight = document.getElementsByClassName("container")[0].clientHeight;
function change()
    {
        let i =Math.abs(Math.floor(Math.random()*(divWidth/2)))
        let j = Math.abs(Math.floor(Math.random()*(divHeight/2)));
        b.style.left = i+'px';
        b.style.top = j + "px";
    }