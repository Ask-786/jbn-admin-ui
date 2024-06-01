import{b as S,c as s,d as F,e as C,h as D,k as G,l as N,q as L,r as A,s as q}from"./chunk-IYKCZ4CG.js";import{Aa as T,D as d,E as u,M as p,Ra as k,S as a,Sa as v,T as o,Ta as M,U as c,Xa as w,Y as y,Ya as E,ea as n,j as f,la as g,o as b,p as h,wa as x}from"./chunk-Y6Y4TYXT.js";var I=i=>({"is-invalid-form":i}),B=(()=>{let e=class e{constructor(m,t,r,l){this.authService=m,this.router=t,this.toastr=r,this.formBuilder=l}ngOnInit(){this.authService.isLoggedIn()?this.router.navigate(["/"]).then(()=>{this.toastr.info("Already Logged in","INFO")}):this.FormGroupData=this.formBuilder.group({username:["",[s.required,s.minLength(4)]],mail:["",[s.required,s.email]],mobile:["",[s.required,s.maxLength(10),s.minLength(10)]],password:["",[s.required,s.minLength(6)]]})}onRegister(){if(this.FormGroupData.invalid){this.FormGroupData.markAsTouched(),this.toastr.error("Fill Registration Properly!!");return}let{username:m,mail:t,mobile:r,password:l}=this.FormGroupData.controls,Y={username:m.value,mail:t.value,mobile:r.value,password:l.value};this.authService.register(Y).subscribe({next:R=>{this.router.navigate(["/auth/login"]).then(()=>{this.toastr.success("Successfully Registered","Success")})},error:R=>{this.toastr.error(R.error.message,"Error")}})}};e.\u0275fac=function(t){return new(t||e)(u(w),u(k),u(E),u(L))},e.\u0275cmp=b({type:e,selectors:[["app-register"]],decls:29,vars:13,consts:[[1,"bg-gray-50","dark:bg-gray-900"],[1,"flex","flex-col","items-center","justify-center","px-6","py-8","mx-auto","md:h-screen","lg:py-0"],[1,"w-full","bg-white","rounded-lg","shadow","dark:border","md:mt-0","sm:max-w-md","xl:p-0","dark:bg-gray-800","dark:border-gray-700"],[1,"p-6","space-y-4","md:space-y-6","sm:p-8"],[1,"text-xl","font-bold","leading-tight","tracking-tight","text-gray-900","md:text-2xl","dark:text-white"],[1,"space-y-4","md:space-y-6",3,"ngSubmit","formGroup"],["for","username",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","formControlName","username","ngModel","","id","username","placeholder","Jake Paul",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngClass"],["for","mail",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","email","formControlName","mail","ngModel","","id","mail","placeholder","name@company.com",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngClass"],["for","mobile",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","tel","formControlName","mobile","ngModel","","id","mobile","placeholder","123123123",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngClass"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","password","formControlName","password","ngModel","","id","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngClass"],["type","submit",1,"text-white","w-full","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2","dark:bg-blue-600","dark:hover:bg-blue-700","focus:outline-none","dark:focus:ring-blue-800"],[1,"text-sm","font-light","text-gray-500","dark:text-gray-400"],["routerLink","/auth/login",1,"font-medium","text-primary-600","hover:underline","dark:text-primary-500"]],template:function(t,r){t&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),n(5," Create account "),o(),a(6,"form",5),y("ngSubmit",function(){return r.onRegister()}),a(7,"div")(8,"label",6),n(9,"Your name"),o(),c(10,"input",7),o(),a(11,"div")(12,"label",8),n(13,"Your username"),o(),c(14,"input",9),o(),a(15,"div")(16,"label",10),n(17,"Mobile"),o(),c(18,"input",11),o(),a(19,"div")(20,"label",12),n(21,"Password"),o(),c(22,"input",13),o(),a(23,"button",14),n(24,"Create an account"),o(),a(25,"p",15),n(26," Already have an account? "),a(27,"a",16),n(28,"Login here"),o()()()()()()()),t&2&&(d(6),p("formGroup",r.FormGroupData),d(4),p("ngClass",g(5,I,r.FormGroupData.controls.username.invalid&&r.FormGroupData.controls.username.touched)),d(4),p("ngClass",g(7,I,r.FormGroupData.controls.mail.invalid&&r.FormGroupData.controls.mail.touched)),d(4),p("ngClass",g(9,I,r.FormGroupData.controls.mobile.invalid&&r.FormGroupData.controls.mobile.touched)),d(4),p("ngClass",g(11,I,r.FormGroupData.controls.password.invalid&&r.FormGroupData.controls.password.touched)))},dependencies:[x,v,D,S,F,C,G,N]});let i=e;return i})();var V=i=>({"is-invalid-form":i}),O=(()=>{let e=class e{constructor(m,t,r,l){this.authService=m,this.router=t,this.toastr=r,this.formBuilder=l,this.isLoggedIn=!1}ngOnInit(){this.authService.isLoggedIn()?(this.isLoggedIn=!0,this.router.navigate(["/"]).then(()=>{this.toastr.info("Already Logged in","INFO")})):this.FormGroupData=this.formBuilder.group({mail:["",[s.required,s.email]],password:["",[s.required,s.minLength(6)]]})}onLogin(){if(this.FormGroupData.invalid){this.FormGroupData.markAllAsTouched(),this.toastr.error("Fill creds properly!!");return}let{mail:m,password:t}=this.FormGroupData.controls,r={mail:m.value,password:t.value};this.authService.login(r).subscribe({next:l=>{this.authService.saveUser(l),this.isLoggedIn=!0,this.authService.decodeToken(),this.router.navigate(["/"]).then(()=>{this.toastr.success("Logged In Successfully","Success")})},error:l=>{this.toastr.error(l.error.message,"Error")}})}};e.\u0275fac=function(t){return new(t||e)(u(w),u(k),u(E),u(L))},e.\u0275cmp=b({type:e,selectors:[["app-login"]],decls:24,vars:7,consts:[[1,"bg-gray-50","dark:bg-gray-900"],[1,"flex","flex-col","items-center","justify-center","px-6","py-8","mx-auto","md:h-screen","lg:py-0"],[1,"w-full","bg-white","rounded-lg","shadow","dark:border","md:mt-0","sm:max-w-md","xl:p-0","dark:bg-gray-800","dark:border-gray-700"],[1,"p-6","space-y-4","md:space-y-6","sm:p-8"],[1,"text-xl","font-bold","leading-tight","tracking-tight","text-gray-900","md:text-2xl","dark:text-white"],[1,"space-y-4","md:space-y-6",3,"ngSubmit","formGroup"],["for","email",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","email","formControlName","mail","id","email","ngModel","","placeholder","name@company.com",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngClass"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","password","formControlName","password","id","password","ngModel","","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngClass"],[1,"flex","items-center","justify-between"],["href","#",1,"text-sm","font-medium","text-primary-600","hover:underline","dark:text-primary-500"],["type","submit",1,"text-white","w-full","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2","dark:bg-blue-600","dark:hover:bg-blue-700","focus:outline-none","dark:focus:ring-blue-800"],[1,"text-sm","font-light","text-gray-500","dark:text-gray-400"],["routerLink","/auth/register",1,"font-medium","text-primary-600","hover:underline","dark:text-primary-500"]],template:function(t,r){t&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),n(5," Sign in to your account "),o(),a(6,"form",5),y("ngSubmit",function(){return r.onLogin()}),a(7,"div")(8,"label",6),n(9,"Your email"),o(),c(10,"input",7),o(),a(11,"div")(12,"label",8),n(13,"Password"),o(),c(14,"input",9),o(),a(15,"div",10)(16,"a",11),n(17,"Forgot password?"),o()(),a(18,"button",12),n(19,"Sign in"),o(),a(20,"p",13),n(21," Don\u2019t have an account yet? "),a(22,"a",14),n(23,"Sign up"),o()()()()()()()),t&2&&(d(6),p("formGroup",r.FormGroupData),d(4),p("ngClass",g(3,V,r.FormGroupData.controls.mail.invalid&&r.FormGroupData.controls.mail.touched)),d(4),p("ngClass",g(5,V,r.FormGroupData.controls.password.invalid&&r.FormGroupData.controls.password.touched)))},dependencies:[x,v,D,S,F,C,G,N]});let i=e;return i})();var Q=[{path:"",children:[{path:"login",component:O},{path:"register",component:B}]}],P=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[M.forChild(Q),M]});let i=e;return i})();var de=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[T,P,q,A]});let i=e;return i})();export{de as AuthModule};
