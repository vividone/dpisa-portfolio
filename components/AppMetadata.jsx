const author = "DPISA LLC";
const description =
	"";
const url = "https://dpisa-portfolio.vercel.app";
export const AppMetadata = {
	metadataBase: new URL("https://dpisa-portfolio.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Portfolio",
		"DPISA LLC",
		"DPISA",
		"DPISA LLC Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "#",
				width: 800,
				height: 600,
				alt: "DPISA LLC Portfolio"
			},
			{
				url: "#",
				width: 1800,
				height: 1600,
				alt: "DPISA LLC Portfolio"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
