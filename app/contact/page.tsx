"use client";
import { Github, Mail, Twitter, Linkedin, MapPin, Calendar, GraduationCap, Code2, Award, BookOpen, Briefcase, Heart, Trophy, FileCheck, Phone } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

// Metadata is set in layout as this is a client component

const socials = [
	{
		icon: <Github size={20} />,
		href: "https://github.com/venukaranasinghe",
		label: "Github",
		handle: "venukaranasinghe",
	},
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/venuka_r",
		label: "Twitter",
		handle: "@venuka_r",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://linkedin.com/in/venuka-ranasinghe",
		label: "LinkedIn",
		handle: "venuka-ranasinghe",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:venuka.ranasinghe@example.com",
		label: "Email",
		handle: "venuka.ranasinghe@example.com",
	},
];

const education = [
	{
		institution: "Informatics Institute of Technology (IIT)",
		degree: "BSc (Hons) Computer Science",
		partner: "University of Westminster, UK",
		period: "2022 - Present",
		status: "Final Year",
		highlights: [
			"Specializing in Software Engineering and AI",
			"Active participant in tech societies",
			"Working on innovative projects like Rumble Guard"
		]
	}
];

const awards = [
	{
		title: "Dean's List",
		organization: "IIT",
		year: "2023",
		description: "Recognition for academic excellence"
	},
	{
		title: "Best Innovation Award",
		organization: "University Hackathon",
		year: "2024",
		description: "For Rumble Guard project"
	},
	{
		title: "Outstanding Student Award",
		organization: "IIT",
		year: "2023",
		description: "Academic and extracurricular excellence"
	}
];

const certificates = [
	{
		name: "AWS Certified Cloud Practitioner",
		issuer: "Amazon Web Services",
		year: "2024"
	},
	{
		name: "Full Stack Web Development",
		issuer: "Coursera",
		year: "2023"
	},
	{
		name: "Python for Data Science",
		issuer: "IBM",
		year: "2023"
	},
	{
		name: "React & Next.js Development",
		issuer: "Udemy",
		year: "2024"
	}
];

const experiences = [
	{
		role: "Software Engineering Intern",
		company: "Tech Startup",
		period: "Jun 2024 - Aug 2024",
		description: "Developed full-stack applications using React and Node.js",
		achievements: [
			"Built 3 client-facing applications",
			"Improved system performance by 40%",
			"Mentored 2 junior developers"
		]
	},
	{
		role: "Freelance Developer",
		company: "Self-Employed",
		period: "2023 - Present",
		description: "Creating custom web solutions for clients",
		achievements: [
			"Completed 10+ projects",
			"5-star client ratings",
			"Specialized in modern web technologies"
		]
	}
];

