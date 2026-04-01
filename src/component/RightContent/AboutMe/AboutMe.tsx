import type { ComponentProps } from "../../../data/constant/interface/ComponentProps";

import { ViewMyResume } from "./ViewMyResume";
import { CustomizedTextRendering } from "../../Others/Helper";

import { PERSONAL_INFO, TOTAL_MY_PHOTO } from "../../../data/personalData/personalData";

export function AboutMe({ sectionTitle }: ComponentProps) {
    return (
        <div className="flex flex-col gap-6 md:gap-10">
            <section className="relative rounded-[0.5rem] border border-slate-100 bg-white px-4 pt-20 pb-8 shadow-sm backdrop-blur sm:px-6 sm:pt-24 sm:pb-10 md:px-10 md:pb-12">
                <div className="absolute top-0 left-0 flex h-11 w-44 items-center justify-center rounded-tl-[0.5rem] rounded-br-[0.5rem] bg-blue-500 px-4 py-2 sm:h-12 sm:w-52 sm:px-6 sm:py-2.5">
                    <span className="text-base font-bold leading-none tracking-tight text-white sm:text-[18px]">
                        {sectionTitle}
                    </span>
                </div>

                <div className="flex flex-col gap-5 md:gap-6">
                    <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between [@media(orientation:landscape)]:flex-row [@media(orientation:landscape)]:items-end [@media(orientation:landscape)]:justify-between">
                        <h1 className="order-2 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:order-1 [@media(orientation:landscape)]:order-1 lg:mt-4 lg:text-6xl">
                            Hi, I'm Kevin
                        </h1>

                        <div className="order-1 w-full md:order-2 md:ml-auto md:w-auto [@media(orientation:landscape)]:order-2 [@media(orientation:landscape)]:ml-auto [@media(orientation:landscape)]:w-auto">
                            <ViewMyResume/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-5">
                        {
                            PERSONAL_INFO.DETAIL_INFO.map((eachInfo, index) => (
                                <p key={index} className="text-base leading-7 text-slate-800">
                                    {CustomizedTextRendering(eachInfo)}
                                </p>
                            ))
                        }
                    </div>

                    <hr className="mb-2 border-t border-slate-200 md:mb-4"/>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {
                            TOTAL_MY_PHOTO.map((eachPhoto) => (
                                <figure key={eachPhoto.name} className="flex flex-col gap-3">
                                    <div className="aspect-[4/5] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                                        <img src={eachPhoto.imageURL} alt={eachPhoto.name} className={`h-full w-full object-cover object-${eachPhoto.adjustDirection}`} style={{ imageRendering: "auto" }}/>
                                    </div>

                                    <figcaption className="text-center text-sm leading-6 text-slate-600">
                                        {eachPhoto.description}
                                    </figcaption>
                                </figure>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}