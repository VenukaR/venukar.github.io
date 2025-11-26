"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Download, FileText } from "lucide-react";
import { useState } from "react";

export default function ResumePage() {
	const [pdfError, setPdfError] = useState(false);

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container px-4 mx-auto py-24">
				{/* Header */}
				<div className="max-w-6xl mx-auto mb-12">
					<div className="flex items-center justify-between flex-wrap gap-4">
						<div>
							<h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-3 font-display">
								Resume
							</h1>
							<p className="text-zinc-400 text-lg">
								View or download my complete resume
							</p>
						</div>
						<a
							href="/resume.pdf"
							download="Venuka_Ranasinghe_Resume.pdf"
							className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg transition-all duration-200 border border-zinc-700 hover:border-zinc-600"
						>
							<Download className="w-5 h-5" />
							<span className="font-medium">Download PDF</span>
						</a>
					</div>
				</div>

				{/* Resume Viewer */}
				<div className="max-w-6xl mx-auto">
					<Card>
						<div className="p-4 md:p-8">
							{!pdfError ? (
								<div className="w-full bg-zinc-900 rounded-lg overflow-hidden" style={{ height: "calc(100vh - 300px)", minHeight: "600px" }}>
									<iframe
										src="/resume.pdf"
										className="w-full h-full border-0"
										title="Resume PDF Viewer"
										onError={() => setPdfError(true)}
									/>
								</div>
							) : (
								<div className="flex flex-col items-center justify-center py-20 text-center">
									<FileText className="w-16 h-16 text-zinc-600 mb-4" />
									<h3 className="text-xl font-semibold text-zinc-300 mb-2">
										Resume Preview Unavailable
									</h3>
									<p className="text-zinc-400 mb-6 max-w-md">
										Please add your resume PDF to the <code className="px-2 py-1 bg-zinc-800 rounded text-sm">/public/resume.pdf</code> directory, or download the file using the button above.
									</p>
									<a
										href="/resume.pdf"
										download="Venuka_Ranasinghe_Resume.pdf"
										className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg transition-all duration-200 border border-zinc-700 hover:border-zinc-600"
									>
										<Download className="w-5 h-5" />
										<span className="font-medium">Download PDF</span>
									</a>
								</div>
							)}
						</div>
					</Card>

					{/* Instructions */}
					{/* <div className="mt-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
						<h3 className="text-lg font-semibold text-zinc-200 mb-3 flex items-center gap-2">
							<FileText className="w-5 h-5" />
							How to Add Your Resume
						</h3>
						<ol className="space-y-2 text-zinc-400">
							<li className="flex items-start gap-2">
								<span className="text-zinc-600 font-bold">1.</span>
								<span>Save your resume as <code className="px-2 py-1 bg-zinc-800 rounded text-sm text-zinc-300">resume.pdf</code></span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-zinc-600 font-bold">2.</span>
								<span>Place it in the <code className="px-2 py-1 bg-zinc-800 rounded text-sm text-zinc-300">/public/</code> folder of your project</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-zinc-600 font-bold">3.</span>
								<span>Rebuild and redeploy your website</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-zinc-600 font-bold">4.</span>
								<span>The resume will appear here automatically</span>
							</li>
						</ol>
					</div> */}
				</div>
			</div>
		</div>
	);
}
