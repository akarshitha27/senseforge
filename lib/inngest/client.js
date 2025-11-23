import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "senseforge", // Unique app ID
  name: "SenseForge",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});