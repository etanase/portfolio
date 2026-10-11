import Links from "./components/links";
import { Projects } from "./components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Eduard Tanase
      </h1>
      <p className="mb-4">
        {`I'm Eduard Tanase, a master's student in computer science at Stanford University and a computer engineering graduate of Purdue University. I've interned at Roblox and Leidos, and I'm the CTO of Deaf-i, a nonprofit supporting cochlear implant recipients.`}
      </p>
      <p className="mb-4">
        {`At Purdue, my research focused on computational neuroscience and using machine learning to decode movement from multimodal neural recordings in mice. I also led full-stack development of ECELabs, a digital design platform used by over 270 Purdue students per semester, with drag-and-drop module design, Verilog compilation, and remote FPGA access. With Purdue's SoCET team, I worked on low-level software for a custom RISC-V microcontroller.`}
      </p>
      <p className="mb-4">
        {`In my free time, I cook, play acoustic and electric guitar, and work out.`}
      </p>
      <Links />
    </section>
  );
}
