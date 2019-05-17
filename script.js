// Consigue el elemento provincias/poblaciones por su identificador id. Es un método del DOM de HTML
        var titulo = document.getElementById("titulos");
        var subtitulo = document.getElementById("subtitulos");
        
        // Añade un evento change al elemento titulo, asociado a la función cambiar()
        if (titulo.addEventListener) {     // Para la mayoría de los navegadores, excepto IE 8 y anteriores
            titulo.addEventListener("change", cambiar);
        } else if (titulo.attachEvent) {   // Para IE 8 y anteriores
            titulo.attachEvent("change", cambiar); // attachEvent() es el método equivalente a addEventListener()
            
        }

        // Definición de la función cambiar()
        function cambiar() {
            for (var i = 0; i < subtitulo.options.length; i++)
            

            // Muestra solamente los subtitulo que sean iguales a los titulo seleccionados, según la propiedad display
            if(subtitulo.options[i].getAttribute("codigo") == titulo.options[titulo.selectedIndex].getAttribute("codigo")){
                subtitulo.options[i].style.display = "block";
            }else{
                subtitulo.options[i].style.display = "none";
            }
        
                    
            subtitulo.value = "";
        }

        // Llamada a la función cambiar()
        cambiar();