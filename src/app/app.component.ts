import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  foodForm: FormGroup;
  tags = ["vegan", "vegetarian", "meat", "fruit", "vegetable", "seafood", "fish","nut"];

  get tagsForForm() {
    return this.foodForm.controls['tags']['controls'];
  }

  constructor(private fb: FormBuilder) {}

  createTagsForForm(): {[key: string]: any} {
    let tagsForForm = {};
    for (let i = 0; i < this.tags.length; i++){
      tagsForForm[this.tags[i]] = false;
    }
    return tagsForForm;
  }
  
  ngOnInit() {
    this.foodForm = this.fb.group({
      foodName: [''],
      tags: this.fb.group(this.createTagsForForm())
    });
  }
}
