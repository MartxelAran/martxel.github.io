// Fecha objetivo (puedes cambiarla según tus necesidades)
const fechaObjetivo = new Date('2024-05-22T00:00:00');
            
function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    // Calcular días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar el HTML con los valores calculados
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Asegurarse de que el contador se actualice inmediatamente al cargar la página
actualizarContador();