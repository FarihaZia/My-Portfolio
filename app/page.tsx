import { Contact } from "@/components/ui/sections/contact";
import { Projects } from "@/components/ui/sections/projects";
import { TextGenerate } from "@/components/ui/textgenerate";
import Image from "next/image";
const words = `Welcome to my Portfolio`;
export default function Home() {
  return (
    <div>
    <TextGenerate words={words}/>
<Projects/>
<Contact/>
  </div>
  )}
  

