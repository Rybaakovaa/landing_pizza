import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {Observable} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

// declare var bootstrap: any;
// import * as bootstrap from "bootstrap";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  private observable: Observable<string>;
  private promise: Promise<string>;

  constructor(public cartSevice: CartService,
              private modalService: NgbModal) {
    this.promise = new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('hello!');
      }, 2000);
    });

    this.observable = new Observable((observable) => {
      setTimeout(() => {
        observable.next('hello!');
      }, 2000);
    });
  }

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  ngOnInit() {
    // var myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    // myModal.show();

    // this.modalService.open(NgbdModal2Content, {});

    this.observable.subscribe((param: string) => {
      console.log(param);
    })
  }

  ngAfterViewInit() {
    // this.modalService.open(this.popup, {});

    var modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.data = " My component!";
  }



  // test(popup: TemplateRef<ElementRef>) {
  //   this.modalService.open(popup, {});
  // }
}
