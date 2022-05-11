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

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.searchItem('black swan').subscribe(result => {
      this.item = result.Search;
      console.log(this.item);
    });
  }

}
