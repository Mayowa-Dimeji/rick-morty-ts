import type { Route } from "./+types/home";
import { lazy, Suspense } from "react";

import MyNavbar from "~/pages/navbar/navbar";
import About from "~/pages/about/about";
import Portal from "~/pages/portal/portal";

import MyFooter from "~/pages/footer/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Multiverse Mayhem" },
    { name: "description", content: "Rick and Morty!" },
  ];
}
const CharacterShow = lazy(() => import("~/pages/slideshow/characterShow"));

export default function Home() {
  return (
    <>
      <MyNavbar />
      <About />
      <Suspense fallback={<div>Loading characters...</div>}>
        <CharacterShow />
      </Suspense>

      <Portal />
      <MyFooter />
    </>
  );
}
