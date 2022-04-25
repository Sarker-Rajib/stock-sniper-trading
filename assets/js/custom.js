
// dashboard menu show hidden start
function menuShow(){
   const navShowBtn = document.getElementById('menu-show-btn');
   const targetNav = document.querySelector('.hidden');
   
   if(targetNav.style.height === '100%'){
      targetNav.style.height = '42px';
   }else {
      targetNav.style.height = '100%';
   }
}
// dashboard menu show hidden end