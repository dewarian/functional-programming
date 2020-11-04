const {
    default: fetch
} = require("node-fetch");

const URL = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';

async function parseData() {
    const responseVehicles = await fetch('https://opendata.rdw.nl/resource/m9d7-ebf2.json');
    const responseVehiclesTypeFuel = await fetch('https://opendata.rdw.nl/resource/8ys7-d773.json');

    const vehicles = await responseVehicles.json();
    const vehicleFuelType = await responseVehiclesTypeFuel.json();

    const result = vehicles.map((vehicle) => {
        const fuelType = vehicleFuelType.find((fuelType) => vehicle.kenteken === vehicleFuelType.kenteken);

        vehicle.kenteken = fuelType;

        console.log(vehicle)
        return vehicle;
    })
}

// parseData()


function filterDataOnColumn(data, column) {
    return data.map(result => result[column])
}

async function fetchData(URL) {
    const response = await fetch(URL)
    .then(response => response.json())
    // .then(data => console.log(data))
    // .then(data => filterDataOnColumn(data, 'voertuigsoort'))
    .catch((err) => {console.log(`ERROR: ${err}`)})

    await filterDataOnColumn(response, 'voertuigsoort')
}
console.log('Windows are you still complaining?');
fetchData(URL)
