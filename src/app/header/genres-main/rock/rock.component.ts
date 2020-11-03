import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css']
})
export class RockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".album-poster").on('click', function(e){
      var dataSwitchId = $(this).attr('data-switch');
      //console.log(dataSwitchId);

      // and now i use aplayer switch function see
      ap.list.switch(dataSwitchId); //this is static id but i use dynamic

      // aplayer play function
      // when i click any song to play
      ap.play();

      // click to slideUp player see
      $("#aplayer").addClass('showPlayer');
  });

  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
      {
        name: 'Shape Of You',
        artist: 'Ed Sheeran',
        url: '../../../../assets/audio/Shape Of You Ed Sheeran.mp3',
        cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1527782662/36547752.jpg',
      },
        {
            name: 'Baby',  // SONG NAME
            artist: 'Justin Beiber', //ARTIST NAME
            url: '../../../../assets/audio/Justin_Bieber_-_Baby-(Crazzysongs.Com).mp3', // PATH NAME AND SONG URL
            cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1591429900/srch_hungama_2287031.jpg' // COVER IMAGE
        },
        {
            name: 'Vail',
            artist: 'Mankirat Aulakh',
            url: '../../../../assets/audio/Vail Ft. Nimrat Khaira - (amlijatt.in).mp3',
            cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1591429900/srch_hungama_2287031.jpg',
        },
        {
            name: 'Sakhiyaan',
            artist: 'Maninder Buttar',
            url: '../../../../assets/audio/Sakhiyaan.mp3',
            cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1539940970/srch_venus_FR-96X-18-65569.jpg',
        },
        {
          name: 'Chocolate',
          artist: 'Tony Kakkar',
          url: '../../../../assets/audio/Chocolate ft Riyaz Aly Tony Kakkar.mp3',
          cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/update/3616408622934/1599493807/srch_believe_A10320WT035677122N.jpg',
      },

    ]
  });
  }

}
