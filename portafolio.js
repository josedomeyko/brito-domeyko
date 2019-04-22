// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Lorem ipsum 01",
    about: "Me gusta el chocolate",
}, {
    figure: "media/foto-02.jpg",
    title: "Refugio para Pudúes",
    about: "Proyecto Industrial",
}, {
    figure: "media/foto-03.jpg",
    title: "Lorem ipsum 03",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-04.jpg",
    title: "Maez",
    about: "Proyecto Gráfico",
}, {
    figure: "media/foto-05.jpg",
    title: "Lorem ipsum 05",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-06.jpg",
    title: "Lorem ipsum 06",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-07.jpg",
    title: "Cuplight",
    about: "Proyecto Industrial",
}, {
    figure: "media/foto-08.jpg",
    title: "Lorem ipsum 08",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-09.jpg",
    title: "Cremas Maggi",
    about: "Proyecto de definicion de producto, en base a la gráfica y composición",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
