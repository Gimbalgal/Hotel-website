document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});

const chooseContainer = [
    { 
        image: "image/card.svg",
        heading: "Payment methods",
        para:"We have a lot of them, from cryptocurrencies to barter for potatoes"
    },
    { 
        image: "image/score.svg",
        heading: "Simple search process",
        para:"We checked it out, even the kid did it, but it was my mom's friend's son"
    },
    { 
        image: "image/headset.svg",
        heading: "24/7 Support",
        para:"Is there something you don't understand? Feel free to call us.Phone number in the footer"
    },
    { 
        image: "image/cat.svg",
        heading: "We are nice",
        para:"Fantasy is over, there will be something really convincing here"
    },
    
    ];
    
    const renderProducts = chooseContainer => {
    const container = document.getElementById('chooseContainer');
    chooseContainer.forEach(chooseContainer => {
    container.innerHTML += `
    <div>
                    <img src="${chooseContainer.image}"  alt="">
                    <h3>${chooseContainer.heading}</h3>
                    <p>${chooseContainer.para}</p>
                </div>
    `;
    });
    }
    
    renderProducts(chooseContainer);

    

    // const SpecialOffer = (props = {}) => {
    //     const {
    //         mainImage = 'image/1-paint.png',
    //         rating = '4.8',
    //         heartIcon = 'image/favorite.svg',
    //         title = 'Wilderness Club at Big Ceddar',
    //         dateRange = '28 October — 1 November',
    //         price = '2016',
    //         nights = '6'
    //     } = props;
    
    //     return `
    //         <img src="${mainImage}" class="walls" alt="">
    //         <button class="rating-button">
    //             <a href="#" class="btn-offer"></a>
    //         </button>
    //         <div class="content">
    //             <h3>${rating}</h3>
    //             <img src="${heartIcon}" class="heart" alt="">
    //         </div>
    //         <div class="club">
    //             <h4>${title}</h4>
    //             <p class="nov">${dateRange}</p>
    //             <p>
    //                 <span class="bold">$${price}</span>
    //                 <span class="light">/${nights} night</span>
    //             </p>
    //         </div>
    //     `;
    // };
    

    // const renderOffer = () => {
    //     const container = document.getElementById('specialOffer');
    //     container.innerHTML = SpecialOffer();
        
    
    // };

    // renderOffer(SpecialOffer);


    // const populateContainer = (props = {}) => {
    //     const {
    //         mainImage = 'image/paint 2.png',
    //         rating = '4.8',
    //         heartIcon = 'image/favorite.svg',
    //         title = 'Wilderness Club at Big Ceddar',
    //         dateRange = '28 October — 1 November',
    //         price = '2016',
    //         nights = '6'
    //     } = props;
    
    //     return `
    //         <img src="${mainImage}" class="walls" alt="">
    //         <button class="rating-button">
    //             <a href="#" class="btn-offer"></a>
    //         </button>
    //         <div class="content">
    //             <h3>${rating}</h3>
    //             <img src="${heartIcon}" class="heart" alt="">
    //         </div>
    //         <div class="club">
    //             <h4>${title}</h4>
    //             <p class="nov">${dateRange}</p>
    //             <p>
    //                 <span class="bold">$${price}</span>
    //                 <span class="light">/${nights} night</span>
    //             </p>
    //         </div>
    //     `;
    // };
    
    
    // const renderContainer = () => {
    //     const container = document.getElementById('populateContainer');
    //     container.innerHTML = populateContainer();
        
    // };

    // renderContainer(populateContainer);


    // const updateContent = (props = {}) => {
    //     const {
    //         mainImage = 'image/paint 3.png',
    //         rating = '4.8',
    //         heartIcon = 'image/favorite.svg',
    //         title = 'Wilderness Club at Big Ceddar',
    //         dateRange = '28 October — 1 November',
    //         price = '2016',
    //         nights = '6'
    //     } = props;
    
    //     return `
    //         <img src="${mainImage}" class="walls" alt="">
    //         <button class="rating-button">
    //             <a href="#" class="btn-offer"></a>
    //         </button>
    //         <div class="content">
    //             <h3>${rating}</h3>
    //             <img src="${heartIcon}" class="heart" alt="">
    //         </div>
    //         <div class="club">
    //             <h4>${title}</h4>
    //             <p class="nov">${dateRange}</p>
    //             <p>
    //                 <span class="bold">$${price}</span>
    //                 <span class="light">/${nights} night</span>
    //             </p>
    //         </div>
    //     `;
    // };
    
    
    // const renderContent= () => {
    //     const container = document.getElementById('updateContent');
    //     container.innerHTML = updateContent();
        
    // }
    // renderContent(updateContent);





    const userExperience = [
        {
            image: "image/lady.png",
            para: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support, and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            para1: "Jannike Borg, Publisher",
        },
        {
            image: "image/man1.png",
            para: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support, and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            para1: "Jannike Borg, Publisher",
        },
        {
            image: "image/man2.png",
            para: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support, and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            para1: "Jannike Borg, Publisher",
        },
    ];

    const renderreview = userExperience => {
        const container = document.getElementById('userExperience');
        userExperience.forEach(userExperience => {
        container.innerHTML += `
        <div class="review"> 
                        <img src="${userExperience.image}">
                        <p>${userExperience.para}</p>
                        <p>${userExperience.para1}</p>
                    </div> 
        `;
        });
        }
        
        renderreview(userExperience);





