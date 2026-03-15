import { LINKS } from "../../data/constant/generalLink";

export function ProfilePhoto() {
    return (
        <div>
            <img src={LINKS.MY_PHOTO} alt="Profile" className="h-50 w-50 object-cover rounded-full"/>
        </div>
    );
}