/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información

    var estudiante = {
        nombre:"María",
        apellidos:"García López",
        edad:20,
        curso:"2º DAW",
        // TODO: Completar las propiedades del objeto

        mostrarInfo: function () {
            // TODO: Retornar HTML con la información del estudiante
            // Sugerencia: usar template strings o concatenación
            return `<h3>Datos del alumno </h3> 
            <h5>Nombre:</h5>  ${this.nombre} 
            <h5>Apellidos:</h5>  ${this.apellidos} 
            <h5>Edad:</h5>  ${this.edad} 
            <h5>Curso:</h5>  ${this.curso}`;   
             // Cambiar esta línea
        }
    };

    // TODO: Mostrar el resultado en el DOM
    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
}

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    // TODO: Obtener el valor del input con id "color-input"
    var colorInput = document.getElementById("color-input").value;
    var nuevoColor  = colorInput.trim();
    if (nuevoColor === "") {
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-danger'>Por favor, ingresa un color válido</div>";
        return;
    }
    // TODO: Agregar el color al array usando push()
    colores.push(nuevoColor);
    // TODO: Limpiar el input
    document.getElementById("color-input").value = "";
    // TODO: Mostrar mensaje de confirmación
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-success'>Color " + colorInput + " agregado correctamente</div>";
     

}

function eliminarUltimoColor() {
    var ultimoColor = colores[colores.length - 1];
    // TODO: Eliminar el último elemento del array usando pop()
   var colorEliminado = colores.pop();
    
    // TODO: Mostrar mensaje indicando qué color se eliminó
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-info'>Color " + colorEliminado + " eliminado correctamente</div>";
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    if (colores.length === 0) {
        document.getElementById("resultado-ej2").innerHTML +=
            "<div class='alert alert-warning'>El array ahora está vacío</div>";
    }
}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista
    // TODO: Completar el bucle para mostrar los colores

    var html = "<h5>Colores en el array:</h5><ul>";
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>";
    }   
    html += "</ul>";

    document.getElementById("resultado-ej2").innerHTML = html;      
   

    
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    productos = [
        // TODO: Completar con objetos producto
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" }
        { nombre: "Portatil", precio: 700, categoria: "Electrónicos" },
        { nombre: "Pantalon", precio: 30, categoria: "Ropa" },
        { nombre: "Televisor", precio: 300, categoria: "Electrónicos" },
        { nombre: "Zapatillas", precio: 20, categoria: "Calzado" },
        { nombre: "Libro", precio: 40, categoria: "Literatura" }
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
    productos.sort(function(a, b) {
        return a.precio - b.precio;
    });

    mostrarProductos(productos);
    
}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()
    var productosCaros = productos.filter(function(producto) {
        return producto.precio > 50;
    });


     // TODO: Implementar el filtro
    mostrarProductos(productosCaros);
}

