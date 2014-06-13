var myElements = myElements || {};

myElements.carousel = document.registerElement('x-carousel',{
  prototype: Object.create(HTMLElement.prototype,{
    createdCallback:{
      value:function(){
          var attrs = this.attributes;
          this.innerHTML= '<style>'+
                          'ol { white-space:nowrap; padding:0; margin:0 40px; overflow:hidden; transition: all 0.3s ease-in-out; }' +
                          '</style>'+
                          '<button>&lang;</button>'+
                          '<button>&rang;</button>'+
                          '<ol>'+
                          this.innerHTML+
                          '</ol>';
      }
    }
  })
});
