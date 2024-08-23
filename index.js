


// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
//    ];




// let ingredientsList = document.getElementById('ingredients')


// ingredients.forEach((ingredient) => {
//   let li = document.createElement('li')
//   li.textContent = ingredient
//   ingredientsList.appendChild(li)
// })














// const images = [
//     {
//      url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'White and Black Long Fur Cat',
//     },
//     {
//      url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//      url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Group of Horses Running',
//     },
//    ];


// let List = document.getElementById('gallery')

   
//    let galleryItems = images.map(
//      (image) =>
//        `<li><img src="${image.url}" alt="${image.alt}" class="gallery-image"></li>`
//    )
   

//    List.insertAdjacentHTML('beforeend', galleryItems.join(''))
   

//    List.classList.add('gallery-class')






let counterValue = 0;


let decrementButton = document.querySelector('[data-action="decrement"]')
let incrementButton = document.querySelector('[data-action="increment"]')
let valueElement = document.getElementById('value')


function decrement() {
  counterValue -= 1
  updateValue()
}


function increment() {
  counterValue += 1
  updateValue()
}


function updateValue() {
  valueElement.textContent = counterValue
}

decrementButton.addEventListener('click', decrement)
incrementButton.addEventListener('click', increment)

updateValue()