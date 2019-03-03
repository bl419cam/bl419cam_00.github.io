// alert('Hello World');

window.addEventListener('scroll', function(){
  let windowScrollPos = window.scrollY;

  if (windowScrollPos > 100){
    let navigation = document.getElementbyId('main-nav');
    //navigation.style.backgroundColor = "black";
    navigation.classList.add('new-background');
    //console.log(navigation)
  }
  else {
    navigation.classList.remove("new-background");
  }
});