const volunteering = [
	{
		role: "Tech Society President",
		organization: "IIT Computer Science Society",
		period: "2023 - Present",
		description: "Leading workshops and hackathons for students"
	},
	{
		role: "Coding Mentor",
		organization: "Code for Good",
		period: "2023 - Present",
		description: "Teaching programming to underprivileged students"
	},
	{
		role: "Event Organizer",
		organization: "IIT Tech Fest",
		period: "2024",
		description: "Organized university's largest tech event with 500+ participants"
	}
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container px-4 mx-auto py-24">
				{/* Profile Section */}
				<div className="max-w-6xl mx-auto mb-20">
					<div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
						{/* Futuristic Profile Picture */}
						<div className="relative group flex-shrink-0">
							{/* Animated outer glow */}
							<div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 via-zinc-300 to-zinc-600 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
							
							{/* Main profile container */}
							<div className="relative">
								{/* Tech corners */}
								<div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-zinc-400 opacity-75"></div>
								<div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-zinc-400 opacity-75"></div>
								
								{/* Profile image container */}
								<div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-zinc-500 bg-zinc-900 shadow-2xl">
									{/* Placeholder - Replace with your image */}
									<div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 flex items-center justify-center">
										<span className="text-8xl font-bold text-zinc-300 font-display">VR</span>
									</div>
									{/* 
									To use your image:
									1. Add your photo to /public/ folder (e.g., profile.jpg)
									2. Uncomment the Image component below
									3. Remove or comment the placeholder div above
									*/}
									<Image
										src="img/profile.png"
										alt="Venuka Ranasinghe"
										fill
										className="object-cover"
										priority
									/>
								</div>

								{/* Scanning line effect */}
								<div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
									<div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-50 animate-scan"></div>
								</div>
							</div>

							{/* Status indicator */}
							<div className="absolute bottom-4 right-4 flex items-center gap-2 bg-zinc-900/90 backdrop-blur px-3 py-1.5 rounded-full border border-zinc-600">
								<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
								<span className="text-xs text-zinc-300">Available</span>
							</div>
						</div>

						{/* Profile Details */}
						<div className="flex-1 text-center lg:text-left space-y-6">
							<div>
								<h1 className="text-5xl md:text-6xl font-bold text-zinc-100 mb-3 font-display tracking-tight">
									Venuka Ranasinghe
								</h1>
								<div className="h-1 w-20 bg-gradient-to-r from-zinc-500 to-transparent mb-6 mx-auto lg:mx-0"></div>
							</div>

							{/* Info Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
								<div className="flex items-center gap-3 text-zinc-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
									<GraduationCap className="w-5 h-5 text-zinc-400" />
									<div className="text-left">
										<p className="text-xs text-zinc-500">Education</p>
										<p className="text-sm font-medium">IIT • Westminster</p>
									</div>
								</div>
								<div className="flex items-center gap-3 text-zinc-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
									<Calendar className="w-5 h-5 text-zinc-400" />
									<div className="text-left">
										<p className="text-xs text-zinc-500">Status</p>
										<p className="text-sm font-medium">Final Year • 22 years</p>
									</div>
								</div>
								<div className="flex items-center gap-3 text-zinc-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
									<MapPin className="w-5 h-5 text-zinc-400" />
									<div className="text-left">
										<p className="text-xs text-zinc-500">Location</p>
										<p className="text-sm font-medium">Sri Lanka</p>
									</div>
								</div>
								<div className="flex items-center gap-3 text-zinc-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
									<Code2 className="w-5 h-5 text-zinc-400" />
									<div className="text-left">
										<p className="text-xs text-zinc-500">Current Project</p>
										<p className="text-sm font-medium">Rumble Guard</p>
									</div>
								</div>
								<div className="flex items-center gap-3 text-zinc-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 sm:col-span-2">
									<Phone className="w-5 h-5 text-zinc-400" />
									<div className="text-left">
										<p className="text-xs text-zinc-500">Mobile</p>
										<a href="tel:+94123456789" className="text-sm font-medium hover:text-zinc-100 transition-colors">
											+94 72 034 4517
										</a>
									</div>
								</div>
							</div>

							{/* Bio */}
							<div className="space-y-3">
								<h2 className="text-lg font-semibold text-zinc-200">About Me</h2>
								<p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
									Computer Science undergraduate at <span className="text-zinc-200 font-semibold">Informatics Institute of Technology (IIT)</span>, 
									affiliated with <span className="text-zinc-200 font-semibold">University of Westminster, UK</span>. 
									Passionate about building innovative software solutions and exploring cutting-edge technologies. 
									Currently developing <span className="text-zinc-200 font-semibold">Rumble Guard</span> and actively 
									contributing to the tech community through volunteering and mentorship.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="max-w-6xl mx-auto mb-16">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-zinc-800"></div>
						</div>
						<div className="relative flex justify-center">
							<span className="px-4 text-sm text-zinc-500 bg-black">Connect With Me</span>
						</div>
					</div>
				</div>

				{/* Social Links */}
				<div className="max-w-5xl mx-auto mb-20">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{socials.map((s) => (
							<Card key={s.label}>
								<Link
									href={s.href}
									target="_blank"
									className="p-6 relative flex flex-col items-center gap-4 duration-700 group md:py-10"
								>
									<span
										className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
										aria-hidden="true"
									/>
									<span className="relative z-10 flex items-center justify-center w-14 h-14 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange group-hover:scale-110">
										{s.icon}
									</span>
									<div className="z-10 flex flex-col items-center">
										<span className="text-base font-medium duration-150 text-zinc-200 group-hover:text-white font-display break-all text-center px-2">
											{s.handle}
										</span>
										<span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
											{s.label}
										</span>
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>

				{/* Education Section */}
				<div className="max-w-6xl mx-auto mb-20">
					<div className="flex items-center gap-3 mb-8">
						<GraduationCap className="w-6 h-6 text-zinc-400" />
						<h2 className="text-3xl font-bold text-zinc-100">Education</h2>
					</div>
					{education.map((edu, index) => (
						<Card key={index}>
							<div className="p-6 md:p-8">
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
									<div>
										<h3 className="text-xl font-bold text-zinc-100">{edu.degree}</h3>
										<p className="text-zinc-300 font-medium mt-1">{edu.institution}</p>
										<p className="text-zinc-400 text-sm mt-1">In partnership with {edu.partner}</p>
									</div>
									<div className="text-right">
										<span className="inline-block px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full">
											{edu.status}
										</span>
										<p className="text-zinc-400 text-sm mt-2">{edu.period}</p>
									</div>
								</div>
								<ul className="space-y-2">
									{edu.highlights.map((highlight, i) => (
										<li key={i} className="text-zinc-400 flex items-start gap-2">
											<span className="text-zinc-600 mt-1">▹</span>
											<span>{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</Card>
					))}
				</div>

				{/* Awards & Achievements Section */}
				<div className="max-w-6xl mx-auto mb-20">
					<div className="flex items-center gap-3 mb-8">
						<Trophy className="w-6 h-6 text-zinc-400" />
						<h2 className="text-3xl font-bold text-zinc-100">Awards & Achievements</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{awards.map((award, index) => (
							<Card key={index}>
								<div className="p-6 h-full flex flex-col">
									<Award className="w-8 h-8 text-zinc-400 mb-4" />
									<h3 className="text-lg font-bold text-zinc-100 mb-2">{award.title}</h3>
									<p className="text-zinc-400 text-sm mb-2">{award.organization}</p>
									<p className="text-zinc-500 text-xs mb-3">{award.year}</p>
									<p className="text-zinc-400 text-sm mt-auto">{award.description}</p>
								</div>
							</Card>
						))}
					</div>
				</div>

				{/* Certificates Section */}
				<div className="max-w-6xl mx-auto mb-20">
					<div className="flex items-center gap-3 mb-8">
						<FileCheck className="w-6 h-6 text-zinc-400" />
						<h2 className="text-3xl font-bold text-zinc-100">Certifications</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{certificates.map((cert, index) => (
							<Card key={index}>
								<div className="p-6 flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
										<FileCheck className="w-6 h-6 text-zinc-400" />
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-semibold text-zinc-100 mb-1">{cert.name}</h3>
										<p className="text-zinc-400 text-sm">{cert.issuer}</p>
										<p className="text-zinc-500 text-xs mt-1">{cert.year}</p>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>

				{/* Experience Section */}
				<div className="max-w-6xl mx-auto mb-20">
					<div className="flex items-center gap-3 mb-8">
						<Briefcase className="w-6 h-6 text-zinc-400" />
						<h2 className="text-3xl font-bold text-zinc-100">Experience</h2>
					</div>
					<div className="space-y-6">
						{experiences.map((exp, index) => (
							<Card key={index}>
								<div className="p-6 md:p-8">
									<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
										<div>
											<h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
											<p className="text-zinc-300 font-medium mt-1">{exp.company}</p>
										</div>
										<p className="text-zinc-400 text-sm">{exp.period}</p>
									</div>
									<p className="text-zinc-400 mb-4">{exp.description}</p>
									<ul className="space-y-2">
										{exp.achievements.map((achievement, i) => (
											<li key={i} className="text-zinc-400 flex items-start gap-2">
												<span className="text-zinc-600 mt-1">▹</span>
												<span>{achievement}</span>
											</li>
										))}
									</ul>
								</div>
							</Card>
						))}
					</div>
				</div>

				{/* Volunteering Section */}
				<div className="max-w-6xl mx-auto mb-20">
					<div className="flex items-center gap-3 mb-8">
						<Heart className="w-6 h-6 text-zinc-400" />
						<h2 className="text-3xl font-bold text-zinc-100">Volunteering & Community</h2>
					</div>
					<div className="space-y-6">
						{volunteering.map((vol, index) => (
							<Card key={index}>
								<div className="p-6 md:p-8">
									<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
										<div>
											<h3 className="text-xl font-bold text-zinc-100">{vol.role}</h3>
											<p className="text-zinc-300 font-medium mt-1">{vol.organization}</p>
										</div>
										<p className="text-zinc-400 text-sm">{vol.period}</p>
									</div>
									<p className="text-zinc-400">{vol.description}</p>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes scan {
					0% {
						top: 0%;
					}
					100% {
						top: 100%;
					}
				}
				.animate-scan {
					animation: scan 4s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}
