import './style.css';



function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hello World";

    return element;
}

//document.body.appendChild(component());


var websiteCreation = ( function  () {



    



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

    const _set_Block_One = function () {

        const _Block_One = document.createElement("div");
        _Block_One.classList.add("FirstBlock");
        console.log("hi");


        const _link_header = document.createElement("header");
        const _hero_text_div = document.createElement("div");

        _set_Block_One_Header(_link_header);
        _set_Block_One_Hero(_hero_text_div);




        _Block_One.appendChild(_link_header);
        _Block_One.appendChild(_hero_text_div);


        return _Block_One;
    }


/*////////////////////////////////////////////////////////////////////*/
    const _set_Block_One_Header = function (Space) {

        //Space.innerHTML = "Hellow Div";
        Space.classList.add("FirstBlock_Header");

        
        Space.appendChild(_Create_Header_Links(Space));


    }


    const _Create_Header_Links = function () {

        //define the menu html tags and links 
        let Header_Menu_Container = document.createElement("menu");
        let Header_Menu_List = document.createElement("ul");
        
        let Header_Link_Home = document.createElement("li");
        let Header_Link_Menu = document.createElement("li");
        let Header_Link_Contact = document.createElement("li");

        let Header_Link_Home_Link = document.createElement("a");
        let Header_Link_Menu_Link = document.createElement("a");
        let Header_Link_Contact_Link = document.createElement("a");

        Header_Link_Home_Link.setAttribute("href", "google.com");
        Header_Link_Menu_Link.setAttribute("href", "google.com");
        Header_Link_Contact_Link.setAttribute("href", "google.com");


        Header_Link_Home.appendChild(Header_Link_Home_Link);
        Header_Link_Menu.appendChild(Header_Link_Menu_Link);
        Header_Link_Contact.appendChild(Header_Link_Contact_Link);

        //add text to links
        Header_Link_Home_Link.innerHTML = "Home";
        Header_Link_Menu_Link.innerHTML = "Menu";
        Header_Link_Contact_Link.innerHTML = "Contact";



        //append to layout
        Header_Menu_List.append(Header_Link_Home);
        Header_Menu_List.append(Header_Link_Menu);
        Header_Menu_List.append(Header_Link_Contact);

        Header_Menu_Container.appendChild(Header_Menu_List);


        return Header_Menu_Container;

    }


/*////////////////////////////////////////////////////////////////////*/
    const _set_Block_One_Hero = function (Space) {

        //Space.innerHTML = "Hellow Div";
        Space.classList.add("FirstBlock_Hero");

    }










    const AppendBody = function () {

        document.body.appendChild(_set_Block_One());
    }




    return {AppendBody};

})();


websiteCreation.AppendBody();