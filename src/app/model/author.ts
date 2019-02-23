
export class Author {
    id: number;
    name: string;
    affiliationList: string[];
    affiliationOrder?: string;

    constructor() {
        this.id = Date.now();
        this.name = '';
        this.affiliationList = [];
        this.affiliationOrder = '';
    }
}
