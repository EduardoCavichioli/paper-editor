import { Paper } from './model/paper';

export const PAPER: Paper = 
{
    title:"Test title",
    authorList:[
        {
            id:1,
            name:"Eduardo Cavichioli",
            affiliationList:[1,2]
        },
        {
            id:1,
            name:"Gabriela Pedroso",
            affiliationList:[2]
        }
    ],
    affiliationList:[
        {
            id:1,
            university:"UFRGS"
        },
        {
            id:2,
            university:"PUCRS"
        }
    ]
};
