import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Customer } from '../customer';

@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit{
  
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Address'];
  dataSource = new MatTableDataSource<Customer>();

  customer:Customer = {
    id:0,
    name:'',
    email:'',
    address:''
  }

  ngAfterViewInit(): void {
    this.dataSource =new MatTableDataSource<Customer>();
  }
}
