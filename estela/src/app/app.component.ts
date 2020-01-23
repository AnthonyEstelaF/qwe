import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article=new Array<String>();
  spamma(inutile: HTMLInputElement, spam:HTMLInputElement):boolean
  {
    console.log(inutile.value);
    let cont=Number(spam.value);
    for(let index=0; index<cont; index++)
    {
      this.article.push(index + 1 + " " + inutile.value);
    }
    console.log(this.article);
    return false;
  }
}
