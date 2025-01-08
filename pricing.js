const monthly=document.querySelector(".monthly");
const yearly=document.querySelector(".yearly");
const prices=document.querySelector(".prices");
const monthyrtext=document.querySelector(".monthyrtext");
let monthlyprice=1.99;
let yearlyprice=19.99;
monthly.addEventListener("click",()=>{
       monthly.classList.add("pricebuttonselect");
       monthly.classList.remove("pricebuttonnotselect");
       yearly.classList.add("pricebuttonnotselect");
       yearly.classList.remove("pricebuttonselect");
       prices.innerText=monthlyprice;
       monthyrtext.innerText="a month";
});
yearly.addEventListener("click",()=>{
       yearly.classList.add("pricebuttonselect");
       yearly.classList.remove("pricebuttonnotselect");
       monthly.classList.add("pricebuttonnotselect");
       monthly.classList.remove("pricebuttonselect");
       prices.innerText=yearlyprice;
       monthyrtext.innerText="a month, biller yearly";
});