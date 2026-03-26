"use client";

import React from "react";

function CornerBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3.5 bg-[#313036]/60 backdrop-blur-md group transition-all duration-300 hover:bg-[#3E3C44]/80 cursor-pointer ${className}`}
    >
      <div className="absolute top-0 left-3 right-3 h-[1.5px] border-t-[1.5px] border-dashed border-[#CBB5A1]/70"></div>
      <div className="absolute bottom-0 left-3 right-3 h-[1.5px] border-b-[1.5px] border-dashed border-[#CBB5A1]/70"></div>

      <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-[2.5px] border-l-[2.5px] border-[#CBB5A1] group-hover:border-[#E8D4C0] transition-colors"></div>
      <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-t-[2.5px] border-r-[2.5px] border-[#CBB5A1] group-hover:border-[#E8D4C0] transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-b-[2.5px] border-l-[2.5px] border-[#CBB5A1] group-hover:border-[#E8D4C0] transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-[2.5px] border-r-[2.5px] border-[#CBB5A1] group-hover:border-[#E8D4C0] transition-colors"></div>

      {children}
    </div>
  );
}

function TimelineNode() {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 z-10 shrink-0">
      
      {/* Node geometric container */}
      <div className="relative flex items-center justify-center w-[20px] h-[20px] md:w-[26px] md:h-[26px]">
      
         {/* Outermost Ticks */}
         <div className="absolute top-[-5px] md:top-[-6px] left-1/2 -translate-x-1/2 w-[1.5px] h-2 bg-[#A49B90] z-0"></div>
         <div className="absolute bottom-[-5px] md:bottom-[-6px] left-1/2 -translate-x-1/2 w-[1.5px] h-2 bg-[#A49B90] z-0"></div>
         <div className="absolute left-[-5px] md:left-[-6px] top-1/2 -translate-y-1/2 w-2 h-[1.5px] bg-[#A49B90] z-0"></div>
         <div className="absolute right-[-5px] md:right-[-6px] top-1/2 -translate-y-1/2 w-2 h-[1.5px] bg-[#A49B90] z-0"></div>

         {/* 1. Outermost Diamond (Rotated Square) */}
         <div className="absolute inset-0 border-[1.5px] border-[#CBB5A1] rotate-45 z-0 bg-[#070B11]"></div>

         {/* 2. Middle Square (Unrotated) */}
         <div className="absolute inset-0 border-[1.5px] border-[#CBB5A1] z-10 pointer-events-none"></div>

         {/* 3. Inner Diamond (Rotated) */}
         <div className="absolute z-20 w-[10px] h-[10px] md:w-[12px] md:h-[12px] border-[1.5px] border-[#CBB5A1] rotate-45 flex items-center justify-center bg-[#070B11]">
            {/* 4. Center Dot (Tiny Inner Diamond) */}
            <div className="w-[3px] h-[3px] border-[1px] border-[#CBB5A1]"></div>
         </div>
         
      </div>
    </div>
  );
}

