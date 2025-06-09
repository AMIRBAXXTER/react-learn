import SocialMedia from "./SocialMedia/SocialMedia";
import Counter from "./Counter/Counter";
import CounterHook from "./Counter/CounterHook";

export default function Footer() {
	const urls = [
		{ id: 1, name: "facebook", url: "https://www.facebook.com/" },
		{ id: 2, name: "twitter", url: "https://twitter.com/" },
		{ id: 3, name: "instagram", url: "https://www.instagram.com/" },
		{ id: 4, name: "linkedin", url: "https://www.linkedin.com/" },
		{ id: 5, name: "github" },
		{ id: 6, name: "google", url: "https://www.google.com/" },
	];
	return (
		<div className="flex justify-between items-center text-center w-full bg-slate-500 h-28">
			<div className="h-full w-1/3 bg-slate-800"><span>this is footer</span></div>
			<ul className="flex w-1/2 justify-center gap-3 items-center text-center">
				{urls.map((url) => (
					<SocialMedia {...url} key={url.id} />
				))}
			</ul>
		</div>
	);
}
