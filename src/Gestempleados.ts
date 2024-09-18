//Gestion de Empleados y Proyectos
interface  Habilidad {

    nombrehab: String;
    nivel: String;
  }

interface Empleado {

    nombre: String;
    identificacion: String;
    cargo: String;
    experiencia: String;
    habilidades: Habilidad[];
}    

interface Proyecto {

    nombre_proy: String;
    descripcion: String;
    empleados: Empleado[];

}

//Creacion de empleados, habilidades:

export const empleados: Empleado[] = [
    {
        nombre: 'Ricardo Solano',
        identificacion: '94474030',
        cargo: 'Analista',
        experiencia: '20',

        habilidades:[{ nombrehab: 'Infraestructura', nivel: 'Avanzado',
                      }]

    },
    {
        nombre: 'John Peña',
        identificacion: '1002548972',
        cargo: 'Desarrollador',
        experiencia: '3',

        habilidades:[{ nombrehab: 'Java, React', nivel: 'Intermedio',
                      }]

    },
    {
        nombre: 'Luis David Andrade',
        identificacion: '1009876548',
        cargo: 'Implementador',
        experiencia: '5',

        habilidades:[{ nombrehab: 'React', nivel: 'Intermedio',
                      }]
    }
];

//Creacion datos de proyectos:
export const proyectos: Proyecto []= [
    {
    nombre_proy: 'Desarrollo API',
    descripcion: 'Sistema de API para clientes',
    empleados: empleados.slice(0,1)
},
    {
    nombre_proy: 'Refactorizacion de Codigo',
    descripcion: 'Refactorizar Codido Cliente 02',
    empleados: empleados.slice(1,2)

},
{
  nombre_proy: 'Implementación React',
  descripcion: 'Implementación de un nuevo sistema con React',
  empleados: empleados.slice(2)
},

]