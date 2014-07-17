"use strict";
    
var Class = {
    
    Create: function(o) {
        
        return this.Extend.call(function(){
            
        },o);
    },
            
    Extend: function(o) {

        var _prototype=new this();
        for(var property in o){
            _prototype[property]=o[property]
        }
        var F=function(){};
        F.prototype=_prototype;
        F.Extend=Class.Extend;
        return F;        
    }
};


var parent = Class.Create({
    init: function() {
        this.a = 2;
        console.log('Hello i am the parent constructor');
    },
    abc: function() {
        //this.def();
        console.log("Hello this is the parent method");
        //this.def();
    }



});

var child = parent.Extend({
    init: function() {
        //this._super();
        //console.log(this.a);
        console.log('Hello i am the child constructor');
    },
    def: function() {
        //this.abc();
        console.log("Hello form child");
    }

});


var obj = new parent();
obj.abc();
var obj1 =new child();
console.log("parent instance of child :-");
console.log(obj instanceof child);
console.log("child instance of parent :-");
console.log(obj1 instanceof parent);


//console.log(Class);
//console.log(parent);

console.log("=== parent proto===")
for (var p in parent.prototype) {
    console.log(p);
    console.log(parent.prototype[p]);
    console.log("=======");
}

/*
console.log("===child==");

for (var p in child) {
    console.log(p);
} */
console.log("==child proto ===");
for (var p in child.prototype) {
    console.log(p);
    console.log(child.prototype[p]);
    console.log("=======");
}
//console.log(child);