$(function(){
  var red = 75;
  var green = 75;
  var blue = 75;
  var detailcolor ;
  var v;
  var pintar = function(){
    detailcolor = "rgb("+ parseInt(red)+','+ parseInt(green)+ ','+ parseInt(blue)+")";
    $("#namecolor")[0].innerHTML = detailcolor;
    $("#paint").css("background-color", detailcolor);
  }
    $(".dial").knob({
        'min': 0,
        'max': 255,
        'lineCap': 'round',
        'change' : function (v) {
          if (this.$[0].id == "red") {
            red = v;
            pintar();
          }else if (this.$[0].id == "green") {
            green = v;
            pintar();

          } else if (this.$[0].id == "blue") {
            blue = v;
            pintar();
          }
        }
    }
    );
    $(".dial").bind("change",function(){
        v = $(this);
          if (v[0].id == "red") {
            red = v.val();
            pintar();
          }else if (v[0].id == "green") {
            green = v.val();
            pintar();

          } else if (v[0].id == "blue") {
            blue = v.val();
            pintar();
          }

    }
  );
    // $("#red").on("change", function() {
    //   console.log(this)
    // })
    // $("#blue").on("change", function() {
    //   console.log(this)
    // })

});
