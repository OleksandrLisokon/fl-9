let assign = function(target) {
    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    let output = Object(target);

    for (let i = 1; i < arguments.length; i++) {
      let source = arguments[i];

      if (source !== undefined && source !== null) {
        for (let nextKey in source) {
          if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
    }
    return output;
}

function Bot(object) {
  this.name = object.name;
  this.speed = object.speed;
  this.defSpeed = object.speed;
  this.x = object.x;
  this.y = object.y;
  this.type = 'Bot';
}

Bot.prototype.getSpeed = function() {
  return this.speed;
}

Bot.prototype.setSpeed = function(newSpeed) {
  this.speed = newSpeed;
}

Bot.prototype.getDefaultSpeed = function() {
  return this.defSpeed;
}

Bot.prototype.getCoordinates = function() {
  return {x: this.x, y: this.y};
}

Bot.prototype.setCoordinates = function(x, y) {
  this.x = x;
  this.y = y;
}

Bot.prototype.move = function(direction) {
  direction.toLowerCase();
  if (direction === 'up') {
    this.setCoordinates(this.x, this.y += this.getSpeed());
  } else if (direction === 'right') {
    this.setCoordinates(this.x += this.getSpeed(), this.y);
  } else if (direction === 'down') {
    this.setCoordinates(this.x, this.y -= this.getSpeed());
  } else if (direction === 'left') {
    this.setCoordinates(this.x -= this.getSpeed(), this.y);
  } else {
    console.log('Wrong direction!');
  }
}

Bot.prototype.showPosition= function() {
  return console.log(`I am ${this.type} '${this.name}'. I am located at ${this.x}:${this.y}.`);
}

Bot.prototype.constructor = Bot;

function Racebot(object) {
  Bot.call(this, object);
  this.prevMove = null;
  this.type = 'Racebot';
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function(direction) {
  if (this.prevMove === direction) {
    this.setSpeed(this.getSpeed() + 1)
  } else {
    this.setSpeed(this.getDefaultSpeed());
  }
  this.prevMove = direction;

  return Bot.prototype.move.call(this, direction);
}

function Speedbot(object) {
  Bot.call(this, object);
  this.type = 'Speedbot';
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function() {
  this.setSpeed(this.getSpeed() + 2);
}

Speedbot.prototype.move = function(direction) {
  Bot.prototype.move.call(this, direction);
  if (this.getSpeed() > this.getDefaultSpeed()) {
    this.setSpeed(this.getSpeed() - 1);
  }
}
