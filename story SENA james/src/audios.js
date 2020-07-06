var sound;
function reading(span) {
  if (span !== "stop") {
    sound = new Audio(`../mp3/${span}_audio.ogg`);
    sound.play();
  } else {
    sound.pause();
  }
}

const spans = document.querySelectorAll(".span");
console.log(spans);
spans.forEach((span) => {
  span.addEventListener("mouseenter", function () {
    option = this.classList[1];
    console.log(option);
    switch (option) {
      case "s1":
        reading("1st");
        break;
      case "s2":
        reading("2nd");
        break;
      case "s3":
        reading("3rd");
        break;
      case "s4":
        reading("4th");
        break;
      case "s5":
        reading("5th");
        break;
      case "s6":
        reading("6th");
        break;
      case "s7":
        reading("7th");
        break;
      case "s8":
        reading("8th");
        break;
      case "s9":
        reading("9th");
        break;
      case "s10":
        reading("10th");
        break;
      case "s11":
        reading("11th");
        break;
      case "s12":
        reading("12th");
        break;
      case "s13":
        reading("13th");
        break;
      case "s14":
        reading("14th");
        break;
      case "s15":
        reading("15th");
        break;
      case "s16":
        reading("16th");
        break;
      case "s17":
        reading("17th");
        break;
      case "s18":
        reading("18th");
        break;
      case "s19":
        reading("19th");
        break;
      case "s20":
        reading("20th");
        break;
      case "s21":
        reading("21st");
        break;
      case "s22":
        reading("22nd");
        break;
      case "s23":
        reading("23rd");
        break;
      case "s24":
        reading("24th");
        break;
      case "s25":
        reading("25th");
        break;
      case "s26":
        reading("26th");
        break;
      case "s27":
        reading("27th");
        break;
      case "s28":
        reading("28th");
        break;
      case "s29":
        reading("29th");
        break;

      default:
        break;
    }
  });
});
spans.forEach((span) => {
  span.addEventListener("mouseleave", function () {
    reading("stop");
  });
});
