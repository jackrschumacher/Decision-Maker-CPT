var calories = "";
var food_Type = "";
var perpare_Time = "";
var reccomend = "";
var reccomend_Calories = "";





function write_Text(){
  setText("decision_Box","Your Choice:"+"\n"+"\n"+"We reccomend "+ reccomend+"."+ reccomend_Calories+"\n"+"\n"+"Enjoy!");
  
}
function invalid(){
  setText("decision_Box","Invalid"+"\n"+"\n"+"Please Try Again");
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
      else if(perpare_Time == ">20" && calories == "Low"){
        reccomend = "Pancakes";
        reccomend_Calories = "Try adding fruits to your pancake.";
        write_Text();
      }  
      else if(perpare_Time == ">20" && calories == "Medium"){
        reccomend = "Pancakes";
        reccomend_Calories = "Try adding choclate to your pancake.";
        write_Text();
      }  
      else if(perpare_Time == ">20" && calories == "High"){
        reccomend = "Pancakes";
        reccomend_Calories = "Try adding choclate and syrup to your pancake.";
        write_Text();
      }  
    }
      else{
        invalid();
    }
  if (food_Type == "Meats"){
      if(perpare_Time == "<10" && calories == "Low"){
        reccomend = "Sausage";
        reccomend_Calories = "Try Cutting the Sausage in order to only eat as much as you need";
        write_Text();
    }
      else if(perpare_Time == "<10" && calories == "Medium"){
        reccomend = "Sausage";
        reccomend_Calories = "Try eating fruits and vegatables with your sausage.";
        write_Text();
  
    }
      else if(perpare_Time == "<10" && calories == "High"){
        reccomend = "Sausage";
        reccomend_Calories = "Try eating toast with your sausage";
        write_Text();
    } 
      else if(perpare_Time == ">10 and <20" && calories == "Low"){
        reccomend = "a Breakfast Sandwich";
        reccomend_Calories = "Try adding greens (spinach,etc) to your sandwich.";
        write_Text();
        
    }
      else if(perpare_Time == ">10 and <20" && calories == "Medium"){
        reccomend = "a Breakfast Sandwich";
        reccomend_Calories = "Try adding tomatoes and other vegtables to your sandwhich";
        write_Text();
      } 
      else if(perpare_Time == ">10 and <20" && calories == "High"){
        reccomend = "a Breakfast Sandwhich";
        reccomend_Calories = "Try adding fruits to your meal.";
        write_Text();
      }
      else if(perpare_Time == ">20" && calories == "Low"){
        reccomend = "a Casserole";
        reccomend_Calories = "Try adding cheese to your casserole.";
        write_Text();
      }  
      else if(perpare_Time == ">20" && calories == "Medium"){
        reccomend = "a Casserole";
        reccomend_Calories = "Try adding fruits to your meal.";
        write_Text();
      }  
      else if(perpare_Time == ">20" && calories == "High"){
        reccomend = "a Casserole";
        reccomend_Calories = "Try adding vegtables to your meal.";
        write_Text();
      } 
      else{
        invalid();
      }
  }
  if(food_Type == "Protein"){
      if(perpare_Time == "<10" && calories == "Low"){
        reccomend = "Eggs";
        reccomend_Calories = "Try adding cheese to your egg.";
        write_Text();
    }
      else if(perpare_Time == "<10" && calories == "Medium"){
        reccomend = "Eggs";
        reccomend_Calories = "Try eating toast with your egg.";
        write_Text();
  
    }
      else if(perpare_Time == "<10" && calories == "High"){
        reccomend = "Egg";
        reccomend_Calories = "Try eating fruit and vegtables with your egg.";
        write_Text();
    }
      else if(perpare_Time == ">10 and <20" && calories == "Low"){
        reccomend = "Sausage and Potatoes";
        reccomend_Calories = "Try adding other vegtables such as tomatoes to your Sausage and Potatoes";
        write_Text();
        
    }
      else if(perpare_Time == ">10 and <20" && calories == "Medium"){
        reccomend = "Sausage and Potatoes";
        reccomend_Calories = "Try Cheese to your sausage and potatoes";
        write_Text();
    } 
      else if(perpare_Time == ">10 and <20" && calories == "High"){
        reccomend = "Sausage and Potatoes";
        reccomend_Calories = "Try putting toast bits in your sausage and potatoes";
        write_Text();
    }
      else if(perpare_Time == ">20" && calories == "Low"){
        reccomend = "Eggs, Patatoes, and Sausage";
        reccomend_Calories = "Try adding cheese to your meal.";
        write_Text();
      }  
      else if(perpare_Time == ">20" && calories == "Medium"){
        reccomend = "Eggs, Patatoes, and Sausage";
        reccomend_Calories = "Try having toast with your meal";
        write_Text();
      }  
      else if(perpare_Time == ">20" && calories == "High"){
        reccomend = "Eggs, Patatoes, and Sausage";
        reccomend_Calories = "Try adding vegtables to your meal.";
        write_Text();
      } 
      else{
        invalid();
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

onEvent("Back_Button", "click", function( ) {
  playSound("sound://category_bell/choose_background.mp3", false);
  setScreen("mainScreen");
});


