# InjectionDecoratorsHost



UserService 
|
AdminService
+ admin methods


{ provide: AdminService, useClass: AdminService}
{ provide: UserService, useExisting: AdminService}


construstor(private userService: UserService) {
    // userService.admin
}




{ provide: AdminService, useExisting: AdminService, multi: true  }
[adminService, adminService]



{ provide: VALIDATORS, useExisting: MyVALIDATOR,  multi: true   }







@Injectotable()
class Service {
    constructor(private userService: UserService) {
        
    }
}






FormControl

FormControl

[FormControl] @Optional @Self formControl

@Optional @Self currentControl: FormControl
@Optional @SkipSelf parentControl: FormControl

FormControl








@Injectotable({
    provideIn: ''
})