import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import conMainObject from '@salesforce/schema/Contact';
import conFirstName from '@salesforce/schema/Contact.FirstName';
import conLastName from '@salesforce/schema/Contact.LastName';
import conPhone from '@salesforce/schema/Contact.Phone';
import conEmail from '@salesforce/schema/Contact.Email';
import conDepartment from '@salesforce/schema/Contact.Department';
import conDescription from '@salesforce/schema/Contact.Description';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class WEB extends LightningElement {
    
}