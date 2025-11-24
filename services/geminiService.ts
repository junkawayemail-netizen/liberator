import { GoogleGenAI, Type } from "@google/genai";
import { QuoteEstimate } from "../types";

// Initialize Gemini Client
// CRITICAL: We assume process.env.API_KEY is available as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getJunkEstimate = async (description: string): Promise<QuoteEstimate> => {
  try {
    const modelId = "gemini-2.5-flash"; // Using Flash for speed and efficiency on text tasks

    const response = await ai.models.generateContent({
      model: modelId,
      contents: `You are an expert junk removal estimator for a company called 'Liberator Junk Removal'. 
      Analyze the following list of items provided by a customer and estimate the volume relative to a standard 15 cubic yard truck.
      
      Customer Input: "${description}"
      
      Provide a realistic price range. Assume a minimum charge of $99 and a full truck load is roughly $599.
      Scale linearly but account for difficulty (heavy items, hazardous materials - though note we don't take hazardous chemicals).
      
      Return JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            volumeLabel: {
              type: Type.STRING,
              description: "A short label like '1/8 Truck', 'Half Truck', 'Single Item', etc.",
            },
            priceLow: {
              type: Type.INTEGER,
              description: "Low end of the price estimate in USD",
            },
            priceHigh: {
              type: Type.INTEGER,
              description: "High end of the price estimate in USD",
            },
            explanation: {
              type: Type.STRING,
              description: "A friendly, short explanation of the estimate based on the items.",
            },
            category: {
              type: Type.STRING,
              description: "Best fitting category: Residential, Commercial, Furniture, Debris, etc.",
            },
          },
          required: ["volumeLabel", "priceLow", "priceHigh", "explanation", "category"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as QuoteEstimate;
    }
    
    throw new Error("No response text from model");

  } catch (error) {
    console.error("Gemini estimation failed:", error);
    // Fallback response if API fails or key is missing
    return {
      volumeLabel: "Custom Quote Required",
      priceLow: 0,
      priceHigh: 0,
      explanation: "We couldn't automatically estimate this load. Please contact us directly for a precision quote.",
      category: "General",
    };
  }
};