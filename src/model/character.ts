class Character {
    private id: string;
    private name: string;

    private cult: string;
    private polis: string;
    private arquetype: string;
    private socialGroup: string;
    private sex: string;
    private age: number;
      
    private player: string;
    private aureo: number;
    private aureoRemaining: number;
    private hibris: number;

    private lifePoints: number;
    private actualLifeP: number;
    private titles: string[];

    private atributes: Atributes;
    private skills: Skill[];
    private socialFeatures: string[];
    private commonGifts: string[];
    private divineGifts: string[];
    private curses: string[];
    private powers: Power[];

    private godAfinities: GodAffinity[];
    private combatEquipment: CombatEquip[];

    private glory: number;
    private gloryLines: string[];
    private infamy: number;
    private infamyLines: string[];

    private followers: Follower[];
    private companions: Companion[];

    private otherNotes: string[];
    private otherEquip: string[];

    private savedXP: number;
    private accumulatedXP: number;
    private aureoXP: number;

    constructor(name: string) {
        this.name = name;
        this.id = CharacterController.generateId(name);
        this.atributes = new Atributes();

        this.godAfinities = [
            new GodAffinity('Afrodita', 0),
            new GodAffinity('Artemisa', 0),
            new GodAffinity('Hades', 0),
            new GodAffinity('Hermes', 0),
            new GodAffinity('Apolo', 0),
            new GodAffinity('Atenea', 0),
            new GodAffinity('Hefesto', 0),
            new GodAffinity('Poseidon', 0),
            new GodAffinity('Ares', 0),
            new GodAffinity('Dioniso', 0),
            new GodAffinity('Hera', 0),
            new GodAffinity('Zeus', 0)
        ];
    }
}
