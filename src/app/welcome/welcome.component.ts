import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild("name") namekay! : ElementRef;
  constructor() { }

  ngOnInit(): void {

  }

  startquiz(){
    localStorage.setItem("name",this.namekay.nativeElement.value);
  }

}
