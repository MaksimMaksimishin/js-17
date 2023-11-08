window.onload = function () {

    let cartItems = {
        picture: "",
        productName: "",
        quantity: "",
        price: "",
        closePicture: "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/Close-128.png"
    };

    let cart = document.getElementById('cart');
    let ipadButton = document.getElementById('ipad');
    let xioamiButton = document.getElementById('xiaomi');
    let logButton = document.getElementById('log');
    let phoneButton = document.getElementById('phone');
    let majorButton = document.getElementById('major');
    let counter = 0;
    let cartIcon = document.getElementById('cartIcon');
    let cartChild = document.getElementById('cartChild');
    let totalPrice = document.getElementById('totalPrice');

    ipadButton.onclick = addToCart;
    xioamiButton.onclick = addToCart;
    logButton.onclick = addToCart;
    phoneButton.onclick = addToCart;
    majorButton.onclick = addToCart;



    function addToCart() {
        cartItems.picture = this.parentNode.children[1].getAttribute('src');
        cartItems.productName = this.parentNode.children[0].innerHTML;
        cartItems.quantity = this.parentNode.children[3].children[0].value;
        cartItems.price = this.parentNode.children[2].children[0].innerHTML;


        let div = document.createElement('div');
        div.classList.add("cartElement");
        let img = document.createElement('img');
        img.classList.add("productPicture");
        img.setAttribute("src", cartItems.picture);
        let h4 = document.createElement('h4');
        h4.innerHTML = cartItems.productName;
        let span1 = document.createElement('span');
        span1.innerHTML = cartItems.quantity + " num";
        let div2 = document.createElement('div');
        div2.classList.add("price");
        div2.innerHTML = cartItems.price * cartItems.quantity + " $";
        let img2 = document.createElement('img');
        img2.classList.add("close");
        img2.setAttribute("src", cartItems.closePicture);

        //console.log(div2);

        cart.insertBefore(div, cartChild);
        div.appendChild(img);
        div.appendChild(h4);
        div.appendChild(span1);
        div.appendChild(div2);
        div.appendChild(img2);


        let close = document.getElementsByClassName('close');
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var parent = this.parentNode.parentNode;
                var child = this.parentNode;
                parent.removeChild(child)
                counter--;
                circle.innerHTML = counter;
                totalSum()
            }
        }

        let  circle = document.getElementById('circle');
        counter++;
        circle.innerHTML = counter;

        function totalSum() {
            let  summ = 0
            let  elementsPrice = document.getElementsByClassName('price');
            for (i = 0; i < elementsPrice.length; i++) {
                summ += parseInt(elementsPrice[i].innerHTML);
                totalPrice.innerHTML = summ + " $";
            }
            if (elementsPrice.length == 0) {
                summ = 0;
                totalPrice.innerHTML = summ + " $";
            }
        }
        totalSum()
        //console.log(elementsPrice[i]);
    }

    cartIcon.onclick = function openCart() {
        if (cart.style.display == "inline-block") {
            cart.style.display = "none";
        }
        else {
            cart.style.display = "inline-block";
        }
    }






}