export default function Wordcard({ item }) {
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
  
    
    function pronounceWord(word) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'de-DE'; 
      window.speechSynthesis.speak(utterance);
    }
  
    
    const difficultyClasses = {
      easy: "bg-blue-100 text-blue-800 border-2 border-blue-400",    
      medium: "bg-yellow-100 text-yellow-800 border-2 border-yellow-400",
      difficult: "bg-red-100 text-red-800 border-2 border-red-400",
    };
  
    
    const difficultyClass = difficultyClasses[difficulty] || difficultyClasses.easy;
  
    return (
      <div className="my-6 mx-auto">
        <div className={`bg-gradient-to-b from-cyan-100 to-white shadow-lg rounded-lg w-80 overflow-hidden transform transition-transform hover:scale-105 border ${difficultyClass}`}>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-1">{word}</h2>
            <p className="text-blue-600 mb-1">Lesson: {lesson_no}</p>
            <p className="text-blue-600 mb-1">Meaning: {meaning || "Meaning not available"}</p>
            <p className="text-blue-600 mb-1">Pronunciation: {pronunciation || "Pronunciation not available"}</p>
            <p className="text-blue-600 mb-1">Part of Speech: {part_of_speech || "Part of speech not available"}</p>
            <p className="text-blue-600 mb-1">When to Say: {when_to_say || "Usage information not available"}</p>
            <p className="text-blue-600 mb-1">Example: {example || "Example sentence not available"}</p>
            <p className="text-blue-600 mb-1">Difficulty: {difficulty || "Difficulty level not available"}</p>
            <div className="flex justify-end">
              <button 
                onClick={() => pronounceWord(word)} 
                className="btn bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm"
              >
                Speak
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  