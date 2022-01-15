export class Modificator {
    private value: number;
    private name: string;

    constructor (value: number, name: string){
        this.value = value;
        this.name = name;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}