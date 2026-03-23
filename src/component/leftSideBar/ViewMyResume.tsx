import { PERSONAL_INFO } from "../../data/personalData/personalData";

export function ViewMyResume() {
    return(
        <a  href={PERSONAL_INFO.RESUME_LINK} className="w-40 inline-flex items-center justify-center border border-black px-4 py-2 text-sm font-medium text-black transition hover:border-sky-300 hover:text-sky-600"  target="_blank" rel="noopener noreferrer">
            View My Resume
        </a>
    );
}