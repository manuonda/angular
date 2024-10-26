import { CharacterInfo, Character } from "@app/models";

export const CharacterAdapter = (characterInfo: CharacterInfo):Character[] => {
    return characterInfo.results;
}