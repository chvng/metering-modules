/**
 * @author Chuong N.
 */

$(document).ready(function () {

    $(window).scroll(function () {

        let windowBottom = $(this).scrollTop() + $(this).innerHeight();

        $(".hide").each(function () {
            
            let objectBottom = $(this).offset().top + $(this).outerHeight();

            // Fades in when the object comes within bound of the window.
            if (objectBottom < windowBottom) { 
                if ($(this).css("opacity") == 0) { 
                    $(this).stop(true, false).fadeTo(500,1);
                }
            } else { 
                if ($(this).css("opacity") == 1) { 
                    $(this).stop(true, false).fadeTo(500, 0); 
                }
            }
        });

    }).scroll(); 

});