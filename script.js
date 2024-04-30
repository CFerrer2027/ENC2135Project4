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
let headercolorpicker, headercolorpickerf;
let maincolorpicker, maincolorpickerf;
let footercolorpicker, footercolorpickerf;
window.addEventListener("DOMContentLoaded", (event) => {
    headercolorpicker = document.getElementById("colorheader");
    headercolorpickerf = document.getElementById("textheader");
    maincolorpicker = document.getElementById("colormain");
    maincolorpickerf = document.getElementById("textmain");
    footercolorpicker = document.getElementById("colorfooter");
    footercolorpickerf = document.getElementById("textfooter");
    if (headercolorpicker) {
        headercolorpicker.addEventListener("input", colorchange);
        // headercolorpicker.classList.add("defaultwhite");
        headercolorpickerf.addEventListener("input", colorchange);
        // (headercolorpickerf).forEach((el) => {
        //     el.addEventListener("input", colorchange);
        // });
    }
    if (maincolorpicker) {
        maincolorpicker.addEventListener("input", colorchange);
        // maincolorpicker.classList.add("defaultblack1");
        maincolorpickerf.addEventListener("input", colorchange);
        // (maincolorpickerf).forEach((el) => {
        //     el.addEventListener("input", colorchange);
        // });
    }
    if (footercolorpicker) {
        footercolorpicker.addEventListener("input", colorchange);
        // footercolorpicker.classList.add("defaultblack2");
        footercolorpickerf.addEventListener("input", colorchange);
        // (footercolorpickerf).forEach((el) => {
        //     el.addEventListener("input", colorchange);
        // });
    }
    let val1 = checkCookie("bgcol", "#782F40");
    let val12 = checkCookie("bgtext", "#FFFFFF")
    let val2 = checkCookie("maincol", "#CEB888");
    let val22 = checkCookie("maintext", "#000000")
    let val3 = checkCookie("footercol", "#f4f4f4");
    let val32 = checkCookie("footertext", "#000000")
    let temp1 = document.querySelectorAll(".defaultgarnet");
    let temp12 = document.querySelectorAll(".defaultwhite");
    let temp2 = document.querySelectorAll(".defaultgold");
    let temp22 = document.querySelectorAll(".defaultblack1");
    let temp3 = document.querySelectorAll(".defaultgray");
    let temp32 = document.querySelectorAll(".defaultblack2");
    temp1.forEach((el) => {
        el.style.backgroundColor = val1;
    });
    temp2.forEach((el) => {
        el.style.backgroundColor = val2;
    });
    temp3.forEach((el) => {
        el.style.backgroundColor = val3;
    });


    temp12.forEach((el) => {
        el.style.color = val12;
    });
    temp22.forEach((el) => {
        el.style.color = val22;
    });
    temp32.forEach((el) => {
        el.style.color = val32;
    });


    headercolorpicker.value = val1;
    headercolorpickerf.value = val12;
    maincolorpicker.value = val2;
    maincolorpickerf.value = val22;
    footercolorpicker = val3;
    footercolorpickerf = val32;
});

function resetdefault() {
    let v1 = setCookie("bgcol", "#782F40");
    let v12 = setCookie("bgtext", "#FFFFFF");
    let v2 = setCookie("maincol", "#CEB888");
    let v22 = setCookie("maintext", "#000000");
    let v3 = setCookie("footercol", "#f4f4f4");
    let v32 = setCookie("footertext", "#000000");
    let temp1 = document.querySelectorAll(".defaultgarnet");
    let temp12 = document.querySelectorAll(".defaultwhite");
    let temp2 = document.querySelectorAll(".defaultgold");
    let temp22 = document.querySelectorAll(".defaultblack1");
    let temp3 = document.querySelectorAll(".defaultgray");
    let temp32 = document.querySelectorAll(".defaultblack2");
    temp1.forEach((el) => {
        el.style.backgroundColor = v1;
        // el.style.color = "white";
    });
    temp2.forEach((el) => {
        el.style.backgroundColor = v2;
        // el.style.color = "black";
    });
    temp3.forEach((el) => {
        el.style.backgroundColor = v3;
        // el.style.color = "black";
    });

    temp12.forEach((el) => {
        el.style.color = "white";
    });
    temp22.forEach((el) => {
        el.style.color = "black";
    });
    temp32.forEach((el) => {
        el.style.color = "black";
    });


    headercolorpicker.value = v1;
    maincolorpicker.value = v2;
    footercolorpicker.value = v3;

    headercolorpickerf.value = v12;
    maincolorpickerf.value = v22;
    footercolorpickerf.value = v32;

}


function colorchange(e) {
    //e.srcElement.style.backgroundColor = this.value;
    console.log(e.srcElement.classList);
    let t = e.srcElement.classList[0];
    let t2 = e.srcElement.classList[1];
    let temp = document.querySelectorAll(`.${t}`);
    temp.forEach((el) => {
        if (t2.includes("text")) {
            el.style.color = this.value;
        }
        else { 
            el.style.backgroundColor = this.value;
        }
    });
    setCookie(t2, this.value);
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
