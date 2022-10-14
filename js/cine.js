var nombres = {
    "Peliculas": [
        {"imagen" : "img/batman.jpg",
        "titulo" : "The Batman",
        "clasificacion" : "PG-13",
        "duracion" : "2h 56m",
        "butacas" : "tradicionales",
        "horarios": "08:00  09:00  12:00"},
        {"imagen" :"img/encanto.jpg",
        "titulo" : "Encanto",
        "clasificacion": "G",
        "duracion" : "1h 49m",
        "butacas" : "tradicional",
        "horarios" : "12:00  13:00  16:00",
        },
        {"imagen" :"img/jumanji.jpg",
        "titulo" : "Jumanji",
        "clasificacion": "PG-13",
        "duracion" : "1h 59m",
        "butacas" : "tradicional",
        "horarios" : "18:00  18:30",
        },
        {"imagen" :"img/spiderman.jpg",
        "titulo" : "Spiderman: No way home",
        "clasificacion": "PG-13",
        "duracion" : "2h 28m",
        "butacas" : "tradicional",
        "horarios" : "20:00  21:45",
        },
        {"imagen" :"img/uncharted.jpg",
        "titulo" : "Uncharted",
        "clasificacion": "PG-13",
        "duracion" : "1h 56m",
        "butacas" : "tradicional",
        "horarios" : "21:00  23:30",
        }
    ]
};
//Obtener el elemento contenedor donde se cargaran
//los datos del objeto JSON

var div = document.getElementById("info");
div.innerHTML = volcarDatos(nombres.Peliculas);

function volcarDatos(datos){
    var total = datos.length;
    data = "<div class=\"cartelera\">\n";
    for(var i=0;i<total; i++){
        data += "<section class=\"peliculas\">\n";
        data += "<article class=\"imagenes\">\n";
        data += "<img src=\"" +datos[i].imagen +  "\" alt=\"pelicula de " + datos[i].titulo + "\" class=\"pelicula\" />\n";
        data += "</article>\n";
        data += "<article class=\"titulos\">\n";
        data += "<h2>\n" + datos[i].titulo + "\n</h2>\n";
        data += "<p>\nClasificacion: " + datos[i].clasificacion +"   Duracion: " + datos[i].duracion + "\n<br />\n";
        data += "Butacas: " + datos[i].butacas + "\n<br />\n";
        data += "<b>Horarios: </b>\n<br />\n";
        data += datos[i].horarios + "\n</p>\n";
        data += "</section>\n";
    }
    data += "</div>\n";
    return data;
}