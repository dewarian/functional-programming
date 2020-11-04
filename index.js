const {
    default: fetch
} = require("node-fetch");

parseData()
console.log('Windows are you still complaining?');
const URL = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';
// fetchData(URL)

/**
 * @title Data retrieval
 * @description Retrieves data from API, mixes / combines it with the second API (matches strictly) and returns data.
 * Code snippet is all credit to Rijk's guest college
 * @author https://twitter.com/rijkvanzanten
 */
async function parseData() {
    const responseVehicles = await fetch('https://opendata.rdw.nl/resource/m9d7-ebf2.json');
    const responseVehiclesTypeFuel = await fetch('https://opendata.rdw.nl/resource/8ys7-d773.json');

    const vehicles = await responseVehicles.json();
    const vehicleFuelType = await responseVehiclesTypeFuel.json();

    const result = vehicles.map((vehicle) => {
        const fuelType = vehicleFuelType.find((fuelType) =>
            vehicle.kenteken === vehicleFuelType.kenteken
        );

        vehicle.kenteken = fuelType;
        return vehicle;
    });

    console.log(result);
}




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

