import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
declare var APlayer:any;
@Component({
  selector: 'app-favplaylist',
  templateUrl: './favplaylist.component.html',
  styleUrls: ['./favplaylist.component.css']
})
export class FavplaylistComponent implements OnInit {

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
        name: 'Humko Tum Mil Gaye',
        artist: 'Naresh Sharma ',
        url: '../../assets/audio/Humko-Tum-Mil-Gaye_320mrstatus.mp3',
        cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1599957555/srch_universalmusic_00602435212722-INUM72000058.jpg',
    },
    {
      name: 'Tum Se Hi',
      artist: 'Ankit Tiwari',
      url: '../../assets/audio/Tum Se Hi-185f356382d3f0f.mp3',
      cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0009690593N.jpg',
  },
  {
    name: 'Zindagi',
    artist: 'AKay- 2020',
    url: '../../assets/audio/Zindagi A Kay.mp3',
    cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/update/3616409082805/1600942507/srch_believe_A10320WT0359571735.jpg',
  },
  {
    name: 'Lovely',
    artist: 'Billie Eilish',
    url: '../../assets/audio/Billie_Eilish_feat_Khalid_Lovely.mp3',
    cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1523995321/srch_universalmusic_00602567150947-USUM71804190.jpg',
  },


    ]
  });
  }

}
