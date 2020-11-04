import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
declare var APlayer:any;
@Component({
  selector: 'app-sad',
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.css']
})
export class SadComponent implements OnInit {

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
          name: 'Bolna',
          artist: 'Arijit Singh',
          url: '../../assets/audio/Bolna.mp3',
          cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/srch_sonymusic_INS171600165_1.jpg'
      },
      {
          name: 'Filhall',  // SONG NAME
          artist: 'B Praak', //ARTIST NAME
          url: '../../assets/audio/Filhall.mp3', // PATH NAME AND SONG URL
          cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1573195770/srch_pplchandigarh_INSD11901003.jpg' // COVER IMAGE
      },
      {
        name: 'Lovely',
        artist: 'Billie Eilish',
        url: '../../assets/audio/Billie_Eilish_feat_Khalid_Lovely.mp3',
        cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1523995321/srch_universalmusic_00602567150947-USUM71804190.jpg',
      },
      {
        name: 'Afsos Karoge',
        artist: 'Stebin Ben',
        url: '../../assets/audio/mrstatus.in-Afsos-Karoge-Stebin-Ben-mp3-song-download-pagalworld-320kbps.mp3',
        cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616408529905/1598963726/srch_believe_A10320WT0356290271.jpg',
    },
    


  ]
});
  }

}
