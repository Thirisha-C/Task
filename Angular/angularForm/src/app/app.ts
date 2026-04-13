import { Component, signal } from '@angular/core';
// import { Login } from './Forms/login/login';
// import { RegisterForm } from './Forms/register-form/register-form';
// import { Registration } from './Forms/registration/registration';
// import { StudentForm } from './Forms/student-form/student-form';
// import { CourseForm } from './Forms/course-form/course-form';
// import { AuthForm } from './Forms/auth-form/auth-form';
// import { ObservableDemo } from './RxJs/observable-demo/observable-demo';
// import { SubDemo } from './RxJs/sub-demo/sub-demo';
// import { Sender } from './RxJs/component/sender/sender';
// import { Reciever } from './RxJs/component/reciever/reciever';
// import { Reciever1 } from './RxJs/component/reciever1/reciever1';
// import { ProductPage } from './RxJs/Subject/product-page/product-page';
// import { CartPage } from './RxJs/Subject/cart-page/cart-page';
// import { BehaviorSub } from './RxJs/Subject/behavior-sub/behavior-sub';
// import { ReplaySub } from './RxJs/Subject/replay-sub/replay-sub';
// import { AsyncSub } from './RxJs/Subject/async-sub/async-sub';
// import { OpeDemo } from './Operators/ope-demo/ope-demo';
// import { SwitchOpe } from './Operators/switch-ope/switch-ope';
// import { User } from './Operators/user/user';
// import { FilterDemo } from './Operators/filter-demo/filter-demo';
// import { DebounceDemo } from './Operators/debounce-demo/debounce-demo';
// import { CombineDemo } from './Operators/combine-demo/combine-demo';
// import { CombineProduct } from './Operators/combine-product/combine-product';
// import { ForkDemo } from './Operators/fork-demo/fork-demo';
// import { UtilityDemo } from './Operators/utility-demo/utility-demo';
import { ShareDemo } from './Operators/share-demo/share-demo';
import { ShareReplayDemo } from './Operators/share-replay-demo/share-replay-demo';
import { UnsubscribeDemo } from './Operators/unsubscribe-demo/unsubscribe-demo';
import { SearchForm } from './Forms/search-form/search-form';
import { ValidationDemo } from './Forms/validation-demo/validation-demo';

@Component({
  selector: 'app-root',
  imports: [ ShareDemo, ShareReplayDemo, UnsubscribeDemo, SearchForm,ValidationDemo
    //  UtilityDemo, 
    // CombineDemo, CombineProduct, ForkDemo, 
    // User, DebounceDemo, FilterDemo, SwitchOpe, OpeDemo, 
    // AsyncSub, BehaviorSub, ReplaySub, 
    // ProductPage, CartPage, 
    // Sender, Reciever, Reciever1, SubDemo,ObservableDemo,
    // AuthForm, Login, RegisterForm, Registration,StudentForm, CourseForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularForm');
}
