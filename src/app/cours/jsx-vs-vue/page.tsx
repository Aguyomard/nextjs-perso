import { JsxVsVueCourse } from "@/components/cours/jsx-vs-vue-course";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSX vs templates Vue — cours",
  description:
    "Conditions avec ternaires et &&, listes avec .map(), équivalents des directives Vue.",
};

export default function CoursJsxVsVuePage() {
  return <JsxVsVueCourse />;
}
