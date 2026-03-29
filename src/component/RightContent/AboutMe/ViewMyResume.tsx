import { FileText } from 'lucide-react'
import { PERSONAL_INFO } from "../../../data/personalData/personalData";

export function ViewMyResume() {
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