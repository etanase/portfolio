import Links from "./components/links";
import { Projects } from "./components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Eduard Tanase
      </h1>
      <p className="mb-4">
        {`I'm Eduard Tanase, an incoming graduate student at Stanford University studying Computer Science and a Purdue Computer Engineering alumnus. My projects bounce between full-stack development, computational neuroscience, and embedded systems.
        I build websites like Deaf-i, a nonprofit website for the hearing-impaired community, and ECELabs, a digital design platform used by every Computer Engineering student at Purdue.
        In my research, I develop machine learning models to interpret brain signals. I enjoy working on challenging projects and learning new things, as well as pursuing hobbies like guitar, cooking, and gaming.`}
      </p>
      <Links />
    </section>
  );
}
