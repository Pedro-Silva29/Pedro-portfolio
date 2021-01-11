// Função para abrir o menu

function abrirMenu(){
  $(".menu").animate({"left":"0"},450)
  $("#link-abrir").attr("data","aberto")
  $("#icon-flecha").css({
    transform: 'rotate(-180deg)',
    WebkitTransform: 'rotate(-180deg)',
    '-moz-transform': 'rotate(-180deg)',
    '-ms-transform': 'rotate(-180deg)',
    '-o-transform': 'rotate(-180deg)'
  });
}

// Função para fechar o menu

function fecharMenu(){
    $(".menu").animate({"left":"-160px"},450)
    $("#link-abrir").attr("data","fechado")
    $("#icon-flecha").css({
      transform: 'rotate(0deg)',
      WebkitTransform: 'rotate(0deg)',
      '-moz-transform': 'rotate(0deg)',
      '-ms-transform': 'rotate(0deg)',
      '-o-transform': 'rotate(0deg)'
     });
}

// Função de click para exibir o menu


$("#link-abrir").click(function(){

  var status = jQuery("#link-abrir").attr("data");

  if(status == "fechado"){
    abrirMenu();
  }
  else{
    fecharMenu();
  }
});

// Abrir e fechar o menu quando entrar no site

setTimeout(function() {
     abrirMenu();
}, 1000);

setTimeout(function() {
     fecharMenu();
}, 3000);