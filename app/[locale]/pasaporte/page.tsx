"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Mountain,
  Umbrella,
  Moon,
  Gift,
  Check,
} from "lucide-react";

const pages = [
  {
    key: "cover",
    title: "PASAPORTE VOLCÁNICO",
    subtitle: "Cada sello cuenta una historia",
    type: "cover" as const,
  },
  {
    key: "stamps",
    title: "RUTA DE VOLCANES DORMIDOS",
    type: "stamps" as const,
  },
  {
    key: "benefits",
    title: "Beneficios por sellos acumulados",
    type: "benefits" as const,
  },
];

const stampItems = [
  {
    name: "Rata Walk",
    dateLabel: "ABR 2024",
    code: "24BR2024",
    icon: <Mountain className="w-6 h-6" strokeWidth={2.5} />,
    guide: "Juan ___",
  },
  {
    name: "Rain Walk",
    dateLabel: "ABR 2024",
    code: "ABR2024",
    icon: <Umbrella className="w-6 h-6" strokeWidth={2.5} />,
    guide: "Juan ___",
  },
  {
    name: "Tour Nocturno",
    dateLabel: "ABR 2024",
    code: "ABR2024",
    icon: <Moon className="w-6 h-6" strokeWidth={2.5} />,
    guide: "—",
  },
];

const pageVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    rotateY: direction * 15,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    rotateY: direction * -15,
    scale: 0.97,
  }),
};

