// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // create an empty array
  //traverse all children of all DOM elements to find elements whose class name = classsName
  // classList
  var output = [];
  node = node || document.body;
  if (node.classList.contains(className)) {
    output.push(node);
  }
  for (var i = 0; i < node.children.length; i++) {
    var child = getElementsByClassName(className, node.children[i]);  
    output = output.concat(child);
  }
  return output; 
};







































/* var elementsWithClass = [];
  var children = document.childNodes;
  var array = Array.prototype.slice.call(children); 
  for (var i = 0; i < array.length; i++) {
    if (hasClass(array[i], className)) {
      elementsWithClass.push(array[i]);
    }
    if (!array[i].hasChildNodes()) {
      if (hasClass(array[i], className)) {
        elementsWithClass.push(array[i]);
      }
    } else {
      return array[i].getElementsByClassName(className);
    }
  }

  return elementsWithClass;
  //output: array of all elements
};
  

var hasClass = function(element, className) {
  var classList = element.classList;
  var classList = Array.prototype.slice.call(classList);
  for (var i = 0; i < classList.length; i++) {
    if (classList[i].className() === className) {
      return true;   
    }
  }
};*/
