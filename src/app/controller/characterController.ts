import { Character } from "src/app/model/character";
import { CombatEquip } from "../model/combatEquip";
import { Companion } from "../model/companion";
import { Follower } from "../model/follower";
import { GodAffinity } from "../model/godAffinity";
import { Modificator } from "../model/modificator";
import { Power } from "../model/power";
import { Skill } from "../model/skill";

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

    /**
     *  Transform JSON characters to a Character Array
     * @param unformatedChars  The characters array in JSON format
     * @returns  Character array mapped
     */
    static converToCharacters(unformatedChars: any[]){
        this.characters = [];
        if(null !== unformatedChars){
            unformatedChars.forEach(character => {
                this.characters.push( CharacterController.mapCharacter(character) );
            });
        }
        return this.characters;
    }

    /**
     *  Transform a JSON character to a Character Object
     * @param protoCharacter The character in JSON format
     * @returns a Character objet mapped
     */
    static mapCharacter(protoCharacter: any){
        this.character = new Character('');
        this.character.setName(protoCharacter.name);
        this.character.setId(protoCharacter.id);

        this.character.setAccumulatedXP(protoCharacter.accumulatedXP);
        this.character.setActualLifeP(protoCharacter.actualLifeP);
        this.character.setAge(protoCharacter.age);
        this.character.setArquetype(protoCharacter.arquetype);

        this.character.getAtributes().getAgility().setValue(protoCharacter.atributes.agility.value);
        this.character.getAtributes().getAgility().setMods(CharacterController.copyMods(protoCharacter.atributes.agility.mods));
        this.character.getAtributes().getAppearance().setValue(protoCharacter.atributes.appearance.value);
        this.character.getAtributes().getAppearance().setMods(CharacterController.copyMods(protoCharacter.atributes.appearance.mods));
        this.character.getAtributes().getComunication().setValue(protoCharacter.atributes.comunication.value);
        this.character.getAtributes().getComunication().setMods(CharacterController.copyMods(protoCharacter.atributes.comunication.mods));
        this.character.getAtributes().getMind().setValue(protoCharacter.atributes.mind.value);
        this.character.getAtributes().getMind().setMods(CharacterController.copyMods(protoCharacter.atributes.mind.mods));
        this.character.getAtributes().getReflexes().setValue(protoCharacter.atributes.reflexes.value);
        this.character.getAtributes().getReflexes().setMods(CharacterController.copyMods(protoCharacter.atributes.reflexes.mods));
        this.character.getAtributes().getResistance().setValue(protoCharacter.atributes.resistance.value);
        this.character.getAtributes().getResistance().setMods(CharacterController.copyMods(protoCharacter.atributes.resistance.mods));
        this.character.getAtributes().getSense().setValue(protoCharacter.atributes.sense.value);
        this.character.getAtributes().getSense().setMods(CharacterController.copyMods(protoCharacter.atributes.sense.mods));
        this.character.getAtributes().getSoul().setValue(protoCharacter.atributes.soul.value);
        this.character.getAtributes().getSoul().setMods(CharacterController.copyMods(protoCharacter.atributes.soul.mods));
        this.character.getAtributes().getStrength().setValue(protoCharacter.atributes.strength.value);
        this.character.getAtributes().getStrength().setMods(CharacterController.copyMods(protoCharacter.atributes.strength.mods));

        this.character.setAureo(protoCharacter.aureo);
        this.character.setAureoRemaining(protoCharacter.aureoRemaining);
        this.character.setAureoXP(protoCharacter.aureoXP);

        this.character.setCombatEquipment(CharacterController.copyCombatEquip(protoCharacter.combatEquipment));
        this.character.setCompanions(CharacterController.copyCompanions(protoCharacter.companions));
        this.character.setCult(protoCharacter.cult);
        this.character.setCurses(protoCharacter.curses);
        this.character.setDivineGifts(protoCharacter.divineGifts);
        this.character.setFollowers(CharacterController.copyFollowers(protoCharacter.followers));

        this.character.setGlory(protoCharacter.glory);
        this.character.setGloryLines(protoCharacter.gloryLines);
        this.character.setGodAfinities(CharacterController.copyGodAffinities(protoCharacter.godAfinities));    

        this.character.setHibris(protoCharacter.hibris);
        this.character.setInfamy(protoCharacter.infamy);
        this.character.setInfamyLines(protoCharacter.infamyLines);
        this.character.setLifePoints(protoCharacter.lifePoints);
        this.character.setOtherEquip(protoCharacter.otherEquip);
        this.character.setOtherNotes(protoCharacter.otherNotes);

        this.character.setPlayer(protoCharacter.player);
        this.character.setPolis(protoCharacter.polis);
        this.character.setPowers(CharacterController.copyPowers(protoCharacter.powers));
        this.character.setSavedXP(protoCharacter.savedXP);
        this.character.setSex(protoCharacter.sex);
        this.character.setSkills(CharacterController.copySkills(protoCharacter.skills));
        this.character.setSocialFeatures(protoCharacter.​​socialFeatures);
        this.character.setSocialGroup(protoCharacter.socialGroup);
        this.character.setTitles(protoCharacter.titles);
       
        return this.character;
    }

    private static copyCombatEquip(combatEq: any[]){
        let combatETBR: CombatEquip[] = [];
        combatEq.forEach(equip => {
            try {
                let combatEqui: CombatEquip = new CombatEquip(equip.name);
                combatEqui.setInitialDamage(equip.initialDamage);
                combatEqui.setActiveDefence(equip.activeDefence);
                combatEqui.setArmor(equip.armor);
                combatEqui.setHands(equip.hands);
                combatEqui.setPrecision(equip.precision);
                combatEqui.setPrice(equip.price);
                combatEqui.setAtletism(equip.atletism);
                combatEqui.setSense(equip.sense);
                combatETBR.push(combatEqui);
            } catch (error) {
                console.log("invalid combatequip found");
                console.log(error);
                //Error tramitation point (future)    
            }
        });
        return combatETBR;
    }

    private static copyCompanions(companions: any[]){
        let companionsTBR: Companion[] = [];
        companions.forEach(companion =>{
            try {
                companionsTBR.push( new Companion(companion.name, companion.player, companion.cult) );
            } catch (error) {
                console.log("invalid companion found");
                console.log(error);
                //Error tramitation point (future)    
            }
        });
        return companionsTBR;
    }

    private static copyFollowers(followers: any[]){
        let followersTBR: Follower[] = [];
        followers.forEach(follower =>{
            try {
                let followerR = new Follower(follower.name);
                followerR.setArquetype(follower.arquetype);
                followerR.setCombat(follower.combat);
                followerR.setPhysical(follower.physical);
                followerR.setEspiritual(follower.espiritual);
                followerR.setMental(follower.mental);
                followerR.setSocial(follower.social);
                followersTBR.push(followerR);
            } catch (error) {
                console.log("invalid follower found");
                console.log(error);
                //Error tramitation point (future) 
            }
        });
        return followersTBR;
    }

    private static copyGodAffinities(godAffinities: any[]){
        let godAffinitiesTBR: GodAffinity[] = [];
        godAffinities.forEach(godAffinity =>{
            try {
                godAffinitiesTBR.push(new GodAffinity( godAffinity.god, godAffinity.affinity, godAffinity.aretes, godAffinity.hamartias ));
            } catch (error) {
                console.log("invalid godaffinity found");
                console.log(error);
                //Error tramitation point (future) 
            }
        });
        return godAffinitiesTBR;
    }

    private static copyPowers(powers: any[]){
        let powersTBR: Power[] = [];
        powers.forEach(power=>{
            try {
                let powerR = new Power(power.name);
                powerR.setMinimumAfinity(power.minimumAfinity);
                powerR.setAction(power.action);
                powerR.setSpecialResistAction(power.specialResistAction);
                powerR.setEffect(power.effect);
                powerR.setCost(power.cost);
                powerR.setDuration(power.duration);
                powersTBR.push(powerR);
            } catch (error) {
                console.log("invalid power found");
                console.log(error);
                //Error tramitation point (future) 
            }
        });
        return powersTBR;
    }

    private static copySkills(skills: any[]){
        let skillsTBR: Skill[] = [];
        skills.forEach(skill => {
            try {
               let skillR = new Skill(skill.name, skill.level);
               skillR.setMods(CharacterController.copyMods(skill.mods));
               skillsTBR.push(skillR);
            } catch (error) {
                console.log("invalid skill found");
                console.log(error);
                //Error tramitation point (future)  
            }         
        });
        return skillsTBR;
    }

    private static copyMods(mods: any[]){
        let modsTBR: Modificator[] = [];
        mods.forEach(mod => {
            try {
                modsTBR.push(new Modificator(mod.value, mod.name)); 
            } catch (error) {
                console.log("invalid modificator found");
                console.log(error);
                //Error tramitation point (future)                
            }
        });
        return modsTBR;
    }
}
