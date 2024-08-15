import type { MetaFunction } from "@remix-run/node";
import MyCards from "./cards.MyCards";  // Make sure this path is correct
import AppMenu from "./template/menu";

export const meta: MetaFunction = () => {
  return [
    { title: "Pattarak Sawatdee" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <AppMenu /> {/* Include the AppMenu component at the top */}
      <MyCards />  {/* This will render your MyCards component */}
      
      {/* Additional content can be added here */}
    </div>
  );
}
