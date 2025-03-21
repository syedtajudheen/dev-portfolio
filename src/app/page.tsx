"use client";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[100px_1fr_20px] items-center justify-items-center min-h-screen gap-16  ">
      <Header />
      <div className="text-white">Body</div>
      <div className="text-white">Footer</div>
    </div>
  );
}
