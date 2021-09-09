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
}

class Atribute {
    private valor: number;
    private mod: number[];

    constructor(valor: number){
        this.valor = valor;
    }
}