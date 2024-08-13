import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";

import { Link } from "react-router-dom";

export function Home() {
	const logoIcon = new URL("../img/logo.svg", import.meta.url).href;
	const discordIcon = new URL("../img/discord-icon.svg", import.meta.url).href;
	const redditIcon = new URL("../img/reddit-icon.svg", import.meta.url).href;
	const twitterIcon = new URL("../img/twitter-icon.svg", import.meta.url).href;

	return (
		<main className="min-h-screen pt-10 px-24 space-y-10">
			<nav className="flex justify-between items-center">
				<div className="relative w-16 h-16">
					<img src={logoIcon} alt="logo" />
				</div>
				<div className="space-x-10">
					<a href="/">Smart Contracts</a>
					<a href="/">Services</a>
					<a href="/">Solutions</a>
					<a href="/">Roadmap</a>
					<a href="/">Whitepaper</a>
				</div>
				<div className="flex space-x-4 items-center">
					<GitHubLogoIcon className="text-white w-5 h-5 cursor-pointer" />
					<img src={discordIcon} alt="discord" />
					<img src={redditIcon} alt="discord" />
					<img src={twitterIcon} alt="discord" />
				</div>
			</nav>

			<div className="flex flex-col items-center space-y-10 py-36">
				<div className="flex flex-col items-center space-y-2">
					<h1 className="font-bold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF]">
						Talks a lot.
					</h1>
					<h1 className="text-7xl">Transcribe AI.</h1>
				</div>

				<div className="w-2/4 text-center text-xl">
					<p>
						Project created to transcribe the spoken content of a video using
						the ChatGPT transcription library. It is important to note that this
						project was conducted in a programming class at the Federal
						Institute of Education, Science, and Technology of Rio Grande do
						Sul.
					</p>
				</div>
				<Link to="/ai/openai">
					<Button className="text-sm w-36 h-12 rounded-xl bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] p-1 hover:opacity-70">
						<span className="h-full w-full bg-background flex justify-center items-center rounded-xl px-[71px] py-[23px]">
							Get Started
						</span>
					</Button>
				</Link>
			</div>
		</main>
	);
}
