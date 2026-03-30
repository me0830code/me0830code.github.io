import { Icon } from "@iconify/react";

import { PERSONAL_INFO, PERSONAL_PHOTO, TOTAL_INFO } from "../../data/personalData/personalData";
import { COMPANY_INFO } from "../../data/experienceInfo/companyInfo";
import { CustomizedTextRendering } from "../Others/Helper";

export function MiniProfileHeader() {
    const linkItems = TOTAL_INFO.filter((item) => item.isLinkActive);
    const infoItems = TOTAL_INFO.filter((item) => !item.isLinkActive);

    return (
        <div id="mini-profile-header" className="scroll-mt-24 rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur">
            <div className="flex items-start gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <img
                        src={PERSONAL_PHOTO.PROFILE_PHOTO.imageURL}
                        alt={PERSONAL_PHOTO.PROFILE_PHOTO.name}
                        className="h-full w-full object-cover object-center"
                        style={{ imageRendering: "auto" }}
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold tracking-tight text-slate-900">
                        {PERSONAL_INFO.MY_NAME}
                    </h2>

                    <p className="mt-1 flex flex-wrap items-center gap-1 text-sm font-semibold text-sky-600">
                        <span>{PERSONAL_INFO.CURRENT_TITLE} at</span>

                        <a
                            href={COMPANY_INFO.COUPANG.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-md px-1.5 py-0.5 transition-all duration-200 hover:bg-red-50"
                        >
                            <img
                                src={COMPANY_INFO.COUPANG.logoURL}
                                alt={COMPANY_INFO.COUPANG.companyName}
                                className="h-[1.1em] w-auto object-contain translate-y-[1px]"
                            />
                        </a>
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                        {CustomizedTextRendering(PERSONAL_INFO.BRIEF_INTRO)}
                    </p>
                </div>
            </div>

            {infoItems.length > 0 && (
                <div className="mt-4 flex flex-col gap-2">
                    {infoItems.map((eachInfo) => (
                        <div
                            key={eachInfo.key}
                            className="flex items-center gap-2 text-sm text-slate-700"
                        >
                            <Icon
                                icon={eachInfo.iconURL}
                                width={16}
                                height={16}
                                className="shrink-0 text-slate-500"
                            />
                            <span className="break-all">{eachInfo.value}</span>
                        </div>
                    ))}
                </div>
            )}

            {linkItems.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {linkItems.map((eachInfo) => (
                        <a
                            key={eachInfo.key}
                            href={eachInfo.linkURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-300 hover:text-sky-600"
                        >
                            <Icon icon={eachInfo.iconURL} width={16} height={16} />
                            <span className="whitespace-nowrap">{eachInfo.value}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}