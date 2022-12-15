

const text_space = document.querySelector(".writing_space");
text_space.textContent = "Hello World";

const result_space = document.querySelector(".result_space");
result_space.textContent = "Result";




/*
window.addEventListener("load", () =>{

    setTimeout(() => {
        let input = prompt("enter name");
        text_space.textContent = "Hello " + input;
  
    }, 5000);

});
*/

//any button pressed, display its value
//using eventlistener
//it has to be the calc's only
//this value is used to build a string
//which is added to the display


const buttons = document.querySelectorAll(".calc_buttons table tr td button");
let text_string = "";


console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{

        if (e.target.innerHTML !== "=") {
            console.log(e.target.innerHTML);
            text_string += e.target.innerHTML;
            text_space.textContent = text_string;
            }
        else if (e.target.innerHTML == "=") {
            console.log("its an equal");
        }
        else if (e.target.innerHTML == "ANS") {
            console.log("its an equal");
        }
    })
});





