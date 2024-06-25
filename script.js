
//hero background section-----------------------------------------------
const newCloud = document.getElementById('container');
newCloud.innerHTML = `<div class='cloud'>
<div class='cloudBubble1'></div>
<div class='cloudBubble2'></div>
</div>`.repeat(20); 


const clouds = document.getElementsByClassName('cloud');


for(const cloud of clouds){ 
    cloud.style.top = (Math.random() * 100) + "%";
    cloud.style.left = (Math.random() * 100) + "%";
    cloud.style.transform = `scale(${(Math.random() * 0.7) + 0.3})`;
    cloud.style.transition = `all linear ${(Math.random()*6)+6}s`;

    let cloudDirection = true
    setInterval (()=> {

        if (cloudDirection){
            cloud.style.left = "100%";
        } else {
            cloud.style.left = "-50%";
        }
        cloudDirection = !cloudDirection;
    }, ((Math.random()*6)+6)*1000)

    setTimeout(()=>{
        cloud.style.left = "-50%";
    }, 100)
}


//hero background section END-----------------------------------------------


//beginning button page---------------------------------------------
const button = document.getElementById('play-button')
const heroBackground = document.getElementById('hero-background')
const infoContainer = document.getElementsByClassName('info-container')[0]
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");


button.addEventListener('click', () => {

    //giving information text fade in animation
    heroBackground.style.visibility = 'visible'
    heroBackground.style.animation = 'fadeIn 1s'
    infoContainer.style.display = 'flex'
    infoContainer.style.animation = 'fadeIn 4s'
    button.style.animation = 'fadeOut 1s'
    document.getElementById('nav').style.visibility = 'visible'
    document.getElementsByTagName('h2')[0].style.animation = 'fadeOut 1s'
    
})




//hamburger mm yummy---------------------------------------------------------

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

