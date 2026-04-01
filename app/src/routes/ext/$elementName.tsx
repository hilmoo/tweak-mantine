import { createFileRoute } from "@tanstack/react-router";
import { BodyDemo } from "~/component/demo/Body";
import { extData } from "~/component/m-ext";

export const Route = createFileRoute("/ext/$elementName")({
  component: CoreElement,
});

function CoreElement() {
  const { elementName } = Route.useParams();

  return <BodyDemo elementName={elementName} Data={extData} />;
}