export default function SchedulePage() {
  const scheduleData = [
    { side: "top", date: "MARCH 9", title: "Registration Begins" },
    { side: "bottom", date: "MARCH 9", title: "Registration Ends" },
    { side: "top", date: "MARCH 9", title: "Event Brochure" },
    { side: "bottom", date: "MARCH 9", title: "Vihaan Begins" },
    { side: "top", date: "MARCH 9", title: "Vihaan Ends" },
  ];

  return (
    <main className="relative h-screen bg-[#070B11] overflow-hidden flex flex-col font-quantico text-gray-200 selection:bg-cyan-500/30">
      {/* Background radial gradient to give the hazy dark blue vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0D1522] via-[#070B11] to-[#04060A] opacity-90"></div>

      {/* Decorative Vectors mimicking astrolabe lines (Pixel-Perfect Alignment Grids) */}
      <div className="pointer-events-none absolute inset-0 z-0 mix-blend-screen opacity-[0.25] overflow-hidden">
        <div className="relative w-full h-full max-w-[1400px] mx-auto">
          
          {/* Node 5 (Right side over Vihaan Ends) -> Concentric Circles Grid */}
          <div className="absolute left-[90%] top-[45%] w-0 h-0 flex items-center justify-center">
            <svg className="w-[800px] h-[800px] -translate-y-[80px] stroke-[#71665D] overflow-visible" fill="none">
              <circle cx="400" cy="400" r="100" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="400" cy="400" r="180" strokeWidth="1" />
              <circle cx="400" cy="400" r="260" strokeWidth="0.5" strokeDasharray="2 4" />
              {/* Axes passing straight through node center */}
              <line x1="400" y1="0" x2="400" y2="800" strokeWidth="1" strokeDasharray="8 8" />
              <line x1="0" y1="400" x2="800" y2="400" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Node 4 (Middle-Right over Vihaan Begins) -> Massive Deathly Hallows Triangle */}
          <div className="absolute left-[70%] top-[45%] w-0 h-0 flex items-center justify-center">
            <svg className="w-[1000px] h-[1000px] stroke-[#71665D] overflow-visible" fill="none">
              <g transform="translate(500, 500)">
                {/* Apex at y=-300, Base at y=250. Diff = 550. Center of inscribed circle = 250 - 550/3 = 66.6 */}
                {/* Horizontal width of base = 2 * 550 / sqrt(3) = 635. So half base = 317.5 */}
                <path d="M0,-300 L317.5,250 L-317.5,250 Z" strokeWidth="1.5" />
                <circle cx="0" cy="66.6" r="183.3" strokeWidth="1.5" />
                {/* Concentric inner shapes */}
                <circle cx="0" cy="66.6" r="110" strokeWidth="0.75" />
                <circle cx="0" cy="66.6" r="50" strokeWidth="1" strokeDasharray="3 5" />
                {/* Vertical axis straight through specific node */}
                <line x1="0" y1="-500" x2="0" y2="500" strokeWidth="1.5" strokeDasharray="4 6" />
                {/* Horizontal Base line passing full screen basically */}
                <line x1="-800" y1="250" x2="800" y2="250" strokeWidth="0.5" strokeDasharray="3 3" />
                {/* Intersection marks */}
                <line x1="-200" y1="-100" x2="200" y2="233" strokeWidth="0.5" />
                <line x1="200" y1="-100" x2="-200" y2="233" strokeWidth="0.5" />
              </g>
            </svg>
          </div>

          {/* Node 3 (Center over Event Brochure) -> Huge Central Orb */}
          <div className="absolute left-[50%] top-[45%] w-0 h-0 flex items-center justify-center">
            <svg className="w-[1000px] h-[1000px] stroke-[#71665D] overflow-visible" fill="none">
               <circle cx="500" cy="500" r="350" strokeWidth="0.5" strokeDasharray="4 8" />
               <line x1="500" y1="150" x2="500" y2="850" strokeWidth="0.5" strokeDasharray="2 4" />
            </svg>
          </div>

          {/* Node 2 & 1 (Left Side over Registration elements) -> Geometric Lines */}
          <div className="absolute left-[20%] top-[45%] w-0 h-0 flex items-center justify-center">
            <svg className="w-[800px] h-[800px] stroke-[#71665D] overflow-visible" fill="none">
               {/* Inverted Triangle shape */}
               <path d="M-300,-150 L300,-150 L0,369Z" strokeWidth="1.5" opacity="0.5" />
               <circle cx="0" cy="0" r="80" strokeWidth="1" strokeDasharray="2 4" />
               <line x1="0" y1="-400" x2="0" y2="400" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
          </div>

        </div>
      </div>

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col justify-between py-6 md:py-10">
        
        {/* Header (Top Left) */}
        <div className="w-full flex justify-start pt-2 md:pt-4">
          <h1 className="text-3xl md:text-5xl lg:text-[54px] font-semibold tracking-[0.12em] text-[#9D9388]">
            EVENT SCHEDULE
          </h1>
        </div>

        {/* Timeline Section (Center) */}
        <div className="relative w-full flex-1 flex flex-col justify-center min-h-[300px]">
          <div className="relative w-full flex items-center justify-center">
            {/* The Main Horizontal Dashed Line */}
            <div className="absolute left-[2%] right-[2%] h-[1px] border-b border-dashed border-[#444D5A] z-0"></div>

            <div className="relative z-10 w-full flex justify-between items-center bg-transparent">
              {scheduleData.map((item, index) => {
                const isTop = item.side === "top";
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center flex-1"
                  >
                    <TimelineNode />

                    {isTop ? (
                      <div className="absolute bottom-full mb-3 flex flex-col items-center w-max">
                        <span className="text-[#AA998A] tracking-[0.15em] text-[10px] md:text-sm font-semibold mb-1.5 md:mb-2 uppercase">
                          {item.date}
                        </span>
                        <CornerBox className="w-[140px] md:w-[220px]">
                          <span className="text-xs md:text-[15px] font-semibold tracking-wide text-[#CBB5A1]">
                            {item.title}
                          </span>
                        </CornerBox>
                        {/* Vertical Connection Line */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[1px] h-3 border-l border-dashed border-[#8E7E70] opacity-50"></div>
                      </div>
                    ) : (
                      <div className="absolute top-full mt-3 flex flex-col items-center w-max">
                        {/* Vertical Connection Line */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-3 border-l border-dashed border-[#8E7E70] opacity-50"></div>
                        <CornerBox className="w-[140px] md:w-[220px]">
                          <span className="text-xs md:text-[15px] font-semibold tracking-wide text-[#CBB5A1]">
                            {item.title}
                          </span>
                        </CornerBox>
                        <span className="text-[#AA998A] tracking-[0.15em] text-[10px] md:text-sm font-semibold mt-1.5 md:mt-2 uppercase">
                          {item.date}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="flex flex-col items-center text-center w-full px-4 shrink-0 mt-4 h-[240px] justify-end pb-4">
          <h2 className="text-2xl md:text-[34px] font-semibold tracking-[0.15em] md:tracking-[0.2em] text-[#AF9E8F] mb-4 md:mb-6 uppercase">
            {scheduleData[0].title}
          </h2>
          <p className="text-[9px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] text-[#8C7D6F] uppercase leading-[2em] font-medium max-w-none w-full whitespace-nowrap md:whitespace-normal">
            INVITE FRIENDS AND DEVS, CREATE A TEAM, AND PUT ON YOUR THINKING CAPS WHILE WE REVIEW YOUR<br />
            ENTITIES.
          </p>

          {/* Register Button Widget */}
          <div className="relative mt-8 md:mt-12 flex items-center justify-center group cursor-pointer mb-2 w-full h-[100px] md:h-[140px]">
            {/* Background Astrolabe / Radar Geometry */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.35] group-hover:opacity-70 transition-opacity duration-500">
              <svg viewBox="0 0 600 200" className="w-full h-full max-w-[800px] stroke-[#81766A]" fill="none">
                 {/* Central Vertical Axis */}
                 <line x1="300" y1="0" x2="300" y2="200" strokeWidth="0.5" strokeDasharray="3 3" />
                 
                 {/* Giant Inner Circle */}
                 <circle cx="300" cy="100" r="90" strokeWidth="0.4" strokeDasharray="2 4" />
                 <circle cx="300" cy="100" r="140" strokeWidth="0.2" strokeDasharray="4 6" />
                 
                 {/* Diagonal intersecting arcs forming the 'Eye' or astrolabe curves */}
                 <path d="M100,-50 Q300,250 500,-50" strokeWidth="0.5" />
                 <path d="M100,250 Q300,-50 500,250" strokeWidth="0.5" />

                 {/* Flanking Side Circles */}
                 <circle cx="170" cy="100" r="6" strokeWidth="0.75" strokeDasharray="1 2" />
                 <circle cx="430" cy="100" r="6" strokeWidth="0.75" strokeDasharray="1 2" />

                 {/* Flanking Horizontal ticks pointing outwards from circles */}
                 <line x1="120" y1="100" x2="160" y2="100" strokeWidth="0.5" strokeDasharray="2 2" />
                 <line x1="440" y1="100" x2="480" y2="100" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </div>

            <span className="relative z-10 text-[#A4998E] text-xl md:text-[26px] font-semibold tracking-[0.2em] group-hover:text-[#D1C5B8] group-hover:drop-shadow-[0_0_12px_rgba(209,197,184,0.4)] transition-all duration-300">
              REGISTER
            </span>
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles locally if not in global css */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </main>
  );
}
