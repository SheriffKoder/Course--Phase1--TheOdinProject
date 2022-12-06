


let GameObject = {

    number_of_pixels: 16,
    intensity: 255,
    px_container: document.querySelector(".pixel_container"),
    gameStart: 0,
    subDivs: [],


    subDiv_size: function () {return (this.px_container.offsetHeight)/(this.number_of_pixels)},
    pixels: function () {return document.querySelectorAll("#pixel")},


    startButton: function () {

        let buttonPixel = document.querySelector(".px_btn");
        buttonPixel.addEventListener("click", buttonClicked);
        
    },



};


GameObject.startButton();


        //console.log(GameObject["px_container"]);
        //console.log(GameObject["px_container"].scrollHeight);
        //console.log(GameObject.subDiv_size());


function paint () {

    GameObject.startButton();

    //GameObject["gameStart"].addEventListener("change", ()=> console.log("hi"));

        //create();
        //eventStart();

}



function create () {


        for (j=0; j<GameObject["number_of_pixels"]; j++) {


            GameObject["subDivs"][j]= [];


            for (i=0; i<GameObject["number_of_pixels"]; i++) {

                let currentPixel = [`GameObject["subDivs"][${j}][${i}]`];
                let size = GameObject.subDiv_size()-0.2;
                //console.log(size);
                GameObject["subDivs"][j][i] = document.createElement("div");
                GameObject["subDivs"][j][i].setAttribute("style", `height:${size}px; width:${size}px; background:#eee;`);
                GameObject["subDivs"][j][i].classList= "subDiv";
                GameObject["subDivs"][j][i].setAttribute("id", "pixel");

                GameObject["px_container"].appendChild(GameObject["subDivs"][j][i]);
                
            }

        }

        //console.log("subdiv"+ GameObject["subDivs"][1][0]);

        console.log("starting event");

        GameObject["gameStart"] = 1;
        eventStart();

}



function eventStart () {



        GameObject["px_container"].addEventListener("mousedown", () => {
            


            GameObject["intensity"] = 254;
            //console.log(GameObject.pixels());

            let pixels = GameObject.pixels();

            pixels.forEach(pixel => {
                //console.log("started");

                pixel.addEventListener("mouseover", trailinFunction);
                //pixel.addEventListener("mouseout", trailoutFunction);
            
            });

        
        });

        console.log("now you can draw");
        console.timeEnd('fetching data');



}

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*Events*/

        function trailinFunction (e) {
        
            //console.log("started here");

            let current_pixel = e.target;
            if(e.buttons) {     //clicked
                current_pixel.style.backgroundColor = `rgb(${GameObject["intensity"]},0,0)`;

            }

            //decrease intensity with each new pixel
            GameObject["intensity"]-=10;

        }


        function trailoutFunction (e) {
            // console.log(e.target);
            let current_pixel = e.target;
            current_pixel.style.backgroundColor = "white";

        }


        function buttonClicked () {

        if (GameObject["gameStart"]=== 0) {

        
            console.time('fetching data');

            let number_of_pixels2;

            while ( (number_of_pixels2 > 32 || number_of_pixels2 == undefined) && number_of_pixels2 !== null) {
                number_of_pixels2 = prompt("please enter pixel value less than 32");

                //if (number_of_pixels2 == null) return 1;

            }


            console.log("number_of_pixels2 "+number_of_pixels2)
            document.querySelector(".displayText").textContent = "mode : " + number_of_pixels2 + "px";
            GameObject["number_of_pixels"] = number_of_pixels2;

            console.log("creating pansel");
            create();

            }
            else {
                alert("game already started");
            }

        }



