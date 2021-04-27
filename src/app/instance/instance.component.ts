import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {
  username: string = '';

  ngOnInit(): void {
    this.username = 'prova';
  }

  prova(){

  }
}
