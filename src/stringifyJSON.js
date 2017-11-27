var stringifyJSON = function(obj) {
  if (obj === undefined) {
    return undefined;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  }
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var output = '[';
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        output += stringifyJSON(obj[i]);
      } else {
        output += stringifyJSON(obj[i]) + ','; 
      }  
    }
    return output + ']'; 
  }
  if (typeof obj === 'object') {
      var output = '';
      for (var key in obj) {
        if (typeof obj[key] === 'function' || obj[key] === undefined) {

        } else { 
          output += '"' + key + '"' + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      // replaces last instance of a comma with nothing
     output = output.replace(/,\s*$/, "");
     return '{' + output + '}'
    }
};










