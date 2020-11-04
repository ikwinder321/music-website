import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
declare var APlayer:any;
@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {

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
            name: 'Ishq Tera',
            artist: 'Guru Randhawa',
            url: '../../assets/audio/Ishq-Tera.mp3',
            cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1568119704/49169689.jpg',
        },
        {
            name: 'Sakhiyaan',
            artist: 'Maninder Buttar',
            url: '../../assets/audio/Sakhiyaan.mp3',
            cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1539940970/srch_venus_FR-96X-18-65569.jpg',
        },
        
      {
        name: 'Humko Tum Mil Gaye',
        artist: 'Naresh Sharma ',
        url: '../../assets/audio/Humko-Tum-Mil-Gaye_320mrstatus.mp3',
        cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1599957555/srch_universalmusic_00602435212722-INUM72000058.jpg',
    },
    {
      name: 'Afsos Karoge',
      artist: 'Stebin Ben',
      url: '../../assets/audio/mrstatus.in-Afsos-Karoge-Stebin-Ben-mp3-song-download-pagalworld-320kbps.mp3',
      cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616408529905/1598963726/srch_believe_A10320WT0356290271.jpg',
  },

    {
      name: 'Tum Se Hi',
      artist: 'Ankit Tiwari',
      url: '../../assets/audio/Tum Se Hi-185f356382d3f0f.mp3',
      cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0009690593N.jpg',
  },
  {
    name: 'Shayad',
    artist: 'Pritam',
    url: '../../assets/audio/Shayad-Song-Ringtone-Love-Aaj-Kal-Movie-2020.mp3',
    cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0009298868Y.jpg',
},
{
  name: 'Tera Yaar Hoon Main',
  artist: 'Arijit Singh',
  url: '../../assets/audio/Tera Yaar Hoon Main (Sonu Ke Titu Ki Sweety) Ringtone.mp3',
  cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1527782662/36547752.jpg',
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
{
  name: 'Shape Of You',
  artist: 'Ed Sheeran',
  url: '../../assets/audio/Shape Of You Ed Sheeran.mp3',
  cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1527782662/36547752.jpg',
},
{
  name: 'Baby',  // SONG NAME
  artist: 'Justin Beiber', //ARTIST NAME
  url: '../../../../assets/audio/Justin_Bieber_-_Baby-(Crazzysongs.Com).mp3', // PATH NAME AND SONG URL
  cover: 'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1591429900/srch_hungama_2287031.jpg' // COVER IMAGE
},


    ]
  });
  }

}
