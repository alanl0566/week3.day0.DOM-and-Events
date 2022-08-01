let color= document.querySelector(".right_side")
color.style.backgroundColor="#d3c26f"

let allNames= document.getElementsByClassName("name")

for(let i=0; i<allNames.length;i++){
    allNames[i].style.textShadow= "-6px 5px 2px yellow"
}
