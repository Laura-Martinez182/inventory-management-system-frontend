import { Input } from "@mui/material"

export function SearchBar() {
    return (
        <div className="p-3 pb-6 border-b border-slate-200">
        <div className="relative">
        <Input id="id-b13" type="text" name="id-b13s" placeholder="Search here" class="relative w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"/>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
        </div>
        </div>
    )
}