import { TOTAL_SECTION } from "../../data/constant/contentData";

export function RightContent() {
    return (
        <div className="flex flex-col gap-12 pb-12 md:gap-20">
            {TOTAL_SECTION.map((eachSection) => {
                return (
                    <section
                        id={eachSection.key}
                        key={eachSection.key}
                        className="scroll-mt-24 md:scroll-mt-36"
                    >
                        <eachSection.componentUI sectionTitle={eachSection.sectionTitle} />
                    </section>
                );
            })}
        </div>
    );
}

export function RightContent2() {
    return (
        <div className="flex flex-col gap-20 pb-12">
            {
                TOTAL_SECTION.map((eachSection) => {
                    return (
                        <section id={eachSection.key} key={eachSection.key}>
                            <eachSection.componentUI sectionTitle={eachSection.sectionTitle}/>
                        </section>
                    );
                })
            }
        </div>
    );
}