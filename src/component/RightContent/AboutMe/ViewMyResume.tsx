import { FileText } from 'lucide-react'
import { PERSONAL_INFO } from "../../../data/personalData/personalData";

export function ViewMyResume() {
    const handleOpenResume = () => {
        window.open(PERSONAL_INFO.RESUME_LINK, "_blank", "noopener,noreferrer");
    };

    return (
        <button
            onClick={handleOpenResume}
            className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border-2 border-black bg-[#fff0de] px-4 text-sm font-medium text-black transition-all duration-200 hover:text-sky-600 md:h-12 md:w-auto md:px-6 md:text-[16px]"
        >
            <FileText
                size={18}
                className="transition-transform duration-200 group-hover:scale-110 md:size-5"
            />
            <span className="whitespace-nowrap">View My Resume</span>
        </button>
    );
}

export function ViewMyResume2() {
    const handleOpenResume = () => {
        window.open(PERSONAL_INFO.RESUME_LINK, '_blank', 'noopener,noreferrer');
    };

    return (
        <button onClick={handleOpenResume} className="absolute top-[30px] right-[30px] px-6 py-2.5 bg-[#fff0de] border-2 border-black text-[16px] text-black transition-all duration-200 hover:bg-[#fff0de] hover:text-sky-600 flex items-center justify-center h-12 gap-2 group">
            <FileText size={20} className="group-hover:scale-120 transition-transform"/>
            <span>View My Resume</span>
        </button>
    );
}