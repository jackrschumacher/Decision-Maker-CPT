
//Declare Variables
var calories = "";
var food_Type = "";
var perpare_Time = "";
var reccomend = "";
var reccomend_Calories = "";




//Write Recommended Item to Screen
function write_Text(){
  setText("decision_Box","Your Choice:"+"\n"+"\n"+"We reccomend "+ reccomend+"."+ reccomend_Calories+"\n"+"\n"+"Enjoy!");
  
}
//If Inputs are not valid, print Invalid, Play Error Input Sound
function invalid(){
  playSound("sound://category_retro/retro_game_echo_error_4.mp3", false);
  setText("decision_Box", "INVALID!"+"\n"+"\n"+"Please Try Again");
  
}

//Check each of the input boxes, and make a reccomendation based on this
function update_Text(){
  //Grains Section
  if (food_Type == "Grains"){
    //If Perpare time is less than 10 minutes, reccomend Oatmeal with various add-ons based on calorie amountm, send to write_Text()
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
    }//If Perpare time is between 10 and 20 minutes, reccomend Avaccado Toast with various add-ons based on calorie amountm, send to write_Text()
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
      }//If Perpare time is greater than 20 minutes, reccomend Pancakes with various add-ons based on calorie amountm, send to write_Text()
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
    //Else, Invalid, Send to invalid() to display error message
      else{
        invalid();
    }
  //Meats Section
  if (food_Type == "Meats"){
    //If Perpare time is Less than 10 minutes, reccomend Sausage with various add-ons based on calorie amountm, send to write_Text()
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
    //If Perpare time is between 10 and 20 minutes, reccomend a Breakfast Sandwhich with various add-ons based on calorie amountm, send to write_Text()
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
      //If Perpare time is greater than 20 minutes, reccomend a Casserole with various add-ons based on calorie amountm, send to write_Text()
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
      //Else, Invalid, Send to invalid() to display error message
      else{
        invalid();
      }
  }
  //Protein Section
  if(food_Type == "Protein"){
    //If Perpare time is Less than 10 minutes, reccomend Eggs with various add-ons based on calorie amountm, send to write_Text()
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
        reccomend_Calories = "Try adding other vegtables such as tomatoes to your Sausage and Potatoes.";
        write_Text();
        
    }//If Perpare time is between 10 and 20 minutes, reccomend Sausage and Potatoes with various add-ons based on calorie amountm, send to write_Text()
      else if(perpare_Time == ">10 and <20" && calories == "Medium"){
        reccomend = "Sausage and Potatoes";
        reccomend_Calories = "Try Cheese to your sausage and potatoes.";
        write_Text();
    } 
      else if(perpare_Time == ">10 and <20" && calories == "High"){
        reccomend = "Sausage and Potatoes";
        reccomend_Calories = "Try putting toast bits in your sausage and potatoes.";
        write_Text();
    }
    //If Perpare time is greater than 20 minutes, reccomend Eggs, Potatoes, and Suasage with various add-ons based on calorie amountm, send to write_Text()
      else if(perpare_Time == ">20" && calories == "Low"){
        reccomend = "Eggs, Patatoes, and Sausage";
        reccomend_Calories = "Try adding cheese to your meal.";
        write_Text();
      }  
      else if(perpare_Time == ">20" && calories == "Medium"){
        reccomend = "Eggs, Patatoes, and Sausage";
        reccomend_Calories = "Try having toast with your meal.";
        write_Text();
      }  
      else if(perpare_Time == ">20" && calories == "High"){
        reccomend = "Eggs, Patatoes, and Sausage";
        reccomend_Calories = "Try adding vegtables to your meal.";
        write_Text();
      } 
      //Else, Invalid, Send to invalid() to display error message
      else{
        invalid();
      }
    
    
  }
      
}





//When Choose Button Clicked, Get text from all of the dropdowns, send this info to update_Text() Function (which will decide reccomendations), and play a sound and set screen to decision screen
onEvent("choose_Button", "click", function( ) {
  calories = getText("calories_Dropdown");
  perpare_Time = getText("perpare_Time_Dropdown");
  food_Type = getText("food_Type_Dropdown");
  update_Text();
  playSound("sound://category_app/app_interface_button_2.mp3", false);
  setScreen("decisionScreen");


  
});
//When back button clicked, play sound, set screen to main screen.
onEvent("Back_Button", "click", function( ) {
  playSound("sound://category_bell/choose_background.mp3", false);
  setScreen("mainScreen");
});


