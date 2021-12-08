var calories = "";
var food_Type = "";
var perpare_Time = "";
var reccomend = "";
var reccomend_Calories = "";





function write_Text(){
  setText("decision_Box","Your Choice:"+"\n"+"We reccomend "+ reccomend+"."+ reccomend_Calories);
  
}

function update_Text(){
  
  if (food_Type == "Grains"){
    if(perpare_Time == "<10" && calories == "Low"){
        reccomend = "Oatmeal";
        reccomend_Calories = "Try measuring the amount of oatmeal in order to eliminate excess.";
        write_Text();
    }
      else if(perpare_Time == "<10" && calories == "Medium"){
        reccomend = "Oatmeal";
        reccomend_Calories = "Try adding fruit to your outmeal.";
        write_Text();
  
    }
      else if(perpare_Time == "<10" && calories == "High"){
        reccomend = "Oatmeal";
        reccomend_Calories = "Try adding cocunut to your oatmeal.";
        write_Text();
    } 
      else if(perpare_Time == ">10 and <20" && calories == "Low"){
        reccomend = "Avacado Toast";
        reccomend_Calories = "Try adding other vegtables such as tomatoes to your toast";
        write_Text();
        
    }
      else if(perpare_Time == ">10 and <20" && calories == "Medium"){
        reccomend = "Avacado Toast";
        reccomend_Calories = "Try adding Bagel Seasoning to your toast";
        write_Text();
      } 
      else if(perpare_Time == ">10 and <20" && calories == "High"){
        reccomend = "Avacado Toast";
        reccomend_Calories = "Try adding fruits and other vegtables to your meal.";
        write_Text();
        
    }
    else{
      reccomend = "Invalid";
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


