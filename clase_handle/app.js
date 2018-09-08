var st = document.getElementById("students-template").innerHTML;
var template = Handlebars.compile(st);


var students = [
  { name: "Juan", age: 27, email: "camilo9020@gmail.com" },
  { name: "Steven", age: 23, email: "steven@example.com"  },
  { name: "Daniel", age: 25, email: "daniel@example.com"  }
]

var html = template({ students } );

$('.students').html(html);

$('form').on('submit', function(e) {
  e.preventDefault();
  students.push({
    name: this.elements.name.value,
    age:  this.elements.age.value,
    email:  this.elements.email.value
  });
});
// https://test-bootcamp-1524773485979.firebaseio.com/pabloum/students.json

// achtundzwanzig
