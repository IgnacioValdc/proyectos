# Gestor de contraseñas

## Instalación

1.- Clona el proyecto:
```git clone https://github.com/IgnacioValdc/proyectos```

2.- Abre una terminal en el directorio e instala las dependencias:
```npm install```

3.- Inicia el proyecto:
```node app```

## Funciones
El gestor de contraseñas permite crear 1 o mas usuarios, permitiendo guardar sus contraseñas encriptadas y con la unica forma de tener acceso a ellas mediante una clave de bodega.

### Instrucciones
* Crea un usuario en la 2da opción
* Una vez creado inicia sesion en la 1ra opción, cuando ingreses tus credenciales te solicitara una clave para la bodega de claves, no existe manera de recuperar esta clave.

* Al iniciar sesion se abrira un menu donde podras:
    * Crear una clave.
    * Listar las entradas en la bodega de claves, al seleccionar una entrada la clave se nos guardara en el portapapeles.
    * Lista las entradas en la bodega de claves para borrar, al seleccionar se le preguntara al usuario si esta seguro de eliminar la entrada.
    * Permite seleccionar una entrada y cambiar su clave.

`**Anexo**`: La 3ra opción sera eliminada proximamente

