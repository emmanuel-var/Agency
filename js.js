const cars = [
    {
        id: 1,
        brand: 'bla bla',
        model: 'a',
        color: 'red',
        year: 1999,
        price: 1,
        photography: 1,
    },
    {
        id: 2,
        brand: 'bla bla',
        model: 'a',
        color: 'red',
        year: 1999,
        price: 1,
        photography: 1,
    },
    {
        id: 3,
        brand: 'bla bla',
        model: 'a',
        color: 'red',
        year: 1999,
        price: 1,
        photography: 1,
    },
    {
        id: 4,
        brand: 'bla bla',
        model: 'a',
        color: 'red',
        year: 1999,
        price: 1,
        photography: 1,
    },
    {
        id: 5,
        brand: 'bla bla',
        model: 'a',
        color: 'red',
        year: 1999,
        price: 1,
        photography: 1,
    }
];

function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `<tr>
                    <td>
                    <p>Brand: ${car.brand}</p>
                    <p>Model: ${car.model}</p>
                    <p>Year: ${car.year}</p>
                    <p>Color: ${car.color}</p>
                    <p>Price: ${car.price}</p>
                    </td>
                    <td>
                        <img src="r8.jpeg" alt="example car" class="img">
                    </td>
                    <td>
                        <button onclick="deleteCar(${car.id})" class="btn btn-danger">
                            Delete
                        </button>
                        <button onclick="buyCar(${car.id})" class="btn btn-danger">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
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