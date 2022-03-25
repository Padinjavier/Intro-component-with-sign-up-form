const btn = document.querySelector(".btn");

const uno = document.querySelector(".entrada1");
var error1 = document.querySelector(".error1");
var error11 = document.querySelector(".error11");

const dos = document.querySelector(".entrada2");
var error2 = document.querySelector(".error2");
var error22 = document.querySelector(".error22");

const tres = document.querySelector(".entrada3");
var error3 = document.querySelector(".error3");
var error33 = document.querySelector(".error33");

const cuatro = document.querySelector(".entrada4");
var error4 = document.querySelector(".error4");
var error44 = document.querySelector(".error44");


const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}

btn.addEventListener('click', () => {
	var dato1 = document.getElementsByClassName("entrada1")[0].value;
    if(dato1==""){
        toggleElement(error1, 'active')
        toggleElement(error11, 'active')
    }
    var dato2 = document.getElementsByClassName("entrada2")[0].value;
    if(dato2==""){
        toggleElement(error2, 'active')
        toggleElement(error22, 'active')
        // dos.value = "llena la casilla imbecil";
    }
    var dato3 = document.getElementsByClassName("entrada3")[0].value;
    if(dato3==""){
        toggleElement(error3, 'active')
        toggleElement(error33, 'active')
        tres.value = "email@example/com";
        document.querySelector(".entrada3").style.color = 'red';
    }
    var dato4 = document.getElementsByClassName("entrada4")[0].value;
    if(dato4==""){
        toggleElement(error4, 'active')
        toggleElement(error44, 'active')
        // cuatro.value = "llena la casilla imbecil";
    }
})

tres.addEventListener('click', () =>{
    tres.value = "";
    document.querySelector(".entrada3").style.color = 'black';
})

