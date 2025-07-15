'use client'
import React, { useEffect, useState } from 'react';

// Type declarations for Speech Recognition API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const VoiceRecognizer: React.FC = () => {
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState('Click to start');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setStatus('Speech recognition not supported in this browser');
      return;
    }
    
    const rec = new SpeechRecognition();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = 'en-US';
    
    setRecognition(rec);
  }, []);

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
    } else {
      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        
        setTranscript(prev => prev + finalTranscript);
        setStatus(interimTranscript ? `Listening... (${interimTranscript})` : '🎤 Listening...');
      };

      recognition.onerror = () => {
        setStatus('Error occurred');
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
        setStatus('Stopped');
      };

      recognition.start();
      setIsListening(true);
      setStatus('🎤 Starting...');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto font-sans">
      <h2 className="text-2xl font-bold mb-4">🧠 Voice Recognition</h2>
      <p className="mb-2 text-gray-600">{status}</p>
      <div className="h-40 overflow-y-auto bg-gray-100 border border-gray-300 p-3 rounded text-sm shadow mb-4">
        {transcript || 'Say something...'}
      </div>
      <button 
        onClick={toggleListening}
        disabled={!recognition}
        className={`px-4 py-2 rounded font-medium ${
          !recognition 
            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
            : isListening 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {isListening ? 'Stop' : 'Start'} Recording
      </button>
      <button 
        onClick={() => setTranscript('')}
        className="ml-2 px-4 py-2 rounded font-medium bg-gray-500 hover:bg-gray-600 text-white"
      >
        Clear
      </button>
    </div>
  );
};

export default VoiceRecognizer;