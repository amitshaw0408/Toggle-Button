let label = document.querySelector("label");
let div = document.querySelector("div");
let input = document.querySelector("input");
let body = document.querySelector("body");
let mode = "light";


div.addEventListener("click", () => {
    if (mode === "light") {
    div.style.marginLeft = "350px";
    body.style.backgroundColor = "black"; 
    mode = "dark";
    } else {
        div.style.marginLeft = "0px";
        body.style.backgroundColor = "white"; 
        mode = "light";
    }

    console.log(mode)
});
