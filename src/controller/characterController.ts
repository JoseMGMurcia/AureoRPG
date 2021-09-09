export class CharacterController{

    //Creates an unique id from name
    static generateId(name: string) {
        return name.concat('_', Date.now().toString());
    }
    
    static isNameValid(name: string) {
        const NAME_RE = /a/; //valid regular expresion for names must be implemented
        return name.match(NAME_RE);
    }

}
