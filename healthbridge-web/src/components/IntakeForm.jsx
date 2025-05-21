import { useState } from 'react';

function IntakeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    mainSymptom: '',
    painLevel: '',
    duration: '',
    otherSymptoms: '',
    medications: '',
    medicalHistory: '',
    visualIndicators: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a structured prompt from the form data
    const prompt = `
      User Health Information:
      - Main Symptom: ${formData.mainSymptom}
      - Pain Level (1-10): ${formData.painLevel}
      - Duration: ${formData.duration}
      - Other Symptoms: ${formData.otherSymptoms}
      - Current Medications: ${formData.medications}
      - Relevant Medical History: ${formData.medicalHistory}
      - Visual Indicators: ${formData.visualIndicators}
      
      Based on this information, please provide an initial assessment of what might be causing these symptoms, potential next steps, and whether the user should seek immediate medical attention. Remember to be informative but cautious, and emphasize the importance of consulting with a healthcare professional for proper diagnosis and treatment.
    `.trim();
    
    // Pass the prompt to the parent component
    onSubmit(prompt, formData.mainSymptom);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 overflow-y-auto max-h-[calc(100vh-250px)] scrollbar-thin scrollbar-thumb-red-200 scrollbar-track-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Symptom Questionnaire</h2>
      <p className="text-gray-600 mb-6">Please fill out this form to help us better understand your health concerns.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="mainSymptom" className="block text-sm font-medium text-gray-700 mb-1">
            What is your main symptom or concern? *
          </label>
          <input
            type="text"
            id="mainSymptom"
            name="mainSymptom"
            value={formData.mainSymptom}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="e.g., Headache, Stomach pain, Fever"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="painLevel" className="block text-sm font-medium text-gray-700 mb-1">
              Pain Level (if applicable)
            </label>
            <select
              id="painLevel"
              name="painLevel"
              value={formData.painLevel}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select pain level</option>
              <option value="1">1 - Very mild</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 - Moderate</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 - Severe</option>
              <option value="N/A">Not applicable</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
              How long have you had this symptom? *
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., 2 days, 1 week, Several months"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="otherSymptoms" className="block text-sm font-medium text-gray-700 mb-1">
            Are you experiencing any other symptoms?
          </label>
          <textarea
            id="otherSymptoms"
            name="otherSymptoms"
            value={formData.otherSymptoms}
            onChange={handleChange}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="e.g., Nausea, Dizziness, Fatigue"
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="medications" className="block text-sm font-medium text-gray-700 mb-1">
            Current medications (if any)
          </label>
          <input
            type="text"
            id="medications"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="e.g., Ibuprofen, Insulin, None"
          />
        </div>
        
        <div>
          <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-1">
            Relevant medical history
          </label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="e.g., Diabetes, Hypertension, Previous surgeries"
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="visualIndicators" className="block text-sm font-medium text-gray-700 mb-1">
            Visual indicators (if applicable)
          </label>
          <input
            type="text"
            id="visualIndicators"
            name="visualIndicators"
            value={formData.visualIndicators}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="e.g., Rash, Swelling, Discoloration"
          />
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
          >
            Submit and Start Chat
          </button>
        </div>
      </form>
    </div>
  );
}

export default IntakeForm;
