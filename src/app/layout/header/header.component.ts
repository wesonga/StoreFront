import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLinkActive, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
