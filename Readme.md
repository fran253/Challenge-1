# Challenge: Web de Hoteles en S3 con Terraform

Despliegue automatizado de una página web estática de hoteles utilizando Amazon S3 y Terraform.

## Estructura del Proyecto
- `index.html`: Página principal de la web de hoteles.
- `styles.css`: Hojas de estilo personalizadas.
- `app.js`: Lógica interactiva de JavaScript.
- `main.tf`: Configuración de infraestructura como código (Terraform) para S3, políticas públicas y hosting web estático.
- `evidencia.md`: Registro de comandos de consola.
- `web.txt`: Endpoint público del sitio web.

## Pasos para el Despliegue
1. Configurar las credenciales de AWS en el entorno de terminal.
2. Ejecutar `terraform init` para inicializar los proveedores.
3. Ejecutar `terraform apply -auto-approve` para crear la infraestructura y subir los archivos estáticos automáticamente.
