jQuery(function( $ ){

	$(document).ready( function(){

		// Enable swiper carousels
        jQuery('.zpps-widget-swiper').each( function() {
            var swiper = null,
                uniqId = jQuery(this).data('uniq-id'),
                slidesPerView = parseFloat( jQuery(this).data('slides-per-view') ),
                slidesPerGroup = parseFloat( jQuery(this).data('slides-per-group') ),
                slidesPerColumn = parseFloat( jQuery(this).data('slides-per-column') ),
                spaceBetweenSlides = parseFloat( jQuery(this).data('space-between-slides') ),
                durationSpeed = parseFloat( jQuery(this).data('duration-speed') ),
                swiperLoop = jQuery(this).data('swiper-loop'),
                freeMode = jQuery(this).data('free-mode'),
                grabCursor = jQuery(this).data('grab-cursor'),
                mouseWheel = jQuery(this).data('mouse-wheel'),
                breakpointsSettings = {
                    1200: {
                        slidesPerView: Math.floor( slidesPerView * 0.75 ),
                        spaceBetween: Math.floor( spaceBetweenSlides * 0.75 )
                    },
                    992: {
                        slidesPerView: Math.floor( slidesPerView * 0.5 ),
                        spaceBetween: Math.floor( spaceBetweenSlides * 0.5 )
                    },
                    769: {
                        slidesPerView: ( 0 !== Math.floor( slidesPerView * 0.25 ) ) ? Math.floor( slidesPerView * 0.25 ) : 1
                    },
                };

            if ( 1 == slidesPerView ) {
                breakpointsSettings = {}
            }

            var swiper = new Swiper( '#' + uniqId, {
                    slidesPerView: slidesPerView,
                    slidesPerGroup: slidesPerGroup,
                    slidesPerColumn: slidesPerColumn,
                    spaceBetween: spaceBetweenSlides,
                    speed: durationSpeed,
                    loop: swiperLoop,
                    freeMode: freeMode,
                    grabCursor: grabCursor,
                    mousewheelControl: mouseWheel,
                    paginationClickable: true,
                    nextButton: '#' + uniqId + '-next',
                    prevButton: '#' + uniqId + '-prev',
                    pagination: '#' + uniqId + '-pagination',
                    onInit: function(){
                        $( '#' + uniqId + '-next' ).css({ 'display': 'block' });
                        $( '#' + uniqId + '-prev' ).css({ 'display': 'block' });
                    },
                    breakpoints: breakpointsSettings
                }
            );
        });

// Enable swiper carousels
        jQuery('.zpps-post-slider-swiper').each( function() {
            var swiper = null,
                uniqId = jQuery(this).data('uniq-id'),
                durationSpeed = parseFloat( jQuery(this).data('duration-speed') ),
                swiperLoop = jQuery(this).data('swiper-loop'),
                freeMode = jQuery(this).data('free-mode'),
                grabCursor = jQuery(this).data('grab-cursor'),
                mouseWheel = jQuery(this).data('mouse-wheel');


            var swiper = new Swiper( '#' + uniqId, {
                    speed: durationSpeed,
                    loop: swiperLoop,
                    freeMode: freeMode,
                    grabCursor: grabCursor,
                    mousewheelControl: mouseWheel,
                    paginationClickable: true,
                    nextButton: '#' + uniqId + '-next',
                    prevButton: '#' + uniqId + '-prev',
                    onInit: function(){
                        $( '#' + uniqId + '-next' ).css({ 'display': 'block' });
                        $( '#' + uniqId + '-prev' ).css({ 'display': 'block' });
                    }
                    
                }
            );
        });
	});

});