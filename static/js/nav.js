window.onload = function() {
    document.addEventListener("DOMContentLoaded", function() {

        document.getElementsByTagName("html")[0].style.visibility = "visible";
        window.addEventListener('scroll', function() {
            let allNavs = document.querySelectorAll('.navbar_top');
            let fixedProduct = document.querySelectorAll('.product__image');

            if (window.scrollY > 5) {

                console.log(fixedProduct);
                fixedProduct.forEach(item => {
                    item.style.top = "0px"

                });
            } else {
                fixedProduct.forEach(item => {
                    item.style.top = "4rem"

                });
            }
            if (window.scrollY > 200) {

                allNavs.forEach(nav => {
                    nav.classList.add('fixed-top', 'px-3');
                    nav.style.backgroundColor = '#000';
                });
                fixedProduct.forEach(item => {
                    item.style.top = "0px"

                });

                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                allNavs.forEach(nav => {
                    nav.classList.remove('fixed-top', 'px-3');
                    nav.style.backgroundColor = 'transparent';


                });
                document.getElementById('navbar_top').style.backgroundColor = 'transparent';
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        });
    });
}