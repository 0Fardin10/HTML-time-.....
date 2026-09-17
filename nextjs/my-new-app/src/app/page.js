import Image from "next/image";
import Counter from "./comp/page";

export default function Home() {
  return (
    console.log("Hello home component"),
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start sm:py-16 sm:px-8" >
        
        
        
        <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Welcome to Next.js!
        </h2>
        <Counter />
      </main>
    </div>
  );
}
