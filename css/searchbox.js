function searchbox() {
  var search = $(".searchbox").val().toLowerCase();
  switch (search) {
    case "c":
    case "cu":
    case "cur":
    case "curi":
    case "curio":
    case "curios":
    case "curiosi":
    case "curiosit":
    case "curiosity":
      $(".Car-2").addClass("hidden");
      $(".Car-3").addClass("hidden");
      $(".Car-4").addClass("hidden");
      $(".Car-5").addClass("hidden");
      $(".Car-6").addClass("hidden");
      $(".Car-1").removeClass("hidden");
      break;
    case "d":
    case "dy":
    case "dyn":
    case "dyna":
    case "dynam":
    case "dynamo":
    $(".Car-1").addClass("hidden");
    $(".Car-3").addClass("hidden");
    $(".Car-4").addClass("hidden");
    $(".Car-5").addClass("hidden");
    $(".Car-6").addClass("hidden");
    $(".Car-2").removeClass("hidden");
      break;
    case "s":
    case "st":
    case "sta":
    case "star":
    case "stard ":
    case "stardu":
    case "stardus":
    case "stardust":
    $(".Car-1").addClass("hidden");
    $(".Car-2").addClass("hidden");
    $(".Car-4").addClass("hidden");
    $(".Car-5").addClass("hidden");
    $(".Car-6").addClass("hidden");
    $(".Car-3").removeClass("hidden");
      break;
    case "f":
    case "fa":
    case "fal":
    case "falc":
    case "falco":
    case "falcon":
    $(".Car-1").addClass("hidden");
    $(".Car-2").addClass("hidden");
    $(".Car-3").addClass("hidden");
    $(".Car-5").addClass("hidden");
    $(".Car-6").addClass("hidden");
    $(".Car-4").removeClass("hidden");
      break;
    case "j":
    case "ja":
    case "jaz":
    case "jazz":
    $(".Car-1").addClass("hidden");
    $(".Car-2").addClass("hidden");
    $(".Car-3").addClass("hidden");
    $(".Car-5").addClass("hidden");
    $(".Car-6").addClass("hidden");
    $(".Car-5").removeClass("hidden");
      break;
    case "d":
    case "da":
    case "day":
    case "dayd":
    case "daydr":
    case "daydre":
    case "daydrea":
    case "daydream":
    $(".Car-1").addClass("hidden");
    $(".Car-2").addClass("hidden");
    $(".Car-3").addClass("hidden");
    $(".Car-5").addClass("hidden");
    $(".Car-5").addClass("hidden");
    $(".Car-6").removeClass("hidden");
      break;
    case "":
    case " ":
    $(".Car-1").removeClass("hidden");
    $(".Car-2").removeClass("hidden");
    $(".Car-3").removeClass("hidden");
    $(".Car-4").removeClass("hidden");
    $(".Car-5").removeClass("hidden");
    $(".Car-6").removeClass("hidden");
      break;
    default:
    $(".Car-1").addClass("hidden");
    $(".Car-2").addClass("hidden");
    $(".Car-3").addClass("hidden");
    $(".Car-5").addClass("hidden");
    $(".Car-5").addClass("hidden");
    $(".Car-6").addClass("hidden");
      break;
  }
}
function tax() {
  var Curiosity = $(".car1").val();
  var Dynamo = $(".car2").val();
  var Stardust = $(".car3").val();
  var Falcon = $(".car4").val();
  var Jazz = $(".car5").val();
  var Daydream = $(".car6").val();

}
