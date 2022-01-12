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
/*
​​accumulatedXP: 0
​​actualLifeP: 0
​​age: 0
​​arquetype: ""
​​atributes: {
    agility: Object { valor: 0, mod: [] }
​​​    appearance: Object { valor: 0, mod: [] }
    comunication: Object { valor: 0, mod: [] }
    mind: Object { valor: 0, mod: [] }
    reflexes: Object { valor: 0, mod: [] }
    resistance: Object { valor: 0, mod: [] }
    sense: Object { valor: 0, mod: [] }
    soul: Object { valor: 0, mod: [] }
    strength: Object { valor: 0, mod: [] }
}
​​aureo: 0
​​aureoRemaining: 0
​​aureoXP: 0
​​combatEquipment: Array []
​​commonGifts: Array []
​​companions: Array []
​​cult: ""
​​curses: Array []
​​divineGifts: Array []
​​followers: Array []
​​glory: 0
​​gloryLines: Array []
​​godAfinities: Array(12) [
    0: Object { god: "Afrodita", affinity: 0 }
​​    ​1: Object { god: "Artemisa", affinity: 0 }
    ​​​2: Object { god: "Hades", affinity: 0 }
    ​​​3: Object { god: "Hermes", affinity: 0 }
    ​​​4: Object { god: "Apolo", affinity: 0 }
    ​​​5: Object { god: "Atenea", affinity: 0 }
    ​​​6: Object { god: "Hefesto", affinity: 0 }
    ​​​7: Object { god: "Poseidon", affinity: 0 }
    ​​​8: Object { god: "Ares", affinity: 0 }
    ​​​9: Object { god: "Dioniso", affinity: 0 }
    ​​​10: Object { god: "Hera", affinity: 0 }
    ​​​11: Object { god: "Zeus", affinity: 0 }
 ]
​​hibris: 0
​​id: "Ejemplasio_1641940121408"
​​infamy: 0
​​infamyLines: Array []
​​lifePoints: 0
​​name: "Ejemplasio"
​​otherEquip: Array []
​​otherNotes: Array []
​​player: ""
​​polis: ""
​​powers: Array []
​​savedXP: 0
​​sex: ""
​​skills: Array []
​​socialFeatures: Array []
​​socialGroup: ""
​​titles: Array []
*/