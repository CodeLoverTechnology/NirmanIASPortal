import { Component, OnInit, Inject } from '@angular/core';
import { InstanceConfigHolderService } from 'ng-busy';

@Component({
  selector: 'app-custom-busy-component',
  templateUrl: './custom-busy-component.component.html',
  styleUrls: ['./custom-busy-component.component.css']
})
export class CustomBusyComponentComponent implements OnInit {

  constructor(@Inject('instanceConfigHolder') private instanceConfigHolder: InstanceConfigHolderService) { }

  ngOnInit() {
  }

  get message() {
    return this.instanceConfigHolder.config.message;
  }

}
