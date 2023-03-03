import { Component,OnInit } from '@angular/core';
import { LibriService } from '../../services/libri.service';
import { Libri } from '../../models/libri.model';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class page404 implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}