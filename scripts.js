// Q:1 Class - Movie
class movie{
    constructor(Title,studio,rating){
        this.Title=Title;
        this.studio=studio;
        this.rating=rating
    }
    
}
var c1 = new movie("Casino Royale","Enon productions","PG13")

//Q:2 Circle - Class
class circle{
    constructor( radius , color){
      this.radius=radius;
      this.color=color;
    }
    get_radius(){
        return this.radius;
    }
    gry_color(){
return this.string
    }
}
var c1 = new circle("20","red");
var c1 = new circle("double","String")

var res=c1.get_radius();
console.log(`${res}`);
console.log(c1);

//Q:3 Write a “person” class to hold all the details.
class person{
    constructor( Name,Age,Job,Number){
       this.Name = Name;
       this.Age = Age;
       this.Job = Job;
       this.Number = Number;
    }
}
var c1 = new person( "Arun","24","Full stack developer",987654321)
 
//Q:4 write a class to calculate the Uber price.
class Uber{
    constructor(km,car,price,color){
        this.km = km;
        this.car = car;
        this.price = price;
        this.color = color;
    }
    calculate_price(){
        return this.km*15;
    }
}
var c1= new Uber(18,"rolls royce","10,48,00,000","Diamond Black")
var res=c1.calculate_price();
console.log(`${res}`);
console.log(c1);