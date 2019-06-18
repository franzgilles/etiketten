import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.scss'],
})
export class BottleComponent implements OnInit {
  selectedFile: SafeResourceUrl;

  constructor(private dom: DomSanitizer) { }

  ngOnInit() { }

  processFile(imageInput) {
    console.log('test', imageInput);
    const file: File = imageInput.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = this.dom.bypassSecurityTrustResourceUrl(event.target.result)
    });

    reader.readAsDataURL(file);
  }

}
