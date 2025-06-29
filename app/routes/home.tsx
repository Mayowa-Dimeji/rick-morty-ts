import type { Route } from "./+types/home";

import MyNavbar from "~/pages/navbar/navbar";
import About from "~/pages/about/about";
import Portal from "~/pages/portal/portal";
import CharacterShow from "~/pages/slideshow/characterShow";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <MyNavbar />
      <About />
      <CharacterShow />
      <Portal />
    </>
  );
}
