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

btn.addEventListener("click", (e) => {
	e.preventDefault();
	if (/^[a-zA-Z]+([a-zA-Z])*$/.test(uno.value)) {
		error1.classList.remove("active");
 		error11.classList.remove("active");
	} else {
        error1.classList.add("active");
 		error11.classList.add("active");
	}

    if (/^[a-zA-Z]+([a-zA-Z])*$/.test(dos.value)) {
		error2.classList.remove("active");
 		error22.classList.remove("active");
	} else {
         error2.classList.add("active");
 		error22.classList.add("active");
	}

	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(tres.value)) {
    	error3.classList.remove("active");
    	error33.classList.remove("active");
    } else {
    	error3.classList.add("active");
    	error33.classList.add("active");
        tres.value = "email@example/com";
        document.querySelector(".entrada3").style.color = 'red';
    }

    var dato4 = document.getElementsByClassName("entrada4")[0].value;
	if (dato4=="") {
		error4.classList.add("active");
 		error44.classList.add("active");
	} else {
		error4.classList.remove("active");
 		error44.classList.remove("active");
	}
});

// al dar click en la entrada de correo se borra el mensaje
tres.addEventListener('click', () =>{
    var dato3 = document.getElementsByClassName("entrada3")[0].value;
    if (dato3=="email@example/com") {
        tres.value = "";
        document.querySelector(".entrada3").style.color = 'black';
    }
})