function mostrarProductos(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría

    var html = "";
    // TODO: Recorrer el array y crear HTML para cada producto
    arrayProductos.forEach(function(producto) {
        html +=`
         <div class="producto">
         <h3>${producto.nombre}</h3>
         <p>Precio: ${producto.precio}€</p>
         <p>Categoría: ${producto.categoria}</p>
         </div>
        `;
    });


    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10
        if (isNaN(nota) || nota < 0 || nota > 10) {
            document.getElementById("resultado-ej4").innerHTML = 
            "<div class='alert alert-danger'>La nota debe estar entre 0 y 10</div>";
            return;
        }
        // TODO: Agregar la nota al array de notas
        
        this.notas.push(nota);

        // TODO: Mostrar mensaje de confirmación
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-success'>Nota " + nota + " agregada correctamente</div>";
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        if(this.notas.length === 0) {
            return 0;
        }else {
            var suma = 0;
            for(var i = 0; i < this.notas.length; i++) {
                suma += this.notas[i];
            }
            
        // TODO: Retornar el promedio redondeado a 2 decimales
        var promedio = suma / this.notas.length;
            return promedio.toFixed(2);
        }
         
        // Pista: usar reduce() o un bucle for
        // Cambiar esta línea
    },

    mostrarNotas: function() {
        // TODO: Retornar HTML con todas las notas
        var html = "<h5>Notas del estudiante:"+ " "+this.nombre +"</h5>";
        // TODO: Incluir el promedio si hay notas
        if (this.notas.length === 0) {
            html += "<div class='alert alert-warning'>No hay notas registradas</div>";
            return html;
        }
        html += "<ul>";
        for (var i = 0; i < this.notas.length; i++) {
            html += "<li>Nota:" + ""+ this.notas[i] + "</li>";
        }
        html += "</ul>";
        
        return html; // Cambiar esta línea
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    var notaInput = document.getElementById("nota-input");
    // TODO: Convertir a número
    var nota = parseFloat(notaInput.value);
    // TODO: Llamar al método agregarNota del objeto
    estudianteNotas.agregarNota(nota);
    // TODO: Limpiar el input
    notaInput.value = "";
    // TODO: Actualizar la visualización
    mostrarNotasEstudiante();
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    var promedio = estudianteNotas.calcularPromedio();
    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML =
        "<div class='alert alert-info'>Promedio de notas: " + promedio + "</div>";
}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    var html = estudianteNotas.mostrarNotas();
    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML = html;
}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        { nombre: "Ana", departamento: "Ventas", salario: 3200, antiguedad: 5 },
        { nombre: "Luis", departamento: "Marketing", salario: 2800, antiguedad: 3 },
        { nombre: "Marta", departamento: "IT", salario: 4000, antiguedad: 7 },
        { nombre: "Jorge", departamento: "Recursos Humanos", salario: 2500, antiguedad: 2 },
        { nombre: "Sofía", departamento: "Finanzas", salario: 3500, antiguedad: 4 },
        { nombre: "Carlos", departamento: "IT", salario: 4500, antiguedad: 6 }
        // TODO: Completar con datos de empleados
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
     var departamentoInput = document.getElementById("departamento-input");
     var departamento = departamentoInput.value.trim();

     if (departamento === "") {
        document.getElementById("resultado-ej5").innerHTML =
            "<div class='alert alert-danger'>Por favor, ingresa un departamento válido</div>";
        return;
    }
    // TODO: Filtrar empleados por departamento

        var empleadosDepto = empleados.filter(function(empleado) {
        return empleado.departamento.toLowerCase() === departamento.toLowerCase();
    });

    // TODO: Mostrar los resultados

    if (empleadosDepto.length === 0) {
        document.getElementById("resultado-ej5").innerHTML =
            "<div class='alert alert-warning'>No se encontraron empleados en el departamento " + departamento + "</div>";
        return;
    }else {
        mostrarEmpleados(empleadosDepto);
    }

   

    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = empleados.filter(function(empleado){
        return empleado.salario > 3000;
    }); // TODO: Implementar filtro

    if (empleadosAltoSalario.length === 0) {
        document.getElementById("resultado-ej5").innerHTML =
            "<div class='alert alert-warning'>No hay empleados con salario mayor a 3000€</div>";
        return;
    }
    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario
    if (arrayEmpleados.length === 0) {
        document.getElementById("resultado-ej5").innerHTML =
            "<div class='alert alert-warning'>No hay empleados para mostrar</div>";
        return;
    }

    
    // TODO: Crear HTML para cada empleado
    var html = "<h5>Empleados:</h5>";
    arrayEmpleados.forEach(function(empleado) {
        html += `
        <div class="empleado">
            <h3>${empleado.nombre}</h3>
            <p>Departamento: ${empleado.departamento}</p>
            <p>Salario: ${empleado.salario}€</p>
            </p>Antigüedad: ${empleado.antiguedad} años</p>
        </div>
        `;
    });
    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    if (ciudades.length === 0) {
        document.getElementById("resultado-ej6").innerHTML =
            "<div class='alert alert-warning'>El array de ciudades está vacío</div>";
        return;
    }
    var eliminadas = ciudades.splice(2, 2); // Elimina 2 elementos desde el índice 2

    // TODO: Mostrar qué elementos se eliminaron
    var html = "<h5>Ciudades eliminadas:</h5>" + eliminadas.join(", ") + "<br>";
   
    // TODO: Mostrar el array resultante
     html += "<h5>Array resultante:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    if (ciudades.length === 0) {
        document.getElementById("resultado-ej6").innerHTML =
            "<div class='alert alert-warning'>El array de ciudades está vacío</div>";
        return;
    }
    // TODO: Mostrar la porción extraída
    var porcion = ciudades.slice(1, 4); // Extrae desde índice 1 hasta 3
    var html = "<h5>Porción extraída (índices 1 a 3):</h5>" + porcion.join(", ") + "<br>";
    // TODO: Mostrar que el array original no se modifica
    html += "<h5>Array original (sin modificar):</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    var ciudadEncontrada = ciudades.find(function(ciudad) {
        return ciudad.toLowerCase() === "madrid";
    });
    // TODO: Usar indexOf() para encontrar su posición
    var indiceMadrid = ciudades.indexOf("Madrid");
    // TODO: Mostrar los resultados
    var html = "";
    if (ciudadEncontrada) {
        html += "<div class='alert alert-success'>Ciudad encontrada: " + ciudadEncontrada + "</div>";
        html += "<div class='alert alert-info'>Índice de Madrid: " + indiceMadrid + "</div>";
    } else {
        html += "<div class='alert alert-warning'>Madrid no se encontró en el array</div>";
    }
    document.getElementById("resultado-ej6").innerHTML = html;
}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    // TODO: Asignar propiedades usando this
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;
    // TODO: Crear método acelerar() que incremente la velocidad
    this.acelerar = function() {
        this.velocidad += 10;
    };
    // TODO: Crear método mostrarInfo() que retorne información
    this.mostrarInfo = function() {
        return `<h3>Información del vehículo</h3>
        <h5>Marca:</h5> ${this.marca}
        <h5>Modelo:</h5> ${this.modelo}
        <h5>Año:</h5> ${this.año}
        <h5>Velocidad actual:</h5> ${this.velocidad} km/h`;
    };
}

