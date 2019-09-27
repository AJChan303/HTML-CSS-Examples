import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superhero-list';
  name='See Yourself among The Seven';
  description='Tell us why you belong!';
}

// addHero(){
//   let h1=document.createElement('h2');

//   let h1text = document.getElementById('name');
//   h1.textContent(h1text.value);
//   let p = document.createElement('p');
//   let ptext = document.getElementById('description');
//   p.appendChild(ptext.value);
//   document.getElementById('hlist').appendChild(h1);
//   document.getElementById('hlist').appendChild(p);
  
// }