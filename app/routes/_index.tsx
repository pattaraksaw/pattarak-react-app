import type { MetaFunction } from "@remix-run/node";
import MyCards from "./cards.MyCards";  // Make sure this path is correct
import AppMenu from "./template/menu";
import GetProfiles from "./chapter06.getProfiles";

export const meta: MetaFunction = () => {
  return [
    { title: "Pattarak Sawatdee" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
     
      <GetProfiles/>

      {/* Additional content can be added here */}
    </div>
  );
}
 