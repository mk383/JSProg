
// Create the object
const AI_Properties = {
  // Properties
  Multilingual: true,
  Emotional_Intelligence: true,
  Common_Sense: true,
  Creativity: true,
  Conversational_Memory: true,
  Humor: true,
  Role_Playing: true,
  Empathy: true,
  Idiomatic_Language: true,
  Self_Awareness: true,
  Active_Listening: true,
  Contextual_Understanding: true,
  Tone_and_Style: true,
  Knowledge_Graph: true,
  Critical_Thinking: true,
  Visual_Understanding: true,
  Audio_Understanding: true,
  Dialogue_Management: true,
  Error_Correction: true,
  Personalization: true,
  Gamification: true,
  Storytelling: true,
  Jokes_and_Riddles: true,
  Debate_and_Discussion: true,
  Mental_Health_Support: true,
  
  // Nested object - Degrees
  Degrees: {
    Engineering: {
      CSS: true,
      Robotics: true,
      AI_ML: true
    },
    PHD: {
      Adv_Computing: true,
      Data_Science: true,
      Cognitive_Science: true
    },
    Bachelor: {
      Computer_Science: true,
      Information_Tech: true,
      Math_Statistics: true
    },
    Master: {
      Cybernetics: true,
      Human_Computer_Interaction: true,
      Natural_Language_Processing: true
    }
  },
  
  // Array - Certificates
  Certificates: [
    'Hacker Rank participation',
    'Certificate in IFE course',
    'Certificate in Adv Programming'
  ]
};

// Add new property
AI_Properties.Total_Experience = "14 years";

// Modify existing property
AI_Properties.Multilingual = false;

// Add new certificate at 2nd index
AI_Properties.Certificates.splice(1, 0, 'Oracle Certified');

// Log last element of certificates array
console.log(AI_Properties.Certificates[AI_Properties.Certificates.length - 1]);

// Traverse certificates array using for loop
for (let i = 0; i < AI_Properties.Certificates.length; i++) {
  console.log(AI_Properties.Certificates[i]);
}

// Log complete object on console using for-in loop
for (const key in AI_Properties) {
  console.log(`${key}: ${AI_Properties[key]}`);
}

