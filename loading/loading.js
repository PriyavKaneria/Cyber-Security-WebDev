(function(){

	var load = document.getElementById('load');
	var loading = 0;
	var id = setInterval(frame, 32);

	function frame() {
		if (loading == 150) {
			clearInterval(id);
			window.open('main.html','_self');
		} else{
			loading += 1;
			if (loading == 120) {
				load.style.animation = 'fadeout 3s ease'
			}
		}
	}
})();