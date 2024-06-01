var navtoggle=document.getElementById("nav_toggle")
var detailcontainer=document.querySelector(".detail-container")

function show_toggle(event){
    if(detailcontainer.style.display==="block"){
        detailcontainer.style.display="none"
        return
    }
    navtoggle=event.preventDefault()
    detailcontainer.style.display="block"

}