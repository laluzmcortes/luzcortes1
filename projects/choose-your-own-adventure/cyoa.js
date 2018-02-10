  var response = prompt("You wake up in the morning, with your best attitude, wanting to do something different and special. You think in the many places you can go, and come up with the following: Going hiking to the mountain; Going walking to the park with your dog; Driving to the beach and staying there for a couple of days; Staying at home with a hot cocoa. Because you can't make up your mind, this system can help you decide what to do. Write 'Start' and don't worry about a thing!");

  var gameStarter = function (){
    if (response === "Start" || "start") {
    computerChoice() }
  {
  else (response === "For real, just type 'Start'");

  gameStarter ();
  }
  }

var computerChoice = math.random();
  if(computerChoice < 0.25) {computerChoice = "Hiking";
    }
    else if (computerChoice < 0.50) {
      computerChoice = "Park";
    }
    else if (computerChoice <= 0.75) {
      computerChoice = "Beach";
    }
    else {
      computerChoice = "Home";
    }

if (computerChoice = "Hiking") {
  var hikingResponse = prompt ("CONGRATULATIONS! The system has spoken and you are going Hiking!! Now you get to choose who you are going with. You can go with Peter, Joseph or Sarah. Type your choice by using P, J or S.")
  if (hikingResponse === "P" || "p" || "J" || "j") {
    alert ("They are not available to go out with you :(, the system will reboot now") computerChoice ()
  }
  else if (hikingResponse === "S" || "s") {
    alert ("You have a wonderful time with Sarah and you get married! THE END! :)")
  }
  else {
    alert ("Your response was not valid, the systme will reboot now")
    computerChoice ()

}

if (computerChoice = "Park") {
  var parkResponse = prompt ("CONGRATULATIONS! The system has spoken and you are going to the Park!! You can get there by walking, swimming or Uber. Type your choice by using W, S or U.")
} if (parkResponse === "W" || "w") {
  alert ("There's an angry dog loose, you better go somewhere else! The system will reboot now")
  computerChoice ()
}
else if (parkResponse === "S" || "s") {
  alert ("The water is too cold! The system will reboot now")
  computerChoice ()
}
else if (parkResponse === "U" || "u") {
  alert ("The fastest way to get there! THE END :)")
}
else {
  alert ("That's not a valid response. The system will reboot now")
  computerChoice ()
}

if (computerChoice = "Beach") {
  var beachResponse = prompt ("CONGRATULATIONS! The system has spoken and you are going to the Beach!! You decide to take some food with you, you can choose to take Chips, a Sandwich or a Burrito. Type your response using C, S or B")
} if (parkResponse === "C" || "c") {
  alert ("You meet someone at the beach that loves chips and make a new best friend. THE END")
}
else if (parkResponse === "S" || "s") {
  alert ("You forget your sandwich on the way out, and decide to return to get it. The system will reboot now so you can go somewhere else")
  computerChoice ()
}
else if (parkResponse === "B" || "b") {
  alert ("Burritos ROCK! You are the best. THE END :)")
}
else {
  alert ("That's not a valid response. The system will reboot now")
  computerChoice ()
}

if (computerChoice = "Home") {
  alert ("You are staying at home my friend! Tuck yourself up and enjoy some netflix and hot cocoa")
}
