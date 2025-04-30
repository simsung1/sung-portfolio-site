import type { ReactNode } from "react";
import Nav from "@/components/Nav";

export default function ExperienceLayout({ children }: { children: ReactNode }) {
    return (
      <main className="w-full">
        <div className="fixed w-full"><Nav /></div>
        <section className="w-full pt-16">
          
          {children}
        </section>
      </main>
    );
  }