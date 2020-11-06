const {
    default: fetch
} = require("node-fetch");

console.log('Windows are you still complaining?');
parseData()

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
        const connectFuelType = vehicleFuelType.find((licensePlate) => 
            vehicles.kenteken == vehicleFuelType.kenteken
        );
        vehicle.kenteken = connectFuelType;
        return vehicle
    })
    console.log(result);
}
