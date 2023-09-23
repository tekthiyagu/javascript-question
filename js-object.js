
// different ways to create object in javascript 

// using object constructor

var object = new Object();

//  using object create method

var object = object.create(null);

// object literal

var student = {
    stud_name: 'thiyagu',
    stud_gender: 'male'
}

// using function constructor

function person(fname, age) {
    this.fname = fname;
    this.age = age;
}

var object = new person('thiyagu', 35)

// function constructor with prototype

function employee() { }

employee.prototype.name = 'thiyagu';

var object = new employee();

// using es6 class

class Courses {
    constructor(name) {
        this.name = name;
    }
}
var object = new Courses('javascript');


// singleton using simple js object

var object = new (function() {
this.name = 'thiyagu'
})();