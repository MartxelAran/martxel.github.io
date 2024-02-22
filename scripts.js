document.addEventListener('DOMContentLoaded', function() {
    var nav_values = document.querySelectorAll(".nav_values");
    if(nav_values){
        
        nav_values.forEach(function(nav){
            nav.addEventListener("click", function(target){
                if(target.originalTarget.id=="sobre_mi"){
                    fetch("templates/sobre-mi.html")
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('section-container').innerHTML = html;
                    })
                    .catch(error => console.error('Error al cargar la sección:', error));
                    return false;
                }
                if(target.originalTarget.id=="proyectos"){
                    fetch("templates/proyectos.html")
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('section-container').innerHTML = html;
                    })
                    .catch(error => console.error('Error al cargar la sección:', error));
                    return false;
                }
                if(target.originalTarget.id=="contacto"){
                    fetch("templates/contacto.html")
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('section-container').innerHTML = html;
                    })
                    .catch(error => console.error('Error al cargar la sección:', error));
                    return false;
                }
            })
        })
    }
});