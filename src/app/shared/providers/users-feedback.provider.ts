import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { PopoverPositions } from '../enums/popoverPositions.enum';
import { ExtractErrorMessage } from '../utils/our-error';

export interface IUsersFeedback {
  text?: string;
  title: string;
  html?: string;
  showConfirmButton?: boolean;
  timerProgressBar?: boolean;
  color?: string;
  background?: string;
  width?: number,
  padding?: string,
  position:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'center'
    | 'center-start'
    | 'center-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end';
  timer: number;
  icon: 'success' | 'warning' | 'error' | 'info' | 'question';
  toast: boolean;
}
export const BASIC_ICONS = {
  Success: 'success',
  Error: 'error',
  Info: 'info',
  Warning: 'warning',
};
@Injectable({
  providedIn: 'root',
})
export class UserFeedbackProvider {
  toastColors = {};

  constructor() {}

  dark = this.generateToast('#18181b', '#fafafa');
  primary = this.generateToast('#1d4ed8', '#eff6ff');
  secondary = this.generateToast('#0369a1', '#f0f9ff');
  success = this.generateToast('#f8fafc', '#15803d', BASIC_ICONS.Success);
  info = this.generateToast('#f8fafc', '#1d4ed8', BASIC_ICONS.Info);
  warning = this.generateToast('#f8fafc', '#f59e0b', BASIC_ICONS.Warning);
  danger = this.generateToast('#b91c1c', '#fef2f2', BASIC_ICONS.Error);
  light = this.generateToast('#f8fafc', '#18181b');

  show(feedback: IUsersFeedback) {
    if(feedback.toast) {
      const toast = Swal.mixin({
        ...feedback
      });
      toast.fire();
    }
    else {
      Swal.fire({
        ...feedback
      });
    }
  }

  private generateToast(bgColor: string, textColor: string, icon?:any) {
    return (
      text: string = '',
      title: string = '',
      timer: number,
      position:
        | 'top'
        | 'top-start'
        | 'top-end'
        | 'center'
        | 'center-start'
        | 'center-end'
        | 'bottom'
        | 'bottom-start'
        | 'bottom-end'
    ) => {
      const backgroundColor = `bg-${bgColor} text-${textColor}`;
      this.show({
        timer,
        position,
        text,
        color: textColor,
        background: bgColor,
        title,
        icon : icon || "",
        toast: true,
        showConfirmButton: false,
      });
    };
  }

  error(excection: Error | any, title = `Ocorreu um Erro`) {
    const error = ExtractErrorMessage(excection);
    this.danger(error, title, 3000, 'top-end');
  }

  infor(message: string, title = `Informação`) {
    this.info(message, title, 3000, 'top-end');
  }
}
