const proyectos = [
  {
    titulo: "Landing Page",
    descripcion: "Sitio informativo de una empresa con diseño responsive.",
    imagen: "https://davidgomez.eu/wp-content/uploads/2014/05/motivos-para-tener-web-shutterstock_56950768.jpg",
    enlace: "landing.html"
  },
  {
    titulo: "Tienda Online",
    descripcion: "Catálogo de productos con carrito funcional en JavaScript.",
    imagen: "https://blog.zenitx.com/wp-content/uploads/2020/03/tienda-online.jpg",
    enlace: "tienda.html"
  },
  {
    titulo: "Blog Personal",
    descripcion: "Blog dinámico con Bootstrap y manejo básico de entradas.",
    imagen: "https://img.freepik.com/foto-gratis/mensaje-online-blog-chat-comunicacion-envolver-concepto-icono-grafico_53876-139717.jpg",
    enlace: "blog.html"
  }
];

const contenedor = document.getElementById("project-list");

proyectos.forEach(proyecto => {
  const div = document.createElement("div");
  div.classList.add("col-md-4", "mb-4");

  // HTML con clase identificadora en imagen
  div.innerHTML = `
    <div class="card h-100 shadow">
      <img src="${proyecto.imagen}" class="card-img-top imagen-proyecto" alt="${proyecto.titulo}" style="cursor: pointer;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${proyecto.titulo}</h5>
        <p class="card-text">${proyecto.descripcion}</p>
        <button class="btn btn-primary mt-auto ver-proyecto">Ver Proyecto</button>
      </div>
    </div>
  `;

  // Redirigir desde el botón
  const boton = div.querySelector(".ver-proyecto");
  boton.addEventListener("click", () => {
    window.location.href = proyecto.enlace;
  });

  // Redirigir desde la imagen
  const imagen = div.querySelector(".imagen-proyecto");
  imagen.addEventListener("click", () => {
    window.location.href = proyecto.enlace;
  });

  contenedor.appendChild(div);
});

//sirve para los correos electronicos
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Aquí puedes agregar lógica para enviar los datos a un backend (por ejemplo, con fetch)

  alert(`Gracias por tu mensaje, ${name}. ¡Pronto te contactaré!`);
  this.reset();
});


