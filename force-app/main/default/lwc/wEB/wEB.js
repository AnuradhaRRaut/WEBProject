import { api, LightningElement } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_OWNER from '@salesforce/schema/Account.OwnerId';

export default class WEB extends LightningElement {
    @api recordId;
    greeting = 'World';
    changeHandler(event) {
      this.greeting = event.target.value;
    }
      selectedFields = [ACCOUNT_NAME, ACCOUNT_TYPE, ACCOUNT_OWNER];
      handleSubmit(event){
        //you can change values from here
        //const fields = event.detail.fields;
        //fields.Name = 'My Custom  Name'; // modify a field
        console.log('Account detail : ',event.detail.fields);
        console.log('Account name : ',event.detail.fields.Name);
           }
    }
