function cleanExpression(expression) {
    expression = expression.replace(/[\+]{2,}/g, '+');       // Thay '++' bằng '+'
    expression = expression.replace(/\+{1,}-/g, '-');        // Thay '+-' bằng '-'
    expression = expression.replace(/={1,}\+{1,}/g, '+');    // Thay '=+' bằng '+'
    expression = expression.replace(/-{2,}/g, '+');          // Thay '--' bằng '+'
// Xóa các tổ hợp không hợp lệ như '+*', '-/', '+/'
    

  

  return expression;
}

$(".appendToDisplay").click(function () {
  var currentValue = $("#display").val();
  let buttonValue = $(this).val();

  if (
    (/[\+\-\/\*]{2}$/.test(currentValue) && /[\+\-\/\*]/.test(buttonValue)) ||
    (currentValue.slice(-1) === "*" && buttonValue === "*") ||
    (currentValue.slice(-1) === "/" && buttonValue === "/") ||
    (currentValue.slice(-1) === '/' && buttonValue === '*') || 
        (currentValue.slice(-1) === '*' && buttonValue === '/')
  ) {
    return; 
  }
   
   if ((currentValue.slice(-1) === '/' && buttonValue === '+') || 
   (currentValue.slice(-1) === '*' && buttonValue === '+')) {
   return;  
}



  let newValue = currentValue + buttonValue;
  $("#display").val(newValue);
});

$(".clearDisplay").click(function () {
  var clearValue = "";
  $("#display").val(clearValue);
});

$(".calculate").click(function () {
  var expression = $("#display").val();
  expression = cleanExpression(expression);
  try {
    let result = eval(expression);
    $("#display").val(result);
  } catch (error) {
    $("#display").val("Error");
  }
});

$(".square").click(function () {
  var currentValue = $("#display").val();
  var square = Math.pow(currentValue, 2);
  $("#display").val(square);
});

$(".sqrt").click(function () {
  var currentValue = $("#display").val();
  var sqrt = Math.sqrt(currentValue, 2);
  $("#display").val(sqrt);
});