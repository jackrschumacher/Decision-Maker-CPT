var calories = "";
var food_Type = "";
var perpare_Time = "";
var reccomend = "";
var reccomend_Calories = "";





function write_Text(){
  setText("decision_Box","Your Choice:"+"We reccomend "+ reccomend+"."+ reccomend_Calories);
  
}

function update_Text(){
  if (food_Type == "Grains"){
    if(perpare_Time == "<10" && calories == "Low"){
      reccomend = "Oatmeal";
      reccomend_Calories = "Try measuring the amount of oatmeal in order to eliminate excess.";
      write_Text();
    }
  }
}

onEvent("choose_Button", "click", function( ) {
  calories = getText("calories_Dropdown");
  perpare_Time = getText("perpare_Time_Dropdown");
  food_Type = getText("food_Type_Dropdown");
  playSound("sound://category_app/app_interface_button_2.mp3", false);
  setScreen("decisionScreen");
  update_Text();
});


