import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  item: Item[] = [];
  searchKey: string = '';

  onUpdateSearchKey(event: Event) {
    this.searchKey = (<HTMLInputElement>event.target).value;
  }

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.searchItem(this.searchKey).subscribe(result => {
      this.item = result.Search;
      console.log(this.item);
    });
  }

}
