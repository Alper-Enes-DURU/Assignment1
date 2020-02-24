// helloForEach.js
import { LightningElement } from 'lwc';

export default class Accounts extends LightningElement {
    accounts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Sector: 'VP of Engineering',
            Industry: 'a',
            Phone: '1',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Sector: 'VP of Sales',
            Industry: 'a',
            Phone: '1',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Sector: 'CEO',
            Industry: 'a',
            Phone: '1',
        },
    ];
}