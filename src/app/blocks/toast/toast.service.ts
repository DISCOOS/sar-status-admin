import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
 	activate: (message?: string, success?: boolean, autoHide?: boolean) => void;
}
