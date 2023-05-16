let reservaciones=[];
class usuario{
  constructor(nombre,edad,correo,formadepago){
    this.nombre=nombre;
    this.edad=edad;
    this.correo=correo;
    this.formadepago=formadepago;
  }presentacion(){
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años soy estudiante y mi correo es ${this.correo} y pago con ${this.formadepago}`)}
}
class tren{
  constructor(cantidad, asientosdisponibles, reservas, precio){
    this.cantidad=cantidad;
    this.asientosdisponibles=asientosdisponibles;
    this.reservas=reservas;
    this.precio=precio;
  }cuposdisponibles(){
    if(this.cantidad - this.asientosdisponibles >0){
      console.log(`Hay cupos disponibles`);
    }else{
      console.log(`No hay cupos disponibles`);
    }
  }reservacupos() {
    if (this.reservas.length < this.cantidad) {
      reservaciones.push(1);
    } else {
      console.log(`No hay cupos disponibles`);
    }
  }
}
class tiquete {
  constructor(Usuario, salida, origen, destino) {
    this.usuario = Usuario;
    this.salida = salida;
    this.origen = origen;
    this.destino = destino;
  }
}
const Usuario1= new usuario("Juan Garay",19,"jGaray@gmail.com","Efectivo");
console.log(Usuario1.presentacion());
const vehiculo= new tren(15,5,Usuario1,3200);
console.log(vehiculo.cuposdisponibles());
const voleto= new tiquete(Usuario1, "5:00PM", "Pereira", "Armenia");
console.log(voleto);