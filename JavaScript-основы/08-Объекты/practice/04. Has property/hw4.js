let testObject =  {
    width: 300,
    length: 500,
    square: function() {
    return 2*(this.width + this.length)
    } 
}

console.log(testObject.square())


function hasProperty(obj,key) {
    
   for(item of obj) {
       if(item == key) {
           return true
       }
   }
    return false;
}

console.log(hasProperty(testObject,'width'))



function hasProperty(obj,key) {
    
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return true;
    }
  
  return false;
}

console.log(hasProperty(testObject,'len'))

testObject =  {
    width: 300,
    length: 500,
    square: function() {
    return 2*(this.width + this.length)
    },
    hasProperty: function(key) {

    for(item of Object.keys(this)) {
       if(item == key) {
           return true
       }
    }
    return false;
    }
}

console.log(testObject.hasProperty('width'));