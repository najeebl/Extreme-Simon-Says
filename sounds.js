        var randomSounds = [];

        var siren = document.createElement('audio');
        siren.setAttribute('src', 'Sounds/siren.wav');

        var glass = document.createElement('audio');
        glass.setAttribute('src', 'Sounds/glassBreaking.mp3');

        var explosion = document.createElement('audio');
        explosion.setAttribute('src', 'Sounds/explosion.mp3');

        var nail = document.createElement('audio');
        nail.setAttribute('src', 'Sounds/nailChalkboard.wav');

        var cow = document.createElement('audio');
        cow.setAttribute('src', 'Sounds/cowMoo.wav');

        var cat = document.createElement('audio');
        cat.setAttribute('src', 'Sounds/catMeow.wav');

        var dog = document.createElement('audio');
        dog.setAttribute('src', 'Sounds/dogBark.wav');

        var scream = document.createElement('audio');
        scream.setAttribute('src', 'Sounds/scream.ogg');

        var coughing = document.createElement('audio');
        coughing.setAttribute('src', 'Sounds/coughing.mp3');

        var sneezing = document.createElement('audio');
        sneezing.setAttribute('src', 'Sounds/sneezing.wav');

        var car = document.createElement('audio');
        car.setAttribute('src', 'Sounds/carcrash.wav');

        var crying = document.createElement('audio');
        crying.setAttribute('src', 'Sounds/babycrying.wav');

        var redSound = document.createElement('audio');
        redSound.setAttribute('src', 'Sounds/switch1.wav');

        var yellowSound = document.createElement('audio');
        yellowSound.setAttribute('src', 'Sounds/switch2.wav');

        var blueSound = document.createElement('audio');
        blueSound.setAttribute('src', 'Sounds/switch3.wav');

        var greenSound = document.createElement('audio');
        greenSound.setAttribute('src', 'Sounds/switch4.wav');

        var orangeSound = document.createElement('audio');
        orangeSound.setAttribute('src', 'Sounds/switch5.wav');

        var purpleSound = document.createElement('audio');
        purpleSound.setAttribute('src', 'Sounds/switch6.wav');

        var brownSound = document.createElement('audio');
        brownSound.setAttribute('src', 'Sounds/switch7.wav');

        var greySound = document.createElement('audio');
        greySound.setAttribute('src', 'Sounds/switch8.wav');

        var cyanSound = document.createElement('audio');
        cyanSound.setAttribute('src', 'Sounds/switch9.wav');

        var gameover = document.createElement('audio');
        gameover.setAttribute('src', 'Sounds/gameover.wav');

        function playRed() {
            redSound.play();
        }

        function playYellow() {
            yellowSound.play();
        }

        function playBlue() {
            blueSound.play();
        }

        function playGreen() {
            greenSound.play();
        }

        function playOrange() {
            orangeSound.play();
        }

        function playPurple() {
            purpleSound.play();
        }

        function playBrown() {
            brownSound.play();
        }

        function playGrey() {
            greySound.play();
        }

        function playCyan() {
            cyanSound.play();
        }

        function gameOverSound() {
            gameover.play();
        }
        randomSounds.push(siren);
        randomSounds.push(glass);
        randomSounds.push(explosion);
        randomSounds.push(nail);
        randomSounds.push(cow);
        randomSounds.push(cat);
        randomSounds.push(dog);
        randomSounds.push(scream);
        randomSounds.push(coughing);
        randomSounds.push(sneezing);
        randomSounds.push(car);
        randomSounds.push(crying)

        function randomSound() {
            var i = Math.floor((Math.random() * 11));
            randomSounds[i].play();
        }

        function setVolume() {
            mySound = document.getElementById("sound");
            mySound.volume = 0.01;
        }
