import type { MetaFunction } from "@remix-run/node";
import MyCards from "./cards.MyCards"; 
import AppMenu from "./template/menu";

export const meta: MetaFunction = () => {
  return [
    { title: "Pattarak Sawatdee" },
    { name: "description", content: "Welcome to Herb Store" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <AppMenu /> 
      <MyCards /> 
      
      
    </div>
  );
}
