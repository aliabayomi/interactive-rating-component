const submit = document.querySelector(".submit");
const ratingBtn = document.querySelectorAll(".ratings-btn");
const firstPage = document.querySelector(".firstpage");
const secondPage = document.querySelector(".secondpage");
const score = document.querySelector(".score"); 
let starScore = 1


const onSubmit = () => {    
     firstPage.classList.add("hidden");
     secondPage.classList.remove("hidden");
     score.textContent = starScore;
};


const ratingBtnClick = (event) => {

    ratingBtn.forEach(btn => {
        btn.classList.remove("active"); 
    });
    event.target.classList.add("active");

    starScore = event.target.textContent;
    console.log(starScore);

}


submit.addEventListener("click",onSubmit);

ratingBtn.forEach(btn => {
    btn.addEventListener("click",ratingBtnClick);  
}); 
