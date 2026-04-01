import { FileText } from 'lucide-react'

import { PERSONAL_INFO } from "../../../data/personalData/personalData";

export function ViewMyResume() {
    const handleOpenResume = () => {
        window.open(PERSONAL_INFO.RESUME_LINK, "_blank", "noopener,noreferrer");
    };

    return (
        <button onClick={handleOpenResume} className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border-2 border-black bg-[#fff0de] px-4 text-sm font-medium text-black transition-all duration-200 hover:text-sky-600 md:h-12 md:w-auto md:px-6 md:text-[16px]">
            <FileText size={18} className="transition-transform duration-200 group-hover:scale-110 md:size-5"/>
            <span className="whitespace-nowrap">
                View My Resume
            </span>
        </button>
    );
}