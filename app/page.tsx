import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import { Achievements } from 'components/Index/Achievements';
import { BackgroundSvg } from 'components/Assets/BackgroundSvg';
import { containerClasses, fancyLinkClasses, linkClasses, sectionBodyClasses } from 'utils/styles';

export default function Home() {
	return (
		<div>
			<main className="bg-slate-950">
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10`}>
						<div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
							<BackgroundSvg />
						</div>

						<SectionTitle big accentText="Hi there! I'm">
							Duong Nguyen
						</SectionTitle>
						<div className="h-4 sm:h-0"></div>
						<div className={sectionBodyClasses}>
							<LinkToSection title="About Me" href="about">
								I code, play board games, walk my dog, and do some other stuff.
							</LinkToSection>
							<LinkToSection title="School" href="school">
								I study computer science at HCMC University of Technology.
							</LinkToSection>
							<LinkToSection title="Work Experience" href="experience">
								I've worked at Hudson River Trading, Modal Labs, and Codeium.
							</LinkToSection>
							<LinkToSection title="Projects" href="projects">
								I run the USACO Guide and the Competitive Programming Initiative.
							</LinkToSection>
							<LinkToSection title="Achievements" href="achievements">
								I'm a 4x USACO Finalist and a 5x AIME Qualifier.
							</LinkToSection>
						</div>
						<div className="h-6 md:h-8 xl:h-16"></div>
						<div className="font-mono uppercase text-slate-400 text-sm sm:text-base">
							<a
								className={fancyLinkClasses}
								href="mailto:elegantmoon.try@gmail.com"
								target="_blank"
							>
								Email
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://github.com/niceduongnguyen"
								target="_blank"
							>
								Github
							</a>
						</div>
					</div>
				</div>

				<div className={containerClasses} id="about">
					<SectionTitle big accentText="01">
						About Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							Ever since I embarked on my programming journey as a young child, I've been entranced
							by the power and flexibility of code.
						</p>
						<p>
							Today, I'm an avid programmer currently interested in machine learning and systems.
							Programming is my superpower: With it, what I can create is limited only by my
							imagination!
						</p>
						<p>
							Outside of programming, I play a lot of board games, especially social deduction games
							(my personal favorite is Secret Hitler). I also enjoy discussing politics and
							government, watching movies, reading books, traveling, and (occasionally) learning
							about tax deductions!
						</p>
						<p>
							I strive to bring energy, technical knowledge, and a strong desire to learn with me
							wherever I go.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="school">
					<SectionTitle big accentText="02">
						School
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I'm currently a student at MIT studying Computer Science.</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Technical Grad Classes:</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>6.521 Advanced Algorithms</li>
							<li>6.584 Distributed Systems</li>
							<li>6.390 Computer Vision</li>
							<li>6.790 Machine Learning</li>
						</ul>
						<div className="h-4"></div>
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Technical Undergrad Classes:
						</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>18.600 Probability and Random Variables</li>
							<li>18.650 Fundamentals of Statistics</li>
							<li>6.106 Software Performance Engineering</li>
							<li>6.110 Computer Language Engineering (Static Compilers)</li>
							<li>6.181 Operating Systems Engineering</li>
							<li>6.1811 Natural Language Processing</li>
							<li>6.190 Introduction to Low-level Programming in C and Assembly</li>
							<li>6.191 Computation Structures</li>
						</ul>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className={sectionBodyClasses}>
						<p>
							In Spring 2023, I was an LA for{' '}
							<a href="https://designftw.mit.edu/" target="_blank" className={linkClasses}>
								6.S063 Design for the Web
							</a>
							. Outside of classes, I am part of the{' '}
							<a href="https://hackmit.org/" target="_blank" className={linkClasses}>
								HackMIT
							</a>{' '}
							team. I also enjoy participating in{' '}
							<a
								href="https://notes.ekzhang.com/events/nysrg"
								target="_blank"
								className={linkClasses}
							>
								New York Systems Reading Group
							</a>
							.
						</p>
					</div>
					<div className="h-4 lg:h-6"></div>
					<div className={sectionBodyClasses}>
						<p>
							Before coming to MIT, I was a student at Monta Vista High School, where I participated
							in a variety of clubs, including{' '}
							<a href="https://montavistamun.com/" target="_blank" className={linkClasses}>
								Model UN
							</a>
							, FBLA, AI Club, and Competitive Programming Club.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="experience">
					<SectionTitle big accentText="03">
						Work Experience
					</SectionTitle>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						{/* <p>
							To view my full work experience, please{' '}
							<a href="https://www.linkedin.com/in/duongnguyen/" className={fancyLinkClasses}>
								visit my Linkedin page
							</a>
							.
						</p> */}

						<div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Modal Labs &mdash; Fall 2024
						</h2>
						<p>
							I am currently a Member of Technical Staff at{' '}
							<a href="https://modal.com/" className={linkClasses}>
								Modal
							</a>
							, a serverless cloud computing platform. I learned Rust, fixed gVisor issues, worked
							with Kubernetes, and investigated networking issues, reducing the latency of our
							serverless web endpoints by up to 3x.
						</p>

						<div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Hudson River Trading &mdash; Summer 2024
						</h2>
						<p>
							<a href="https://hudson-trading.com/" className={linkClasses}>
								HRT
							</a>{' '}
							is a quantitative finance company. As a C++ Core Developer Intern, I completed 8
							projects in 11 weeks, building multi-terabyte log viewers, optimizing memory
							profilers, refactoring code, and much more.
						</p>

						<div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Codeium &mdash; Summer 2023
						</h2>
						<p>
							<a href="https://codeium.com/" className={linkClasses}>
								Codeium
							</a>{' '}
							is a company that builds AI-powered developer tools such as autocomplete. I led the
							initiative to quantize our large language model, achieving a ~2.3x speed increase for
							our company's product in just 11 weeks.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="projects">
					<SectionTitle big accentText="04">
						Projects
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I'm always working on something new. Below are a few of my favorite projects!</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<ProjectsList />
				</div>

				<div className={containerClasses} id="achievements">
					<SectionTitle big accentText="05">
						Achievements
					</SectionTitle>
					<Achievements />
				</div>

				<div className={containerClasses} id="contact">
					<SectionTitle big accentText="06">
						Contact Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I really enjoy meeting new people! Please feel free to reach out.</p>
					</div>
					<div className="font-mono text-slate-400 sm:text-lg md:text-xl mt-4 md:mt-6">
						<a className={linkClasses} href="mailto:elegantmoon.try@gmail.com" target="_blank">
							Email
						</a>{' '}
						·{' '}
						<a className={linkClasses} href="https://github.com/niceduongnguyen" target="_blank">
							Github
						</a>
					</div>
				</div>

				<div className="h-8 md:h-12 lg:h-16"></div>

				<div className={`${containerClasses} pb-6 md:pb-12 lg:pb-24`}>
					<div className="font-mono text-slate-400 text-xs md:text-sm lg:text-base">
						Copyright {new Date().getFullYear()} Duong Nguyen.
						<br />
						This site is built with{' '}
						<a className={linkClasses} href="https://nextjs.org/" target="_blank">
							Next.js
						</a>{' '}
						and{' '}
						<a className={linkClasses} href="https://tailwindcss.com/" target="_blank">
							Tailwind CSS
						</a>
						. View the source code on{' '}
						<a
							className={linkClasses}
							href="https://github.com/niceduongnguyen/personal-website"
							target="_blank"
						>
							Github
						</a>
						.
					</div>
				</div>
			</main>
		</div>
	);
}
