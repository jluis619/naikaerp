import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;

  genders: Array<string>;

  RADIO_LIST = [
    { name: 'Cash Payment', value: '100CP', checked: false },
    { name: 'Telegraphic Transfer', value: '101TR', checked: false },
    { name: 'Money Order or Postal Order', value: '102MO', checked: false },
    { name: 'Bill of Exchange', value: '103BE', checked: true },
    { name: 'Promissory Note', value: '104PN', checked: false },
    { name: 'Cheque', value: '105CQ', checked: false },
    { name: 'Bank Draft', value: '106BD', checked: false }
  ];

  CHECK_LIST = [
    { name: 'Photography', value: 'Photography', checked: true },
    { name: 'Blogging', value: 'Blogging' },
    { name: 'Cooking', value: 'Cooking' },
    { name: 'Singing', value: 'Singing' },
    { name: 'Dancing', value: 'Dancing' },
    { name: 'Pottery', value: 'Pottery' },
    { name: 'Knitting', value: 'Knitting' }
  ];

  constructor(private modalCtrl: ModalController, public formBuilder: FormBuilder) { }

  ngOnInit() {

    // Setting default selection in FormControl
    let getCheckedRadio = null
    this.RADIO_LIST.forEach(o => {
      if (o.checked)
        getCheckedRadio = o.value;
    })

    this.genders = [
      "Male",
      "Female",
      "Binary"
    ];

    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      'paymentOptions': new FormControl(getCheckedRadio, [Validators.required]),
      gender: new FormControl(this.genders[2], Validators.required),
      checkboxArrayList: this.formBuilder.array([], [Validators.required])
    })
    this.onLoadCheckboxStatus();
  }

  updateCheckControl(cal, o) {
    if (o.checked) {
      cal.push(new FormControl(o.value));
    } else {
      cal.controls.forEach((item: FormControl, index) => {
        if (item.value == o.value) {
          cal.removeAt(index);
          return;
        }
      });
    }
  }

  onLoadCheckboxStatus() {
    const checkboxArrayList: FormArray = this.ionicForm.get('checkboxArrayList') as FormArray;
    this.CHECK_LIST.forEach(o => {
      this.updateCheckControl(checkboxArrayList, o);
    })
  }

  onSelectionChange(e, i) {
    const checkboxArrayList: FormArray = this.ionicForm.get('checkboxArrayList') as FormArray;
    this.CHECK_LIST[i].checked = e.target.checked;
    this.updateCheckControl(checkboxArrayList, e.target);

  }



  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.close();
      console.log(this.ionicForm.value)
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

}

