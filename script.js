// ==========================================
// DEFINICIÓN DE LAS FUNCIONES DE LOS 6 RETOS
// ==========================================

// Reto 1: Mensaje de Bienvenida (Recibe nombre y versión)
function crearMensajeBienvenida(nombre, version) {
    return `Bienvenido a ${nombre}, versión ${version}.`;
}

// Reto 2: Concatenación tradicional con el operador +
function concatenarConMas(parte1, parte2) {
    return parte1 + " " + parte2;
}

// Reto 3: Interpolación de variables en plantilla
function interpolarVariables(nombre, curso) {
    return `Curso de ${nombre}: ${curso}.`;
}

// Reto 4: Operación matemática interpolada (retorna String)
function calcularTotalComoString(precio, cantidad) {
    return `${precio * cantidad}`;
}

// Reto 5: Verificación del tipo de dato resultante
function tipoDeResultadoInterpolado() {
    return typeof `${1 + 2}`;
}

// Reto 6: Construcción de texto en múltiples líneas
function crearNotaMultilinea(titulo, item1, item2) {
    return `${titulo}
- ${item1}
- ${item2}`;
}


// ==========================================
// ESCUCHADOR DEL FORMULARIO Y EJECUCIÓN PASO A PASO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-registro');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            console.clear(); // Limpia la consola para ver los resultados ordenados
            console.log("=============== INICIO DE EJECUCIÓN PASO A PASO ===============");

            // -----------------------------------------------------------------
            // PASO 1: Reto 1 - Mensaje de Bienvenida
            // -----------------------------------------------------------------
            const valNombre = document.getElementById('nombre').value.trim();
            const valVersion = document.getElementById('version_app').value.trim();
            
            const resultadoReto1 = crearMensajeBienvenida(valNombre, valVersion);
            console.log("-> PASO 1 (Reto 1 - Bienvenida):", resultadoReto1);


            // -----------------------------------------------------------------
            // PASO 2: Reto 2 - Concatenar Nombre y Apellido con '+'
            // -----------------------------------------------------------------
            const valApellido = document.getElementById('apellido').value.trim();
            
            const resultadoReto2 = concatenarConMas(valNombre, valApellido);
            console.log("-> PASO 2 (Reto 2 - Concatenación con +):", resultadoReto2);


            // -----------------------------------------------------------------
            // PASO 3: Reto 3 - Interpolación de Variables (Curso)
            // -----------------------------------------------------------------
            const valCurso = document.getElementById('nombre_curso').value.trim();
            
            const resultadoReto3 = interpolarVariables('SENA', valCurso);
            console.log("-> PASO 3 (Reto 3 - Interpolación):", resultadoReto3);


            // -----------------------------------------------------------------
            // PASO 4: Reto 4 - Cálculo Matemático en Plantilla
            // -----------------------------------------------------------------
            const valPrecio = parseFloat(document.getElementById('precio_item').value) || 0;
            const valCantidad = parseInt(document.getElementById('cantidad_item').value, 10) || 0;
            
            const resultadoReto4 = calcularTotalComoString(valPrecio, valCantidad);
            console.log(`-> PASO 4 (Reto 4 - Total Calculado de ${valPrecio} x ${valCantidad}):`, resultadoReto4);


            // -----------------------------------------------------------------
            // PASO 5: Reto 5 - Tipo de dato de una interpolación
            // -----------------------------------------------------------------
            const resultadoReto5 = tipoDeResultadoInterpolado();
            console.log("-> PASO 5 (Reto 5 - Comprobación de tipo typeof):", resultadoReto5);


            // -----------------------------------------------------------------
            // PASO 6: Reto 6 - Nota Multilínea
            // -----------------------------------------------------------------
            const valItem1 = document.getElementById('item_nota1').value.trim();
            const valItem2 = document.getElementById('item_nota2').value.trim();
            
            const resultadoReto6 = crearNotaMultilinea(`Resumen de ${valNombre}`, valItem1, valItem2);
            console.log("-> PASO 6 (Reto 6 - Nota Multilínea):\n" + resultadoReto6);


            // -----------------------------------------------------------------
            // PASO FINAL: Armar objeto y guardar en LocalStorage
            // -----------------------------------------------------------------
            const keyPersona = `${valNombre} ${valApellido}`.toLowerCase();

            const registroUsuario = {
                nombreCompleto: `${valNombre} ${valApellido}`,
                documento: {
                    tipo: document.getElementById('tipo_identificacion').value,
                    num: document.getElementById('numero_identificacion').value
                },
                nacimiento: document.getElementById('nacimiento').value,
                celular: document.getElementById('celular').value,
                correo: document.getElementById('correo').value,
                ubicacion: {
                    pais: document.getElementById('pais').value,
                    ciudad: document.getElementById('ciudad').value
                },
                retosEjecutados: {
                    reto1: resultadoReto1,
                    reto2: resultadoReto2,
                    reto3: resultadoReto3,
                    reto4: resultadoReto4,
                    reto5: resultadoReto5,
                    reto6: resultadoReto6
                },
                tratamiento_datos: document.getElementById('tratamiento_datos').checked ? 'Aceptado' : 'No aceptado',
                fechaActualizacion: new Date().toLocaleString()
            };

            // Almacenamiento local
            localStorage.setItem(keyPersona, JSON.stringify(registroUsuario));

            console.log("===============================================================");
            console.log(`¡Éxito! Datos guardados en localStorage con la clave: "${keyPersona}"`);
            console.log("Objeto guardado:", registroUsuario);
        });
    }
});