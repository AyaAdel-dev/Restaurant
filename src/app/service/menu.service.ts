import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../_module/menuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly allItems = 'https://localhost:7129/api/Items';
  private readonly itemByCat ='https://localhost:7129/api/Items';
  constructor(private http: HttpClient) { }
  // userId: string userId: string
  getMenuItems(): Observable<MenuItem[]> {
    const url = `${this.allItems}`;
    return this.http.get<MenuItem[]>(url);
  }

  getMenuItemsByCategory(category: string): Observable<MenuItem[]> {
    const url = `${this.itemByCat}/category/${category}`;
    return this.http.get<MenuItem[]>(url);
  }
}
