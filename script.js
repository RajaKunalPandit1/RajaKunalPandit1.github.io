let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

if(theme === null){
    setTheme('blue');
}else{
    setTheme(theme);
}

for(var i=0; themeDots.length >i;i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log("Option Clicked!", mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode === 'light'){
        document.getElementById('theme-style').href = 'app.css';
    }
    if(mode === 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }
    if(mode === 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }
    if(mode === 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme',mode);
}


let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}