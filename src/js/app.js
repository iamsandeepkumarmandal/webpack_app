//console.log(require('./people.js'));
//alert(require("./people.js"));
require ('../css/style.css');

let a = require("./people");
//console.log(a);



let $ = require("jquery");
/*for(i=0;i<a.length;i++){
    console.log(a[i].name);
    $("body").append('<h5>'+a[i].name+'</h5>');
}
*/
$.each(a,function(key,value){
    $("body").append('<h5>'+a[key].name+'</h5>');
});