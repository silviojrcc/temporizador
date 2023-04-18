(function () {
    const formulario = document.querySelector(".formulario");
    const display = document.querySelector(".display");
    const pausarBtn = document.querySelector('.pausar');
    const resetearBtn = document.querySelector('.resetear');
    const iniciarBtn = document.querySelector(".iniciar");
    
    function cuentaRegresiva(minutos,segundos){    
        let tiempoTotal = (minutos * 60) + segundos;

        intervalo = setInterval(() => {
            let minutosFaltantes = Math.floor(tiempoTotal / 60);
            let segundosFaltantes = tiempoTotal % 60;

            display.textContent = `${formatearTiempo(minutosFaltantes)}:${formatearTiempo(segundosFaltantes)}`;

            if (tiempoTotal <= 0) {
                resetear();
            } else {
                tiempoTotal--;
            }

        },1000);
    }

    function formatearTiempo(tiempo) {
        return (tiempo < 10) ? '0' + tiempo : tiempo;
    }

    function pausar() {
        clearInterval(intervalo);
    }

    function resetear() {
        clearInterval(intervalo);
        segundos = 0;
        minutos = 0;
        display.textContent = '00:00';
        pausarBtn.classList.add("d-none");
        resetearBtn.classList.add("d-none");
        formulario.classList.remove("d-none");
    }

    formulario.addEventListener("submit", (e) =>{
        e.preventDefault();
        const minutos = parseInt(formulario.minutos.value) || 0;
        const segundos = parseInt(formulario.segundos.value) || 0;
        formulario.classList.add("d-none");
        iniciarBtn.classList.add("d-none");
        pausarBtn.classList.remove("d-none");
        resetearBtn.classList.remove("d-none");
        cuentaRegresiva(minutos,segundos);
    });
    pausarBtn.addEventListener('click', () => {
        pausarBtn.classList.add("d-none");
        pausar();
    });
    resetearBtn.addEventListener('click', () => {
        resetear();
    });

})();