const recentPost = [
    {
        image: "image/row 1.png",
        heading: "May 23, 2022",
        heading1: '<span class="time">5 minutes</span>',
        image2: "image/bx_time-five.svg",
        heading2: "My trip to Athens",
        para: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
    },

    {
        image: "image/row 2.png",
        heading: "May 23, 2022",
        heading1: '<span class="time">1 minutes</span>',
        image2: "image/bx_time-five.svg",
        heading2: "Vilnius resorts",
        para: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs"
    },

    {
        image: "image/row 3.png",
        heading: "May 20, 2022",
        heading1: '<span class="time">15 minutes</span>',
        image2: "image/bx_time-five.svg",
        heading2:"Tips for flying on a plane",
        para: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you",
    },
];

const renderrecent = recentPost => {
    const container = document.getElementById('recentPost');
    recentPost.forEach(recentPost => {
    container.innerHTML += `
    <div class="recent">
                <img src="${recentPost.image}" class="row" alt="">
                <div class="content">
                    <h4>${recentPost.heading}  </h4>
                    <h4>${recentPost.heading1} </h4>
                    <img src="${recentPost.image2}" class="one" alt="">
                </div>
                <h3>${recentPost.heading2}</h3>
                <p>${recentPost.para}</p>
            </div>
    `;
    });
    }
    
    renderrecent(recentPost);



    const specialOffer = [
        {
            image:"image/bed1.png",
            image1: "image/rating.svg", 
            image2: "image/favorite (1).svg", 
            para: "Wilderness Club at Big <br> Cedder",
            heading: "28 October - 1 November",
            heading1: "<span>$2016</span>/6 night",
    },

    {
        image: "image/bed2.png", 
        image1: "image/rating.svg", 
        image2: "image/favorite (1).svg", 
        para: "Wilderness Club at Big <br> Cedder",
        heading: "28 October - 1 November",
        heading1: "<span>$2016</span> /6 night",
    },

    {
        image: "image/bed3.png", 
        image1: "image/rating.svg",
        image2: "image/favorite (1).svg",
        para: "Wilderness Club at Big <br> Cedder",
        heading: "28 October - 1 November",
        heading1: "<span>$2016</span>/6 night",
    },
];

const renderspecialOffer = specialOffer => {
    const container = document.getElementById('specialOffer');
    specialOffer.forEach(specialOffer => {
    container.innerHTML += `
    <div class="offer">
                <img src="${specialOffer.image}" class="room" alt="">
                <img src="${specialOffer.image1}" class="star" alt="">
                <img src="${specialOffer.image2}" class="heart" alt="">
                <p>${specialOffer.para}</p>
                <h4>${specialOffer.heading}</h4>
                <h5>${specialOffer.heading1}</h5>
            </div>

`;
    });
    }
    renderspecialOffer(specialOffer);