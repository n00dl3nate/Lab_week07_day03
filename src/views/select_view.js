const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
 this.element = element;
};

SelectView.prototype.bindEvents = function () {

  this.element.addEventListener('click', (event) => {
    const planetName = event.target.id;
    PubSub.publish('SelectView:change', planetName);

  });
};



module.exports = SelectView;
