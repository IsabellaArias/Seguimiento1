const Femenino = [];
const Masculino = [];
class Estudiante {
  constructor(cedula, nombre, email, género, celular) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.email = email;
    this.género = género;
    this.celular = celular;
}informacion(){
  console.log(`Identificado con la C.C ${ this.cedula}, su nombre es ${this.nombre}, su email ${this.email}, de género ${this.género} y número de telefono ${this.celular}`);
}
}

class Inmueble {
  constructor(numeroHabitación, cantidaddeMeses, costo) {
    this.numeroHabitación = numeroHabitación;
    this.costo = costo;
    this.cantidadMeses = cantidaddeMeses;
  }
  
  get valortotal() {
    return this.calcularvalor();
  }
  
  calcularvalor() {
    return this.cantidadMeses * this.costo;
  }
}

class Servicio {
  constructor(estudiante, habitación, numeroContrato, fecha) {
    this.estudiante = estudiante;
    this.habitación = habitación;
    this.numeroContrato = numeroContrato;
    this.fecha = fecha;
  }datosimportantes(){
    console.log(`Estudiante ${this.estudiante} tiene el contrato número ${this.numeroContrato} con la habitación ${this.habitación} hasta el ${this.fecha}`);
  }
}
const Estudiante1=new Estudiante(4548,"Karla","karla5@gmail.com","Femenino",3134879651);
console.log(Estudiante1.informacion());
const inmueble1=new Inmueble(8,5,2000);
console.log(inmueble1.valortotal);
const Servicio1=new Servicio("Karla",8,14,"01/05/2023");
console.log(Servicio1.datosimportantes());

const Estudiante2=new Estudiante(4731,"Felipe","juan19@gmail.com","Masculino",313142657);
console.log(Estudiante2.informacion());
const inmuble2=new Inmueble(9,6,2000);
console.log(inmuble2.valortotal);
const Servicio2=new Servicio("Felipe",9,17,"24/05/2023");
console.log(Servicio2.datosimportantes());

const Estudiante3=new Estudiante(3791,"Angelica","ange75@gmail.com","Femenino",313449257);
console.log(Estudiante3.informacion());
const inmuble3=new Inmueble(10,7,3000);
console.log(inmuble3.valortotal);
const Servicio3=new Servicio("Angelica",10,18,"01/06/2023");
console.log(Servicio3.datosimportantes());

if (Estudiante1.género === "Femenino") {
  Femenino.push(Estudiante1);
} else if (Estudiante1.género === "Masculino") {
  Masculino.push(Estudiante1);
}

if (Estudiante2.género === "Femenino") {
  Femenino.push(Estudiante2);
} else if (Estudiante2.género === "Masculino") {
  Masculino.push(Estudiante2);
}

if (Estudiante3.género === "Femenino") {
  Femenino.push(Estudiante3);
} else if (Estudiante3.género === "Masculino") {
  Masculino.push(Estudiante3);
}

console.log("Estudiantes Femeninos:");
console.log(Femenino);

console.log("Estudiantes Masculinos:");
console.log(Masculino);