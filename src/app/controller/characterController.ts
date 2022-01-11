import { Character } from "src/app/model/character";

export class CharacterController{
    private static character: Character;
    private static characters: Character[];

    /**
     * Creates an unique id from a name
     * @param name A character name
     * @returns An unique string identificator for a character
     */
    static generateId(name: string) {
        return name.concat('_', Date.now().toString());
    }

    /**
     * Validates a character name.
     * @param name A character name to be validated
     * @returns true if valid false if not
     */
    static isNameValid(name: string) {
        return name.length > 2 && Number.isNaN( Number(name) ) ? true : false;
    }

    static converToCharacters(nonFormatedCharacters: any[]){
        this.characters = [];
        nonFormatedCharacters.forEach(character => {
            this.characters.push( CharacterController.mapCharacter(character));
        });
        return this.characters;
    }

    static mapCharacter(protoCharacter: any){
        this.character = new Character('');
        this.character.setName(protoCharacter.name);
        this.character.setId(protoCharacter.id);
        //WORK IN PROGRESS
        return this.character;
    }
}
