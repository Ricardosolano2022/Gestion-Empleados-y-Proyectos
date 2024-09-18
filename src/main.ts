import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { proyectos } from './Gestempleados.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Sistema de Gestión de Empleados y Proyectos
    </p>
    <div id="proyectos-lista"></div> <!-- Contenedor para mostrar los proyectos -->
  </div>
`;


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

// Función para mostrar proyectos en la vista
function mostrarProyectosEnVista(proyectos: Proyecto[]) {
  const contenedorProyectos = document.querySelector<HTMLDivElement>('#proyectos-lista')!;
  proyectos.forEach((proyecto, index) => {
    const proyectoHTML = `
      <div class="proyecto">
        <h2>Proyecto ${index + 1}: ${proyecto.nombre_proy}</h2>
        <p>Descripción: ${proyecto.descripcion}</p>
        <h3>Empleados:</h3>
        <ul>
          ${proyecto.empleados.map(empleado => `
            <li>
              <strong>${empleado.nombre} (${empleado.cargo})</strong>
              <ul>
                ${empleado.habilidades.map(habilidad => `
                  <li>${habilidad.nombrehab} - Nivel: ${habilidad.nivel}</li>
                `).join('')}
              </ul>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    contenedorProyectos.innerHTML += proyectoHTML;
  });
}
mostrarProyectosEnVista(proyectos);