/*fade in logo*/
$('#search img').animate({"opacity": 1}, 3000);

/*w*/
var flashTextFlag = false;
var text = '-это веб-сервис, который дает вам возможность бронировать места и делать заказ еды до вашего прихода туда. Вам больше не нужно тратить время на ожидание выполнения заказов еды и искать удобные для Вас заведения. Просто бодьте с SEEDOFTIME';

if ($("#how-use > p").offset().top < $(window).innerHeight()){
	flashTextFlag= true;
	drowText();
}

$(window).on("scroll", function(){
	if ($("#how-use > p").offset().top < $(window).scrollTop()+$(window).innerHeight() 
		&& !flashTextFlag 
		&& $("#how-use > p").offset().top + $(window).innerHeight() > $(window).scrollTop()+$(window).innerHeight()){
		flashTextFlag= true;
		drowText(text);
	}
})

/*sliders*/
initSliders();
hideButtons();
$(window).on('resize', initSliders);
$(window).on('resize', hideButtons);

/*toggle menu*/

$("#toggle-buttons i").on("click", function(e){
	var butWrapper = $(e.target).parent();
	var data = $("#login-form");
	if (butWrapper.attr("data-hidden") == "true") {
		butWrapper.attr("data-hidden", "false");
		data.fadeIn()
	}else{
		butWrapper.attr("data-hidden", "true");
		data.fadeOut()
	}
})

function initSliders(){
	var currentElements = $(window).width() > 750 ? 4: $(window).width() > 450 ? 2:1;	
	var data = {
		slidesPerView: currentElements,
		slidesPerColumn: 1,
	    speed: 400,
	    spaceBetween: 10,
	    prevButton: "#top-befor",
	    nextButton: "#top-after",
	    loop: true,
	    grabCursor: true,
	    setWrapperSize: true,
	    autoplay: 5000,
	};

	var topSlider = new Swiper('#top-place-slider', data); 
	data.prevButton = "#news-befor";
	data.nextButton = "#news-after";
	var newsSlider = new Swiper('#news-slider', data); 
	data.prevButton = "#rec-befor";
	data.nextButton = "#rec-after";
	var recSlider = new Swiper('#recommendation-slider', data); 
}

function drowText(){
	var count = 1;

	var drt = setInterval(function() { 
		if(count == text.length){
			clearInterval(drt)
		}
		$("#how-use > p").eq(0).text(text.slice(0,count));
		count++;
	 }, 25);

}

function hideButtons(){
	var width = $(window).width();
	var buttons = $('#toggle-buttons');
	var data = $("#login-form");
	if (width>= 751) {
		buttons.css('display', "none")

		buttons.attr("data-hidden", "true");
		data.fadeOut()
	}else{
		buttons.css('display', "")
	}
}