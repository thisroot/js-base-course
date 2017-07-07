
function solve() {
  return function (selector, count) {
      
     
     // проверка на селектор 
      if (!($(selector)[0] instanceof HTMLElement)) {
          console.log(false)
      }
      
      // проверка на количество
      if ((count < 1) || !!!(+count)) {
          throw new Error("count not recognized")
      }
      
      var el = $('<ul/>').addClass("items-list")
      var li = $('<li/>').addClass("list-item")
      
      for(var i=0; i <= count; i++) {
         li.clone()
           .text(i)
           .appendTo(el)
      }
      
      $(selector).append(el);
      
  };
};
    


