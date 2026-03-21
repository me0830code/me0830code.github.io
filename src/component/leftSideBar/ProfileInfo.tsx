import { PERSONAL_INFO } from "../../data/personalData/personalData";

export function ProfileInfo() {
    return (
        <div className="space-y-3">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                {PERSONAL_INFO.MY_NAME}
            </h2>
            
            <p className="mt-3 text-base text-sky-600 font-semibold">
                {PERSONAL_INFO.CURRENT_TITLE} at <></>
                <a
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={PERSONAL_INFO.COMPANY}
      title={PERSONAL_INFO.COMPANY}
      className="inline-flex items-center transition hover:opacity-80 text-black font-semibold"
    >Coupang
    </a>
    </p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
                {PERSONAL_INFO.BRIEF_INTRO}
            </p>
        </div>
    );
}