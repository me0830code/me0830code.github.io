import type { SkillSetItem } from "../../data/skillSet/interface/SkillSetItem";

import { Icon } from "@iconify/react";
// import { motion } from "framer-motion";

export function SkillBadge({eachSkillSetItem }: { eachSkillSetItem: SkillSetItem }) {
    return (
        <div className="flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-[0.5rem] transition-all duration-300 cursor-default group">
            {
                eachSkillSetItem.needToCustomize ? (
                    <img src={eachSkillSetItem.iconURL} alt={eachSkillSetItem.name} className="w-6 h-6 object-contain"/>
                ) : (
                    <Icon icon={eachSkillSetItem.iconURL} className={`w-6 h-6 text-slate-400 group-hover:text-slate-600 transition-colors duration-300`}/>
                )
            }

            <span className="text-sm font-semibold text-black">
                {eachSkillSetItem.name}
            </span>
        </div>
        
        // <motion.div whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-[0.5rem] shadow-sm hover:border-blue-400/50 hover:shadow-md transition-all duration-300 cursor-default group">
        //     {
        //         eachSkillSetItem.needToCustomize ? (
        //             <img src={eachSkillSetItem.iconURL} alt={eachSkillSetItem.name} className="w-6 h-6 object-contain"/>
        //         ) : (
        //             <Icon icon={eachSkillSetItem.iconURL} className={`w-6 h-6 text-slate-400 group-hover:text-slate-600 transition-colors duration-300`}/>
        //         )
        //     }

        //     <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900">
        //         {eachSkillSetItem.name}
        //     </span>
        // </motion.div>
    );
}