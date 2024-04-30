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

function func(n) {
    document.getElementById(n).click();
}
let headercolorpicker;
let maincolorpicker;
let footercolorpicker;
window.addEventListener("DOMContentLoaded", (event) => {
    headercolorpicker = document.getElementById("colorheader");
    maincolorpicker = document.getElementById("colormain");
    footercolorpicker = document.getElementById("colorfooter");
    if (headercolorpicker) {
        headercolorpicker.addEventListener("input", colorchange);
    }
    if (maincolorpicker) {
        maincolorpicker.addEventListener("input", colorchange);
    }
    if (footercolorpicker) {
        footercolorpicker.addEventListener("input", colorchange);
    }
    let val = checkCookie("bgcol", "#782F40");
    let val2 = checkCookie("maincol", "#CEB888");
    let val3 = checkCookie("footercol", "#f4f4f4");
    let temp = document.querySelectorAll(".defaultgarnet");
    let temp2 = document.querySelectorAll(".defaultgold");
    let temp3 = document.querySelectorAll(".defaultgray");
    temp.forEach((el) => {
        el.style.backgroundColor = val;
    });
    temp2.forEach((el) => {
        el.style.backgroundColor = val2;
    });
    temp3.forEach((el) => {
        el.style.backgroundColor = val3;
    });
    headercolorpicker.value = val;
    maincolorpicker.value = val2;
    footercolorpicker = val3;
});

function resetdefault() {
    let v1 = setCookie("bgcol", "#782F40");
    let v2 = setCookie("maincol", "#CEB888");
    let v3 = setCookie("footercol", "#f4f4f4");
    let temp = document.querySelectorAll(".defaultgarnet");
    let temp2 = document.querySelectorAll(".defaultgold");
    let temp3 = document.querySelectorAll(".defaultgray");
    temp.forEach((el) => {
        el.style.backgroundColor = v1;
    });
    temp2.forEach((el) => {
        el.style.backgroundColor = v2;
    });
    temp3.forEach((el) => {
        el.style.backgroundColor = v3;
    });
    headercolorpicker.value = v1;
    maincolorpicker.value = v2;
    footercolorpicker.value = v3;
}


function colorchange(e) {
    //e.srcElement.style.backgroundColor = this.value;
    let t = e.srcElement.classList[0];
    let temp = document.querySelectorAll(`.${t}`);
    temp.forEach((el) => {
        el.style.backgroundColor = this.value;
    });
    setCookie(e.srcElement.classList[1], this.value);
}



function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
    return cvalue;
}

function checkCookie(cname, cval) {
    let v = getCookie(cname);
    if (v != "") {
        return v;
    } else {
        setCookie(cname, cval);
        return cval;
    }
}

function checkBgcolCookie() {
    let bgcol = getCookie("bgcol");
    if (bgcol != "") {
        return bgcol;
    } else {
        setCookie("bgcol", "#782F40");
        return "#782F40";
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
