import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Eye, MessageSquare, ThumbsUp } from "lucide-react";

export const PortfolioSlider = ({ projects, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const activeProject = projects[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleThumbnailClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Get the next 3 projects for thumbnails
  const thumbnailProjects = projects
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  // Animation variants
  const imageVariants = {
    enter: (direction) => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction) => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={`relative w-full min-h-[650px] md:min-h-[600px] overflow-hidden bg-black text-white p-6 md:p-10 border border-purple-500/20 rounded-2xl ${className || ''}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        {/* Left Column: Meta and Thumbnails */}
        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            {/* Pagination */}
            <span className="text-sm text-gray-400 font-mono">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            {/* Vertical "Portfolio" Text */}
            <h2 className="text-sm font-medium tracking-widest uppercase [writing-mode:vertical-rl] md:rotate-180 hidden md:block text-purple-400 font-orbitron">
              Portfolio
            </h2>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-2 mt-8 md:mt-0">
            {thumbnailProjects.map((project) => {
              const originalIndex = projects.findIndex((p) => p.id === project.id);
              return (
                <button
                  key={project.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/30"
                  aria-label={`View ${project.title}`}
                >
                  <img
                    src={project.id === 1 ? `/image.png` : project.id === 2 ? `/job.png` : project.id === 3 ? `/vida.png` : project.id === 4 ? `/cat.png` : `/portfolio-${project.id}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-xs font-bold">${project.id}</div>`;
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Column: Main Image */}
        <div className="md:col-span-5 relative h-80 min-h-[400px] md:min-h-[500px] order-1 md:order-2 flex items-center justify-center bg-black">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden border border-purple-500/30"
            >
              <img
                src={activeProject.id === 1 ? `/image.png` : activeProject.id === 2 ? `/job.png` : activeProject.id === 3 ? `/vida.png` : activeProject.id === 4 ? `/cat.png` : `/portfolio-${activeProject.id}.jpg`}
                alt={activeProject.title}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-6xl font-bold font-orbitron">${activeProject.id}</div>`;
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Text and Navigation */}
        <div className="md:col-span-4 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          {/* Text Content */}
          <div className="relative overflow-hidden pt-4 md:pt-16 min-h-[180px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                  {activeProject.category}
                </p>
                <h3 className="text-xl font-bold mt-2 font-orbitron text-white">
                  {activeProject.title}
                </h3>
                <blockquote className="mt-4 text-lg md:text-xl font-medium leading-snug text-gray-300">
                  {activeProject.description}
                </blockquote>

                {/* Metrics */}
                <div className="flex items-center justify-center gap-8 mt-6 pt-5 border-t border-gray-800">
                  <div className="flex flex-col items-center gap-1">
                    <Eye className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-semibold text-gray-300">{activeProject.metrics.views}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <ThumbsUp className="w-5 h-5 text-pink-400" />
                    <span className="text-sm font-semibold text-gray-300">{activeProject.metrics.engagement}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-semibold text-gray-300">{activeProject.metrics.shares}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2 mt-8 md:mt-0">
            <button
              className="rounded-full w-12 h-12 border-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
              onClick={handlePrev}
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="rounded-full w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-purple-500/50"
              onClick={handleNext}
              aria-label="Next project"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
