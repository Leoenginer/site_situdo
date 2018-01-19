let mParagrafo = document.querySelector(".change_color_text");

// function changeText() {
// 	mParagrafo.style.color = 'black';
// }

window.addEventListener('scroll', function(){
	if(window.scrollY > 200){
		mParagrafo.style.color = 'black';
	}else{
		mParagrafo.style.color = 'white';
	}
});