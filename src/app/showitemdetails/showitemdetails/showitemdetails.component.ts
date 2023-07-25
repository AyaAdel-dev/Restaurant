import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDto } from 'src/app/_module/itemDto';
import { OrderService } from 'src/app/service/order.service';
@Component({
  selector: 'app-showitemdetails',
  templateUrl: './showitemdetails.component.html',
  styleUrls: ['./showitemdetails.component.css']
})
export class ShowitemdetailsComponent {
  item: ItemDto | undefined;

  constructor(private route: ActivatedRoute,private orderService:OrderService) { }
  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.orderService.getItemDetails(Number(itemId)).subscribe(
        item => {
          this.item = item;
          console.log(item)
        },
        error => {
          console.log('Error fetching item details:', error);
        }
      );
    }
  }
}
