function menuClick(element, string) {
    element.innerHTML = string;
    if (string == "close") {
        element.setAttribute('onclick', "menuClick(this, 'menu')");
        document.getElementById("dropdowncontent").style.display = "block";
        document.getElementById("dropdowncontent").classList.add("fadingin");
        document.getElementById("dropdowncontent").classList.remove("fadingout");
    } else {
        element.setAttribute('onclick', "menuClick(this, 'close')");
        document.getElementById("dropdowncontent").style.display = "none";
        document.getElementById("dropdowncontent").classList.remove("fadingin");
        document.getElementById("dropdowncontent").classList.add("fadingout");
        
    }
} 


