


alert ("remember to paste the Drew's code")
// ** Global Functions **
function playOpeningScene() {
    var promptPromise = new Promise(function(resolve) {

        var text = `You wake up in the morning, with your best attitude, wanting to do something different and special. You think in the many places you can go, and come up with the following: \n\nGoing hiking to the mountain;\nGoing walking to the park with your dog;\nDriving to the beach and staying there for a couple of days;\nStaying at home with a hot cocoa.\n\nBecause you can't make up your mind, this system can help you decide what to do.\n\nWrite 'Start' and don't worry about a thing!`;
        var response = prompt(text);
        resolve(response);
    })

    promptPromise.then(function(result) {
        if (result.toLowerCase() !== 'start' && result.toLowerCase() !== 's') {
            alert(`Type 'Start' or 'start' or 'S' or 's'`);
            return playOpeningScene();
        } else {
            return;
        }
    })
}

function startGame() {
    console.log('User started the game.');
    playOpeningScene();
}

function generateRandomWholeNumber(num) {
    return Math.ceil(Math.random() * num);
}

function computerPickLocation() {
    var randomNumber = generateRandomWholeNumber(12);
    if (randomNumber < 4) {
        return 'Hiking';
    } else if (randomNumber < 7 && randomNumber > 3) {
        return 'Park';
    } else if (randomNumber < 10 && randomNumber > 6) {
        return 'Beach';
    } else {
        return 'Home';
    }
}


// **************** Game starts here *******************
startGame();
var destination = computerPickLocation();
switch (destination) {

    case 'Hiking':
        function choosePartner() {
            var text = `CONGRATULATIONS! The system has spoken and you are going Hiking!!\n\nNow you get to choose who you are going with. You can go with Peter, Joseph or Sarah.\n\nType your choice by usingP, J or S.`;
            var response = prompt(text);
            if (response === 'P' ||
                response === 'p' ||
                response === 'J' ||
                response === 'j') {
                return 'wrong';
            } else if (response === 'S' || response === 's') {
                return 'right'
            } else {
                return null;
            }
        }
        var hikingResponse = choosePartner();
        while (hikingResponse !== 'right') {
            if (hikingResponse === 'wrong') {
                alert(`They are not available to go out with you :(, the system will reboot now`);
                hikingResponse = choosePartner();
            } else if (hikingResponse === null) {
                alert(`Please choose P, J or S.`);
                hikingResponse = choosePartner();
            }
        }
        alert(`You have a wonderful time with Sarah and you get married! THE END! :)`);
        break;

    case 'Park':
        function meanOfTransport() {
            var text = `CONGRATULATIONS! The system has spoken and you are going to the Park!!\n\nYou can get there by walking, swimming or Uber.\n\nType your choice by using W, S or U.`;
            var response = prompt(text);
            if (response === 'W' || response === 'w') {
                return 'walking';
            } else if (response === 'S' || response === 's') {
                return 'swimming';
            } else if (response === 'U' || response === 'u') {
                return 'uber'
            } else {
                return null;
            }
        }
        var parkResponse = meanOfTransport();
        while (parkResponse !== 'uber') {
            if (parkResponse === 'walking') {
                alert(`There's an angry dog loose, you better go somewhere else!\n\nThe system will reboot now.`);
                parkResponse = meanOfTransport();
            } else if (parkResponse === 'swimming') {
                alert(`The water is too cold! The system will reboot now.`);
                parkResponse = meanOfTransport();
            } else if (parkResponse === null) {
                alert(`Please choose W, S, or U.`);
                parkResponse = meanOfTransport();
            }
        }
        alert(`The fastest way to get there! THE END :)`);
        break;

    case 'Beach':
        function chooseFood() {
            var text = `CONGRATULATIONS! The system has spoken and you are going to the Beach!!\n\nYou decide to take some food with you, you can choose to take Chips, a Sandwich or a Burrito.\n\nType your response using C, S or B.`;
            var response = prompt(text);
            if (response === 'C' || response === 'c') {
                return 'chips';
            } else if (response === 'S' || response === 's') {
                return 'sandwich';
            } else if (response === 'B' || response === 'b') {
                return 'burrito';
            } else {
                return null;
            }
        }
        var beachResponse = chooseFood();
        while (beachResponse !== 'burrito') {
            if (beachResponse === 'chips') {
                alert(`You meet someone at the beach that loves chips and make a new best friend.`);
                beachResponse = chooseFood();
            } else if (beachResponse === 'sandwich') {
                alert(`You forget your sandwich on the way out, and decide to return to get it. The system will reboot now so you can go somewhere else.`);
                beachResponse = chooseFood();
            } else if (beachResponse === null) {
                alert(`Please choose C, S, or B.`);
                beachResponse = chooseFood();
            }
        }
        alert(`Burritos ROCK! You are the best. THE END :)`);
        break;

    case 'Home':
        alert("You are staying at home my friend! Tuck yourself up and enjoy some netflix and hot cocoa");
        break;

    default:
        console.log('Just a lonely ole default. No one ever calls :(');
}
/*
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
*/
