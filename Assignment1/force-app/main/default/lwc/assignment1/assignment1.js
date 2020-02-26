import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track accounts = [
        {
        Id: 1,
        Name: 'Alper DURU',
        Industry: 'Salesforce',
        Sector: 'Software Developer',
        Phone: '111-111-1111',
        },
    ]
    @track accountName = "";
    @track accountIndustry = "";
    @track accountSector = "";
    @track accountPhone = "";
    @track idGenerator = 2;

handleChange(event){
    if(event.target.label === 'Account Name'){
        this.accountName = event.target.value;
    }else if(event.target.label === 'Account Industry'){
        this.accountIndustry = event.target.value;
    }else if(event.target.label === 'Account Sector'){
        this.accountSector = event.target.value;
    }else if(event.target.label === 'Account Phone'){
        this.accountPhone = event.target.value;
        }
}
handleKeyPress(event){
    var currentId = this.idGenerator;
    if(event.keyCode === 13){
        this.accounts.push(
        {
            id : currentId,
            Name : this.accountName,
            Industry : this.accountIndustry,
            Sector : this.accountSector,
            Phone : this.accountPhone
        }
    );
    this.idGenerator++;
    this.accountName = '';
    this.accountIndustry = '';
    this.accountSector = '';
    this.accountPhone = '';
        }
    }
}