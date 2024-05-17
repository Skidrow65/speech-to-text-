//expalnation on how to use speech to text API

//First we get a reference to the SpeechRecognition object:
    var recognition = new window.SpeechRecognition();

//Next Set up event listeners to handle recognition results:
   recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      console.log('Recognized text:', transcript);
    // you need to Process the transcript as needed
   };
   
//Finally to setup the Speech Recognition or Start listening for speech:
    //implement the following code:
        recognition.start();
