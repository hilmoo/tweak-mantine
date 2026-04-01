import { createFileRoute } from "@tanstack/react-router";
import { BodyDemo } from "~/component/demo/Body";
import { coreData } from "~/component/m-core";

export const Route = createFileRoute("/core/$elementName")({
  component: CoreElement,
});

function CoreElement() {
  const { elementName } = Route.useParams();

  return <BodyDemo elementName={elementName} Data={coreData} />;
}
