"use client";
import React from "react";
import { SparklesCore } from "../sparkles";
import { Button } from "../button";
import { Mail } from "lucide-react";
import Link from "next/link";
 
export function Contact() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md gap-5">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Contact Me
       
      </h1>
      <Link href={"mailto:farihazia2006@gmail.com"} className="z-10" >
      <Button>Send me email<Mail className="size-5"/></Button>
      </Link></div>
  );
}