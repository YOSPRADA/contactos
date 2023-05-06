
 const contactForm = document.getElementById('contactForm');
 const searchInput = document.getElementById('searchInput');
 const searchResults = document.getElementById('searchResults');
 const contactList = document.getElementById('contactList');

 
 let contactos = [];

 
 contactForm.addEventListener('submit', guardarContacto);

 
 function guardarContacto(event) {
     event.preventDefault(); 
     const nombre = document.getElementById('nombre').value;
     const apellido = document.getElementById('apellido').value;
     const telefono = document.getElementById('telefono').value;
     const email = document.getElementById('email').value;
     const profesion = document.getElementById('profesion').value;

     
     const contacto = {
         nombre,
         apellido,
         telefono,
         email,
         profesion
     };

     
     contactos.push(contacto);

     
     contactForm.reset();

     
     mostrarContactos();
 }

 
 function mostrarContactos() {
     let html = '';
     for (let i = 0; i < contactos.length; i++) {
         const contacto = contactos[i];
         html += `<p>${contacto.nombre} ${contacto.apellido} - ${contacto.email}</p>`;
     }
     contactList.innerHTML = html;
 }

 
 function buscarContacto() {
     const searchTerm = searchInput.value.toLowerCase();
     const resultados = contactos.filter(contacto =>
         contacto.nombre.toLowerCase().includes(searchTerm) ||
         contacto.apellido.toLowerCase().includes(searchTerm)
     );
     mostrarResultados(resultados);
 }

 function mostrarResultados(resultados) {
    let html = '';
    for (let i = 0; i < resultados.length; i++) {
        const contacto = resultados[i];
        html += `<p>${contacto.nombre} ${contacto.apellido} - ${contacto.email}</p>`;
    }
    searchResults.innerHTML = html;
}
 