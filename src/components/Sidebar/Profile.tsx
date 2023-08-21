import { LogOut } from "lucide-react";
import Image from "next/image";

export function Profile() {
  return (
    <div className="flex items-center gap-3 grid-cols-profile">
      <Image 
        src="https://github.com/mariocesar33.png" 
        alt=""
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Mário César Silva
        </span>
        <span className="truncate text-sm text-zinc-500">
          mcgato33g@gmail.com
        </span>
      </div>
      
      <button 
        type="button" 
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500"/>
      </button>
    </div>
  )
}