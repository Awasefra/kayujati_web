//toggle active menu navbar
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick=()=>{
	navbarNav.classList.toggle('active');
};

//click outside from navbar to close navbar menu
const menu = document.querySelector('#menu');
document.addEventListener('click', function(e){
	if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
		navbarNav.classList.remove('active');
	}
});