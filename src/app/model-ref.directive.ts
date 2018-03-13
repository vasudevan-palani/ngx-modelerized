import { Directive, ElementRef, Input } from '@angular/core';
import { ModelService } from './model.service';

@Directive({
  selector: '[model-ref]'
})
export class ModelRefDirective {

  @Input('scope-ref') scope : any;
  @Input('model-ref') modelValue : string;

  constructor(el: ElementRef, private modelService : ModelService) {
    setTimeout(()=>{
      console.log(this);

      this.scope["submit"+this.modelValue]=()=>{
        this.modelService.submitModel(this.modelValue,this.scope[this.modelValue]).then(()=>{

        });
      }

      this.scope["delete"+this.modelValue]=()=>{
        this.modelService.deleteModel(this.modelValue).then(()=>{

        });
      }

      this.modelService.getModel(this.modelValue).then((modelResponse)=>{
        this.scope[this.modelValue] = modelResponse;
      }).catch((error)=>{
        console.log(error);
      });

      console.log(this.scope);
    },10);
  }

}
