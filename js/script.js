var lastScrollTop;
navbar = document.getElementById('sidebar');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
sidebar.style.left='-250px';
}
else{
sidebar.style.left='0';
}
lastScrollTop = scrollTop;
});