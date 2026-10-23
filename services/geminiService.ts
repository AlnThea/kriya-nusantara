import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PRODUCTS } from "../constants";

// Initialize Gemini
// SECURITY TODO: In a production app, NEVER expose the API key in the frontend.
// Move Gemini API calls to a backend service or API proxy to keep the key secret.
// The current setup is only suitable for local development / demo purposes.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Anda adalah asisten virtual ramah dan profesional untuk "Kriya Nusantara", sebuah UMKM yang menjual kerajinan tangan berkualitas tinggi (furniture, dekorasi, tekstil).
Tugas anda adalah membantu pelanggan dengan informasi produk, rekomendasi, dan pertanyaan umum.

Berikut adalah daftar produk kami saat ini:
${JSON.stringify(PRODUCTS.map(p => `${p.name} (${p.category}) - ${p.price}: ${p.description}`), null, 2)}

Panduan gaya bicara:
1. Gunakan Bahasa Indonesia yang sopan, ramah, dan sedikit formal namun hangat.
2. Jawaban harus ringkas (maksimal 2-3 kalimat kecuali diminta lebih).
3. Jika ditanya harga, sebutkan dengan jelas.
4. Jika user ingin membeli, arahkan mereka ke bagian Kontak atau WhatsApp (simulasi).
5. Jangan membicarakan topik di luar produk kerajinan, seni, atau desain interior.
`;

let chatSession: Chat | null = null;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message: userMessage });
    return result.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan pada sistem kami. Silakan coba lagi nanti.";
  }
};
