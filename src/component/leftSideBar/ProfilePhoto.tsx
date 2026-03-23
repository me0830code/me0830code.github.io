import { LINKS } from "../../data/constant/generalLink";

export function ProfilePhoto() {
    return (
        <div className="flex justify-center">
            <img src={LINKS.MY_PHOTO} alt="Profile" className="mt-3 h-50 w-50 object-cover rounded-full"/>
        </div>
    );
}