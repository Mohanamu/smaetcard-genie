
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationResult, UserCategory, GroundingLink } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a unique card design image based on the user category
 */
export const generateCardVisual = async (category: string, reasoning: string): Promise<string | undefined> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A professional, sleek, and high-end 3D credit card design for a "${category}". 
            Style: Modern glassmorphism, glowing edges, premium textures. 
            Theme: ${reasoning.substring(0, 100)}. 
            No text on the card, just a beautiful abstract pattern and a futuristic microchip. 16:9 aspect ratio.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Image Generation Error:", error);
  }
  return undefined;
};

/**
 * Analyzes spending habits using Gemini 3 with Google Search Grounding
 */
export const analyzeSpendingHabits = async (input: string): Promise<RecommendationResult> => {
  try {
    const textModel = "gemini-3-flash-preview";
    
    const prompt = `
      Act as a senior financial advisor. Analyze the user spending: "${input}".
      1. Classify them into one of: "Travel Enthusiast", "Online Shopper", "Fuel Spender", "Grocery Saver", "Premium Lifestyle", "Business Professional".
      2. Find a specific, REAL-WORLD credit card available today that offers the best rewards for this user.
      3. Estimate annual savings.
      
      Respond in JSON format.
    `;

    const response = await ai.models.generateContent({
      model: textModel,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING, enum: Object.values(UserCategory) },
            reasoning: { type: Type.STRING },
            suggestedCardName: { type: Type.STRING },
            estimatedSavings: { type: Type.STRING }
          },
          required: ["category", "reasoning", "suggestedCardName", "estimatedSavings"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    const result = JSON.parse(text) as RecommendationResult;

    // Extract Grounding Links
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      result.groundingLinks = chunks
        .filter(c => c.web)
        .map(c => ({
          title: c.web.title || "More info",
          uri: c.web.uri
        }));
    }

    // Generate a visual card for them
    result.cardImageUrl = await generateCardVisual(result.category, result.reasoning);

    return result;

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return {
      category: UserCategory.UNKNOWN,
      reasoning: "We encountered an error analyzing your request. Please try again with more specific details.",
      suggestedCardName: "Generic Cash Back Card",
      estimatedSavings: "$250"
    };
  }
};
