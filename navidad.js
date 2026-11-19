// ============================================================
// CONFIGURACIÓN DE CAMPAÑA DE NAVIDAD - PLASMA SIGNS
// Cambia la fecha en este ÚNICO sitio del código.
// El aviso desaparecerá automáticamente al pasar la fecha límite.
// ============================================================
const FECHA_LIMITE_NAVIDAD = {
    // Fecha y hora límite en formato ISO (AAAA-MM-DDTHH:mm:ss)
    // Ejemplo: '2026-12-18T23:59:59' (hasta el 18 de diciembre a las 23:59:59)
    fechaLimite: '2026-12-18T23:59:59',
    
    // Texto visible que aparecerá en el aviso de la web
    textoFecha: '18 de diciembre'
};

document.addEventListener('DOMContentLoaded', () => {
    const bannerEl = document.getElementById('aviso-navidad');
    const fechaTextoEl = document.getElementById('fecha-limite-texto');
    
    if (!bannerEl) return;
    
    const ahora = new Date();
    const fechaLimite = new Date(FECHA_LIMITE_NAVIDAD.fechaLimite);
    
    // Si la fecha actual aún no ha superado la fecha límite, se muestra el aviso
    if (ahora <= fechaLimite) {
        if (fechaTextoEl) {
            fechaTextoEl.textContent = FECHA_LIMITE_NAVIDAD.textoFecha;
        }
        bannerEl.classList.remove('hidden');
    } else {
        // Al pasar la fecha límite, desaparece automáticamente
        bannerEl.remove();
    }
});
