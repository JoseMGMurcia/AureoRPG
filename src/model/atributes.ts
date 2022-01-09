export class Atributes {
    private agility: Atribute;
    private comunication: Atribute;
    private reflexes: Atribute;

    private soul: Atribute;
    private strength: Atribute;
    private resistance: Atribute;

    private appearance: Atribute;
    private mind: Atribute;
    private sense: Atribute;
 
    constructor(){
        this.agility = new Atribute(0);
        this.comunication = new Atribute(0);
        this.reflexes = new Atribute(0);
        this.soul = new Atribute(0);
        this.strength = new Atribute(0);
        this.resistance = new Atribute(0);
        this.appearance = new Atribute(0);
        this.mind = new Atribute(0);
        this.sense = new Atribute(0);
    }

    //Getters & Setters

    public getAgility(): Atribute {
        return this.agility;
    }

    public setAgility(agility: Atribute): void {
        this.agility = agility;
    }

    public getComunication(): Atribute {
        return this.comunication;
    }

    public setComunication(comunication: Atribute): void {
        this.comunication = comunication;
    }

    public getReflexes(): Atribute {
        return this.reflexes;
    }

    public setReflexes(reflexes: Atribute): void {
        this.reflexes = reflexes;
    }

    public getSoul(): Atribute {
        return this.soul;
    }

    public setSoul(soul: Atribute): void {
        this.soul = soul;
    }

    public getStrength(): Atribute {
        return this.strength;
    }

    public setStrength(strength: Atribute): void {
        this.strength = strength;
    }

    public getResistance(): Atribute {
        return this.resistance;
    }

    public setResistance(resistance: Atribute): void {
        this.resistance = resistance;
    }

    public getAppearance(): Atribute {
        return this.appearance;
    }

    public setAppearance(appearance: Atribute): void {
        this.appearance = appearance;
    }

    public getMind(): Atribute {
        return this.mind;
    }

    public setMind(mind: Atribute): void {
        this.mind = mind;
    }

    public getSense(): Atribute {
        return this.sense;
    }

    public setSense(sense: Atribute): void {
        this.sense = sense;
    }
}

class Atribute {
    private valor: number;
    private mod: number[];

    constructor(valor: number){
        this.valor = valor;
        this.mod = [];
    }

    //Getter & Setter

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getMod(): number[] {
        return this.mod;
    }

    public setMod(mod: number[]): void {
        this.mod = mod;
    }
    
}