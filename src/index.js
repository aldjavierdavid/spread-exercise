const objetosDonacion = [
  {
    nombre: "Bicicleta",
    marca: "XYZ",
    color: "Rojo",
    tamaño: "Mediano",
    estado: "Usado",
    edad: 2,
    descripcion: "Bicicleta de montaña en buen estado",
    imagen: "ruta/a/la/imagen-bicicleta.jpg",
    categoria: "Deportes",
    ciudad: "Nueva York"
  },
  {
    nombre: "Televisor",
    marca: "ABC",
    color: "Negro",
    tamaño: "42 pulgadas",
    estado: "Funcionando",
    edad: 4,
    descripcion: "Televisor de pantalla plana en perfecto estado",
    imagen: "ruta/a/la/imagen-televisor.jpg",
    categoria: "Electrónica",
    ciudad: "Londres"
  },
  {
    nombre: "Libro",
    autor: "John Doe",
    género: "Ficción",
    estado: "Nuevo",
    idioma: "Inglés",
    descripcion: "Libro de ciencia ficción emocionante",
    ciudad: "Tokio"
  },
  {
    nombre: "Mesa",
    material: "Madera",
    color: "Café",
    tamaño: "Grande",
    estado: "Usado",
    descripcion: "Mesa de comedor en buen estado",
    ciudad: "París"
  },
  {
    nombre: "Silla",
    material: "Metal",
    color: "Negro",
    tamaño: "Mediano",
    estado: "Usado",
    descripcion: "Silla de escritorio en buen estado",
    ciudad: "Roma"
  },
  {
    nombre: "Teléfono",
    marca: "XYZ",
    color: "Plata",
    estado: "Funcionando",
    descripcion: "Teléfono inteligente en buen estado",
    ciudad: "Sídney"
  },
  {
    nombre: "Ordenador portátil",
    marca: "ABC",
    color: "Gris",
    estado: "Funcionando",
    descripcion: "Ordenador portátil en buen estado",
    ciudad: "Toronto"
  },
  {
    nombre: "Cámara",
    marca: "XYZ",
    color: "Negro",
    estado: "Usado",
    descripcion: "Cámara digital en buen estado",
    ciudad: "Moscú"
  },
  {
    nombre: "Guitarra",
    marca: "ABC",
    color: "Negro",
    estado: "Usado",
    descripcion: "Guitarra acústica en buen estado",
    ciudad: "Sao Paulo"
  },
  {
    nombre: "Mesa de centro",
    material: "Madera",
    color: "Blanco",
    tamaño: "Pequeño",
    estado: "Nuevo",
    descripcion: "Mesa de centro moderna",
    ciudad: "Estambul"
  }
];

// Usa el operador de spread para añadir un nuevo objeto al array de objetos. Nos comentan que el nuevo objeto que quieren donar tienen las siguientes catacterísticas. Es un Cascabel de Gato, de aluminio. El color es gris, de tamaño pequeño. estado es 'Usado'. La descripción està vacía y la ciudad es Girona.

// MODIFICAR LA SIGUIENTE LÍNEA. la variable objetosActualizados debería tener los mismos objetos que objetosDonación más el cascabel con todas sus propiedades. Revisar: https://dev.to/alextomas80/el-operador-spread-en-javascript-12hc - COPIAR UN ARRAY Y AÑADIRLE UN ELEMENTO
const objetosActualizados = [
  {
    nombre: "Cascabel de gato",
    material: "Aluminio",
    color: "Gris",
    tamaño: "Pequeño",
    estado: "Usado",
    descripcion: "",
    ciudad: "Girona"
  },
  ...objetosDonacion
];

console.log(objetosActualizados);
