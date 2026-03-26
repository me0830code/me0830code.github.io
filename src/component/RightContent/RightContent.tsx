import { TOTAL_SECTION } from "../../data/constant/contentData";

export function RightContent() {
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