const carNameElement = document.getElementById("car-name");
const carModelElement = document.getElementById("car-model");
const carYearElement = document.getElementById("car-year");
const carPositionElement = document.getElementById("car-position");
const addCarButton =document.getElementById("add-car");
const clearListButton =document.getElementById("clear-list");
const carsList = document.querySelector(".cars-list")

let cars = [];

function addCar(){
    
    const CarList = {
        name: carNameElement.value.trim(),
        model: carModelElement.value.trim(),
        year: Number(carYearElement.value),
        position: carPositionElement.value.trim()
    };
   
    if(!CarList.name || !CarList.model || !CarList.year || !CarList.position)
    {
        alert ('Заполните все поля!');
        return;
    }else{
        cars.push(CarList)

        renderCarCard()
    }

    carNameElement.value = "";
    carModelElement.value = "";
    carYearElement.value = "";
    carPositionElement.value = "";
}
function renderCarCard(){
    carsList.innerHTML = "";

    cars.forEach((car)=>{
        const carCard = document.createElement("div")
        carCard.classList.add("car-item")
        const carCardHeading = document.createElement("h3")
        carCardHeading.textContent = car.name
        carCard.appendChild(carCardHeading)

        const carCardModel = document.createElement("p")
        carCardModel.textContent = `Модель: ${car.model}`
        carCard.appendChild(carCardModel)

        const carCardYear = document.createElement("p")
        carCardYear.textContent = `Год выпуска: ${car.year}`
        carCard.appendChild(carCardYear)

        const carCardPosition = document.createElement("p")
        carCardPosition.textContent = `Позиция: ${car.position}`
        carCard.appendChild(carCardPosition)

        carsList.appendChild(carCard);
    })
}

function clearProductList(){
    cars = []; 
    renderCarCard();
}



addCarButton.addEventListener('click', addCar);
clearListButton.addEventListener('click', clearProductList);