var vehiculos = [];

function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    var vehiculo1 = new Vehiculo("Toyota", "Corolla", 2020);
    var vehiculo2 = new Vehiculo("Honda", "Civic", 2019);
    var vehiculo3 = new Vehiculo("Ford", "Focus", 2018);
    // TODO: Agregar al array vehiculos

    vehiculos.push(vehiculo1, vehiculo2, vehiculo3);    

    mostrarInfoVehiculos();
}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    for (var i = 0; i < vehiculos.length; i++) {
        vehiculos[i].acelerar();
    }
    // TODO: Actualizar la visualización
    mostrarInfoVehiculos(); 

}

function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    if (vehiculos.length === 0) {
        document.getElementById("resultado-ej7").innerHTML =
            "<div class='alert alert-warning'>No hay vehículos para mostrar</div>";
        return;
    }
    var html = "<h5>Información de los vehículos:</h5>";
    // TODO: Recorrer array y mostrar info de cada vehículo

    for (var i = 0; i < vehiculos.length; i++) {
        html += vehiculos[i].mostrarInfo() + "<hr>";
    }   

    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios
    matriz = [];
    for (var i = 0; i < 3; i++) {
        var fila = [];          
    // Pista: usar bucles anidados y Math.random()
        for (var j = 0; j < 3; j++) {
            var numeroAleatorio = Math.floor(Math.random() * 10); // Números del 0 al 9
            fila.push(numeroAleatorio);
        }
        matriz.push(fila);
    }
    mostrarMatriz();
}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal
    var suma = 0;
    for (var i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }   
    // TODO: Mostrar el resultado
    document.getElementById("resultado-ej8").innerHTML =
        "<div class='alert alert-info'>Suma de la diagonal principal: " + suma + "</div>";  
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered'>";


    // TODO: Crear filas y celdas de la tabla
    for (var i = 0; i < 3; i++) {
        html += "<tr>"; 
        for (var j = 0; j < 3; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }           
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // TODO: Crear array con números del 1 al 10
    numeros = [1,2,3,4,5,6,7,8,9,19]; // TODO: Completar

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // TODO: Usar map() para duplicar todos los números

    if (numeros.length === 0) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='alert alert-warning'>El array de números está vacío</div>";
        return;
    }
    var duplicados =  numeros.map(function(num){
        return num * 2;
    }); // TODO: Implementar map

    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    // TODO: Usar filter() para obtener solo números pares

    if (numeros.length === 0) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='alert alert-warning'>El array de números está vacío</div>";
        return;
    }
    var pares = numeros.filter(function(num){
        return num % 2 === 0;
    }); // TODO: Implementar filter

    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    // TODO: Usar reduce() para sumar todos los números
    if (numeros.length === 0) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='alert alert-warning'>El array de números está vacío</div>";
        return;
    }
    var suma =  numeros.reduce(function(acumulador, num){
        return acumulador + num;
    }, 0); // TODO: Implementar reduce

    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = ""; // TODO: Obtener del input
    var autor = ""; // TODO: Obtener del input
    var año = 0; // TODO: Obtener y convertir a número
    var genero = ""; // TODO: Obtener del select
    titulo = document.getElementById("libro-titulo").value.trim();
    autor = document.getElementById("libro-autor").value.trim();
    año = parseInt(document.getElementById("libro-year").value);
    genero = document.getElementById("libro-genero").value;

    // TODO: Validar que todos los campos estén completos
    if (titulo === "" || autor === "" || isNaN(año) || genero === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-danger'>Por favor, completa todos los campos.</div>";
        return;
    }

    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        // TODO: Completar propiedades
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };

    // TODO: Limpiar los inputs
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";
    // TODO: Mostrar mensaje de confirmación
    // TODO: Actualizar visualización
    biblioteca.push(libro);
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-success'>Libro '" + titulo + "' agregado a la biblioteca.</div>";
    mostrarBiblioteca();
}

