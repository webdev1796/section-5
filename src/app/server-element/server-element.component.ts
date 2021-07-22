import { 
    Component,
    Input, 
    OnInit, 
    ViewEncapsulation, 
    OnChanges, 
    SimpleChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    ViewChild, 
    ElementRef,
    ContentChild
   } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string;
  @ViewChild('heading', {static:true}) header: ElementRef
  @ContentChild('contentParagraph', {static:true} ) paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
   }
  
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes);
  } 

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content:' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.log('ngafterViewInit called');
    console.log('Text content:' + this.header.nativeElement.textContent);
  }

}
