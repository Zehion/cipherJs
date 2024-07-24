/**
 * se crea el evento que pertmita enviar la informacion
 * digitada en el textarea.editor al div #output-text
 */
//document.addEventListener('DOMContentLoaded', function() {
//    const encryptButton = document.getElementById('encrypt-button');
//    const textarea = document.querySelector('.editor');
//    const outputText = document.getElementById('output-text');

//    encryptButton.addEventListener('click', function() {
//        const textToEncrypt = textarea.value;
//        outputText.textContent = textToEncrypt;  // Por ahora, solo mostramos el texto sin encriptar
//    });
//});


/**
 * se crea el evento click en el cual se copia el texto presente en el div #output-text
 * y se genera una alerta para la comprovacion que se haya cargado al porta papeles
 */
// document.addEventListener('DOMContentLoaded', function() {
//     const encryptButton = document.getElementById('encrypt-button');
//     const textarea = document.querySelector('.editor');
//     const outputText = document.getElementById('output-text');
//     const copyButton = document.getElementById('copy-button');

//     encryptButton.addEventListener('click', function() {
//         const textToEncrypt = textarea.value;
//         const encryptedText = textToEncrypt; // Aquí puedes añadir tu lógica de encriptación
//         outputText.textContent = encryptedText;
//     });

//     copyButton.addEventListener('click', function() {
//         const textToCopy = outputText.textContent;
//         navigator.clipboard.writeText(textToCopy).then(function() {
//            alert('Texto copiado al portapapeles');
//         }).catch(function(err) {
//             console.error('Error al copiar el texto: ', err);
//         });
//     });
// });

/**
 * se crea el evento click de pegado del texto copiado al textarea.editor
 */
// document.addEventListener('DOMContentLoaded', function() {
//     const encryptButton = document.getElementById('encrypt-button');
//     const textarea = document.querySelector('.editor');
//     const outputText = document.getElementById('output-text');
//     const copyButton = document.getElementById('copy-button');

//     encryptButton.addEventListener('click', function() {
//         const textToEncrypt = textarea.value;
//         const encryptedText = textToEncrypt; // Aquí puedes añadir tu lógica de encriptación
//         outputText.textContent = encryptedText;
//     });

//     copyButton.addEventListener('click', function() {
//         const textToCopy = outputText.textContent;
//         navigator.clipboard.writeText(textToCopy).then(function() {
//            // alert('Texto copiado al portapapeles');
//         }).catch(function(err) {
//             console.error('Error al copiar el texto: ', err);
//         });
//     });

//     textarea.addEventListener('paste', function(event) {
//         navigator.clipboard.readText().then(function(text) {
//             textarea.value += text;
//         }).catch(function(err) {
//             console.error('Error al leer el portapapeles: ', err);
//         });
//         event.preventDefault();
//     });
// });


/**
 * se amplia el evento de copiado añadiendo la limpieza del textarea
 */
// document.addEventListener('DOMContentLoaded', function() {
//     const encryptButton = document.getElementById('encrypt-button');
//     const textarea = document.querySelector('.editor');
//     const outputText = document.getElementById('output-text');
//     const copyButton = document.getElementById('copy-button');

//     encryptButton.addEventListener('click', function() {
//         const textToEncrypt = textarea.value;
//         const encryptedText = textToEncrypt; // Aquí puedes añadir tu lógica de encriptación
//         outputText.textContent = encryptedText;
//         textarea.value = ''; // Limpia el textarea después de encriptar
//     });

//     copyButton.addEventListener('click', function() {
//         const textToCopy = outputText.textContent;
//         navigator.clipboard.writeText(textToCopy).then(function() {
//            // alert('Texto copiado al portapapeles');
//         }).catch(function(err) {
//             console.error('Error al copiar el texto: ', err);
//         });
//     });

