import { LightningElement, track} from 'lwc';

// import uiRecordApi to create record
import { createRecord } from 'lightning/uiRecordApi';
// importing to show toast notifictions
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

// importing Account fields
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Phone_FIELD from '@salesforce/schema/Account.Phone';
import Industry_FIELD from '@salesforce/schema/Account.Industry';
import Sector_FIELD from '@salesforce/schema/Account.Sector__c';

export default class CreateRecordInLWC extends LightningElement {
    @track error;

    // this object have record information
    @track accRecord = {
        Name : NAME_FIELD,
        Industry : Industry_FIELD,
        Phone : Phone_FIELD,
        Sector : Sector_FIELD
    };


    handleNameChange(event) {
        this.accRecord.Name = event.target.value;
        window.console.log('Name ==> '+this.accRecord.Name);
    }

    handlePhoneChange(event) {
        this.accRecord.Phone = event.target.value;
        window.console.log('Phone ==> '+this.accRecord.Phone);
        window.console.log('object ==> '+JSON.stringify(ACCOUNT_OBJECT));
    }

    handleSectorChange(event) {
        this.accRecord.Sector = event.target.value;
        window.console.log('Sector ==> '+this.accRecord.Sector);
    }

    handleIndustryChange(event) {
        this.accRecord.Industry = event.target.value;
        window.console.log('Industry ==> '+this.accRecord.Industry);
    }


    handleSave() {
        const fields = {};

        fields[NAME_FIELD.fieldApiName] = this.accRecord.Name;
        fields[Phone_FIELD.fieldApiName] = this.accRecord.Phone;
        fields[Industry_FIELD.fieldApiName] = this.accRecord.Industry;
        fields[Sector_FIELD.fieldApiName] = this.accRecord.Sector;
       
        // Creating record using uiRecordApi
        let recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields }
        createRecord(recordInput)
        .then(result => {
            // Clear the user enter values
            this.accRecord = {};

            window.console.log('result ===> '+result);
            // Show success messsage
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'Account Created Successfully!!',
                variant: 'success'
            }),);
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        });
    }
}
/*import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';



export default class LdsCreateRecord extends LightningElement {

    accountId;
    name = '';
    industry = '';
    //sector = '';
    phone = '';

    handleNameChange(event) {
        this.accountId = undefined;
        this.name = event.target.value;
        this.industry = event.target.value;
        //this.sector = event.target.value;
        this.phone = event.target.value;
    }
    createAccount() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[PHONE_FIELD.fieldApiName] = this.phone;
        fields[INDUSTRY_FIELD.fieldApiName] = this.industry;
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(account => {
                this.accountId = account.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
}
*/