$('#search img').animate({"opacity": 1}, 2000);
var topSlider = Slider('#top-place-slider', 4);

function Slider(wrapper_id, count_el){
 $(wrapper_id+" .slide").each(function(i, el){
 	if (i < count_el) {
 		$(el).css('display', 'block');
 	}
 })
}
