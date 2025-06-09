'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WhyOjiViewer from './WhyOjiViewer';

export default function WhyOjiIntroGate() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative w-screen h-screen bg-black text-white">
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="intro"
            className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
          >
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-wider mb-4">VIBRAM</h1>
            <p className="text-md sm:text-xl text-gray-400 mb-8">by whyOji</p>
            <button
              onClick={() => setEntered(true)}
              className="px-6 py-2 border border-white rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition"
            >
              Enter Room
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Viewer Background */}
      <div className="absolute inset-0 z-0">
        <WhyOjiViewer />
      </div>

      {/* Overlay Text */}
      {entered && (
        <div className="absolute bottom-8 left-8 sm:left-12 text-left z-10">
          <h2 className="text-sm sm:text-md tracking-wide uppercase text-white/60">Digital Footprint</h2>
          <p className="text-xl sm:text-2xl font-light mt-2 max-w-sm">A sculptural form inspired by the tension between nature and synthetic function.</p>
        </div>
      )}
    </div>
  );
}
