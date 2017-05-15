document.body.onload = function(){
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done');
		}
	}, 1000);
}

window.onload = function(){
	
	setTimeout("loads()", 1000);
}
function loads(){
	
	//page_preloader.style.display = "none";
	page_preloader.style.opacity = "0";
	setTimeout("loadss()", 1000);
}
function loadss(){
	
	page_preloader.style.display = "none";
	
	
}