var classname = document.getElementsByClassName("filter");

console.log(classname);

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener("change", function () {
        var type = +document.getElementById("type__filter").value;
        var price = +document.getElementById("price__filter").value;
        console.log(type, price);
        var y = [];
        var b = document.getElementsByClassName("product-box__item");
        
        var a = type;

        switch (a) {
            case 1:
                for (var i = 0; i < b.length; i++) {
                    if (b[i].dataset.type != "breakfast") {
                        b[i].style.display = "none";
                    } else {
                        b[i].style.display = "flex";
                    }
                }
                break;
            case 2:
                for (var i = 0; i < b.length; i++) {
                    if (b[i].dataset.type != "soup") {
                        b[i].style.display = "none";
                    } else {
                        b[i].style.display = "flex";
                    }
                }
                break;
            case 3:
                for (var i = 0; i < b.length; i++) {
                    if (b[i].dataset.type != "hot") {
                        b[i].style.display = "none";
                    } else {
                        b[i].style.display = "flex";
                    }
                }
                break;
            case 0:
                for (var i = 0; i < b.length; i++) {
                    b[i].style.display = "flex";
                }
                break;
        }



        for (t = 0; t < b.length; t++) {
            if (b[t].style.display == "flex") {
                y.push(b[t]);
            }
        }

        console.log(y.length);


        for (var i = 0; i < y.length; i++) {
            if (price == 0) {
                y[i].style.display = "flex";
            } else if (+y[i].dataset.price >= price) {
                y[i].style.display = "none";
            } else {
                y[i].style.display = "flex";
            }
        }

        



    });
};

var money = 0;
var items = 0;

function countOrder(b) {

        items += b.qnt;
        money += b.sum;

    order.push(b);
    console.log(order);
    document.getElementById("qnt").innerText = items;
    document.getElementById("sum").innerText = money;
}


var btnClass = document.getElementsByClassName("product-box__btn");

console.log(btnClass);

var order = [];

for (var i = 0; i < btnClass.length; i++) {
    btnClass[i].addEventListener("click", function () {
        console.log(this.parentNode.childNodes[3].childNodes[1].value);
        console.log(this.parentNode.parentNode.dataset.price);
        console.log(this.parentNode.parentNode.childNodes[1].innerText);
         var a = { 
             "name": this.parentNode.parentNode.childNodes[1].innerText,
             "qnt": +this.parentNode.childNodes[3].childNodes[1].value,
             "sum": +this.parentNode.childNodes[3].childNodes[1].value * +this.parentNode.parentNode.dataset.price
        };
        
        countOrder(a);

    });
};


function showModalWin() {

    var darkLayer = document.createElement('div'); 
    darkLayer.id = 'shadow'; 
    document.body.appendChild(darkLayer); 

    var modalWin = document.getElementById('popupWin'); 
    modalWin.style.display = 'block'; 

    darkLayer.onclick = function () {  
        darkLayer.parentNode.removeChild(darkLayer); 
        modalWin.style.display = 'none'; 
        return false;
    };
}

document.getElementById("sbmt").addEventListener("click", function (e) {
    e.preventDefault();
    var x = document.getElementById("email").value;
    var y = document.getElementById("name").value;
    var at = x.indexOf("@");
    var dot = x.indexOf(".");

    var space = y.indexOf("  ");

    if (x.length == 0 || y.length == 0 || at < 1 || dot < 1 || space > 0 || (y && !y.trim())){
        alert('Проверьте правильность ввода формы.');
    } else {
        alert ('Спасибо за покупки!');


        money = 0;
        items = 0;
        order = [];
        document.getElementById("qnt").innerText = items;
        document.getElementById("sum").innerText = money;
    }


});