export class GodAffinity{
    private god: string;
    private affinity: number;
    private aretes: number;
    private hamartias: number;

    constructor(god: string, value: number){
        this.god = god;
        this.affinity =value;
    }
}
