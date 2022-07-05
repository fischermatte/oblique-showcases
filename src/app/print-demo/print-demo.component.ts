import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-print-demo",
  templateUrl: "./print-demo.component.html",
  styleUrls: ["./print-demo.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class PrintDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  print() {
    window.print();
  }
}
