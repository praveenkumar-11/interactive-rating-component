function thankYou_card(){
    const cont_2 = document.querySelector(".container-2");
    const cont = document.querySelector(".container");
    cont_2.style.display = "block";
    cont.style.display = "none";
}
const rating = document.querySelectorAll(".rating-buttons button");
const rating_text = document.querySelector(".rating");
const submit_btn = document.querySelector(".submit-btn");
const rating_len = rating.length;
for(let i=0 ; i<rating_len ; i++){
    rating[i].addEventListener("click",()=>{
        console.log(rating[i]);
        rating_text.innerHTML = "You selected "+(i+1)+" out of 5"
    });

    rating[i].addEventListener("focusout",()=>{
        setTimeout(function(){
            
        console.log("button"+(i+1)+"is out of focus");
            rating[i].classList.remove("focus");
            submit_btn.style.pointerEvents = "none";
            submit_btn.style.opacity = "50%";
        },200);
        
    })

    rating[i].addEventListener("focus",()=>{
        setTimeout(function(){
            console.log("button"+(i+1)+"is focused");
            rating[i].classList.add("focus");
            submit_btn.style.pointerEvents = "auto";
            submit_btn.style.opacity = "100%";
        } , 250)
       
    })
    
} 