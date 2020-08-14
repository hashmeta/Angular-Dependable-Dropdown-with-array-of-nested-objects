import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [{value:'',disabled: true}, Validators.compose([Validators.required])],
    })
  }
  transcationsList:Array<any> = [
    { type:'Credit',transcation:[
        {transctionDesc:'Award',nature:'Extra Income'},
        {transctionDesc:'Gifts',nature:'Extra Income'},
        {transctionDesc:'Interest money',nature:'Extra Income'},
        {transctionDesc:'Asset sales',nature:'Investment'},
        {transctionDesc:'Rent revenue',nature:'Investment'},]},
    { type:'Debit',transcation:[
        {transctionDesc: "Fuel",nature: "Travel",},
        {transctionDesc: "Taxi",nature: "Travel",},
        {transctionDesc: "Withdrawal",nature: "Withdrawal",}]}
  ]
  value:" "
  transcations: Array<any>;
  changeCateg(count) {
    this.transcations = this.transcationsList.find(con => con.type == count).transcation;
    this.form.controls.name.setValue(null)
  }
  setdata(data){
    this.value=this.transcations.find(content => content.transctionDesc == data).nature
    this.form.controls.name.setValue(this.value)
  }
}
