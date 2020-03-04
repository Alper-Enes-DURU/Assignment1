import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    areEmailDetailsVisible = false;
    areListEmailDetailsVisible = false;
    areTasksDetailsVisible = false;
    areCallsDetailsVisible = false;
    areEventsDetailsVisible = false;
    areNotesDetailsVisible = false;


    handleEmailChange(event) {
        this.areEmailDetailsVisible = event.target.checked;
    }
    handleListEmailChange(event) {
        this.areListEmailDetailsVisible = event.target.checked;
    }
    handleTasksChange(event) {
        this.areTasksDetailsVisible = event.target.checked;
    }
    handleCallsChange(event) {
        this.areCallsDetailsVisible = event.target.checked;
    }
    handleEventsChange(event) {
        this.areEventsDetailsVisible = event.target.checked;
    }
    handleNotesChange(event) {
        this.areNotesDetailsVisible = event.target.checked;
    }
}