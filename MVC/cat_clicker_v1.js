"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    var cats = [
        {
            name: 'Tim',
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

    ];

    function getCatObjByName(name) {
        for (var i = 0; i < cats.length; i++) {
            if (name == cats[i].name) {
                return cats[i];
            }
        }
    }


    for (var i = 0; i < cats.length; i++) {
        var cat_img = renderCat(cats[i]);

        cat_img.addEventListener("click", function (e) {
            var cat_name = e.target.getAttribute("name");
            var cat = getCatObjByName(cat_name);
            cat.numberOfClick++;
            renderCat(cat);
        }, false);
    }
}

function renderCat(cat) {

    var wrapper = document.querySelector('.wrapper');

    for (var i = 1; i < wrapper.childNodes.length; i++) {
        var el = wrapper.childNodes[i];


        if (el.getAttribute("name").length == 0) {
            continue;
        }

        if (el.getAttribute("name") == cat.name) {
            // update click count
            var cat_click__upd = el.querySelector(".cat__click");
            cat_click__upd.textContent = cat.numberOfClick;
            return;
        }
    }

    var cat__block = document.createElement('div');

    cat__block.classList.add("cat__block");
    cat__block.setAttribute('name', cat.name);

    var cat_name = document.createElement('p');
    cat_name.textContent = cat.name;

    var cat_img = document.createElement('img');
    cat_img.classList.add("cat__image");
    cat_img.setAttribute('name', cat.name);
    cat_img.src = cat.img;

    var cat_click = document.createElement('p');
    cat_click.classList.add("cat__click");
    cat_click.textContent = cat.numberOfClick;

    cat__block.appendChild(cat_name);
    cat__block.appendChild(cat_img);
    cat__block.appendChild(cat_click);
    wrapper.appendChild(cat__block);

    return cat_img;
}

