import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {

  redirect("/about");
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
