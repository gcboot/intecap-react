const $cambiarInterruptor = document.getElementById("cambiarInterruptor"),
      $cambiarFoco = document.getElementById("cambiarFoco"),
      $swith = document.querySelector(".switch");

function cambiarImagenes(){
    if($cambiarFoco.src.match("./images/encendido-1.png") && $cambiarInterruptor.src.match("./images/on-or.png")){
        $cambiarFoco.src = "./images/apagado-1.png";
        $cambiarInterruptor.src =  "../images/off-or.png";
    }else{
        $cambiarFoco.src = "./images/encendido-1.png";
        $cambiarInterruptor.src = "./images/on-or.png";
    }
}

$swith.addEventListener("click",cambiarImagenes)