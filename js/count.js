// Fecha de finalización de la cuenta regresiva (ejemplo: 30 de junio de 2024 a las 15:37:25)
var countDownDate = new Date("July 30 2024 13:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var x = setInterval(function() {

    // Obtiene la fecha y hora actual
    var now = new Date().getTime();
    
    // Encuentra la distancia entre ahora y la fecha de finalización
    var distance = countDownDate - now;
    
    // Cálculos para días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Actualiza los elementos HTML con los valores calculados
    document.getElementById("days").innerHTML = days + "<br> Días";
    document.getElementById("hours").innerHTML = hours + "<br> Horas";
    document.getElementById("minutes").innerHTML = minutes + "<br> Mints";
    document.getElementById("seconds").innerHTML = seconds + "<br> Segs";
    
    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0 <br> Días";
        document.getElementById("hours").innerHTML = "0 <br> Horas";
        document.getElementById("minutes").innerHTML = "0 <br> Mints";
        document.getElementById("seconds").innerHTML = "0 <br> Segs";
    }
}, 1000); // Actualiza cada segundo
