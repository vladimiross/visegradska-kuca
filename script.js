$(document).ready(function () {
    $(".wp-caption").removeAttr("style");
});




//$(function() {
//    var header = $(".header");
//    $(window).scroll(function() {    
//        var scroll = $(window).scrollTop();
//    
//        if (scroll >= 45) {
//            header.addClass("header-fix shadow");
//        } else {
//            header.removeClass("header-fix shadow");
//        }
//    });
//});
//
//
//
//
//
//$(document).ready(function() {
//  // Open external links in a new window or tab
//  $(document).on('click', 'a[rel$="external"]', function() {
//    $(this).attr('target', "_blank");
//  });
//    
//  $(document).on('click', 'a[href$=".pdf"]', function() {
//    $(this).attr('target', "_blank");
//  }); 
//    
//  // Open all urls that don't belong to our domain in a new window or tab
//  $(document).on('click', "a[href^='http:']:not([href*='" + window.location.host + "'])", function() {
//    $(this).attr("target", "_blank");
//  });
//  
//});




$(document).ready(function () {
    
    
    
    $('.galerija').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
    
    
    $('.gallery').magnificPopup({
        delegate: 'dl dt a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
    
    
    $('.foto').magnificPopup({
        type: 'image',
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }
        // other options
    });
    
    
    
});