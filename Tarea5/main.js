
    function Cambios(){

        document.getElementById("p1");
        p1.textContent =" Texto modificado por JavaScript";

        document.getElementById("resaltado");
        resaltado.innerHTML ="<p style='background-color: yellow'> Este es el segundo párrafo</p>";

        var color  = document.getElementById("color");
        color.style.color = "red";
    }
  

    function AñadirPar () {
        
        var contenedor = document.getElementById("contenido1");
        var añadirPar = document.createElement("p");
        añadirPar.textContent = "Nuevo párrafo añadido";
        contenedor.appendChild(añadirPar);

        Mouse();
    }
  

    function Eliminar() {

        var contenedor = document.getElementById("contenido1");
        var ultimopar = contenedor.lastElementChild;
       
        if(ultimopar) {
          ultimopar.remove();
        }else{
          alert("No hay párrafos para eliminar");
        }

    }

  //Manejo de eventos del raton
  
    function Mouse(){

      var parrafos = document.querySelectorAll(" p");
          
      for(let i= 0; i< parrafos.length; i++){
        parrafos[i].addEventListener("mouseenter", function(){
          this.style.backgroundColor = "lightgray";
        });

        parrafos[i].addEventListener("mouseleave", function(){
          this.style.backgroundColor = "";
      });

    }
  }
   
  document.addEventListener("DOMContentLoaded", Mouse);
 
    function cambiarTexto(event) {
      event.preventDefault();
      
      var input = document.getElementById("nuevoTexto");
      var nuevoTexto = input.value.trim();

      var parrafo = document.querySelector("#contenido2 p");
      var mensajeError = document.getElementById("mensajeError");

      if(nuevoTexto === "") {
        mensajeError.style.display = "block";
        parrafo.textContent = "Esto es un párrafo";
      } else {
        mensajeError.style.display = "none";
        parrafo.textContent = nuevoTexto;
        input.value = "";
      }

   
    }
  

  //Lista de tareas interactivas

  
     
     function agregarTarea() {
      var input = document.getElementById("nuevaTarea");
      var tareaTexto = input.value.trim();

      if(tareaTexto === "") {
        alert("Por favor, escribe una tarea.");
        return;
      }

      var lista = document.getElementById("listaTareas");
      var nuevaTarea = document.createElement("li");
      nuevaTarea.textContent = tareaTexto;

      nuevaTarea.addEventListener("click", function() {
        this.classList.toggle("completada");
      });

      lista.appendChild(nuevaTarea);
      input.value = "";
     }
      function borrarCompletadas() {
        var tareas = document.querySelectorAll("#listaTareas li.completada");
        tareas.forEach(function(tarea){
          tarea.remove();
          }
        );
      }



