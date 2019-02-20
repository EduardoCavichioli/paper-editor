import { Author } from './author';
import { Affiliation } from './affiliation';

export class Paper {
    title: string;
    authorList: Author[];
    affiliationList: Affiliation[];
}