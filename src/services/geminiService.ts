import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function askMentor(query: string, context?: string) {
  const prompt = `You are a specialized UPSC Sociology Mentor. Your goal is to help students understand complex sociological concepts, link them to current affairs, and improve their UPSC answer writing.
  
  Context: ${context || "General sociology query"}
  
  Question: ${query}
  
  Please provide a structured, high-quality response that includes:
  1. Core sociological explanation.
  2. Perspective of relevant thinkers (Marx, Weber, Durkheim, etc.).
  3. Indian society examples (if applicable).
  4. Recent current affairs link.
  5. One potential UPSC Mains question based on this topic.
  
  Write in a professional, encouraging, and academic tone.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "No response received.";
  } catch (error) {
    console.error("AI Error:", error);
    return "The AI Intelligence engine is momentarily offline. Verify synaptic link.";
  }
}

export async function generateMCQs(topic: string) {
  const prompt = `Generate 3 UPSC-standard Multiple Choice Questions (MCQs) for the sociology topic: ${topic}.
  Format as JSON: 
  [
    {
      "question": "text",
      "options": ["A", "B", "C", "D"],
      "correct": 0,
      "explanation": "why this is correct and others are wrong"
    }
  ]
  Include conceptual traps and statement-based questions common in UPSC Prelims.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("MCQ Error:", error);
    return [];
  }
}

export async function compressNotes(notes: string) {
  const prompt = `Compress the following sociology notes into a high-yield revision sheet. 
  Focus on:
  - Keywords
  - Thinker quotes
  - Core arguments
  - PYQ focal points
  
  Notes: ${notes}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "Could not compress notes at this time.";
  } catch (error) {
    console.error("Compression Error:", error);
    return "Could not compress notes at this time.";
  }
}

export async function analyzeTopic(topic: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze Sociology topic: ${topic}. Return JSON: {theories, thinkers (list), currentAffairsLink, mainsQuestion}`,
      config: {
        responseMimeType: "application/json",
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Analysis Error:", error);
    return null;
  }
}
