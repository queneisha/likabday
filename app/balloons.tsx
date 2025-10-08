"use client";
import React from "react";

export default function Balloons() {
  const colors: string[] = [
    "#FFC0CB", // pink
    "#FFD700", // gold
    "#87CEEB", // sky blue
    "#98FB98", // mint green
    "#FF69B4", // hot pink
    "#FFA07A", // light salmon
  ];

  const balloons = Array.from({ length: 12 }).map((_, i) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 6 + Math.random() * 4;

    return (
      <div
        key={i}
        className="balloon"
        style={{
          backgroundColor: color,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return <div className="balloons">{balloons}</div>;
}
