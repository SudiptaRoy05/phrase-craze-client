import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "de-DE";
    window.speechSynthesis.speak(utterance);
  }

  const difficultyClasses = {
    easy: "bg-green-100 text-green-800 border-green-300",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
    difficult: "bg-red-100 text-red-800 border-red-300",
  };

  const difficultyClass = difficultyClasses[difficulty] || difficultyClasses.easy;

  return (
    <>
      <div
        className={`shadow-md rounded-lg w-full sm:w-96 md:w-72 lg:w-72 xl:w-96 mx-auto p-4 border-l-4 ${difficultyClass} hover:shadow-lg transition-transform transform hover:scale-105 mb-5`}
      >
        <h2 className="text-xl font-bold text-blue-800 mb-2">{word}</h2>
        <p className="text-gray-600">
          <strong>Lesson:</strong> {lesson_no}
        </p>
        <p className="text-gray-600 truncate">
          <strong>Meaning:</strong> {meaning || "Not available"}
        </p>
        <p className="text-gray-600 truncate">
          <strong>Pronunciation:</strong> {pronunciation || "Not available"}
        </p>
        <p className="text-gray-600">
          <strong>Part of Speech:</strong> {part_of_speech || "Not available"}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => pronounceWord(word)}
            className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md w-full sm:w-auto"
          >
            Speak
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-sm bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md w-full sm:w-auto"
          >
            When to Say
          </button>
          <button
            onClick={() => navigate("/letslearn")}
            className="btn btn-sm btn-outline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md w-full sm:w-auto"
          >
            Back to Learn
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg p-6 w-11/12">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">{word}</h3>
            <p className="text-gray-700">
              <strong>Meaning:</strong> {meaning || "Not available"}
            </p>
            <p className="text-gray-700">
              <strong>When to Say:</strong> {when_to_say || "Not available"}
            </p>
            <p className="text-gray-700">
              <strong>Example:</strong> {example || "Not available"}
            </p>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
