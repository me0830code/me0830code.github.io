import { Icon } from "@iconify/react";

import { TOTAL_INFO } from "../../data/personalData/personalData";

export function ContactInfo() {
    return (
        <div className="mt-6 space-y-3">
            {
                TOTAL_INFO.map((eachInfo) =>
                    {
                        return (
                            <a key={eachInfo.key} href={eachInfo.linkURL} target="blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-3 text-sm text-black transition hover:text-sky-600">
                                <Icon icon={eachInfo.iconURL} width={eachInfo.customSize} height={eachInfo.customSize}/>
                                <span>
                                    {eachInfo.value}
                                </span>
                            </a>
                        );
                    }
                )
            }
        </div>
    );
}