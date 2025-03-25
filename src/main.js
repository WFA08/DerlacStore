// Array de proyectos
const projects = [
    {
        name: "Gestor de Tareas",
        description: "Aplicación web para organizar tareas de manera eficiente.",
        technologies: "HTML, CSS, JavaScript",
        link: "https://ejemplo.com/demo1",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Sistema de Inventario",
        description: "Herramienta para manejar inventarios en tiempo real.",
        technologies: "React, Node.js, MongoDB",
        link: "https://ejemplo.com/demo2",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Landing Page Creativa",
        description: "Diseño moderno para promocionar servicios.",
        technologies: "HTML, Tailwind CSS",
        link: "https://ejemplo.com/demo3",
        image: "https://via.placeholder.com/200"
    }
];

// Contenedor para proyectos
const projectsContainer = document.querySelector('.projects');

// Renderizar proyectos dinámicamente
function displayProjects(projectsToShow) {
    projectsContainer.innerHTML = ""; // Limpiar proyectos existentes
    projectsToShow.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Tecnologías:</strong> ${project.technologies}</p>
            <a href="${project.link}" target="_blank">Ver más</a>
        `;
        projectsContainer.appendChild(projectDiv);
    });
}

// Mostrar todos los proyectos al cargar la página
displayProjects(projects);

// Filtros de proyectos
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Filtrar proyectos por categoría
        const filteredProjects = category === "all"
            ? projects
            : projects.filter(project => project.technologies.includes(category));

        // Mostrar proyectos filtrados
        displayProjects(filteredProjects);
    });
});

// Validar el formulario de contacto
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página al enviar

    // Obtener los valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validar los campos
    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mostrar un mensaje de éxito (puedes mejorarlo con estilos o notificaciones)
    alert("¡Gracias por tu mensaje, " + name + "! Me pondré en contacto contigo pronto.");
});
