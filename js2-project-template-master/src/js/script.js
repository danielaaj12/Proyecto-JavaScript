// Crea el request.
const request = new XMLHttpRequest();
// Creacion de variables.
const boton = document.getElementById('btn');

let element;

// API 
// Registra el manejador de eventos.

request.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  const response = event.target.response;
  // Itera sobre los resultados y los agrega a la lista.
  // Informacion que sale al cargar la página.
  const itemResponseName = response[0].name;
  const itemResponseEffects = response[0].desc;
  const itemResponseRace = response[0].race;
  const itemResponseFlavors = response[0].flavors;


  console.log(itemResponseName);
  console.log(itemResponseEffects);
  console.log(itemResponseRace);
  console.log(itemResponseFlavors);
  
  

  // variable que crea el elemento HTML.
  const container = document.getElementById('containerLoadInfo');
  const listItemName = document.createElement('h1');
  const listItemEffects = document.createElement('p');
  const listItemRace = document.createElement('h4');
  const listItemFlavors= document.createElement('p');

  // Se crean id para identificar a los P
  listItemEffects.setAttribute('id', 'effects');
  listItemRace.setAttribute('id', 'race');
  listItemFlavors.setAttribute('id', 'flavors');
  
  // Agrega la informacion al elemento HTML
  listItemName.innerHTML = itemResponseName;
  listItemRace.innerHTML = `Race: ${itemResponseRace}`;
  listItemEffects.innerHTML = `Effects: ${itemResponseEffects}`;
  listItemFlavors.innerHTML = `Flavors: ${itemResponseFlavors}`;
 
  // Agrega la informacion al elemento la pagina del navegador
  container.appendChild(listItemName);
  container.appendChild(listItemRace);
  container.appendChild(listItemEffects);
  container.appendChild(listItemFlavors);

  // Al presionar el boton llama a la Funcion ADDELEMENT para ejecutarla
  boton.addEventListener('click', addelement);
});

// Funcion para que el boton del buscador funcione
function addelement() {
  weedNameInput = document.getElementById('space')
  strainName = weedNameInput.value;

  // Inicializa el request.
  request.open('GET', `http://strainapi.evanbusse.com/8SNQJOP/strains/search/name/${strainName}`);

  // Envía el request.
  request.send();
  weedNameInput.value = '';
  //Elementos que salen cuando se presione el botón.
  document.querySelector('h1').innerHTML = response[element].name;
  document.querySelector('h4').innerHTML = `Race: ${response[element].race}`;
  document.querySelector('h4').innerHTML = `Effects: ${response[element].effects}`;
  document.querySelector('#desc').innerHTML = `Desc: ${response[element].desc}`;
}
let strainName = 'afpak';

// Define el tipo de respuesta.
request.responseType = 'json';

// Inicializa el request.
request.open('GET', `http://strainapi.evanbusse.com/8SNQJOP/strains/search/name/${strainName}`);

// Envía el request.
request.send();
// newRequest.send();




