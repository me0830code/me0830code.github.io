import { PERSONAL_INFO } from "../../data/personalData/personalData";

export function ProfileInfo() {
    return (
        <div className="space-y-3">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                {PERSONAL_INFO.MY_NAME}
            </h2>
            
            <p className="mt-3 text-base text-sky-600 font-semibold">
                {PERSONAL_INFO.CURRENT_TITLE} at <a>123</a>
            </p>
            
            <div>
                <span className="mt-3 text-base text-sky-600 font-semibold">
                    at
                </span>

                <a
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={PERSONAL_INFO.COMPANY}
      title={PERSONAL_INFO.COMPANY}
      className="inline-flex items-center transition hover:opacity-80"
    >coupang
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/35/Coupang_logo.png"
        alt={PERSONAL_INFO.COMPANY}
        className="h-5 w-auto object-contain"
      /> */}
    </a>
            </div>
            
            <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
                {PERSONAL_INFO.BRIEF_INTRO}
            </p>
        </div>
    );
}