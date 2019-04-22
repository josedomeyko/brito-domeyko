// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Beauty de Comida - Sesión fotográfica",
    about: "El encargo de esta fotografía corresponde al desafío de fotografiar algún plato de comida en juego con la modelo.",
}, {
    figure: "media/foto-02.jpg",
    title: "Refugio para Pudúes",
    about: "Proyecto Industrial. Trabajo en colaboración con el Parque Metropolitano para crear en conjunto un proyecto para el bienestar animal",
}, {
    figure: "media/foto-03.jpg",
    title: "Luminaria en base a Jabón",
    about: "La idea surge a partir de la búsqueda por reinventar el uso y la forma de un producto tan común como lo es el jabón líquido y a partir de esos hallazgos poder realizar una luminaria.",
}, {
    figure: "media/foto-04.jpg",
    title: "Maez",
    about: "Proyecto Gráfico. Diseño de identidad gráfica para emprendedores.",
}, {
    figure: "media/foto-05.jpg",
    title: "Revista Mujer - Sesión fotográfica",
    about: "Este encargo buscaba generar una editorial en donde se destacaran los rasgos femeninos de cada una de las modelos mediante el uso de un maquillaje sútil pero contrastante combinado con el uso de un pañuelo distintivo para cada una de ellas.",
}, {
    figure: "media/foto-06.jpg",
    title: "Hacking Plástico",
    about: "Juguete interactivo para niños de 0 a 99 años diseñado para hacer mandalas en el piso, ya sea con las tizas en su interior o dibujado con su mano en la tierra.",
}, {
    figure: "media/foto-07.jpg",
    title: "Cuplight",
    about: "Proyecto Industrial. Luminaria echa a partir de vasos de plástico",
}, {
    figure: "media/foto-08.jpg",
    title: "Logotipo Empresa - Nedcro",
    about: "Creación de logo para la empresa Nedcro. Una empresa Chileno-Croata dedicada a la exportación de frutos secos nacionales a países europeos.",
}, {
    figure: "media/foto-09.jpg",
    title: "Cremas Maggi",
    about: "Trabajo en conjunto con la marca 'Magii' para definir un producto, en base a la gráfica y composición",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