//     textarea.addEventListener('paste', function(event) {
//         navigator.clipboard.readText().then(function(text) {
//             textarea.value += text;
//         }).catch(function(err) {
//             console.error('Error al leer el portapapeles: ', err);
//         });
//         event.preventDefault();
//     });
// });

/**
 * se valida si el usuario agrega texto en minuscula sin asentos ni caracteres especiales en caso
 * contrario se genera un mensage en la etiqueta div#message
 */
// document.addEventListener('DOMContentLoaded', function() {
//     const encryptButton = document.getElementById('encrypt-button');
//     const textarea = document.querySelector('.editor');
//     const outputText = document.getElementById('output-text');
//     const copyButton = document.getElementById('copy-button');
//     const messageDiv = document.getElementById('message');

//     encryptButton.addEventListener('click', function() {
//         const textToEncrypt = textarea.value;
//         const encryptedText = textToEncrypt; // Aquí puedes añadir tu lógica de encriptación
//         outputText.textContent = encryptedText;
//         textarea.value = '';
//     });

//     textarea.addEventListener('input', function() {
//         const text = textarea.value;
//         const regex = /^[a-z ]*$/;

//         if (!regex.test(text)) {
//             messageDiv.innerHTML = `
//                 <span>Solo se permiten letras minúsculas, </span>
//                 <span style="color: white;">sin acentos ni caracteres especiales.</span>
//             `;
//             messageDiv.style.visibility = 'visible';
//             messageDiv.style.opacity = '1';
//         } else {
//             messageDiv.style.visibility = 'hidden';
//             messageDiv.style.opacity = '0';
//         }
//     });

//     copyButton.addEventListener('click', function() {
//         const textToCopy = outputText.textContent;
//         navigator.clipboard.writeText(textToCopy).then(function() {
//             alert('Copiado al portapapeles');
//         }).catch(function(err) {
//             console.error('Error al copiar el texto al portapapeles: ', err);
//         });
//     });

//     textarea.addEventListener('paste', function(event) {
//         navigator.clipboard.readText().then(function(text) {
//             textarea.value += text;
//         }).catch(function(err) {
//             console.error('Error al leer el portapapeles: ', err);
//         });
//         event.preventDefault();
//     });
// });

/**
 * se realiza el proceso de encriptacion
 */
// document.addEventListener('DOMContentLoaded', function() {
//     const encryptButton = document.getElementById('encrypt-button');
//     const textarea = document.querySelector('.editor');
//     const outputText = document.getElementById('output-text');
//     const copyButton = document.getElementById('copy-button');
//     const messageDiv = document.getElementById('message'); // Agregar referencia al mensaje

//     function encryptText(text) {
//         const replacements = {
//             'e': 'enter',
//             'i': 'imes',
//             'a': 'ai',
//             'o': 'ober',
//             'u': 'ufat'
//         };

//         let encryptedText = '';
//         for (let char of text) {
//             if (replacements[char]) {
//                 encryptedText += replacements[char];
//             } else {
//                 encryptedText += char;
//             }
//         }
//         return encryptedText;
//     }

//     encryptButton.addEventListener('click', function() {
//         const textToEncrypt = textarea.value;
//         const encryptedText = encryptText(textToEncrypt);
//         outputText.textContent = encryptedText;
//         textarea.value = '';
//     });

//     textarea.addEventListener('input', function() {
//         const text = textarea.value;
//         const regex = /^[a-z ]*$/;

//         if (!regex.test(text)) {
//             messageDiv.innerHTML = `
//                 <span>Solo se permiten letras minúsculas, </span>
//                 <span style="color: white;">sin acentos ni caracteres especiales.</span>
//             `;
//             messageDiv.style.visibility = 'visible';
//             messageDiv.style.opacity = '1';
//         } else {
//             messageDiv.style.visibility = 'hidden';
//             messageDiv.style.opacity = '0';
//         }
//     });

//     copyButton.addEventListener('click', function() {
//         const textToCopy = outputText.textContent;
//         navigator.clipboard.writeText(textToCopy).then(function() {
//             alert('Texto copiado al portapapeles');
//         }).catch(function(err) {
//             console.error('Error al copiar el texto: ', err);
//         });
//     });

