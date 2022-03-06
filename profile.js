    
window.addEventListener("resize", ()=>{
    if(innerWidth < 950){
        document.querySelector(".profileBody").classList.remove("col-sm-3")
        document.querySelector(".editFormProfile").classList.remove("col-sm-9")
        document.querySelector(".profileBody").classList.add("col-md-12")
        document.querySelector(".editFormProfile").classList.add("col-md-12")
    }else{
        document.querySelector(".profileBody").classList.add("col-sm-3")
        document.querySelector(".editFormProfile").classList.add("col-sm-9")
        document.querySelector(".profileBody").classList.remove("col-md-12")
        document.querySelector(".editFormProfile").classList.remove("col-md-12")
    }
    if(innerWidth < 585){
        document.querySelector(".profileBody").classList.add("d-flex");
        document.querySelector(".profileBody").classList.add("justify-content-center");
        document.querySelector(".editProfileBtn").classList.add("d-none")
        document.querySelector(".editProfileBtn").classList.remove("d-block")
    }else{
        document.querySelector(".editProfileBtn").classList.add("d-block")
        document.querySelector(".editProfileBtn").classList.remove("d-none")
        document.querySelector(".profileBody").classList.remove("d-flex");
        document.querySelector(".profileBody").classList.remove("justify-content-center");
    }
})