import { Component, signal } from '@angular/core';
import { Login } from './Forms/login/login';
import { RegisterForm } from './Forms/register-form/register-form';
import { Registration } from './Forms/registration/registration';
import { StudentForm } from './Forms/student-form/student-form';
import { CourseForm } from './Forms/course-form/course-form';
import { AuthForm } from './Forms/auth-form/auth-form';
import { ObservableDemo } from './RxJs/observable-demo/observable-demo';
import { SubDemo } from './RxJs/sub-demo/sub-demo';
import { Sender } from './RxJs/component/sender/sender';
import { Reciever } from './RxJs/component/reciever/reciever';
import { Reciever1 } from './RxJs/component/reciever1/reciever1';
import { ProductPage } from './RxJs/Subject/product-page/product-page';
import { CartPage } from './RxJs/Subject/cart-page/cart-page';
import { BehaviorSub } from './RxJs/Subject/behavior-sub/behavior-sub';
import { ReplaySub } from './RxJs/Subject/replay-sub/replay-sub';
import { AsyncSub } from './RxJs/Subject/async-sub/async-sub';

@Component({
  selector: 'app-root',
  imports: [AsyncSub, BehaviorSub, ReplaySub, 
    ProductPage, CartPage, 
    Sender, Reciever, Reciever1, SubDemo,ObservableDemo,
    AuthForm, Login, RegisterForm, Registration,StudentForm, CourseForm,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularForm');
}
