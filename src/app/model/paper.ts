import { Author } from './author';

export class Paper {
    title: string;
    authorList: Author[];

    constructor() {
        this.title = '';
        this.authorList = [];
    }
}