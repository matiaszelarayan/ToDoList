# ToDoList

# Challenge Ingreso a Academia ForIT 2025 con beca de Formar Argentina

---

## Objetivo

Crear una aplicación básica de lista de tareas que demuestre conocimientos fundamentales de **Git**, **JavaScript**, **Node.js** y **React**.

---

## Requisitos

### Repositorio

* Crear un **repositorio público en GitHub** (o similar) para el proyecto.
    * Crear una carpeta para el **backend**.
    * Y otra carpeta para el **frontend**.

### Backend (Node.js con Express)

* Crear un servidor básico con **Express**.
* Implementar los siguientes **endpoints**:
    * `GET /api/tasks` - Obtener todas las tareas.
    * `POST /api/tasks` - Crear una nueva tarea.
    * `PUT /api/tasks/:id` - Actualizar una tarea existente.
    * `DELETE /api/tasks/:id` - Eliminar una tarea.
* Usar un **array en memoria** como almacenamiento temporal.
* Implementar **manejo básico de errores**.

### Frontend (React con Vite)

* Crear una aplicación de **React** con **Vite** (o similar).
* Implementar las siguientes páginas/componentes (usando algún **router**):
    * **TaskList** - Muestra la lista de tareas.
    * **TaskItem** - Muestra una tarea individual.
    * **TaskForm** - Formulario para crear/editar tareas.
* Implementar llamadas a la API de Express usando **fetch**.
* Configurar **variables de entorno** tanto para la API como para el frontend.
* Usar **CSS básico** para darle estilo a la aplicación.
