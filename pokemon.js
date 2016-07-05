  function Pokemon(n, v, g, a, i){
    this.nombre = n;
    this.vida = v;
    this.grito = g;
    this.imagen = i;
    this.ataque = a;
    this.gritar = function(){
        alert(this.grito);
    };
    this.foto = function(){
        imagenPokemon.setAttribute('src', this.imagen)
    }
}
function lanzoPokemon(){
    nombrePokemon.innerText = pokemon.nombre;
    vidaPokemon.innerText = pokemon.vida;
    ataquePokemon.innerText = pokemon.ataque;
    gritoPokemon.innerText = pokemon.grito;
    pokemon.foto();
    pokemon.gritar();
    }

  var opcion = ["Pikachu", "Chikorita", "Bulbasaur"];
  opcionUsuario = prompt("¿Qué Pokemon Elijes?\nPikachu: 0\nChikorita: 1\nBulbasaur: 2\n", 0);  
  alert("Tu elegiste " + opcion[opcionUsuario]);
  if ( opcionUsuario == 0 ) {
    var pokemon = new Pokemon('Pikachu', 310, 'Pika!!!', 55, 'img/Pikachu.png');
    lanzoPokemon();
  }else if ( opcionUsuario == 1 ) {
    var pokemon = new Pokemon('Chikorita', 300, 'Platzi!!!', 45, 'img/Chikorita.png');
    lanzoPokemon();
  }else if ( opcionUsuario == 2 ){
    var pokemon = new Pokemon('Bulbasaur', 230, 'Bulbasaur!!!', 47, 'img/Bulbasaur.png');
    lanzoPokemon();
  }else{
    function error(){errorPokemon.innerText = "Estas miando fuera del pote!!";}
  }


