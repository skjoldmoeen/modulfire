const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');

const  bullets = [...document.querySelectorAll('.bullet')];

const MAX_STEPS = 7;
let currentStep = 2;


nextBtn.addEventListener('click', () => {
        const currentBullet = bullets[currentStep - 1 ];
        currentBullet.classList.add('completed');
        currentStep++;
        previousBtn.disabled = false;
if (currentStep === 7){
    nextBtn.disabled = true;
}
    });

previousBtn.addEventListener('click', () => {
    const previousBullet = bullets [currentStep - 2];
    previousBullet.classList.remove('completed');
    currentStep--;
    nextBtn.disabled = false;
    if (currentStep === 2){
        previousBtn.disabled = true;
    }
    

})