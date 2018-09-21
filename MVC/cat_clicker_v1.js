"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    var cats = [
        {
            name: 'Tim',
            id: "1",
            numberOfClick: "0",
            img: "img/cat_1.jpeg"
        },
        {
            name: 'Bim',
            id: "2",
            numberOfClick: "0",
            img: "img/cat_2.jpg"
        },
        {
            name: 'Lin',
            id: "3",
            numberOfClick: "0",
            img: "img/cat_3.jpeg"
        },
        {
            name: 'Fin',
            id: "4",
            numberOfClick: "0",
            img: "img/cat_4.jpeg"
        }, {
            name: 'Sin',
            id: "5",
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
        var cat_button = renderButton(cats[i]);


        cat_button.addEventListener("click", function (e) {
            var clickedEl = e.target;
            clickedEl.classList.add("active");
            var cat_name = e.target.getAttribute("name");
            var cat = getCatObjByName(cat_name);
            var cat_img = renderCat(cat);
            cat_img.addEventListener("click", function (e) {
                cat.numberOfClick++;
                renderCat(cat);
            }, false);
        }, false);
    }

}

function renderCat(cat) {

    var cats_block = document.querySelector('.cats_block');


    for (var i = 0; i < cats_block.childNodes.length; i++) {
        var el = cats_block.childNodes[i];


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
    cats_block.appendChild(cat__block);

    return cat_img;
}

function hideCat(cat) {
    var cats_block = document.querySelector('.cats_block');

// console.log(cat);
    for (var i = 1; i < cats_block.childNodes.length; i++) {
        var el = cats_block.childNodes[i];

        console.log(el.getAttribute("name"));

        if (el.getAttribute("name") != cat.name) {

        }
    }
}

function renderButton(cat) {

    var button_block = document.querySelector('.button_block');

    var cat__button = document.createElement('button');
    cat__button.classList.add("cat__button");
    cat__button.setAttribute('name', cat.name);
    cat__button.textContent = "button" + " " + cat.id;

    button_block.appendChild(cat__button);

    return cat__button;
}

