/* 
 * Main scripts file for the flight schedule website.
 * Assignment 4, CSCI 1170, Fall 2022
 * Starter code provided by Dr. Mayra Barrera Machuca
 */

let container = document.querySelector(".container")
let sectionMain = document.createElement("section")
sectionMain.className = "flight-info"


// using for loop to access all elements 
for (let item in FlightInfo) {

    // creating section
    let flight = document.createElement("section")
    flight.className = "flight"

    let listing = document.createElement("section")
    listing.className = "otherDetails"

    //creating main heading
    let city = document.createElement("h1")
    city.className = "city"


    let timing = document.createElement("p")
    timing.className = "timing"


    //creating lists
    let airline = document.createElement("li")
    airline.className = "airline"

    let airport = document.createElement("li")
    airport.className = "airport"

    let details = document.createElement("li")
    details.className = "details"

    let detailsInside = document.createElement("p")
    detailsInside.className = "detailsInside"

    var button = document.createElement("button")
    button.className = "button_class"

    let last = document.createElement("section")
    last.className = "last"
    last.appendChild(button)

    //on click event
    button.addEventListener("click", clickme);

    //creatinf function to add the fight to the selection bag
    function clickme() {

        let p = document.createElement("p");
        p.innerText = ("Flight  " + FlightInfo[item].code + " to " + FlightInfo[item].destination + "\n")
        // p.appendChild(document.createTextNode("Flight  " + FlightInfo[item].code + " to "+ FlightInfo[item].destination + "\n"))
        document.querySelector(".flights-selection-bag").appendChild(p)

    }

    //adding content in html 
    city.innerHTML = FlightInfo[item].destination;

    timing.innerHTML = FlightInfo[item].stops + ", " + FlightInfo[item].time + "min" + "<br> Depart time: " + FlightInfo[item].departTime

    if (FlightInfo[item].stops == 0) {
        timing.innerHTML = `Non-Stop, ${FlightInfo[item].time}min <br> Depart time:  ${FlightInfo[item].departTime} <br> <br>`
    } else {
        timing.innerHTML = `${FlightInfo[item].stops}, ${FlightInfo[item].time}min <br> Depart time:  ${FlightInfo[item].departTime}  <br><br>`
    }
    airline.innerHTML = "Airline: " + FlightInfo[item].airline

    airport.innerHTML = "Airport: " + FlightInfo[item].airport

    details.innerHTML = "Details: " + FlightInfo[item].info

    button.innerHTML = "Select"

    listing.appendChild(button)
    details.appendChild(listing)
    // details.appendChild(detailsInside)
    airport.appendChild(details)
    airline.appendChild(airport)

    last.appendChild(airline)
    timing.appendChild(last)
    city.appendChild(timing)
    flight.appendChild(city)
    flight.appendChild(button)
    sectionMain.appendChild(flight)

}

container.appendChild(sectionMain)