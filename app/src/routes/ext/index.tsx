import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ext/")({
  component: RouteComponent,
  loader: () => {
    return redirect({
      to: "/ext/$elementName",
      params: { elementName: "Calendar" },
    });
  },
});

function RouteComponent() {
  return <div>Hello "/ext/"!</div>;
}
