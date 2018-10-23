const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:selected-planet', (event) => {
    const planet = event.detail;
    this.display(planet);
  });
};

ResultView.prototype.display = function (planet) {
  const list = document.createElement('ul')

  const name = document.createElement('li')
  name.textContent = `Name: ${planet.name}`;
  list.appendChild(name)

  const orbit = document.createElement('li')
  orbit.textContent = `Orbit: ${planet.orbit}`;
  list.appendChild(orbit)

  const day = document.createElement('li')
  day.textContent = `Day: ${planet.day}`;
  list.appendChild(day)

  const surfaceArea = document.createElement('li')
  surfaceArea.textContent = `Surfacearea: ${planet.surfaceArea}`;
  list.appendChild(surfaceArea)

  const volume = document.createElement('li')
  volume.textContent = `Volume: ${planet.volume}`;
  list.appendChild(volume)

  const gravity = document.createElement('li')
  gravity.textContent = `gravity: ${planet.gravity}`;
  list.appendChild(gravity)

  const moons = document.createElement('li')
  moons.textContent = `Moons: ${planet.moons}`;
  list.appendChild(moons)

  this.container.innerHTML = '';
  this.container.appendChild(list);

  const image = document.createElement('IMG')
  image.setAttribute("src", planet.image);
   image.setAttribute("width", "304");
   image.setAttribute("height", "228");
  this.container.appendChild(image)
};


module.exports = ResultView;
