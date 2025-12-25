import React, { useState, useRef, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure
} from "@heroui/react";
import ReactMarkdown from "react-markdown";
import type { Track } from "../data";
import { Play, Clock, ExternalLink, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TracklistProps {
    tracks: Track[];
}

const Tracklist: React.FC<TracklistProps> = ({ tracks }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            const isScrollable = scrollHeight > clientHeight;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
            setShowScrollButton(isScrollable && !isAtBottom);
        }
    };

    useEffect(() => {
        if (isOpen) {
            // Short delay to allow content to render before checking scroll
            const timer = setTimeout(checkScroll, 100);
            return () => clearTimeout(timer);
        } else {
            setShowScrollButton(false);
        }
    }, [isOpen, selectedTrack]);

    const handleTrackClick = (track: Track) => {
        setSelectedTrack(track);
        onOpen();
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollTop + 200,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto mt-20 pb-40 px-6 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-between mb-10 border-b border-white/10 pb-6"
            >
                <h3 className="text-3xl font-black tracking-tighter flex items-center gap-3 italic uppercase">
                    <Play className="w-8 h-8 text-primary fill-primary" />
                    Tracklist
                </h3>
                <div className="text-right">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{tracks.length} Tracks found</p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tracks.map((track, index) => (
                    <motion.div
                        key={track.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card
                            isPressable
                            onPress={() => handleTrackClick(track)}
                            className="glass-panel border-none group hover:ring-2 hover:ring-primary transition-all duration-300 h-full w-full relative overflow-hidden"
                        >
                            {track.link && (
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="light"
                                    className="absolute top-4 right-4 z-20 text-white/40 hover:text-primary transition-colors bg-black/20 backdrop-blur-md rounded-full border border-white/5"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(track.link, "_blank", "noopener,noreferrer");
                                    }}
                                >
                                    <ExternalLink className="justify-self-center w-4 h-4" />
                                </Button>
                            )}
                            <CardHeader className="flex gap-4 p-6">
                                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/40 text-primary font-mono text-xl group-hover:scale-110 transition-transform">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>
                                <div className="flex flex-col text-left">
                                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{track.title}</h4>
                                    <div className="flex items-center gap-2 text-zinc-500 text-xs mt-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{track.duration}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="px-6 pb-6 pt-0">
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    <ReactMarkdown>{track.description}</ReactMarkdown>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {track.details.slice(0, 3).map((detail, i) => (
                                        <span key={i} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20">
                                            <ReactMarkdown>{detail}</ReactMarkdown>
                                        </span>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="2xl"
                backdrop="blur"
                scrollBehavior="inside"
                className="dark text-foreground bg-zinc-950 border border-white/10 z-50"
                classNames={{
                    closeButton: "z-[100] hover:bg-white/10 active:bg-white/20 transition-colors",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 p-8 border-b border-white/5 z-20 relative">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Track Selection</span>
                                </div>
                                <div className="flex items-start justify-between">
                                    <h2 className="text-3xl font-black italic uppercase tracking-tighter">{selectedTrack?.title}</h2>
                                    {selectedTrack?.link && (
                                        <Button
                                            isIconOnly
                                            as="a"
                                            href={selectedTrack.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="light"
                                            className="text-white/40 hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </Button>
                                    )}
                                </div>
                                <p className="text-zinc-500 font-medium">{selectedTrack?.duration}</p>
                            </ModalHeader>
                            <ModalBody
                                className="p-0 prose prose-invert max-w-none relative overflow-hidden min-w-0 w-full"
                            >
                                <div
                                    ref={scrollRef}
                                    onScroll={checkScroll}
                                    className="overflow-y-auto overflow-x-hidden h-full p-8 scrollbar-hide min-w-0 max-w-full"
                                    style={{ maxHeight: 'calc(100vh - 250px)' }}
                                >
                                    {selectedTrack?.content ? (
                                        <div className="break-words whitespace-normal min-w-0 max-w-full overflow-hidden [&_p]:break-words [&_h1]:break-words [&_h2]:break-words [&_h3]:break-words [&_h4]:break-words [&_li]:break-words [&_pre]:whitespace-pre-wrap [&_pre]:break-words">
                                            <ReactMarkdown>{selectedTrack.content}</ReactMarkdown>
                                        </div>
                                    ) : (
                                        <div className="py-10 text-center">
                                            <p className="text-zinc-500 italic">No detailed records available for this track.</p>
                                        </div>
                                    )}

                                    {selectedTrack?.details && (
                                        <div className="mt-8 pt-8 border-t border-white/5">
                                            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-600 mb-4">Liner Notes</h5>
                                            <ul className="list-none p-0 space-y-2">
                                                {selectedTrack.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400 break-words whitespace-normal">
                                                        <span className="text-primary mt-1 flex-none">▹</span>
                                                        <ReactMarkdown>{detail}</ReactMarkdown>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {selectedTrack?.images && selectedTrack.images.length > 0 && (
                                        <div className="mt-8 pt-8 border-t border-white/5">
                                            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-600 mb-4">Visual Records</h5>
                                            <TrackCarousel images={selectedTrack.images} title={selectedTrack.title} />
                                        </div>
                                    )}
                                </div>
                            </ModalBody>

                            <AnimatePresence>
                                {showScrollButton && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute bottom-24 right-8 z-50"
                                    >
                                        <Button
                                            isIconOnly
                                            radius="full"
                                            className="bg-primary shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
                                            onPress={scrollDown}
                                        >
                                            <ChevronDown className="w-5 h-5 text-black" />
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <ModalFooter className="p-6 border-t border-white/5">
                                <Button variant="light" onPress={onClose} className="font-bold uppercase tracking-widest text-xs">
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

const TrackCarousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
    };

    return (
        <div className="relative group/carousel w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-1 min-h-[200px] sm:min-h-[300px]">
                <div className="relative w-full h-full overflow-hidden rounded-lg bg-black/40">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`${title} preview ${currentIndex + 1}`}
                                className="w-full h-full object-contain bg-black/20"
                                loading="eager"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {images.length > 1 && (
                    <>
                        {/* Navigation Arrows */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2 sm:px-4 z-20 opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <Button
                                isIconOnly
                                radius="full"
                                variant="flat"
                                className="bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-primary min-w-0 w-10 h-10 pointer-events-auto flex items-center justify-center"
                                onClick={() => paginate(-1)}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <Button
                                isIconOnly
                                radius="full"
                                variant="flat"
                                className="bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-primary min-w-0 w-10 h-10 pointer-events-auto flex items-center justify-center"
                                onClick={() => paginate(1)}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/5">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > currentIndex ? 1 : -1);
                                        setCurrentIndex(i);
                                    }}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-primary w-4" : "bg-white/30 hover:bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Counter */}
            {images.length > 1 && (
                <div className="absolute top-6 right-6 z-20 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};

export default Tracklist;
