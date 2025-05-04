import { Component } from '@angular/core';
import { MatButton, MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { YouTubePlayer } from '@angular/youtube-player';

 
@Component({
  selector: 'app-banner',
  imports: [YouTubePlayer,MatFabButton,MatIcon],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
