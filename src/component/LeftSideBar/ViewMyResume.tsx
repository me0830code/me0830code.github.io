import { PERSONAL_INFO } from "../../data/personalData/personalData";

export function ViewMyResume() {
    return(
        <a  href={PERSONAL_INFO.RESUME_LINK} className="w-full inline-flex items-center justify-center border border-slate-800 px-4 py-2 rounded-md text-sm font-semibold text-slate-800 bg-sky-200  transition-all duration-200 hover:bg-sky-300 hover:border-slate-900 hover:text-slate-900 active:scale-[0.98]"  target="_blank" rel="noopener noreferrer">
            View My Resume
        </a>
    );
}