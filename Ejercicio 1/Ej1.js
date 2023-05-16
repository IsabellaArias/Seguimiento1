let clientes = [];
let barberos = [];
class Cliente {
    constructor(cedula, nombre, correo, celular) {
      this.cedula = cedula;
      this.nombre = nombre;
      this.correo = correo;
      this.celular = celular;
    }
  }
  class Barbero {
    constructor(nombre, celular) {
      this.nombre = nombre;
      this.celular = celular;
    }
  }
  class Servicio {
    constructor(nombre, barbero, cliente, fecha, hora, servicio, costo) {
      this.nombre = nombre;
      this.barbero = barbero;
      this.cliente = cliente;
      this.fecha = fecha;
      this.hora = hora;
      this.servicio = servicio;
      this.costo = costo;
    }
  }
  
  function agregarCliente() {
    const cedula = prompt("Ingrese la cédula del cliente:");
    const nombre = prompt("Ingrese el nombre del cliente:");
    const correo = prompt("Ingrese el correo del cliente:");
    const celular = prompt("Ingrese el celular del cliente:");
  
    const cliente = new Cliente(cedula, nombre, correo, celular);
    clientes.push(cliente);
  }
  function agregarBarbero() {
    const nombre = prompt("Ingrese el nombre del barbero:");
    const celular = prompt("Ingrese el celular del barbero:");
    const barbero = new Barbero(nombre, celular);
    barberos.push(barbero);
  }
  function pedirCita() {
    const nombre = prompt("Ingrese su nombre:");
    const celular = prompt("Ingrese su celular:");
    let opcionesBarberos = "";
    for (let i = 0; i < barberos.length; i++) {
      opcionesBarberos += `${i + 1}. ${barberos[i].nombre}\n`;
    }
    const barberoSeleccionado = parseInt(prompt(`Seleccione el barbero:\n${opcionesBarberos}`)) - 1;
    const clienteEncontrado = clientes.find(cliente => cliente.nombre === nombre && cliente.celular === celular);
    if (!clienteEncontrado) {
      const cedula = prompt("Ingrese la cédula del cliente:");
      const correo = prompt("Ingrese el correo del cliente:");
      const cliente = new Cliente(cedula, nombre, correo, celular);
      clientes.push(cliente);
      solicitarServicio(barberoSeleccionado, cliente);
    } else {
      solicitarServicio(barberoSeleccionado, clienteEncontrado);
    }
  }
  function solicitarServicio(barberoSeleccionado, cliente) {
    let opcionesServicios = "";
    for (let i = 0; i < servicios.length; i++) {
      opcionesServicios += `${i + 1}. ${servicios[i]}\n`;
    }
    const servicioSeleccionado = parseInt(prompt(`Seleccione el servicio:\n${opcionesServicios}`)) - 1;
    const fecha = prompt("Ingrese la fecha (DD/MM/AAAA):");
    const hora = prompt("Ingrese la hora (HH:MM):");
    const costo = parseInt(prompt("Ingrese el costo del servicio:"));
  
    const servicio = new Servicio(servicios[servicioSeleccionado], barberos[barberoSeleccionado], cliente, fecha, hora, servicios[servicioSeleccionado], costo);
    citas.push(servicio);
  
    alert(`Su cita ha sido registrada. El costo del servicio es
    
${costo}.\nGracias por su visita.`);
}

const servicios = ["Corte de cabello", "Barba", "Corte y barba", "Afeitado", "Tintura"];
const citas = [];

function mostrarMenu() {
let opcion = "";
while (opcion !== "0") {
opcion = prompt("Seleccione una opción:\n1. Agregar cliente\n2. Agregar barbero\n3. Pedir cita\n0. Salir");
switch (opcion) {
case "1":
agregarCliente();
break;
case "2":
agregarBarbero();
break;
case "3":
pedirCita();
break;
case "0":
break;
default:
alert("Opción inválida.");
break;
}
}
}

mostrarMenu();