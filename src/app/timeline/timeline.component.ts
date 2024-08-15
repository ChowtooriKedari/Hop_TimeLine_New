import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

declare var $: any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  modal: any;
  @Output() dataReady: EventEmitter<any> = new EventEmitter();
  pageData = [{
    "header": "",
    "image": "",
    "text": "",
  }];
  pageTitle="";
  constructor() { }

  ngOnInit(): void {
    this.modal = document.getElementById("myModal");
    this.pageData = [
      {
        "header": "",
        "image": "",
        "text": ""
      },
    ];

    // Initialize Slick Slider
    $('.slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      centerMode: false,
      prevArrow: '<span class="prev_arrow"><i class="bi bi-arrow-bar-left"></i></span>',
      nextArrow: '<span class="next_arrow"><i class="bi bi-arrow-bar-right"></i></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

          }
        }
      ]
    });
  }

  myFunction(data: string): void {
    console.log("Read");
    var flipbook = document.getElementById("flipbook");
    if (data === '1') {
  this.pageTitle="Latino Art on Campus";
  this.pageData = [
        {
          "header": "1931, Carlos Sanchez becomes the first artist in residence",
          "image": "./assets/ErnstHopkinsendorsingSanchez.jpg",
          "text": "Carlos Sanchez graduated from Dartmouth in 1923 and became the first artist in residence at Dartmouth in 1931. He came from Guatemala city and went on to study architecture at Yale University. He served as a draftsman for the Empire State Building and spent time in the Weimar Republic working in art-related opportunities. During his residency at Dartmouth, he helped found the Arts Department and then collaborated with Josè Clemente Orozco on his mural. Sanchez was fluent in both English and Spanish, hence served as an important aide to Orozco, helping him familiarize himself with Dartmouth and its history. "
        },
        {
          "header": "June 1932, The Saga of  Josè Clemente Orozco",
          "image": "./assets/JoseClementeOrozco_Part1.png",
          "text": "In June 1932, Orozco was sanctioned as the second artist-in-residence and was then tasked with the job of painting the walls in the Reserve Book Room in the Baker Library. The aim of the mural was to create a paradigm of mural paintings for students to study, however, Orozco’s work exceeded this goal and acquired higher relevance in its sociopolitical nature. Professors Artemas Packard and Churchill P. Lathrop played a crucial role in bringing Orozco to campus. Both of them went on to become key founding figures of the Hopkins Center for the Arts. Orozco enacted his mural in the context of a growing interest in the Arts for the College since only a couple years ago in 1929 Carpenter Hall was completed."        
        },
        {
          "header": "June 1932, The Saga of  Josè Clemente Orozco",
          "image": "./assets/JoseClementeOrozco_Part2.png",
          "text": "Orozco’s mural represents themes of colonialism and subjugation of the indigenous population of Latin America. Orozco presents both a symbolic representation of the 5000 year long history of pre-colonial Latin America and the rot caused by European imperialism. His mural is an incisive piece that irreducibly drives at the contest between evil and good. His work is titled “The Epic of American Civilization” to ironically signify the dark underbelly of European progress on the American continent. Orozco’s work continues to resonate with Dartmouth’s community and the Reserve Book Room has now been renamed as the Orozco Mural Room. "
        },
        {
          "header": "November 6, 1964, Mexican Oaxaca weaving arts exhibition",
          "image": "./assets/Mexican_Oaxaca_weaving_arts_exhibition.jpg",
          "text": "An exhibition of textiles from the Oaxaca region of Mexico was put on display at the Hopkins Center for the first time in the country’s history. The debut exhibition showed through the fall of 1964. The announcement of the exhibition remarked on the 6000 year history of the region’s weaving tradition and the diversity of “eight Indian tribes” whose textiles were represented. The exhibition consisted of the privately owned Cervantes Collection of Oaxaca Textiles from Mexico, and 38 additional items obtained by Gerald Williams - a potter and craftsman of Goffstown, NH, who traveled through villages in Oaxaca. "
        },
        {
          "header": "January 30, 1998, The Hop hosts Cuarteto Latinoamericano",
          "image": "./assets/CuartetoLatinoamericano_Part1.jpg",
          "text": "Grammy Award winning string quartet Cuarteto Latino Americano visited the Hopkins Center for a short residency that included a performance in the Spaulding Auditorium at the Hop. Cuarteto Latinoamericano aimed to decentralize the canon of classical music and shift its capital away from Europe. The quartet was described as a “first rate ensemble of passionate temperament” by the San Francisco Chronicle. It consisted of three brothers - violinists Saul and Aaron and cellist Alvaro Bitràn, and a violinist - Javier Montiel. "
        },
        {
          "header": "January 30, 1998, The Hop hosts Cuarteto Latinoamericano",
          "image": "./assets/CuartetoLatinoamericano_Part2.jpg",
          "text": ""
        },
        {
          "header": "January 30, 1998, The Hop hosts Cuarteto Latinoamericano",
          "image": "./assets/CuartetoLatinoamericano_Part3.jpg",
          "text": ""
        },
        {
          "header": "17 Aug, 1999, Poncho Sanchez’s Latin Jazz Band at the Hop",
          "image": "./assets/PonchoSanchezLatinJazzBand.jpg",
          "text": "Texas born Poncho Sanchez’ octet band had an illustrious career and came to the Hop with already 20 years in the business. They had released about 20 albums and came to be at the forefront of Latin jazz innovation. The band played music from Africa, motown classics and even infused Broadway tunes with a Latin twist. "
        },
        {
          "header": "Bibliography",
          "image": "",
          "text": "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; " +
      "word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +
          "1. Artemas Packard papers, MS-1353. Rauner Library Archives and Manuscripts. " +
    "<a style=\"color:blue\" href='https://archives-manuscripts.dartmouth.edu/repositories/2/resources/3125'>" +
    "https://archives-manuscripts.dartmouth.edu/repositories/2/resources/3125</a></p>" +
    
    "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; " +
    "word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +
    "2. Hopkins Center, Outreach Arts and Education records, DA-780. Rauner Library Archives and Manuscripts. " +
    "<a style=\"color:blue\" href='https://archives-manuscripts.dartmouth.edu/repositories/2/resources/100'>" +
    "https://archives-manuscripts.dartmouth.edu/repositories/2/resources/100</a></p>" +
    
    "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; " +
    "word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +
    "3. Latin Jazz Band to Play at Hopkins Center; Article by: Luallen, Ken; Page No: 7, 1999-08-17. " +
    "The Dartmouth, Index for 1999, TD-1999. The Dartmouth Index. " +
    "<a style=\"color:blue\" href='https://archives-manuscripts.dartmouth.edu/repositories/5/archival_objects/649761'>" +"https://archives-manuscripts.dartmouth.edu/repositories/5/archival_objects/649761</a></p>"      },     
      ];
    } else if (data === '2') {
      this.pageTitle="Earliest Dartmouth production";
      this.pageData = [
        {
          "header": "",
          "image": "",
          "text": "It consists of two separate playlets-one entitled.  “A Dialogue Between an Englishman and an Indian“, date March 4, 1779 , the other, “A Little Teatable Chitchat, alamode:—or an ancient discovery reduced to modern practice :—Being a Dialogue and a Dish of Tea. Parturiuntmontes, nancetur ridiculus mus“, dated June, 1781.”"
        },
        {
          "header": "",
          "image": "",
          "text": "The first theater production at Dartmouth was titled “A Dialogue between an Englishman and an Indian.” It was spearheaded by Professor John Smith who taught “Greek, Latin, Hebrew and Oriental Languages.” Professor Smith’s script for the play made a Native American character call himself “uncultivated and unpolished.” His screenplay characterizes Native Americans as “savages” and “cruel people.” Such a portrayal reflects the prevalent prejudice against the Native Americans at Dartmouth and sentiments of European chauvinism. Dartmouth’s theater scene was a brainchild of charged sentiments of caucasian supremacy. "
        },
        {
          "header": "",
          "image": "",
          "text": "In 2021, Hop produced “In the Spirit” as a celebration of the queer and two-spirit identity in the Native American communities. “In the Spirit is a series that brings together Native performing artists and culture bearers from the Queer and Two-Spirit community across the United States, offering engagement and discussion around their emerging body of work. The series aims to place the performing arts of this community front and center in inclusive and connective celebration.”"
        },  
      ];
    }
    else if (data === '3') {
      this.pageTitle="Native American Presence in Arts on Campus";
      this.pageData = [
            {
              "header": "Native American Presence in Arts on Campus",
              "image": "./assets/nativeartspaper.jpg",
              "text": "The first theater production at Dartmouth was titled “A Dialogue between an Englishman and an Indian.” It was spearheaded by Professor John Smith who taught “Greek, Latin, Hebrew and Oriental Languages.” Professor Smith’s script for the play made a Native American character call himself “uncultivated and unpolished.” His screenplay depicts  a white man’s characterization of Native Americans as “savages” and “cruel people.” Such a portrayal reflected the prevalent prejudice against the Native Americans and sentiments of European chauvinism. However, as the screenplay progresses, the unnamed Native American character seizes agency and indicts the Englishman for the cruelty of his people vis-a-vis colonialism. The play concludes with the Englishman having a change of heart as he declares, “perhaps I have been too much prejudiced against the Indians.”"+
              "The Dartmouth Alumni Magazine covered this production as early as 1921 reporting on a previous article by John A. Bellows of the class of 1870. "
          },
             {
              "header": "November 30, 1964, The Rockwell Collection of Western Art",
              "image": "./assets/RockwellCollectionofWesternArt_Part1.jpg",
              "text": "The Hop hosted a collection of 28 paintings and two Bronze sculptures on the Old West during the fall of 1964 at the Jaffe-Friede Gallery. The collection included work from renowned artists like Frederick Remington, Charles Russell, Joseph Sharp among others. The exhibition captured various aspects of the early Western scene and series included a set of artworks on “the Indian before his subjection by the white man.”"
              },
             {
              "header": "November 30, 1964, The Rockwell Collection of Western Art",
              "image": "./assets/RockwellCollectionofWesternArt_Part2.jpg",
              "text": "The exhibition was curated by Robert Rockwell and arranged to be hosted at the Hopkins Center by Professor Churchill Lathrop. In one of the correspondences, Donald F. Berth - Rockwell’s collaborator - notes a small problem with the timing of the exhibition. Berth notes that Rockwell owned a few department stores and it would have been a busy season for him to visit Dartmouth. The letter can be seen here. "
            },
            {
              "header": "November 30, 1964, The Rockwell Collection of Western Art",
              "image": "./assets/RockwellCollectionofWesternArt_Part3.jpg",
              "text": ""
            },
            {
              "header": "March 16, 1973, Tides change",
              "image": "",
              "text": "Two centuries after the first appearance of Native Americans in Arts on campus, a set of letters from Peter Smith who worked at the Hopkins Center for the Arts foreshadow a more positive future. The letter shown here was sent to a Stu Tonemah with President Kemeny copied on it. The letter discusses the Hop’s willingness and hope to host Native American artists."
            },
            {
              "header": "March 16, 1973, Tides change",
              "image": "./assets/TidesChange_Part1.png",
              "text": "The letter outlines the Hop’s ambition of hosting a Native American artist for each of the three terms. Further, Peter Smith lays down other prospective Native American art events that can be hosted by the Hop. Such a vast breadth of prospective events reflects a willingness for change and growing positive representation of Native Americans on campus. This moment also signifies the agency that Native American artists had won for themselves through the verve of their art and the rigor of their struggle."
            },
            {
              "header": "March 16, 1973, Tides change",
              "image": "./assets/TidesChange_Part2.png",
              "text": ""
            },
            {
              "header": "Allan Houser, 1979",
              "image": "",
              "text": "Native American history has been one of oppression, attempted annihilation and destruction of cultural markers. Such a fraught memory has informed Native American art since the start of the colonial period. Allan C. Houser, the artist-in-residence at the Hopkins Center for the year 1979, represents such an instance of an artist shining through their life of resistance to oppression. A group of Chiricahua tribe members were imprisoned for staging a resistance movement in 1886. One of the first Chiricahua tribe members born out of captivity was Allan C. Houser. Houser’s modernist sculpting work captured sensibilities nationally and marked a moment of robust Native American agency in art. Allan C. Houser’s residency on campus lives past his life as one of his sculpture’s called Peaceful Serenity stands on the lawn in front of the Native American Studies Program Building."
            },
            {
              "header": "Allan Houser, 1979",
              "image": "./assets/allenhouser.png",
              "text": ""
            },
            {
              "header": "October 3, 1992, American Indian Dance Theater",
              "image": "",
              "text": "In the fall of 1992, the Hop commissioned the American Indian Dance Theater for a performance that reflected the Native American dance and musical forms indigenous to the New England region. The American Indian Dance Theater group was a historically significant dance troupe that was both critically acclaimed and commercially successful. It was the first Native American dance troupe to have its own national television special."
            },
            {
              "header": "October 3, 1992, American Indian Dance Theater",
              "image": "./assets/AmericanIndianDanceTheatre_Part1.jpg",
              "text": "The performance highlighted the intergenerational relationship between members of the Native American community. The show opened with the elders remembering their traditional ways and passing them down to the younger generations. The intergenerational coalition of artists showcased a broad diversity of aspects of Native American communal living. Further, the outfits worn by each performer were either self-made or by members of their family. The company members were proficient artisans that specialized in a variety of crafts like jewelry making, metalworks etc. "
            },
            {
              "header": "October 3, 1992, American Indian Dance Theater",
              "image": "./assets/AmericanIndianDanceTheatre_Part2.jpg",
              "text": ""
            },
            {
              "header": "October 3, 1992, American Indian Dance Theater",
              "image": "./assets/AmericanIndianDanceTheatre_Part3.jpg",
              "text": ""
            },
            {
             "header": "October 3, 1992, American Indian Dance Theater",
              "image": "./assets/AmericanIndianDanceTheatre_Part5.jpg",
              "text": ""
            },
            {
              "header": "October 3, 1992, American Indian Dance Theater",
               "image": "./assets/AmericanIndianDanceTheatre_Part4.jpg",
               "text": ""
            },
            {
              "header": "July 10, 2024 - Mali Obomsawin",
               "image": "./assets/AlanisObamsawin.png",
               "text": "Native American artists have achieved inter-generational presence in Dartmouth’s artistic planes. Alanis Obamsawin is a filmmaker of Abenaki origin who shot her film “A Way of Learning” on campus in 1988 documenting the lives of Native American students on campus. The film was co-produced by the Native American Council of Dartmouth College and supported by Professor Bruce Duthu. Mali Obamsawin, Alanis Obamsawin’s daughter, will be collaborating with Jake Blount for a summer concert performance on The Green. Mali Obomsawin infuses free jazz and experimental music with the spirit of Indigenous traditions. Obomsawin is an alumna of the Coast Jazz Orchestra at Dartmouth and has continued her artistic relationship as an independent artist with Dartmouth. "
            },
            {
              "header": "July 10, 2024 - Mali Obomsawin",
               "image": "./assets/MaliObomsawin.png",
               "text": ""
            },
            {
              "header": "Bibliogrpahy",
               "image": "",
               "text":"<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +
                        "Dartmouth Alumni Magazine. “The First Dartmouth Dramatic Production.” Dartmouth Alumni Magazine, May 1921," +
                       "<a style=\"color:blue\" href='https://archive.dartmouthalumnimagazine.com/article/1921/5/1/the-first-dartmouth-dramatic-production'>https://archive.dartmouthalumnimagazine.com/article/1921/5/1/the-first-dartmouth-dramatic-production</a></p>" +

                       "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +" Churchill Lathrop papers, MS-1141. Rauner Library Archives and Manuscripts " +
                      "<a style=\"color:blue\" href= 'https://archives-manuscripts.dartmouth.edu/repositories/2/resources/312'> https://archives-manuscripts.dartmouth.edu/repositories/2/resources/312</a></p>" +

                      "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +" Native Americans , 1973 - 1973, 1816, Box: 3813. Hopkins Center records, DA-115. Rauner Library Archives and Manuscripts " +
                      "<a style=\"color:blue\" href= 'https://archives-manuscripts.dartmouth.edu/repositories/2/archival_objects/464000'> https://archives-manuscripts.dartmouth.edu/repositories/2/archival_objects/464000</a></p>" +

                      "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +" Hopkins Center for the Arts, July 10, 2024 " +
                      "<a style=\"color:blue\" href= 'https://hop.dartmouth.edu/events/jake-blount-and-mali-obomsawin'> https://hop.dartmouth.edu/events/jake-blount-and-mali-obomsawin</a></p>" +
                      
                      "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +" AMERICAN INDIAN DANCE THEATER HOPKINS CENTER EVENTS F, 1816, Box: 584. Hopkins Center records, DA-115. Rauner Library Archives and Manuscripts " +
                      "<a style=\"color:blue\" href= 'https://archives-manuscripts.dartmouth.edu/repositories/2/archival_objects/39814'>https://archives-manuscripts.dartmouth.edu/repositories/2/archival_objects/3981 </a></p>" 

            }
          ];
        }
        else if (data === '4') {
          this.pageTitle="Japanese Art at Dartmouth";
          this.pageData = [
            {
              "header": "1964-65, Japan: Classical and Contemporary",
              "image": "./assets/ClassicalandContemporary_Japan_Part1.jpg",
              "text": "Dartmouth hosted a series of events in 1964-65 to celebrate Japanese culture and illustrate the passage of “Japanese civilization from tradition to modernity.” The year-long program was called “Japan: Classical and Contemporary” and involved various campus institutions. The Hopkins Center hosted an extensive series of presentations of Japanese drama, films, music, paintings, ceramics, photographs and other art forms. "
            },
            {
              "header": "1964-65, Japan: Classical and Contemporary",
              "image": "./assets/ClassicalandContemporary_Japan_Part2.jpg",
              "text": "The set of presentations included a traditional Japanese garden installed in the sculpture court at the Hopkins Center. The garden was made from the native rocks of New Hampshire and was designed by Kaneji Domoto of New Rochelle, NY. Further, the programming also included an exhibition of works by Aiko MIyawaki, a young New York based Japanese artist. Her works had traveled the world and she was known for achieving three-dimensional effect by using unusual media - in an instance, she mixed oil paint with marble dust.  A full calendar of events can be seen here."
            },
            {
              "header": "1964-65, Japan: Classical and Contemporary",
              "image": "./assets/ClassicalandContemporary_Japan_Part3.jpg",
              "text": ""
            },
            {
              "header": "1964-65, Japan: Classical and Contemporary",
              "image": "./assets/ClassicalandContemporary_Japan_Part4.jpg",
              "text": ""
            },
            {
              "header": "1964-65, Japan: Classical and Contemporary",
              "image": "./assets/ClassicalandContemporary_Japan_Part5.jpg",
              "text": ""
            },
            {
              "header": "October 1987, Sinkai Jukoh at the Center Theater",
              "image": "",
              "text": "During the fall of 1987, Japanese Butoh group Sinkai Juku led by Ushio Amagatsu performed “The Cumquat Seed - A Young Boy's Dream on the Origins of Life and Death” as a continuous, meditative piece carried out in seven episodes. Butoh as a dance movement emerged in the 1960s as a medium of protest and an expression of a sense of despair in the face of the threat of nuclear warfare. "
            },
            {
              "header": "October 1987, Sinkai Jukoh at the Center Theater",
              "image": "./assets/SinkaiJukoh_Part1.jpg",
              "text": "The movement was a result of the tensions of the cold war, however, it was interpreted by Sinkai Juku as a contemplative medium. The performance dwelled on human instincts and divorced itself from the synthetic and highly choreographed qualities of the western forms of dance. Sinkai Juku’s Butoh embraced the natural weight of flesh and the phenomenon of gravity. The group’s performance inspired a moment of introspection into the politics of the time. Here is a student’s account of the performance as published in The Dartmouth"
            },
            {
              "header": "October 1987, Sinkai Jukoh at the Center Theater",
              "image": "./assets/SinkaiJukoh_Part2.jpg",
              "text": ""
            },
            {
              "header": "April 3, 2003, Ku Na’uka Theater Company at Dartmouth",
              "image": "",
              "text": "Ku Na’uka contemporary theater company led by Satoshi Miyagi staged a production of Kyoka Izumi’s play “ Tensho Monogatori” (“The Castle Tower”) in Moore Theater on the 3rd of April, 2003. The production used the bunraku style of puppet theater where the actions are performed through a puppet and the lines are delivered by a narrator. Director Miyagi while speaking of the show said, “to meet others it ot be astonished at the differences and then to try to search for the similarities.” The production was highly stylized and expressed forms of love through quiet fluid motion and mask-like faces."
            },
            {
              "header": "April 3, 2003, Ku Na’uka Theater Company at Dartmouth",
              "image": "./assets/KuNaukaTheaterCompany.jpg",
              "text": ""
            },
            {
              "header": "March 8, 2009, San Jose Taiko at Moore Theater",
              "image": "",
              "text": "In a unique construction, San Jose Taiko presented a Taiko drumming show infused with an American style at the Moore Theater. This modern ensemble form of Taiko drumming is known as Kumidaiko and it emerged in the wake of the second world war. San Jose Taiko consisted of third generation Japanese American members and sought to represent the experience of Japanese Americans. The group was founded in 1973 and is one of the oldest North American Taiko groups. "
            },
            {
              "header": "March 8, 2009, San Jose Taiko at Moore Theater",
              "image": "./assets/SanJoseTaiko.jpg",
              "text": ""
            },
            {
              "header": "Bibliography",
              "image": "",
              "text":   "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +" Churchill Lathrop papers, MS-1141, Box - 4. Rauner Library Archives and Manuscripts " +"<a style=\"color:blue\" href= 'https://archives-manuscripts.dartmouth.edu/repositories/2/resources/312'> https://archives-manuscripts.dartmouth.edu/repositories/2/resources/312 </a></p>" +
              "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +" Butoh, an art of intuition; Article by: Liz Klein; Page No: 12, 1987-10-01. The Dartmouth, Index for 1987, TD-1987. The Dartmouth Index " +"<a style=\"color:blue\" href= 'https://archives-manuscripts.dartmouth.edu/repositories/5/archival_objects/628854'> https://archives-manuscripts.dartmouth.edu/repositories/5/archival_objects/628854 </a></p>" +
              "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +" Ku na'uka tells a complex tale; Article by: Shaffer, Holly; Page No: 7, 2003-04-04. The Dartmouth, Index for 2003, TD-2003. The Dartmouth Index. " +"<a style=\"color:blue\" href= 'https://archives-manuscripts.dartmouth.edu/repositories/5/archival_objects/673894'> https://archives-manuscripts.dartmouth.edu/repositories/5/archival_objects/673894</a></p>" +
              "<p style='font-size:0.8em;margin-right: 20px; overflow-wrap: break-word !important; padding-right: 20px !important; word-break: break-word; hyphens: auto; white-space: pre-wrap;'>" +" San jose taiko to fuse western and japanese beats at hop; Article by: Zhang, Fan; Page No: 7, 2009-03-05. The Dartmouth, Index for 2009, TD-2009. The Dartmouth Index. " +"<a style=\"color:blue\" href= 'https://archives-manuscripts.dartmouth.edu/repositories/5/archival_objects/685661'> https://archives-manuscripts.dartmouth.edu/repositories/5/archival_objects/685661</a></p>" 
            },
          ];
        }
        else if (data === '5') {
          this.pageTitle="HOP’s Impact as a Regional Arts Center";
          this.pageData = [
            {
              "header": "Sept 29, 1987, Hop from conception to creation",
              "image": "./assets/DartmouthImpactRegionalArtsCenter_Part1.jpg",
              "text": "<p>The goals for the center were to bring drama, music, student workshops and the arts together in a mutually advantageous relationship.<p><br>"+
               "<p>Initial plans included social rooms for students, faculty, and residents of the area in order to bring members of the community closer to the arts.</p><br>"+
                "<p>Nelson Rockefeller at the Hop’s opening: “The Hopkins Center is a symbol of Dartmouth’s leadership in a cultural movement which is taking place all over the country”</p>"
              },
            {
              "header": "Sept 29, 1987, Hop from conception to creation",
              "image": "./assets/DartmouthImpactRegionalArtsCenter_Part2.jpg",
              "text": ""
            },
            {
              "header": "Sept 29, 1987, Hop from conception to creation",
              "image": "./assets/DartmouthImpactRegionalArtsCenter_Part3.jpg",
              "text": ""
            },  
            {
              "header": "Sept 29, 1987, Hop from conception to creation",
              "image": "./assets/DartmouthImpactRegionalArtsCenter_Part4.jpg",
              "text": ""
            },  
            {
              "header": "Oct 1, 1987, The Hop: Its role for the next 25 years",
              "image": "",
              "text": "President Stanfill: “ It really is a regional arts center”. <br> Professor Churchill Lathrop, director of Hop’s Arts Galleries: “Other schools wanted to know how we did this”; “one great advantage in that ours is right in the center of everything and so it exerts a bigger interest to a wider audience”"
            },  
            {
              "header": "Oct 1, 1987, The Hop: Its role for the next 25 years",
              "image": "./assets/Hop25years.jpg",
              "text": ""
            },  
            {
              "header": "July 1983, Celebration Northeast at the Hop",
              "image": "./assets/CelebrationNortheastatHop.jpg",
              "text": ""
            },  
          ];
        }
    this.modal.style.display = "flex";
    this.dataReady.emit(this.pageData);
  }
  

  closeModal() {
    this.modal.style.display = "none";
    window.location.reload();
  }
}
