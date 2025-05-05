// Manejo del formulario de contacto
document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por contactarnos.");
});

// Manejo del formulario de registro
document.getElementById("form-registro").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Emprendimiento registrado correctamente.");
});

/* INICIO_SERVICIOS DERLY */
// Datos de los servicios
const servicios = [
  {
    titulo: "Peluquería Canina",
    descripcion: "Servicio de baño, corte y estética para mascotas.",
    costo: "S/ 50.00",
    tiempo: "1 hora",
    ubicacion: "Av. Los Perros 123"
  },
  {
    titulo: "Clases de Guitarra",
    descripcion: "Clases personalizadas para todos los niveles.",
    costo: "S/ 100.00 mensual",
    tiempo: "2 horas semanales",
    ubicacion: "Centro Cultural de Música"
  },
  {
    titulo: "Reparación de Celulares",
    descripcion: "Servicio técnico para smartphones de todas las marcas.",
    costo: "Desde S/ 70.00",
    tiempo: "24-48 horas",
    ubicacion: "Galería TecnoStore, local 10"
  },
  {
    titulo: "Decoración de Fiestas",
    descripcion: "Decoración personalizada para cumpleaños y eventos.",
    costo: "Desde S/ 500.00",
    tiempo: "Depende del evento",
    ubicacion: "Servicio a domicilio"
  },
  {
    titulo: "Clases de Cocina",
    descripcion: "Aprende cocina peruana, internacional y más.",
    costo: "S/ 150.00 mensual",
    tiempo: "3 horas semanales",
    ubicacion: "Instituto Gastronómico Local"
  },
  {
    titulo: "Diseño de Páginas Web",
    descripcion: "Desarrollo de sitios web modernos y responsivos.",
    costo: "Desde S/ 800.00",
    tiempo: "7 días",
    ubicacion: "Remoto / Online"
  }
];

// Mostrar los detalles del servicio en el modal
function mostrarDetalle(index) {
  const servicio = servicios[index];
  document.getElementById("modal-titulo").textContent = servicio.titulo;
  document.getElementById("modal-descripcion").textContent = servicio.descripcion;
  document.getElementById("modal-costo").textContent = servicio.costo;
  document.getElementById("modal-tiempo").textContent = servicio.tiempo;
  document.getElementById("modal-ubicacion").textContent = servicio.ubicacion;

 // document.getElementById("modal-detalle").classList.remove("oculto");
}

// Cerrar el modal
function cerrarModal() {
  document.getElementById("modal-detalle").classList.add("oculto");
}

// Acción al hacer clic en "Contactar"
function contactar() {
  alert("Gracias por tu interés. Serás redirigido al formulario de contacto.");
  // Redirige si tienes una página real:
  // window.location.href = "contacto.html";
}
/* FIN_DERLY_SERVICIOS */