const VolcanicPassport: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const direction = 1; // could be preserved if you want back/next diff

  const go = (delta: number) => {
    setCurrentPage((prev) => {
      const nxt = prev + delta;
      if (nxt < 0 || nxt >= pages.length) return prev;
      return nxt;
    });
  };

  const isFirst = currentPage === 0;
  const isLast = currentPage === pages.length - 1;

  const renderCover = () => (
    <div className="h-full flex flex-col items-center justify-between text-center px-10 py-12">
      <div className="space-y-4">
        <div>
          <h1 className="text-6xl font-extrabold uppercase tracking-widest text-amber-300 leading-tight">
            PASAPORTE
          </h1>
          <h1 className="text-6xl font-extrabold uppercase tracking-widest text-amber-300 leading-tight">
            VOLCÁNICO
          </h1>
        </div>
        <div className="relative mx-auto mt-6">
          <div className="w-56 h-56 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 flex items-center justify-center shadow-[0_25px_60px_-10px_rgba(255,183,77,0.6)]">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative border-4 border-gray-700">
              <div className="relative">
                <Mountain className="w-20 h-20 text-amber-200 drop-shadow-md" strokeWidth={3} />
                <div className="absolute -top-2 -right-1 flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg" />
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg" />
              </div>
            </div>
          </div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="text-sm uppercase font-bold tracking-wider text-gray-200">
              LA VIEJA
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="text-sm uppercase font-bold tracking-wider text-gray-200">
              ADVENTURES
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xl font-medium text-amber-100 tracking-wide">
            Cada sello cuenta una historia
          </p>
        </div>
      </div>
    </div>
  );

  const renderStamps = () => (
    <div className="h-full flex flex-col px-8 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          RUTA DE
        </h2>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
          VOLCANES DORMIDOS
        </h2>
        <div className="w-20 h-1 bg-slate-700 mx-auto rounded"></div>
      </div>
      <div className="flex-1 space-y-6 overflow-auto">
        {stampItems.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-5 bg-white/90 rounded-xl p-4 shadow-md border border-slate-200"
          >
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-full border-2 border-slate-800 bg-amber-50 flex items-center justify-center shadow-md">
                {s.icon}
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded">
                {s.code}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                <div className="font-black text-xl text-slate-900">{s.name}</div>
                <div className="font-black text-xl text-slate-900">{s.name === "Rata Walk" ? "" : ""}</div>
              </div>
              <div className="text-sm text-gray-600 mt-1">{s.dateLabel}</div>
              <div className="text-xs italic text-slate-500">
                Guide: {s.guide}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBenefits = () => (
    <div className="h-full flex flex-col px-8 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Beneficios por
        </h2>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
          sellos acumulados
        </h2>
        <div className="w-20 h-1 bg-slate-700 mx-auto rounded"></div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <div className="mb-4 border-b pb-2 flex justify-between items-center">
            <span className="font-black text-lg text-slate-900">
              Sellos acumulados
            </span>
            <span className="font-black text-lg text-slate-900">
              Beneficio especial
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2">
                <span className="font-black text-2xl text-slate-900">2 s</span>
                <Check className="w-5 h-5" strokeWidth={3} />
              </div>
              <span className="text-sm font-semibold text-gray-700">
                (mínimo) Reconocimiento
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="font-black text-2xl text-slate-900">3 s</span>
              <span className="text-sm font-semibold text-slate-700">
                10% descuento
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="font-black text-2xl text-slate-900">4 s</span>
              <span className="text-sm font-semibold text-slate-700">
                Souvenir
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="font-black text-2xl text-slate-900">5 s</span>
              <span className="text-sm font-semibold text-slate-700">
                Acceso a un socorro secreto
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-black text-2xl text-slate-900">
                6 o más
              </span>
              <span className="text-sm font-semibold text-slate-700">
                Regalo sorpresa
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shadow-md">
              <Mountain className="w-5 h-5 text-amber-300" strokeWidth={2.5} />
            </div>
            <div className="text-center">
              <div className="font-black text-lg text-slate-900 tracking-wide">
                LA VIEJA
              </div>
              <div className="font-semibold text-xs text-slate-600 uppercase tracking-wider">
                ADVENTURES
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const current = pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 flex items-center justify-center p-6">
      <div className="relative w-[500px] h-[680px] perspective-1000">
        {/* Shadow */}
        <div className="absolute inset-0 rounded-3xl bg-black/30 blur-2xl transform translate-x-4 translate-y-4"></div>

        <div className="relative">
          {/* Spine */}
          <div className="absolute -left-5 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-slate-800 rounded-l-3xl shadow-lg" />

          {/* Book Surface */}
          <motion.div
            key={current.key}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={pageVariants}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="relative w-[500px] h-[680px] rounded-3xl shadow-2xl overflow-hidden transform-gpu bg-gradient-to-br from-amber-50 via-white to-amber-100"
          >
            <div className="absolute inset-6 flex flex-col h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key + "-content"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 overflow-hidden"
                >
                  {current.type === "cover" && renderCover()}
                  {current.type === "stamps" && renderStamps()}
                  {current.type === "benefits" && renderBenefits()}
                </motion.div>
              </AnimatePresence>
              {/* Navigation */}
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => go(-1)}
                  disabled={isFirst}
                  aria-label="Atrás"
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition ${
                    isFirst
                      ? "opacity-50 cursor-not-allowed text-gray-400 bg-gray-800/20"
                      : "bg-white/90 text-slate-700 hover:scale-105 shadow-md"
                  }`}
                >
                  <ChevronLeft size={18} strokeWidth={2.5} />
                  Atrás
                </button>
                <div className="flex gap-2">
                  {pages.map((p, i) => (
                    <div
                      key={p.key}
                      className={`w-3 h-3 rounded-full transition-all ${
                        i === currentPage
                          ? "bg-slate-800 scale-110 shadow"
                          : "bg-slate-400/50"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(1)}
                  disabled={isLast}
                  aria-label="Siguiente"
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition ${
                    isLast
                      ? "opacity-50 cursor-not-allowed text-gray-400 bg-gray-800/20"
                      : "bg-white/90 text-slate-700 hover:scale-105 shadow-md"
                  }`}
                >
                  Siguiente
                  <ChevronRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
            {/* Subtle binding accents */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-black/40 via-transparent to-black/40 rounded-l-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VolcanicPassport;
