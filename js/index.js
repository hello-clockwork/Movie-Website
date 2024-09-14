var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "../images/moon.png";
    }else{
        icon.src = "../images/sun.png";
    }
}

let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let manuallyToggled = false;

btn.onclick = function() {
    sidebar.classList.toggle('active');
    manuallyToggled = true;
};
    
function checkWindowSize() {
    if (window.innerWidth < 1170    ) {
        if (!manuallyToggled && !sidebar.classList.contains('active')) {
            sidebar.classList.add('active');
        }
    } else {
        if (!manuallyToggled && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
}

window.onresize = function() {
    checkWindowSize();
    manuallyToggled = false;
};

checkWindowSize();



