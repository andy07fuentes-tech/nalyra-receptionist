import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { CheckCircle2, PlayCircle, X as XIcon, Activity } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

// Define the type for a single checklist item
interface ChecklistItem {
  id: number | string;
  text: string;
  helperText?: string;
  helperLink?: {
    href: string;
    text: string;
  };
}

export interface VideoDemoData {
  label: string;
  videoThumbnailUrl: string;
  videoUrl: string;
  items?: ChecklistItem[];
}

// Define the props for the main component
export interface OnboardingChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
  videoThumbnailUrl?: string; // Optional if demos is provided
  videoUrl?: string; // Optional if demos is provided
  demos?: VideoDemoData[];
  className?: string;
  isTransparent?: boolean;
  isVertical?: boolean;
}

/**
 * A responsive and animated onboarding checklist component with optional tabbed demos.
 */
export const OnboardingChecklist = ({
  title,
  description,
  items,
  videoThumbnailUrl,
  videoUrl,
  demos = [],
  className,
  isTransparent = false,
  isVertical = false,
}: OnboardingChecklistProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const currentDemo = demos && demos.length > 0 ? demos[activeTab] : {
    videoThumbnailUrl: videoThumbnailUrl || "",
    videoUrl: videoUrl || "",
    items: items,
    label: "Overview"
  };

  const displayItems = currentDemo.items || items;

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const checklistContent = (
    <ul className={cn(
      "mt-6 grid gap-x-8 gap-y-4",
      isVertical ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
    )}>
      {displayItems.map((item) => (
        <motion.li key={item.id} variants={itemVariants} className="flex flex-col">
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="ml-3 text-sm font-medium">{item.text}</span>
          </div>
          {item.helperText && item.helperLink && (
            <div className="ml-8 mt-1 text-xs text-muted-foreground">
              {item.helperText}{" "}
              <a
                href={item.helperLink.href}
                className="text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
              >
                {item.helperLink.text}
              </a>
            </div>
          )}
        </motion.li>
      ))}
    </ul>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        "w-full max-w-4xl mx-auto overflow-hidden",
        !isTransparent && "bg-card text-card-foreground border rounded-2xl shadow-sm p-8",
        isVertical && "max-w-6xl px-4 md:px-8",
        className
      )}
    >
      {/* Tab Switcher */}
      {demos && demos.length > 0 && (
        <div className={cn("flex mb-12", isVertical ? "justify-center" : "justify-start")}>
          <div className="relative flex p-1.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
            {demos.map((demo, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "relative px-6 py-2.5 text-sm font-semibold transition-all duration-500 rounded-full",
                  activeTab === idx ? "text-white" : "text-white/40 hover:text-white/70"
                )}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {idx === 1 && <Activity className="h-3.5 w-3.5" />}
                  {demo.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={cn(
        "grid gap-12 items-center",
        isVertical ? "grid-cols-1" : "md:grid-cols-2"
      )}>
        {/* Title and Description */}
        <div className={cn("flex flex-col", isVertical && "text-center items-center")}>
          <h2 className={cn("text-2xl font-bold tracking-tight md:text-3xl", isVertical && "md:text-4xl")}>{title}</h2>
          <p className={cn("mt-4 text-muted-foreground", isVertical && "text-lg max-w-2xl mx-auto")}>{description}</p>
          {!isVertical && checklistContent}
        </div>

        {/* Video Thumbnail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn(
              "relative group rounded-3xl overflow-hidden cursor-pointer w-full transition-all duration-500 shadow-2xl hover:shadow-blue-500/10 mx-auto",
              isVertical ? "max-w-2xl" : "aspect-video"
            )}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <img
                    src={currentDemo.videoThumbnailUrl}
                    alt="Video guide thumbnail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <PlayCircle className="h-20 w-20 text-white/80 transform transition-all duration-500 group-hover:scale-110 group-hover:text-white filter drop-shadow-2xl" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 border-0 bg-transparent shadow-none overflow-hidden rounded-2xl sm:rounded-3xl">
                <div className="relative aspect-[9/16] md:aspect-video w-full bg-black/90 backdrop-blur-xl">
                  {/* Custom High-Visibility Close Button for Mobile */}
                  <div className="absolute top-4 right-4 z-[60]">
                    <DialogClose className="p-2 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full border border-white/20 text-white transition-all duration-300">
                      <XIcon className="h-6 w-6" />
                    </DialogClose>
                  </div>

                  {currentDemo.videoUrl.toLowerCase().endsWith('.mp4') ? (
                    <video
                      src={currentDemo.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <iframe
                      src={currentDemo.videoUrl}
                      title="Anvela Video Guide"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </AnimatePresence>

        {/* Checklist below if vertical */}
        {isVertical && (
          <div className="w-full mt-8 border-t border-white/5 pt-12">
            {checklistContent}
          </div>
        )}
      </div>
    </motion.div>
  );
};
