$(document).ready(function () {

  $("#slider").slider({
    animate: "slow",
    range: "min",
    min: 0,
    max: 360,
    value: 0,
    // change: onSliderChange,
    slide: onSliderChange,
  });

  $(".ui-button").button();

  // ------- переменна служит для того чтобы определять что будем менять color или background.--------------
  // -------------будет переприсваиваться по клику на одну из двух кнопок ----------------------------------
  // --------------- если в переменную записана строка "color" меняем цвет тектса, -------------------------
  // ----------------- если записана строка "background" меняем цвет бекграунда ----------------------------
  let change = "color";


  $("#button1").click(function () {               // по клику на первую кнопку
    resetButtonsBackground();                     // уберем "background-color" у всех кнопок
    $(this).css(colorTheClickedButton());
    change = "color";
  });

  $("#button2").click(function () {               // по клику на вторую кнопку
    resetButtonsBackground();                     // уберем "background-color" у всех кнопок
    $(this).css(colorTheClickedButton());
    change = "background";
  });



  function onSliderChange() {                       // при перемещении ползунка менем цвет текста или фона
    let sliderValue = $("#slider").slider("value");
  
    if(change === "color") {
      $("#text").css("color", `hsl(${+sliderValue}, 100%, 50%)`);
    } else if(change === "background") {
      $("#target").css("background-color", `hsl(${+sliderValue}, 100%, 50%)`);
    }
  }

  function resetButtonsBackground() {
    $("span").each(function () {
      $(this).css({
        "background-color": "#EFEFEF",              // вернем натуральный бекграунд кнопки
        "color": "#000"                             // вернем натуральный color тексту
      });
    });
  }
  
  function colorTheClickedButton() {
    return {
      "background-color": "#4072FE",              // окрасим кликнутую кнопку
      "color": "#fff"                             // цвет текста в белый
    }
  }

});



