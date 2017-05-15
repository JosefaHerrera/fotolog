function agregaPosteo() {
	//paso 1 rescataremos el contenedor-posteos, el nombre y comentario del usuario
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;
	//paso 2 creamos el nodo elemento donde irá nuestro post
var nuevoPost = document.createElement("div");
	//paso 3 creamos elementos donde guardaremos los valores 
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");
	//paso 4 Creamos elemento para corazón
var parrafCorazon = document.createElement("p");
var i = document.createElement("i");
	//paso 5  Asignamos padre a icono de corazón
parrafCorazon.appendChild(i);
	//paso 6 Damos atributos a corazón
parrafCorazon.setAttribute("class","corazón");
i.setAttribute("class","fa fa-heart");
i.setAttribute("arial-hidden","true");
	//paso 7 Ahora hay que transformar el nombre a nodo texto
var nodoNombre = document.createTextNode(nombreFF + "escribió:");
var nodoPosteo = document.createTextNode(contenidoFF);
	//paso 8 Asignaremos a padres a nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);
	//paso 9 Ahora asignaremos padres a Nombre y Contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);
	//paso 10 creamos funcion click(); para el corazón y le asignamos la clase rojo de css
	i.addEventListener("click",function(){
		i.classList.toggle("rojo");
	});
	/*
	.addEvventListener(): es un metodo que agrega un "escuhador" al elemento, que esté atento a la interacción del usuario.
	.toggle(): si el elemento tiene la clase se le quita, de lo contrario se le agrega*/

	//paso 11 finalmente le damos atributos a nuestro post y lo agregamos a nuestro contenedor-posteos
nuevoPost.setAttribute("class","posteo");
containerPosteos.appendChild(nuevoPost);
	//para resetear los campos y dejarlos nuevamente en blanco
document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";




}