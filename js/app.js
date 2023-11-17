// 1. construyo mi clase, para luego hacer objetos
class Paciente {
  // 1.1 Constructor que inicializa las propiedades del paciente
  constructor(nombre, apellido, dni, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
  }

  // 1.2 Método para construir una fila de la tabla con los datos del paciente
  construirFila() {
    // Crear una nueva fila de la tabla
    const fila = document.createElement("tr");

    // Llenar la fila con celdas (td) que contienen los datos del paciente
    fila.innerHTML = `
      <td>${this.nombre}</td>
      <td>${this.apellido}</td>
      <td>${this.dni}</td>
      <td>${this.edad}</td>
      <td class="borrar_paciente btn btn-outline-danger text-danger px-3 ms-3"><i class="fa-solid fa-power-off"></i></td>
    `;

    // Obtener el botón de eliminación dentro de la fila y agregar un evento de clic
    const btn_borrarPaciente = fila.querySelector(".borrar_paciente");
    btn_borrarPaciente.addEventListener("click", () => this.eliminarPaciente(fila));

    // Devolver la fila construida
    return fila;
  }

  // 1.3 Método para eliminar paciente (lo utilizo arriba)
  eliminarPaciente(fila) {
    fila.remove();
  }
}

// 2. Obtengo la tabla y la almaceno en una variable
const tabla_cuerpo = document.querySelector("#tabla_cuerpo");

// 3. Creo una función, dentro de ella, creo el objeto paciente desde la clase Paciente y luego invoco el método construirFila
function agregar_paciente(event) {
  // Para que no se actualice la pantalla al dar submit (click en agregar)
  event.preventDefault();

  // Crear un objeto de la clase Paciente con los datos del formulario
  const paciente1 = new Paciente(
    document.querySelector("#paciente_nombre").value,
    document.querySelector("#paciente_apellido").value,
    document.querySelector("#paciente_dni").value,
    document.querySelector("#paciente_edad").value
  );

  // Llamar al método construirFila para obtener la fila de la tabla con los datos del paciente
  const fila = paciente1.construirFila();

  // Agregar la fila al cuerpo de la tabla
  tabla_cuerpo.appendChild(fila);
}

// 4. Agregar un evento de submit al formulario para llamar a la función agregar_paciente cuando se envíe el formulario
document.querySelector("#formulario_agregarPaciente").addEventListener("submit", agregar_paciente);
