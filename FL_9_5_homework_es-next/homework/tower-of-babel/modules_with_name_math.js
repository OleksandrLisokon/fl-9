export const PI = 3.141592;

export const sqrt = function(s){
    return _sqrt(s, s/2.0, 0.0);
  };
export const square = function(x) {
    return x * x;
  };
var _sqrt = function(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
  };