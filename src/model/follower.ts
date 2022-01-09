export class Follower{
    private name: string;
    private arquetype: string;
    private combat: string;
    private physical: string;
    private espiritual: string;
    private mental: string;
    private social: string;


    constructor(name: string){
        this.name= name;
    }

    //Getters & Setters

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getArquetype(): string {
        return this.arquetype;
    }

    public setArquetype(arquetype: string): void {
        this.arquetype = arquetype;
    }

    public getCombat(): string {
        return this.combat;
    }

    public setCombat(combat: string): void {
        this.combat = combat;
    }

    public getPhysical(): string {
        return this.physical;
    }

    public setPhysical(physical: string): void {
        this.physical = physical;
    }

    public getEspiritual(): string {
        return this.espiritual;
    }

    public setEspiritual(espiritual: string): void {
        this.espiritual = espiritual;
    }

    public getMental(): string {
        return this.mental;
    }

    public setMental(mental: string): void {
        this.mental = mental;
    }

    public getSocial(): string {
        return this.social;
    }

    public setSocial(social: string): void {
        this.social = social;
    }

}
