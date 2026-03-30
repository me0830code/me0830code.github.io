import { TOTAL_INFO } from "../../data/personalData/personalData";
import { Icon } from "@iconify/react";

export function ContactInfo() {
    return (
        <div className="mt-6 space-y-3">
            {
                TOTAL_INFO.map((eachInfo) =>
                    !eachInfo.isLinkActive ? (
                        <div key={eachInfo.key} className="mt-4 text-sm flex items-center gap-3 text-black">
                            <Icon icon={eachInfo.iconURL} width={eachInfo.customSize} height={eachInfo.customSize}/>
                            <span>{eachInfo.value}</span>
                        </div>
                    )
                    :
                    (
                        <a key={eachInfo.key} href={eachInfo.linkURL} target="_blank" rel="noopener noreferrer"className="mt-4 text-sm flex items-center gap-3 text-black transition hover:text-sky-600">
                            <Icon icon={eachInfo.iconURL} width={eachInfo.customSize} height={eachInfo.customSize}/>
                            <span>{eachInfo.value}</span>
                        </a>
                    )
                )
            }
        </div>
    );
}