import Links from "./components/links";
import { Projects } from "./components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Eduard Tanase
      </h1>
      <p className="mb-4">
        {`I'm Eduard Tanase, a graduate student at Stanford University studying Computer Science. My projects bounce between full-stack development, computational neuroscience, and embedded systems.
        I build websites like PointOrchard, a credit card comparison site that hit 2,000+ visitors in under a month, and ECELabs, a digital design platform used by every Computer Engineering student at Purdue.
        In my research, I developed machine learning models to interpret mouse brain signals. I enjoy working on challenging projects and learning new things, as well as pursuing hobbies like guitar, cooking, and gaming.`}
      </p>
      <Links />
    </section>
  );
}