function eliminarLibro(indice) {
    var eliminado = biblioteca.splice(indice, 1);
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-warning'>Libro '" + eliminado[0].titulo + "' eliminado.</div>";
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente
    // TODO: Implementar sort
    var librosOrdenados = biblioteca.slice(); // Crear copia del array
    librosOrdenados.sort(function (a, b) {
        if (a.titulo < b.titulo) return -1;
        if (a.titulo > b.titulo) return 1;
        return 0;
    });

    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    // TODO: Filtrar libros por género
    var librosFiltrados = []; // TODO: Implementar filter
    var generoSeleccionado = document.getElementById("btn-filtrar-genero").value;

    librosFiltrados = biblioteca.filter(function (libro) {
        return libro.genero === generoSeleccionado;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020
    var recientes = []; // TODO: Implementar filter
    recientes = biblioteca.filter(function (libro) {
        return libro.año > 2020;
    });

    mostrarLibros(recientes);
}

function mostrarLibros(arrayLibros) {
    // TODO: Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        // TODO: Crear HTML para cada libro
    }
    for (var i = 0; i < arrayLibros.length; i++) {
        html += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${arrayLibros[i].titulo}</h5>
                    <p class="card-text"><strong>Autor:</strong> ${arrayLibros[i].autor}</p>
                    <p class="card-text"><strong>Año de Publicación:</strong> ${arrayLibros[i].año}</p>
                    <p class="card-text"><strong>Género:</strong> ${arrayLibros[i].genero}</p>
                    <button class="btn btn-danger btn-sm" onclick="eliminarLibro(${i})">
                            Eliminar libro
                        </button>
                </div>
            </div>
        `;
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}


// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

    document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10


    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);
});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/