// Programación Orientada a Objetos
// Es un paradigma de programación que basa su funcionamientos en crear clases y objetos
// centra su filosofia en 4 pilares 

// Abstracción
// permite identificar caracterias y acciones que puediera realizar algo en el mundo

// Escuela que requiere conocer el promedio de los alumnos, conocer el promedio grupal
// conocer que maestro imparte en cada grupo

// Actores

// Maestro
// Promedio
// Grupos
// Alumnos

// Persona
    // nombre
    // grupo
    // edad

    // presentarse

// Maestro
// caracteristicas
    // extiende de Persona

// acciones
    // calificar
    // enseñar

// Grupo
// caracteristicas
    // no alumnos
    // nombre del grupo
    // generos
    // horario
    // materia

// acciones
    // registrar alumno
    // obtener calificaciones
    // registrar calificaciones
    // dar de baja alumno

// Alumno
// caracteristicas
    // extiende de Persona
    // calificacion

// metodos
    // guardar calificacion
    // mostrar calificacion


// Encapsulación
// dicta la manera de obtener y fijar información atraves del objeto

// class NombreClase {}
// instancia const pedro = new NombreClase();


// Herencia
// es la capacidad que tiene una clase de extender o heredar caracteristicas y acciones a
// otra clase

// Polimorfismo
// es la capacidad que tiene un metodo (accion) de poder ser invocado por un mismo nombre
// pero la ejecución y la lógica pueden ser completamente diferentes

// Funciones generadores - funciones constructoras
// funciones que permiten el proceso de instancia y el trabajo con objetos

// function Persona(nom, ed) {
//     this.nombre = nom;
//     this.edad = ed;
// }

// Persona.prototype.hablar = function() {
//     alert(`Hola soy ${this.nombre}`);
//     // alert("Hola soy " + this.nombre);
// }

class Persona {
    nombre = null;
    grupo = null;
    edad = null;

    constructor(nombre, edad, grupo) {
        this.nombre = nombre;
        this.edad = edad;
        this.grupo = grupo;
    }

    presentarse() {}

}

class Maestro extends Persona {

    constructor(nombre, edad, grupo) {
        super(nombre, edad, grupo); // crear una instancia virtual y local para Maestro
    }

    calificar() {}

    ensenar() {}

    presentarse(activo) {
        if (activo) {
            alert(`Soy el profesor ${this.nombre} e imparto el grupo: ${this.grupo}`);
        }
    }

}

class Alumno extends Persona {
    calificacion = null;

    constructor(nombre, edad, grupo) {
        super(nombre, edad, grupo); // crear una instancia virtual y local para Maestro
    }

    guardarCalificacion() {}
    
    obtenerCalificacion() {}

    presentarse() {
        alert(`Hola soy el alumno: ${this.nombre} y estoy en el grupo ${this.grupo}`);
    }
}
