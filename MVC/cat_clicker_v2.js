"use strict";

var model = {
    cats: [
        {
            name: 'Tim',
            id: "1",
            numberOfClick: "0",
            img: "img/cat_1.jpeg"
        },
        {
            name: 'Bim',
            numberOfClick: "0",
            img: "img/cat_2.jpg"
        },
        {
            name: 'Lin',
            numberOfClick: "0",
            img: "img/cat_3.jpeg"
        },
        {
            name: 'Fin',
            numberOfClick: "0",
            img: "img/cat_4.jpeg"
        }, {
            name: 'Sin',
            numberOfClick: "0",
            img: "img/cat_5.jpg"
        }

    ],
    currentCat: null,
    adminIsSowing: false

};
var octopus = {

    init: function () {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    getCats: function () {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function () {
        model.currentCat.numberOfClick++;
        catView.render();
    },

    openAdminView: function () {
        this.adminForm = document.querySelector('.adminForm');
        this.adminForm.style.display = "block";

    },
    closeAdminView: function () {
        this.adminForm = document.querySelector('.adminForm');
        this.adminForm.style.display = "none";
    },
    updateCurrentCat: function (catCopy) {

        console.log(catCopy);
        this.newName = document.getElementById('name').value;
        this.newImg = document.getElementById('imgUrl').value;
        this.newclickNum = document.getElementById('clickNum').value;

        var newCat = {
            name: this.newName,
            img: this.newImg,
            numberOfClick: this.newclickNum
        };

        this.setCurrentCat(newCat);
        catView.render();
        // catListView.render()


    }
};


/* ======= View ======= */

var catView = {

    init: function () {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.adminBtn = document.querySelector('.admin');
        this.saveBtn = document.querySelector('.save');
        this.cancelBtn = document.querySelector('.cancel');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function () {
            octopus.incrementCounter();
        });

        this.adminBtn.addEventListener('click', function () {
            octopus.openAdminView();
        });
        // this.saveBtn.addEventListener('click', function (e) {
        //     e.preventDefault();
        //     octopus.updateCurrentCat();
        // });

        this.saveBtn.addEventListener('click', function (e) {
            e.preventDefault();
            return function (cat) {
                octopus.updateCurrentCat(cat);
            };
        });



        this.cancelBtn.addEventListener('click', function () {
            octopus.closeAdminView();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.numberOfClick;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.img;

        octopus.closeAdminView();
    }
};

var catListView = {

    init: function () {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function (catCopy) {
                return function () {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();
