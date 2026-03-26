import { LINKS } from "../../data/constant/generalLink";

export function ProfilePhoto() {
    return (
        <div className="flex justify-center">
            <img src={LINKS.MY_PHOTO} alt="Profile" className="h-50 w-50 object-cover rounded-[0.5rem] mt-2"/>
        </div>
    );
}