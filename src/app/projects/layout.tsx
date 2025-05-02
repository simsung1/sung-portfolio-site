import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
    return (
      <main className="w-full">
        <div className="fixed w-full z-50"><Nav /></div>
        <section className="w-full pt-16">
          
          {children}
        </section>
        <Footer />
      </main>
    );
  }