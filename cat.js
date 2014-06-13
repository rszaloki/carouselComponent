var myElements = myElements || {};

myElements.cat = document.registerElement('x-cat',{
  prototype: Object.create(HTMLElement.prototype,{
    createdCallback:{
      value:function(){
          var attrs = this.attributes;
          this.innerHTML= '<style>'+
                          'li { list-style-type:none; display:inline-block; text-align:center; white-space:normal; padding:0 10px; vertical-align:baseline; text-indent: 0; box-sizing:border-box; width:25%;}' +
                          'strong { font-family:sans-serif; display:block; font-size:1.5em; }'+
                          'img { max-width:100%; }'+
                          'button { text-align:center; margin-top:1em; font-size:16px; display:block; margin-left:auto; margin-right:auto; }'+
                          'p{ float:left; width:100%; }'+
                          '</style>'+
                          '<li><strong>'+
                          attrs['title'].value+
                          '</strong><img src="'+
                          attrs['image'].value+
                          '"><button>Add to purr</button><p>'+
                          attrs['text'].value+
                          '</p></li>';
      }
    }
  })
});



