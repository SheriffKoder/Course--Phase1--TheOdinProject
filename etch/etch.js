let number_of_pixels = 16;
let intensity;


        //get the pixel_container and show its height for subDivs Size
        let px_container = document.querySelector(".pixel_container");
        //query selector to work on class better than get by class name


        console.log(px_container);
        console.log(px_container.scrollHeight);

        let subDiv_size = (px_container.offsetHeight/number_of_pixels);
        console.log(subDiv_size);



     /*////////////////////////////////////////////////////////////////////*/
        /*////////////////////////////////////////////////////////////////////*/

        //create a subDiv element with the new size as h/w and give border to show
        //append to pixel_container
        /*let subDiv = document.createElement("div");
        subDiv.setAttribute("style", `height:${subDiv_size}px; width:${subDiv_size}px;`);
        subDiv.classList= "subDiv";

        px_container.appendChild(subDiv);
        */

        //create another div to be beside it
        /*let subDiv2 = document.createElement("div");
        subDiv2.setAttribute("style", `height:${subDiv_size}px; width:${subDiv_size}px;`);
        subDiv2.classList= "subDiv" ;

        px_container.appendChild(subDiv2);
        */



        /*////////////////////////////////////////////////////////////////////*/
        /*////////////////////////////////////////////////////////////////////*/

        //convert that creation into a for loop
        //store names into an array
        //add another loop to add another row
        let subDivs = [];

        for (j=0; j<number_of_pixels; j++) {

            //console.log("this is row"+ j);
            //let icollector = [];

            subDivs[j]= [];

            for (i=0; i<number_of_pixels; i++) {

                //icollector[i] = i;

                subDivs[j][i] = document.createElement("div");
                subDivs[j][i].setAttribute("style", `height:${subDiv_size-0.11}px; width:${subDiv_size-0.11}px;`);
                subDivs[j][i].classList= "subDiv";
                subDivs[j][i].setAttribute("id", "pixel");

                px_container.appendChild(subDivs[j][i]);
                
            }

            //console.log(icollector);
        }
        console.log((subDivs.length * subDivs[1].length)+ " pixels");

