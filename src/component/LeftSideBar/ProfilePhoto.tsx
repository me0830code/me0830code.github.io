import { PERSONAL_PHOTO } from "../../data/personalData/personalData";

export function ProfilePhoto() {
    return (
        <div className="flex justify-center">
            <img src={PERSONAL_PHOTO.PROFILE_PHOTO.imageURL} alt={PERSONAL_PHOTO.PROFILE_PHOTO.name} className={`max-w-[250px] w-full aspect aspect-square object-cover object-${PERSONAL_PHOTO.PROFILE_PHOTO.adjustDirection} rounded-[0.5rem] mt-2`} style={{ imageRendering: 'auto' }}/>
        </div>
    );
}