$("h1").click(function() {
  $(this).text("Русский Алфавит");
});

$(".letter").on ("click", function(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  $(this).fadeIn(100).fadeOut(100).fadeIn(100);
  });

function makeSound(key) {
  switch (key) {
    case "А":
     var gen1 = new Audio("sounds/gen-а.mp3");
     gen1.play();
     break;

    case "Б":
     var gen2 = new Audio("sounds/gen-б.mp3");
     gen2.play();
     break;

    case "В":
     var gen3 = new Audio("sounds/gen-в.mp3");
     gen3.play();
     break;

    case "Г":
     var gen4 = new Audio("sounds/gen-г.mp3");
     gen4.play();
     break;

    case "Д":
     var gen5 = new Audio("sounds/gen-д.mp3");
     gen5.play();
     break;

    case "Е":
     var gen6 = new Audio("sounds/gen-е.mp3");
     gen6.play();
     break;

    case "Ё":
     var gen7 = new Audio("sounds/gen-ё.mp3");
     gen7.play();
     break;

    case "Ж":
     var gen8 = new Audio("sounds/gen-ж.mp3");
     gen8.play();
     break;

    case "З":
     var gen9 = new Audio("sounds/gen-з.mp3");
     gen9.play();
     break;

    case "И":
     var gen10 = new Audio("sounds/gen-и.mp3");
     gen10.play();
     break;

    case "Й":
     var gen11 = new Audio("sounds/gen-й.mp3");
     gen11.play();
     break;

    case "К":
     var gen12 = new Audio("sounds/gen-к.mp3");
     gen12.play();
     break;

    case "Л":
     var gen13 = new Audio("sounds/gen-л.mp3");
     gen13.play();
     break;

    case "М":
     var gen14 = new Audio("sounds/gen-м.mp3");
     gen14.play();
     break;

    case "Н":
     var gen15 = new Audio("sounds/gen-н.mp3");
     gen15.play();
     break;

    case "О":
     var gen16 = new Audio("sounds/gen-о.mp3");
     gen16.play();
     break;

    case "П":
     var gen17 = new Audio("sounds/gen-п.mp3");
     gen17.play();
     break;

    case "Р":
     var gen18 = new Audio("sounds/gen-р.mp3");
     gen18.play();
     break;

    case "С":
     var gen19 = new Audio("sounds/gen-с.mp3");
     gen19.play();
     break;

    case "Т":
     var gen20 = new Audio("sounds/gen-т.mp3");
     gen20.play();
     break;

    case "У":
     var gen21 = new Audio("sounds/gen-у.mp3");
     gen21.play();
     break;

    case "Ф":
     var gen22 = new Audio("sounds/gen-ф.mp3");
     gen22.play();
     break;

    case "Х":
     var gen23 = new Audio("sounds/gen-х.mp3");
     gen23.play();
     break;

    case "Ц":
     var gen24 = new Audio("sounds/gen-ц.mp3");
     gen24.play();
     break;

    case "Ч":
     var gen25 = new Audio("sounds/gen-ч.mp3");
     gen25.play();
     break;

    case "Ш":
     var gen26 = new Audio("sounds/gen-ш.mp3");
     gen26.play();
     break;

    case "Щ":
     var gen27 = new Audio("sounds/gen-щ.mp3");
     gen27.play();
     break;

    case "Ъ":
      var gen28 = new Audio("sounds/gen-ъ.mp3");
      gen28.play();
      break;

    case "Ы":
      var gen29 = new Audio("sounds/gen-ы.mp3");
      gen29.play();
      break;

    case "Ь":
      var gen30 = new Audio("sounds/gen-ь.mp3");
      gen30.play();
      break;

    case "Э":
      var gen31 = new Audio("sounds/gen-э.mp3");
      gen31.play();
      break;

    case "Ю":
      var gen32 = new Audio("sounds/gen-ю.mp3");
      gen32.play();
      break;

    case "Я":
      var gen33 = new Audio("sounds/gen-я.mp3");
      gen33.play();
      break;

    default: console.log(key);

  }
}
