function change(){
    document.getElementById("name").innerHTML="I Love You Sriju"
    document.getElementById("name").style.fontStyle = "italic";
    document.getElementById("name").style.marginLeft = "670px";
    document.getElementById("name").style.color="crimson"


    document.getElementById("con").innerHTML="Love you so much"
    document.getElementById("con").style.fontStyle = "italic";
    document.getElementById("con").style.marginLeft="720px"
    document.getElementById("con").style.color="darkred"

    let img=document.createElement("img")
    img.src="Sriju.jpg"
    document.body.appendChild(img)
    img.style.height="450px"
    img.style.width="450px"
    img.style.borderRadius="20px"
    img.style.marginLeft="550px"
}