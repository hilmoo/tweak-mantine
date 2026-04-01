import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/core/")({
  component: RouteComponent,
  loader: () => {
    return redirect({
      to: "/core/$elementName",
      params: { elementName: "Center" },
    });
  },
});

function RouteComponent() {
  return <div>Hello "/_demo/core/"!</div>;
}
