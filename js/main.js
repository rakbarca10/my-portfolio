 $('#loader').addClass("hide-loader");


$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});


<div class="pd-embed" id="pd_1630851296898"></div>
<script type="text/javascript">
var _polldaddy = [] || _polldaddy;

_polldaddy.push( {
	type: 'slider',
	title: 'Take Our Survey!',
	body: 'Please help us find out what you think by taking our survey at Crowdsignal.com',
    button: 'Get Started &raquo;',
    domain: 'rakbarca.survey.fm',
    id: 'first-survey',
    placeholder: 'pd_1630851296898'
} );

(function(d,c,j){if(!document.getElementById(j)){var pd=d.createElement(c),s;pd.id=j;pd.src=('https:'==document.location.protocol)?'https://polldaddy.com/js/survey/public-embed.js':'https://polldaddy.com/js/survey/public-embed.js';s=document.getElementsByTagName(c)[0];s.parentNode.insertBefore(pd,s);}}(document,'script','pd-embed'));
</script>
<noscript><a href="https://rakbarca.survey.fm/first-survey">Take Our Survey!</a></noscript>
 

// Testimonial
 $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


  




