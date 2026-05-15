// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [tailwindcss()],
   },

   adapter: vercel(),

   fonts: [
      {
         provider: fontProviders.local(),
         name: "Barlow",
         cssVariable: "--font-sans",
         options: {
            variants: [
               {
                  src: ["./src/assets/fonts/Barlow-Regular.ttf"],
                  weight: "400",
                  style: "normal",
               },
            ],
         },
      },
      {
         provider: fontProviders.local(),
         name: "Barlow",
         cssVariable: "--font-sans",
         options: {
            variants: [
               {
                  src: ["./src/assets/fonts/Barlow-Light.ttf"],
                  weight: "300",
                  style: "normal",
               },
            ],
         },
      },
      {
         provider: fontProviders.local(),
         name: "Barlow",
         cssVariable: "--font-sans",
         options: {
            variants: [
               {
                  src: ["./src/assets/fonts/Barlow-SemiBold.ttf"],
                  weight: "600",
                  style: "normal",
               },
            ],
         },
      },
      {
         provider: fontProviders.local(),
         name: "Orbitron",
         cssVariable: "--font-display",
         options: {
            variants: [
               {
                  src: ["./src/assets/fonts/Orbitron-SemiBold.ttf"],
                  weight: "600",
                  style: "normal",
               },
            ],
         },
      },
   ],
});
