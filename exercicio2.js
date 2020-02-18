const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

var pos=0;
function anterior(){

  if(pos-1<0){
    pos = 4;
    document.getElementById("slide").setAttribute("src", servidorDasImagens.concat(todasAsImagens[pos]));
  }else{
    pos--;
    document.getElementById("slide").setAttribute("src", servidorDasImagens.concat(todasAsImagens[pos]));
  }
}

function proximo(){
  if(pos+1>4){
    pos = 0;
    document.getElementById("slide").setAttribute("src", servidorDasImagens.concat(todasAsImagens[pos]));
  }else{
    pos++;
    document.getElementById("slide").setAttribute("src", servidorDasImagens.concat(todasAsImagens[pos]));
  }
}