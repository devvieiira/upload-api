import type { FastifyInstance } from "fastify";
import { createReadStream } from "node:fs";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function createTranscriptionRoute(app: FastifyInstance) {
	app.post("/videos/:videoId/transcription", async (req) => {
		try {
			const paramsSchema = z.object({
				videoId: z.string().uuid(),
			});

			const { videoId } = paramsSchema.parse(req.params);

			const bodySchema = z.object({
				prompt: z.string(),
			});

			const { prompt } = bodySchema.parse(req.body);

			const video = await prisma.video.findUniqueOrThrow({
				where: {
					id: videoId,
				},
			});

			const videoPath = video.path;
			const audioReadStream = createReadStream(videoPath);
			openai.get("/models").then((res) => {
				console.log("Modelos:", res);
			});

			console.log("Conectando ao OpenAI...");
			try {
				const response = await openai.audio.transcriptions.create(
					{
						model: "whisper-1",
						file: audioReadStream,
						language: "pt",
						response_format: "json",
						temperature: 0,
						prompt,
					},
					{
						maxRetries: 2,
						headers: {
							"Content-Type": "multipart/form-data",
							Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
						},
					},
				);
				console.log("Resposta do OpenAI:", response);
			} catch (error) {
				console.error("Erro ao conectar com OpenAI:", error);
				if (error.cause) {
					console.error("Detalhes do erro:", error.cause);
				}
				throw error;
			}
			console.log("Resposta do OpenAI:");

			// const transcription = response.text;

			console.log("Atualizando banco de dados...");
			await prisma.video.update({
				where: {
					id: videoId,
				},
				data: {
					// transcription,
				},
			});
			console.log("Banco de dados atualizado com sucesso!");

			return {
				// transcription,
			};
		} catch (error) {
			console.error("Erro:", error);
			throw error;
		}
	});
}
