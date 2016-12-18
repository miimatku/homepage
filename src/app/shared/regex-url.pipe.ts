import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regexUrl'
})
export class RegexUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = value.match(regExp);
            if (match && match[2].length == 11) {
                return match[2];
            } else {
            // error 
            }
  }

}
