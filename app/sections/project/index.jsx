import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";
import { projects } from "utils/projects";

// const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	// const { data, error } = useSWR(url, fetcher);
	// const projects = data?.result;

	// if (error && !data) {
	// 	return null;
	// }

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section">
				<div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
					<div className="py-5 md:py-10">
						<h1 tabIndex="0" className="text-3xl md:text-5xl xl:text-6xl font-bold">
							<p>Our Capacity</p>
						</h1>
						<p className="mt-5 text-sm md:text-md xl:text-md">
							<ul>
								<li className="pb-3">
									<span className="font-bold">Video editing:</span> Creating engaging and
									informative video content for a variety of platforms.
								</li>
								<li className="pb-3">
									<span className="font-bold">
									Cinematography:</span> Directing and producing high-quality video content with a strong
									visual concept.
								</li>
								<li className="pb-3">
									<span className="font-bold">
									Frontend and backend development: </span> Expertise in developing user-friendly web and
									mobile applications using a variety of programming languages and frameworks.
								</li>
								<li className="pb-3">
									<span className="font-bold"> Fullstack Development: </span>
									Ability to handle both frontend and backend development, ensuring seamless
									integration
								</li>
								<li>Cyber Security.</li>
							</ul>
						</p>
					</div>
				</div>
			</section>

			<section id="projects" className="section">
				<HeadingDivider title="Recent projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						{/* <button aria-label="See more projects">More projects</button> */}
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
}
