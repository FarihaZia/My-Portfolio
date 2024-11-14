
import About from "@/components/ui/sections/about";
import Contact from "@/components/ui/sections/contact";
import Profile from "@/components/ui/sections/profile";
import { Projects } from "@/components/ui/sections/projects";
import {Skills} from "@/components/ui/sections/skills";
import { TextGenerate } from "@/components/ui/textgenerate";
import Image from "next/image";
const words = `Welcome to my Portfolio`;
export default function Home() {
  return (
    <div>
    <TextGenerate words={words}/>
    <Profile/>
    <About/>
<Projects/>
<Skills/>
<Contact/>

  </div>
  )}
  

