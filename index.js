const searchBtn = document.getElementById('search-btn');
const mealList =  document.getElementById('meal');
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById('recipe-close-btn');

recipeCloseBtn.addEventListener('click', ()=>{
    mealDetailsContent.parentElement.classList.remove("showRecipe");


});

searchBtn.addEventListener('click' , getMealList);
mealList.addEventListener('click', getMealRecipe);



function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ searchInputTxt}`).then(response => response.json()).then(data => {

    console.log(data);
        let html = " ";

        const sRes = document.querySelector(".meal-title");
        sRes.style.display="block";

        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                     <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="foods">
                     </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">get Recipe</a>
                    </div>
            </div>
                
                `
                
              sRes.innerHTML = " your search results: "  ;
            });
        }else{
           sRes.innerHTML = "sorry we didn't find any data";
        }
        mealList.innerHTML = html;
       
    });

}

function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        console.log(mealItem);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`).then(res => res.json()).then(data => 
           mealRecipeModal(data.meals));
        

    }
}

function mealRecipeModal(meal){
   meal = meal[0];
   let html = `
   <h2 class="recipe-title">${meal.strMeal}</h2>
   <p class="recipe-category">${meal.strCategory}</p>

   <div class="recipe-instruct">
       <h3 class="instruction:"></h3>
   <p>${meal.strInstructions}</p>
    
</div>
<div class="recipe-meal-img">
   <img src="${meal.strMealThumb}" alt="">                    
</div>
<div class="recipe-link">
   <a href="${meal.strYoutube}" target="_blank">watch video</a>
</div>
   `;

   mealDetailsContent.innerHTML = html;
   mealDetailsContent.parentElement.classList.add("showRecipe");

}




const cat1 = document.querySelector(".cat-items-1");
cat1.addEventListener('click', getMealRecipe);


function veg() {
   
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`).then(response => response.json()).then(data => {

    console.log(data);
        let html = " ";

        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                     <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="foods">
                     </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">get Recipe</a>
                    </div>
            </div>
                
                `
                
            });
        }else{
            html = "sorry we didn't find any data";
        }
        cat1.innerHTML = html;
       
    });

}

veg();




const cat2 = document.querySelector(".cat-items-2");
cat2.addEventListener('click', getMealRecipe);


function breakfast() {
   
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`).then(response => response.json()).then(data => {

    console.log(data);
        let html = " ";

        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                     <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="foods">
                     </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">get Recipe</a>
                    </div>
            </div>
                
                `
                
            });
        }else{
            html = "sorry we didn't find any data";
        }
        cat2.innerHTML = html;
       
    });

}

breakfast();



const cat3 = document.querySelector(".cat-items-3");
cat3.addEventListener('click', getMealRecipe);


function vegan() {
   
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan`).then(response => response.json()).then(data => {

    console.log(data);
        let html = " ";

        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                     <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="foods">
                     </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">get Recipe</a>
                    </div>
            </div>
                
                `
                
            });
        }else{
            html = "sorry we didn't find any data";
        }
        cat3.innerHTML = html;
       
    });

}

vegan();

const cat4 = document.querySelector(".cat-items-4");
cat4.addEventListener('click', getMealRecipe);


function seafood() {
   
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`).then(response => response.json()).then(data => {

    console.log(data);
        let html = " ";

        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                     <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="foods">
                     </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">get Recipe</a>
                    </div>
            </div>
                
                `
                
            });
        }else{
            html = "sorry we didn't find any data";
        }
        cat4.innerHTML = html;
       
    });

}
seafood();





