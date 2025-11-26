"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Add your gallery images here
const galleryImages = [
	{
		src: "/gallery/award-ceremony.jpg",
		alt: "Award Ceremony - Receiving Certificate",
		title: "Award Ceremony",
		description: "Receiving certificate of achievement",
	},
	// Add more images as you upload them to /public/gallery/
	// Example:
	// {
	//   src: "/gallery/hackathon.jpg",
	//   alt: "Hackathon Event",
	//   title: "Tech Hackathon 2024",
	//   description: "Participating in university hackathon",
	// },
];

export default function GalleryPage() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [isLoading, setIsLoading] = useState<{ [key: number]: boolean }>({});

	// Keyboard navigation for lightbox
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (selectedImage === null) return;

			if (e.key === "Escape") {
				setSelectedImage(null);
			} else if (e.key === "ArrowLeft") {
				setSelectedImage((prev) => 
					prev === null ? null : prev > 0 ? prev - 1 : galleryImages.length - 1
				);
			} else if (e.key === "ArrowRight") {
				setSelectedImage((prev) => 
					prev === null ? null : prev < galleryImages.length - 1 ? prev + 1 : 0
				);
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [selectedImage]);

	const openLightbox = (index: number) => {
		setSelectedImage(index);
		document.body.style.overflow = "hidden";
	};

	const closeLightbox = () => {
		setSelectedImage(null);
		document.body.style.overflow = "unset";
	};

	const navigateImage = (direction: "prev" | "next") => {
		if (selectedImage === null) return;
		
		if (direction === "prev") {
			setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
		} else {
			setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
		}
	};

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container px-4 mx-auto py-24">
				{/* Header */}
				<div className="max-w-6xl mx-auto mb-12">
					<div className="flex items-center gap-4 mb-4">
						<Camera className="w-8 h-8 text-zinc-400" />
						<h1 className="text-4xl md:text-5xl font-bold text-zinc-100 font-display">
							Gallery
						</h1>
					</div>
					<p className="text-zinc-400 text-lg">
						A collection of moments from my academic journey, events, and achievements
					</p>
				</div>

				{/* Gallery Grid */}
				{galleryImages.length > 0 ? (
					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{galleryImages.map((image, index) => (
								<Card key={index}>
									<div 
										className="relative group cursor-pointer overflow-hidden"
										onClick={() => openLightbox(index)}
									>
										<div className="relative aspect-[4/3] bg-zinc-900">
											{isLoading[index] && (
												<div className="absolute inset-0 flex items-center justify-center">
													<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-400"></div>
												</div>
											)}
											<Image
												src={image.src}
												alt={image.alt}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-110"
												onLoadingComplete={() => setIsLoading(prev => ({ ...prev, [index]: false }))}
												onLoadStart={() => setIsLoading(prev => ({ ...prev, [index]: true }))}
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<div className="absolute bottom-0 left-0 right-0 p-4">
													<h3 className="text-zinc-100 font-semibold mb-1">{image.title}</h3>
													<p className="text-zinc-300 text-sm">{image.description}</p>
												</div>
											</div>
										</div>
									</div>
								</Card>
							))}
						</div>

						{/* Instructions */}
						<div className="mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
							<h3 className="text-lg font-semibold text-zinc-200 mb-3 flex items-center gap-2">
								<Camera className="w-5 h-5" />
								How to Add More Images
							</h3>
							<ol className="space-y-2 text-zinc-400">
								<li className="flex items-start gap-2">
									<span className="text-zinc-600 font-bold">1.</span>
									<span>Add your images to the <code className="px-2 py-1 bg-zinc-800 rounded text-sm text-zinc-300">/public/gallery/</code> folder</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-zinc-600 font-bold">2.</span>
									<span>Update the <code className="px-2 py-1 bg-zinc-800 rounded text-sm text-zinc-300">galleryImages</code> array in <code className="px-2 py-1 bg-zinc-800 rounded text-sm text-zinc-300">/app/gallery/page.tsx</code></span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-zinc-600 font-bold">3.</span>
									<span>Add image details (src, alt, title, description)</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-zinc-600 font-bold">4.</span>
									<span>Rebuild and redeploy your website</span>
								</li>
							</ol>
						</div>
					</div>
				) : (
					<div className="max-w-6xl mx-auto">
						<Card>
							<div className="flex flex-col items-center justify-center py-20 text-center p-8">
								<Camera className="w-16 h-16 text-zinc-600 mb-4" />
								<h3 className="text-xl font-semibold text-zinc-300 mb-2">
									No Images Yet
								</h3>
								<p className="text-zinc-400 mb-6 max-w-md">
									Add your images to <code className="px-2 py-1 bg-zinc-800 rounded text-sm">/public/gallery/</code> and update the gallery array to display them here.
								</p>
							</div>
						</Card>
					</div>
				)}
			</div>

			{/* Lightbox Modal */}
			{selectedImage !== null && (
				<div 
					className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
					onClick={closeLightbox}
				>
					{/* Close Button */}
					<button
						onClick={closeLightbox}
						className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors z-10"
					>
						<X className="w-8 h-8" />
					</button>

					{/* Previous Button */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							navigateImage("prev");
						}}
						className="absolute left-4 text-zinc-400 hover:text-zinc-100 transition-colors z-10"
					>
						<ChevronLeft className="w-12 h-12" />
					</button>

					{/* Next Button */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							navigateImage("next");
						}}
						className="absolute right-4 text-zinc-400 hover:text-zinc-100 transition-colors z-10"
					>
						<ChevronRight className="w-12 h-12" />
					</button>

					{/* Image */}
					<div 
						className="relative max-w-6xl max-h-[90vh] w-full h-full"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="relative w-full h-full flex items-center justify-center">
							<Image
								src={galleryImages[selectedImage].src}
								alt={galleryImages[selectedImage].alt}
								width={1200}
								height={900}
								className="max-w-full max-h-[85vh] object-contain"
								priority
							/>
						</div>
						
						{/* Image Info */}
						<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
							<h3 className="text-xl font-semibold text-zinc-100 mb-2">
								{galleryImages[selectedImage].title}
							</h3>
							<p className="text-zinc-300">
								{galleryImages[selectedImage].description}
							</p>
							<p className="text-zinc-500 text-sm mt-2">
								{selectedImage + 1} / {galleryImages.length}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
