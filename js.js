const cars = [
    {
        id: 1,
        brand: 'Audi',
        model: 'A4',
        color: 'Blue',
        year: 2016,
        price: '12,585-14,006',
        photography: 1,
    },
    {
        id: 2,
        brand: 'Mercedes-Benz',
        model: 'Class E',
        color: 'White',
        year: 2017,
        price: '38,605-39,158',
        photography: 1,
    },
    {
        id: 3,
        brand: 'Mazda',
        model: 'CX-5',
        color: 'Red',
        year: 2015,
        price: '9,392-10,663',
        photography: 1,
    },
    {
        id: 4,
        brand: 'Mitsubishi',
        model: 'ASX',
        color: 'White',
        year: 2014,
        price: '7083-8373',
        photography: 1,
    }
];

function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `<tr>
                    <td>
                        <div class="information"><p>Brand: </p><p contentEditable="true">${car.brand}</p></div>
                        <div class="information"><p>Model: </p><p contentEditable="true">${car.model}</p></div>
                        <div class="information"><p>Year: </p><p contentEditable="true">${car.year}</p></div>
                        <div class="information"><p>Color: </p><p contentEditable="true">${car.color}</p></div>
                        <div class="information"><p>Price(dollars): </p><p contentEditable="true">${car.price}</p></div>
                    </td>
                    <td>
                        <img src="r8.jpeg" alt="example car" class="img">
                        <div class="buttons-buy-delete">
                            <button onclick="deleteCar(${car.id})" class="btn btn-danger">
                            Delete
                            </button>
                            <button class="btn btn-danger">
                            <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </td>
                </tr>`;
    });
    container.innerHTML = html;
}
function deleteCar(id) {
    const index = cars.findIndex((car) => car.id == id );
    cars.splice(index, 1);
    printCars();
}
function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;
    const id = cars[cars.length -1].id + 1;

    const newCar = {
        brand,
        model,
        year,
        color,
        price,
        id
    }
    cars.push(newCar);
    printCars();
    document.getElementById('form-car').reset();
}
printCars();