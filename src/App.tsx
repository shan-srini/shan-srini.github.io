import React, { useState, useEffect } from "react";
import VinylPlayer from "./components/VinylPlayer";
import RecordSidebar from "./components/RecordSidebar";
import CollectionDropdown from "./components/CollectionDropdown";
import Tracklist from "./components/Tracklist";
import { PORTFOLIO_DATA } from "./data";
import type { RecordData } from "./data";
import { motion } from "framer-motion";
import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "./components/Logo";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Tooltip
} from "@heroui/react";

const App: React.FC = () => {
  const [selectedRecord, setSelectedRecord] = useState<RecordData>(PORTFOLIO_DATA[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
    const timer = setTimeout(() => setIsPlaying(true), 2000);

    // Update dynamic primary color
    document.documentElement.style.setProperty('--color-primary', selectedRecord.color);

    return () => clearTimeout(timer);
  }, [selectedRecord]);

  return (
    <div className="min-h-screen relative selection:bg-primary selection:text-black transition-colors duration-500 bg-black text-white dark">
      {/* Dynamic Background Glow */}
      <div
        className="fixed inset-0 pointer-events-none transition-colors duration-1000 opacity-20 blur-[120px]"
        style={{ backgroundColor: selectedRecord.color }}
      />

      {/* HeroUI Navbar */}
      <Navbar
        isBordered
        className="bg-black/40 backdrop-blur-md border-white/5"
        maxWidth="full"
        classNames={{
          wrapper: "h-18 px-4 md:px-12",
        }}
      >
        <NavbarBrand className="gap-1">
          <Logo size={32} />
          <p className="font-black tracking-tighter text-xl uppercase italic text-white">Shanmukha Srinivasan</p>
        </NavbarBrand>

        <NavbarContent justify="end" className="gap-2">

          <NavbarItem className="flex gap-3">
            <Tooltip content="Resume" className="p-2 rounded-lg" color="primary">
              <Link isExternal href="https://www.linkedin.com/in/srinishan" className="text-zinc-400 hover:text-primary transition-colors">
                <FileUser className="w-7 h-7" />
              </Link>
            </Tooltip>
            <Tooltip content="Linkedin@srinishan" className="p-2 rounded-lg" color="primary">
              <Link isExternal href="https://www.linkedin.com/in/srinishan" className="text-zinc-400 hover:text-primary transition-colors">
                <Linkedin className="w-7 h-7" />
              </Link>
            </Tooltip>
            <Tooltip content="Github@shan-srini" className="p-2 rounded-lg" color="primary">
              <Link isExternal href="https://github.com/shan-srini" className="text-zinc-400 hover:text-primary transition-colors">
                <Github className="w-7 h-7" />
              </Link>
            </Tooltip>
            <Tooltip content="Email @ s.shan.srini@gmail.com || hello@shansrini.com" className="p-2 rounded-lg" color="primary">
              <Link isExternal href="mailto:s.shan.srini@gmail.com" className="text-zinc-400 hover:text-primary transition-colors">
                <Mail className="w-7 h-7" />
              </Link>
            </Tooltip>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Main Layout */}
      <div className="flex flex-col items-center w-full overflow-x-hidden">
        {/* Top Section: Player and Sidebar */}
        <div className="pt-4 lg:pt-8 flex flex-col items-center min-h-[82vh] w-full max-w-full overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 w-full px-4 lg:px-6 max-w-7xl">
            <CollectionDropdown
              records={PORTFOLIO_DATA}
              selectedRecord={selectedRecord}
              onSelect={setSelectedRecord}
            />

            <div className="hidden lg:block lg:w-30vw">
              <RecordSidebar
                records={PORTFOLIO_DATA}
                selectedId={selectedRecord.id}
                onSelect={setSelectedRecord}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 w-full max-w-full overflow-hidden"
            >
              <VinylPlayer
                currentRecord={selectedRecord}
                isPlaying={isPlaying}
              />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-10 text-zinc-500 flex flex-col items-center gap-5"
          >
            <span className="text-[12px] uppercase font-bold tracking-[0.3em] text-zinc-400">Scroll for Tracklist</span>
            <div
              className="w-[3px] h-16 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full"
              style={{ boxShadow: `0 0 10px ${selectedRecord.color}80` }}
            />
          </motion.div>
        </div>

        {/* Bottom Section: Content (Tracklist) */}
        <section className="w-full bg-zinc-950/40 dark:bg-black/20 backdrop-blur-sm pt-20 border-t border-white/5">
          <Tracklist tracks={selectedRecord.tracks} />
        </section>
      </div>

      <footer className="p-10 text-center text-zinc-600 text-xs font-mono uppercase tracking-widest border-t border-white/5 bg-zinc-950/80">
        © 2025 Shanmukha Srinivasan
      </footer>
    </div>
  );
};

export default App;
