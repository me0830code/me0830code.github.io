import { PERSONAL_INFO } from "../../data/personalData/personalData";
import { COMPANY_INFO } from "../../data/experienceInfo/companyInfo";
import { CustomizedTextRendering } from "../Others/Helper";

export function ProfileInfo() {
    return (
        <div className="space-y-3">
            <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-900">
                {PERSONAL_INFO.MY_NAME}
            </h2>
            
            <p className="mt-4 text-base text-sky-600 font-semibold">
                {PERSONAL_INFO.CURRENT_TITLE} at

                <a href={COMPANY_INFO.COUPANG.companyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-1 -mx-2 rounded-md transition-all duration-200 hover:bg-red-50 group">
                    <img src={COMPANY_INFO.COUPANG.logoURL} alt={COMPANY_INFO.COUPANG.companyName} className="h-[1.1em] w-auto object-contain transition-transform group-hover:scale-105 align-middle translate-y-[5px]"/>
                </a>
            </p>
            
            <p className="mt-3 max-w-xs text-sm leading-7">
                {CustomizedTextRendering(PERSONAL_INFO.BRIEF_INTRO)}
            </p>
        </div>
    );
}