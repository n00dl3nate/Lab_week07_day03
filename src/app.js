const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const ResultView = require('./views/result_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {


  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();


  const planetElement = document.querySelector('.planets-menu');
  const selectView = new SelectView(planetElement);
  selectView.bindEvents();

  const planetDetails = document.querySelector('.planet-details');
  const resultView = new ResultView(planetDetails);
  resultView.bindEvents();

});
