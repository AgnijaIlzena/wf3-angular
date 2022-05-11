import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  item: Item[] = [];
  searchKey: string = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.searchItem('beer').subscribe(result => {
      this.item = result.Search;
      console.log(this.item);
  });
}

}
