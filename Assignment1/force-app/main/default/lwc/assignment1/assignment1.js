// wireGetRecordDynamicContact.js
/*
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Account.Name',
    'Account.Title',
    'Account.Phone',
    'Account.Email',
];

export default class WireGetRecordDynamicAccount extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    account;

    get name() {
        return this.account.data.fields.Name.value;
    }

    get title() {
        return this.account.data.fields.Title.value;
    }

    get phone() {
        return this.account.data.fields.Phone.value;
    }

    get email() {
        return this.account.data.fields.Email.value;
    }
}
*/
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

