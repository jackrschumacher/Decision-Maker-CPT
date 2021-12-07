var calories = "";
var food_Type = "";
var perpare_Time = "";


function update_Vars(){
  calories = getText("calories_Dropdown");
  food_Type = getText("perpare_Time_Dropdown");
  perpare_Time = getText("food_Type_Dropdown");
}
onEvent("choose_Button", "click", function( ) {
  update_Vars();
});


