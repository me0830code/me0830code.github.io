import { CustomizedTextRendering } from "../Others/Helper";

import { PERSONAL_INFO } from "../../data/personalData/personalData";
import { COMPANY_INFO } from "../../data/experienceInfo/companyInfo";

export function ProfileInfo() {
    return (
        <div className="space-y-3">
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-900">
                {PERSONAL_INFO.MY_NAME}
            </h2>

            <p className="mt-4 text-base font-semibold text-sky-600">
                <span>{PERSONAL_INFO.CURRENT_TITLE}</span>

                <span className="ml-0.5 inline-flex items-center gap-0.5">
                    <span>at</span>

                    <a href={COMPANY_INFO.COUPANG.companyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md px-1 py-1 mt-0.5 transition-all duration-200 hover:bg-red-50 group">
                        <img src={COMPANY_INFO.COUPANG.logoURL} alt={COMPANY_INFO.COUPANG.companyName} className="h-[1.1em] w-auto object-contain translate-y-[1px] transition-transform group-hover:scale-105"/>
                    </a>
                </span>
            </p>
            
            <p className="mt-3 max-w-xs text-sm leading-7">
                {CustomizedTextRendering(PERSONAL_INFO.BRIEF_INTRO)}
            </p>
        </div>
    );
}