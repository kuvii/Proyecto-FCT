# Proyecto-FCT
Project Kingsbank 

# Arquitectura
La aquitectura utilizada en nestro trabajo es MVC, ya que pensamos que es la mejor estructuración para las carpetas.

# Arquitectura

La arquitectura utilizada en nuestro trabajo es MVC, ya que consideramos que es la mejor estructuración para las carpetas.

## Introducción a la App

La aplicación en la que nos enfocamos es una plataforma de gestión de cuentas bancarias que cuenta con dos roles principales: el administrador del banco y el cliente.

Para el inicio de sesión dependiendo del Gmail y de la contraseña que sean introducidas les entrará en modo administrador o modo cliente. 

De forma predeterminada ya hay un adminstrador creado en la base de datos y con este se podrá crear los clientes de la aplicación, esto no quiere decir que se puedan crear más adminstradores los cuales también podrán gestionar las cuentas de los clientes.

### Cliente

- Cada cliente tiene una cuenta bancaria única.
- Puede tener varias tarjetas asociadas a su cuenta.
- Puede solicitar préstamos al administrador del banco.
- Puede realizar transacciones con su cuenta.

### Administrador del banco

- Es responsable de la creación de cuentas para los clientes.
- Puede editar la información de los clientes en caso de errores.
- Gestiona las solicitudes de préstamos de los clientes.
- Acepta o deniega las solicitudes de préstamos.
- Administra las solicitudes de tarjetas de los clientes.

En resumen, la aplicación permite al administrador del banco gestionar las cuentas y transacciones de los clientes, así como procesar las solicitudes de préstamos y tarjetas. Los clientes, por su parte, pueden realizar transacciones y solicitar servicios adicionales a través de la plataforma.

### Instalación 
Para instalar la aplicación "KingsBank" debemos descargarlo desde el repositorio de Github.

Nos encontramos con dos carpetas `Frontend` y `Backend` en ambas haremos:

`npm install`

Y con esto ya tendremos la aplicacion instalada.

### Como ejecutar la App
para ejecutarla tendremos que abrir dos terminales, una en situada en la carpeta "frontend" y otra situada en "backend" y escribiremos la siguiente línea de comando.
`npm start` en ambos y ya se ejecutaría.