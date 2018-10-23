const PubSub = require('../helpers/pub_sub.js')
const planets = require('../data/planets.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};


SolarSystem.prototype.bindEvents = function(){
  console.log("planets", this.planets);
  PubSub.subscribe('SelectView:change', (event) => {
    const planetName = event.detail;
    this.publishPlanetDetails(planetName);
  });
};

SolarSystem.prototype.publishPlanetDetails = function(name){
  var selectedPlanet = ""

  console.log("planet!!!!!",this.planets);
    this.planets.forEach((planet) => {
      if (name === planet.name){
        selectedPlanet = planet
      }
    })
  console.log("planetobeject",selectedPlanet);
  PubSub.publish('Planets:selected-planet', selectedPlanet)
};

module.exports = SolarSystem;
