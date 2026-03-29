import type { ComponentProps } from "../../data/constant/interface/ComponentProps";

import { PERSONAL_INFO, TOTAL_MY_PHOTO } from "../../data/personalData/personalData";
import { CustomizedTextRendering } from "../Others/Helper";

export function AboutMe({ sectionTitle }: ComponentProps) {
    return (
        <div className="flex flex-col gap-10">
            <section className="relative px-10 pt-24 pb-12 rounded-[0.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                <div className="absolute top-0 left-0 px-6 py-2.5 bg-blue-500 rounded-tl-[0.5rem] rounded-br-[0.5rem] w-52 h-12 flex items-center justify-center">
                    <span className="text-[18px] tracking-tight text-white font-bold leading-none">
                        {sectionTitle}
                    </span>
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                        Hi, I'm Kevin
                    </h1>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        {
                            PERSONAL_INFO.DETAIL_INFO.map((eachInfo, index) => (
                                <p key={index}>{CustomizedTextRendering(eachInfo)}</p>
                            ))
                        }
                    </div>

                    <hr className="mb-4 border-t-1 border-slate-200"/>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            TOTAL_MY_PHOTO.map((eachPhoto) => (
                                <div key={eachPhoto.name} className="flex flex-col gap-2">
            
                                <div className="aspect-square bg-slate-100 rounded-[0.5rem] overflow-hidden border border-slate-200">
                                    <img src={eachPhoto.imageURL} alt={eachPhoto.name} className={`w-full h-full object-cover object-${eachPhoto.adjustDirection}`} style={{ imageRendering: 'auto' }}/>
                                </div>
                    
                                <p className="text-sm text-slate-600 text-center truncate">
                                    {eachPhoto.description}
                                </p>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}