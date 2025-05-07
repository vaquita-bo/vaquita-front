import { Component, inject } from '@angular/core';
import { MatButton, MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';

 
@Component({
  selector: 'app-banner',
  imports: [YouTubePlayer,MatFabButton],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
}
