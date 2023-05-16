class Vehiculo {
    constructor(marca, modelo, precio, disponibilidad, caracteristicas) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
      this.disponibilidad = disponibilidad;
      this.caracteristicas = caracteristicas;
    }
  }
  
  class Alquiler {
    constructor(cliente, vehiculo, dias) {
      this.cliente = cliente;
      this.vehiculo = vehiculo;
      this.dias = dias;
    }
  
    calcularCosto() {
      return this.vehiculo.precio * this.dias;
    }
  }
  
  const vehiculo1 = new Vehiculo('Toyota', 'Corolla', 150, true, ['Color: Rojo', 'Transmisión: Automática']);
  const alquiler1 = new Alquiler('Juan', vehiculo1, 3);
  
  console.log(`El cliente ${alquiler1.cliente} debe pagar ${alquiler1.calcularCosto()} por el alquiler del vehículo ${alquiler1.vehiculo.marca} ${alquiler1.vehiculo.modelo} por ${alquiler1.dias} días.`);

  const vehiculo2 = new Vehiculo('kia', 'picanto', 130, true, ['Color: negro', 'Transmisión: Automática']);
  const alquiler2 = new Alquiler('isabella', vehiculo2, 2);
  
  console.log(`El cliente ${alquiler2.cliente} debe pagar ${alquiler2.calcularCosto()} por el alquiler del vehículo ${alquiler2.vehiculo.marca} ${alquiler2.vehiculo.modelo} por ${alquiler2.dias} días.`);