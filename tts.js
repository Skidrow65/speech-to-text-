//Web Speech API (SpeechSynthesis) this can be implemented as follows:

//First we need to  Get a reference to the SpeechSynthesis object:
//this can be done using the code bellow(maybe😂)
   var synthesis = window.speechSynthesis;

//Next we try retrieval of available voices:
    const voices = synthesis.getVoices();
    console.log('Available voices:', voices);

//Then Create an SpeechSynthesisUtterance object with the desired text or text given:
  // a SpeechSynthesisUtterance object represents a speech request. it can be passed as a string. (it's the message the browser reads out aloud).   
         const utterance = new SpeechSynthesisUtterance('Hello, world!');
         utterance.voice = voices[0]; // Choose a voice

//In creation of web apps we Use the speak method to make the browser read the text as shown:
    synthesis.speak(utterance);

//You can also use third party APIs like google in the web app fo both stt and tts services if you nedd.