//     textarea.addEventListener('paste', function(event) {
//         navigator.clipboard.readText().then(function(text) {
//             textarea.value += text;
//         }).catch(function(err) {
//             console.error('Error al leer el portapapeles: ', err);
//         });
//         event.preventDefault();
//     });
// });

/**
 * se realiza el proceso de desencriptacion
 */
document.addEventListener('DOMContentLoaded', function() {  

    const textarea = document.querySelector('.editor'); // 1 
    const outputText = document.getElementById('output-text');
    const messageDiv = document.getElementById('message');
    const encryptButton = document.getElementById('encrypt-button');
    const copyButton = document.getElementById('copy-button');
    const decryptButton = document.getElementById('decrypt-button'); 
    const eraseButton = document.getElementById('erase-button'); 

    console.log('DOM completamente cargado y analizado');

    textarea.addEventListener('input', function() {
        const text = textarea.value;
        const regex = /^[a-z ]*$/;
        console.log('Evento input en textarea, valor: ', text);

        if (!regex.test(text)) {
            messageDiv.innerHTML = `
                <span>Solo se permiten letras minúsculas, </span>
                <span style="color: white;">sin acentos ni caracteres especiales.</span>
            `;
            messageDiv.style.visibility = 'visible';
            messageDiv.style.opacity = '1';
            console.log('Texto no válido, mostrando mensaje de advertencia');
        } else {
            messageDiv.style.visibility = 'hidden';
            messageDiv.style.opacity = '0';
            console.log('Texto válido, ocultando mensaje de advertencia');
        }
    });

    copyButton.addEventListener('click', function() {
        const textToCopy = outputText.textContent;
        console.log('Click en botón de copiar, texto a copiar: ', textToCopy);

        navigator.clipboard.writeText(textToCopy).then(function() {
            alert('Texto copiado al portapapeles');
            console.log('Texto copiado exitosamente');
        }).catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
    });

    textarea.addEventListener('paste', function(event) {
        console.log('Evento paste en textarea');

        navigator.clipboard.readText().then(function(text) {
            textarea.value += text;
            console.log('Texto pegado: ', text);
        }).catch(function(err) {
            console.error('Error al leer el portapapeles: ', err);
        });
        event.preventDefault();
    });
  
    encryptButton.addEventListener('click', function() {
        const textToEncrypt = textarea.value;
        console.log('Click en botón de encriptar, texto a encriptar: ', textToEncrypt);

        const encryptedText = encryptText(textToEncrypt);
        outputText.textContent = encryptedText;
        textarea.value = '';
        console.log('Texto encriptado: ', encryptedText);
    });

    function encryptText(text) {
        const replacements = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };

        let encryptedText = '';
        for (let char of text) {
            if (replacements[char]) {
                encryptedText += replacements[char];
            } else {
                encryptedText += char;
            }
        }
        console.log('Función encryptText ejecutada, texto original: ', text, ', texto encriptado: ', encryptedText);
        return encryptedText;
    };

    decryptButton.addEventListener('click', function() {
        const textToDecrypt = textarea.value.trim();
        console.log('Click en botón de desencriptar, texto a desencriptar: ', textToDecrypt);

        const decryptedText = decryptText(textToDecrypt);
        outputText.textContent = decryptedText;
        console.log('Texto desencriptado: ', decryptedText);
    });

    function decryptText(text) {
        const inverseReplacements = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        for (let key in inverseReplacements) {
            text = text.replace(new RegExp(key, 'g'), inverseReplacements[key]);
        }
        console.log('Función decryptText ejecutada, texto original: ', text, ', texto desencriptado: ', text);
        return text;
    };

    eraseButton.addEventListener('click', function() {
        outputText.textContent = '';
        console.log('Click en botón de borrar, contenido del aside limpiado');
    });

});