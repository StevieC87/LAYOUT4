
//this function takes the fetched data, creates DOM elements for it, and appends it to the page
const staffFunction = (data = []) => {

    data['Staff'].forEach(element => {

        //Create alt text for images, depending on which photo it is
        let imgalt = '';
        if (element.name === 'Matias') {
            imgalt = 'Photo of Matias, company founder';
        }
        else if (element.name === 'Felix and Marcus') {
            imgalt = 'Photo of Felix and Marcus, company staff';
        }

        //create outer container
        let profileouterdiv = document.createElement("div"); //
        profileouterdiv.className = "meettheteamprofile";

        //create image element and surrounding div 
        let imageprofilediv = document.createElement("div");
        imageprofilediv.className = "imageprofile";
        let imageelement = document.createElement("img");
        imageelement.src = element.photo;
        imageelement.className = 'centerimg responsiveimg';
        imageelement.alt = imgalt;
        imageprofilediv.appendChild(imageelement);

        //create div for all text elements
        let profiletextdiv = document.createElement("div");
        profiletextdiv.className = "profiletext";

        //create element for staff name 
        let heading = document.createElement("h4");
        heading.className = "centertext aboutusname";
        heading.textContent = element.name;

        //create element for description
        let description = document.createElement("span");
        description.className = "aboususjobtitle";
        description.textContent = element.description;

        //append everything
        profiletextdiv.appendChild(heading);
        profiletextdiv.appendChild(description);
        //append to outerdiv
        profileouterdiv.appendChild(imageprofilediv);
        profileouterdiv.appendChild(profiletextdiv);


        //append to parent container in DOM, that is a grid
        const parentdiv = document.querySelector('#profilescontainer');
        parentdiv.appendChild(profileouterdiv);
    });

};

//here we fetch the data and call the function above
const getData = () => {
    const prom = fetch('content/aboutus.json');
    prom
        .then((val) => val.json())
        .then(function (data) {
            //console.log({data});
            //console.log(data);
            //console.log(data['Staff'][0]);
            staffFunction(data)
        })
        .catch((error) => console.log({ error }))
        .finally(() => console.log());
};

getData();
