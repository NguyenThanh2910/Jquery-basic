$(".appendToDisplay").click(function(){
    var currentValue =$("#display").val();
    let buttonValue = $(this).val();
    let newValue= currentValue + buttonValue;
    $("#display").val(newValue);

});
   
$(".clearDisplay").click(function(){
    var clearValue ="";
    $("#display").val(clearValue);

});   

$(".calculate").click(function(){
    var currentValue =$("#display").val();
    try {
        var result =eval(currentValue);
        $("#display").val(result);
    } catch (error) {
        $("#display").val("Lỗi");
    }
});   


$(".square").click(function(){
    var currentValue =$("#display").val();
    var square=Math.pow(currentValue,2);
    $("#display").val(square);
});   

$(".sqrt").click(function(){
    var currentValue =$("#display").val();
    var sqrt=Math.sqrt(currentValue,2);
    $("#display").val(sqrt);
});   


   
    