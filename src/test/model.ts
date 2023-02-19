export interface detailStudentType {
    japaneseName: string;
    japaneseReadings: string;
    age: number;
    birthday: string;
    height: string;
    hobbies: string;
    voiceActor: string;
    releaseDate: string;
}


export interface studentType {
    name: string;
    rarity: number;
    isLimited: boolean;
    school: string;
    role: string;
    position: string;
    attackType: string;
    armorType: string;
    combatClass: string;
    weaponType: string;
    usesCover: boolean;

    detailStudent: detailStudentType;

    urban: string;
    outdoor: string;
    indoor: string;
}
