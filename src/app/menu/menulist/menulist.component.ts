import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from 'src/app/_module/menuItem';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {

  sub: Subscription | null = null;
  menuItems: MenuItem[] = [];

  constructor(
    private menuService: MenuService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.router.queryParams.subscribe((_data) => {
      this.menuService.getMenuItems().subscribe((data) => {
        this.menuItems = data;
        console.log(data);
      });
    });
  }
onAll(){
  this.sub = this.router.queryParams.subscribe((_data) => {
    this.menuService.getMenuItems().subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.menuItems = data;
        } else {
          this.menuItems = [];
        }
        console.log(data);
      },
      (error) => {
        console.error(error);
        this.menuItems = [];
      }
    );
  });
}
  onStarters(){
    this.menuService.getMenuItemsByCategory('Starters').subscribe(
      (items) => {
        if (items && items.length > 0) {
          this.menuItems = items;
        } else {
          this.menuItems = [];
        }
        console.log(items);
      },
      (error) => {
        console.error(error);
        this.menuItems = [];
      }
    );
  }
  
  
  onSalads(){
    this.menuService.getMenuItemsByCategory('Salads').subscribe(
        (items) => {
          if (items && items.length > 0) {
            this.menuItems = items;
          } else {
            this.menuItems = [];
          }
          console.log(items);
        },
        (error) => {
          console.error(error);
          this.menuItems = [];
        }
      );
    }
  
  onSpecialty(){
    this.menuService.getMenuItemsByCategory('Specialty').subscribe(
        (items) => {
          if (items && items.length > 0) {
            this.menuItems = items;
          } else {
            this.menuItems = [];
          }
          console.log(items);
        },
        (error) => {
          alert(error);
          this.menuItems = [];
        }
      );
    }

    addOrder(menuItem: MenuItem) {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      const order = {
        id: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        image:menuItem.image,
        quantity: 1,
        subtotal:1,
      };
      const index = orders.findIndex((o: { id: number }) => o.id === order.id);
      if (index === -1) {
        orders.push(order);
        // orders[index].counter++;
      } else {
        orders[index].quantity++;
        orders[index].subtotal=orders[index].price*orders[index].quantity;
      }
      localStorage.setItem('orders', JSON.stringify(orders));
      alert("Item is added successfully");
    }
  }
