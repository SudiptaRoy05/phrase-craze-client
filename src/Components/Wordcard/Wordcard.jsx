import { useState } from 'react';

export default function WordCard({ item }) {
  const {
    word,
    meaning,
    pronunciation,
    part_of_speech,
    difficulty,
    when_to_say,
    example,
    lesson_no,
  } = item;

  // To manage the pronunciation button state (optional, for disabling after clicking)
  const [isPronouncing, setIsPronouncing] = useState(false);

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'de-DE'; // German language
    window.speechSynthesis.speak(utterance);
    
    // Disable the button after speaking (optional)
    setIsPronouncing(true);
    utterance.onend = () => setIsPronouncing(false); // Enable the button after pronunciation
  }

  return (
    <div className="my-6 mx-auto">
      <div className="bg-gradient-to-b from-cyan-100 to-white text-blue-500 shadow-lg rounded-lg w-80 overflow-hidden transform transition-transform hover:scale-105 border border-blue-400">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-1">{word}</h2>
          <p className="text-blue-600 mb-2">Lesson_no : {lesson_no}</p>
          <p className="text-blue-600 mb-2">Meaning : {meaning || "Meaning not available"}</p>
          <p className="text-blue-600 mb-2">Pronunciation : {pronunciation || "Pronunciation not available"}</p>
          <p className="text-blue-600 mb-2">Part_of_speech : {part_of_speech || "Part of speech not available"}</p>
          <p className="text-blue-600 mb-2">When_to_say : {when_to_say || "Usage information not available"}</p>
          <p className="text-blue-600 mb-2">Example : {example || "Example sentence not available"}</p>
          <p className="text-blue-600 mb-2">Difficulty : {difficulty || "Difficulty level not available"}</p>
          <div className="flex justify-end">
            <button 
              onClick={() => pronounceWord(word)} 
              className="btn bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm"
              disabled={isPronouncing} // Disable button while pronunciation is ongoing
            >
              <i className="fas fa-volume-up"></i> Speak Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
