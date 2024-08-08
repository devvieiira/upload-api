import { OpenAI } from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const baseURL = "https://api.openai.com/v1";

export const openai = new OpenAI({
	apiKey,
	baseURL,
	maxRetries: 0,
});
