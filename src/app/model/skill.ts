export class Skill {
    private name: string;
    private level: number;
    private mod: number[];

    constructor(name: string, level: number){
        this.level = level;
        this.name = name;
        this.mod = [];
    }

    //Getter & Setter

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getLevel(): number {
        return this.level;
    }

    public setLevel(level: number): void {
        this.level = level;
    }

    public getMod(): number[] {
        return this.mod;
    }

    public setMod(mod: number[]): void {
        this.mod = mod;
    }
}