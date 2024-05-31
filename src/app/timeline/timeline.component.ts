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
  userTestStatus = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
  ];

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
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      centerMode: true,
      prevArrow: '<span class="prev_arrow"><img src="./assets/arrow-bar-left.svg" alt="left arrow icon"></span>',
      nextArrow: '<span class="next_arrow"><img src="./assets/arrow-bar-right.svg" alt="right arrow icon"></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true

          }
        }
      ]
    });
  }

  myFunction(data: string): void {
    var flipbook = document.getElementById("flipbook");
    if (data === '1') {
  this.pageTitle="Latino Art on Campus";
  this.pageData = [
        {
          "header": "",
          "image": "",
          "text": "Josè Orozco: “Found in the Dartmouth’s Baker Library, Orozco’s The Epic of American Civilization (1932-34) retells the standard eurocentric history of America from a story centered around Mesoamerica.”"
        },
        {
          "header": "",
          "image": "",
          "text": "Carlos Sanchez: It should be noted that the very first artist in residence at the Hood Museum of Art at Dartmouth College was Venezuelan-born Dartmouth graduate (class of 1923) Carlos Sanchez."
        },
        {
          "header": "",
          "image": "",
          "text": "1998 saw the brief visit of Grammy Award winning string quartet Cuarteto Latino Americano for a short residency and performance in the Spaulding Auditorium at the Hop. The quartet’s mission is to showcase contributions of Latino musicians and composers, who are often overlooked in the Eurocentric world of classical music. In 1999 Ballet Folklorico Quezalli de Veracruz, a touring dance group from Veracruz, Mexico, came to Dartmouth and put on a series of shows, both on campus and in the greater community (nearby public schools) as part of the Hopkins Center, Outreach and Arts Education initiative."
        },       
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
    } else if (data === '3') {
      this.pageTitle="SLAVERY DURING DARTMOUTH’S FOUNDING & EARLY YEARS";
      this.pageData = [
        {
          "header": "SLAVERY DURING DARTMOUTH’S FOUNDING & EARLY YEARS",
          "image": "",
          "text": "Stories of the founding of Dartmouth College often depict Eleazar Wheelock braving the wilderness as a pious pioneer of education. He had begun Christianizing indigenous people years earlier at the Moor’s Charity School in Connecticut, but he established the College in Hanover to educate “English youth and any others.” Dartmouth lore states that in August 1770, Wheelock arrived in New Hampshire with his students and several slaves.  However, College archivist, Peter Carini has discovered that Wheelock owned at least nineteen enslaved persons during his lifetime. Their labors supported the well-being of President Wheelock’s family and his students and contributed to the maintenance of his home and the school’s buildings. Enslaved persons cleared trees, swept buildings, drove oxen, prepared meals, and cared for the sick. Enslaved as well as free people of color lived and worked in other Hanover households and businesses. In the historical records, we see glimpses of their loyalty to family members, their religious devotion, and their personal flaws.  Slavery and the enslaved remained a part of campus life and in the North through the Civil War."
        },
        {
          "header": "Eleazar Wheelock, account book, cal 1726-1775. MS-1310, box 38, page 27",
          "image": "",
          "text": "Eleazar Wheelock’s personal account book, showing debts and credits for services and goods. This particular page details “renting” out half a day of labor of his slaves Elijah and Fortune.",
        },
        {
          "header": "Eleazar Wheelock to Asa Foot, Dartmouth College, January 28, 1776. MS 776128",
          "image": "",
          "text": "Letter from Eleazar Wheelock to Capt. Asa Foot. concerning the purchase of two items—a wheel of cheese and a \"negro.\" Wheelock writes \"as to the Negro, I don’t know when I shall be able to pay for him.”"
        },
        {
          "header": "Eleazar Wheelock, Will, Hanover, NH, March 2, 1779. MS 779252.6",
          "image": "",
          "text": "Eleazar Wheelock’s property and interests were left to his son and second president of Dartmouth, John Wheelock, including his slaves. According to his will, his slaves would be emancipated according to the condition of their moral character, marriage, and age of service."
        },
        {
          "header": "Samson Occom to Eleazar Wheelock, Lebanon, Connecticut, October 4, 1765. DC Hist Mss 765554.2",
          "image": "",
          "text": "This 1765 letter from Samson Occom to Eleazar Wheelock discussing the terms of lending him a negro and an oxen to help with his business provides further evidence that Wheelock used his slaves for hard labor."
        },
        {
          "header": "Jabez Bingham to Eleazar Wheelock, Lebanon, Connecticut, September 5, 1770. MS 770505",
          "image": "",
          "text": "Letter from Jabez Bingham to Eleazar Wheelock detailing how Wheelock's family would soon leave for Hanover with supplies. Bingham mentions that the enslaved man Exeter refuses to leave without Peggy."
        },
        {
          "header": "Founding of Dartmouth College,New Haven, Conn. : J.W. Barber, 1852. Iconography 398",
          "image": "",
          "text": "This wood engraving portrays the construction of Dartmouth in 1770."
        },
        {
          "header": "Excerpt from the Dartmouth College Charter, 1769. MS 769663",
          "image": "",
          "text": "“AND further that the generous Contributors to the support of this design of spreading the knowledge of the only true God and Saviour among the American Savages, may, from time to time, be satisfied that their liberalities are faithfully disposed of, in the best manner, for that purpose, and that others may, in future time, be encouraged in the exercise of the like liberality, for promoting the same pious design”.This excerpt legally obligates Wheelock, future College presidents, trustees and donors to pursue the education and religious conversion of indigenous peoples in the Americas."
        },
        {
          "header": "Portrait of Eleazar Wheelock. Iconography 1647",
          "image": "",
          "text": "Eleazar Wheelock (1711-1779) was a Congregational minister and educator who moved from Lebanon, Connecticut to New Hampshire in order to found Dartmouth College in 1769."
        },
        {
          "header": "Warrant for the Arrest of Caesar, Hanover, NH, February 3, 1773. MS 773156.2",
          "image": "",
          "text": "Caesar, one of Wheelock’s slaves, allegedly defamed the character of a white servant named Mary Sleeper.  Following his conviction, more than 30 college and townspeople, plus students of Dartmouth and Moor’s signed a bond vouching for his future good behavior."
        },
        {
          "header": "The Last Will and Testament of John Wheelock. MS-934 Box 1, folder 7",
          "image": "",
          "text": "John Wheelock’s will set out the requirements for the emancipation of three slaves. It entrusted for them money and land, once conditions of marriage and terms of service had been met."
        },
        {
          "header": "T. C. Uphan, Narrative of Phebe Ann Jacobs, Place of publication not identified: [American Tract Society], n.d. DC History E185.97 U76",
          "image": "",
          "text": "John Wheelock married Maria Suhm, a granddaughter of Christian Suhm, the Danish governor of St. Thomas and an owner of many slaves.  Young Phebe, an enslaved African American, was a wedding gift to Wheelock’s new wife. Phebe was later gifted to their daughter Maria when she married Reverend William Allen, who became president of Bowdoin College.  Phebe is mentioned several times in family correspondence, and this narrative details her exemplary Christian life in Brunswick, ME."
        }
      ];
    }
    else if (data === '4') {
      this.pageTitle="DARTMOUTH AND THE DEBATES ON SLAVERY";
      this.pageData = [
        {
          "header": "DARTMOUTH AND THE DEBATES ON SLAVERY",
          "image": "",
          "text": "Dartmouth’s social and political debates over slavery reveal nuances within anti-slavery and pro-slavery thought.  Among those opposed to slavery, some advocated for citizenship and full equality for persons of African descent, while others sought their removal to the colony of Liberia, West Africa.  Among those who accepted slavery, some were its zealous defenders, while others were willing to tolerate it for the sake of preserving the Union. The ideological evolution of Dartmouth’s sixth president Nathan Lord from anti-slavery to staunchly pro-slavery reflected these shifting and conflicting politics. On campus, students formed both anti-slavery and pro-colonization groups. Literary societies also provided students with an entry point into public debates on the issue of slavery. Students also heckled and disrupted anti-slavery speakers and wrote letters home discussing the ways in which slavery influenced their religious, political, and social affiliations and views. During the Civil War, Dartmouth students and graduates served in both Union and Confederate militaries."
          },
        {
          "header": "Charles T.Congdon, The Warning of War : a Poem Delivered before the United Societies of Dartmouth College, Hanover, N.H., at the Annual Commencement, July 30, 1862, (Charles Taber) New-York: F. Hart & Co., 1862. DC Hist PS1359.C726",
          "image": "",
          "text": "Commencement poet and journalist Charles T. Congdon highlights slavery’s paradoxes, stating “[t]he problem’s solved by something quite absurd…Freedom is Slavery, and slaves are free…”"+
          "Quote: \"We’ve tried this formula of cold and hot\:"+
          "\"All men are free and equal – and are not;"+
          "\"God made of one blood all men – but, you see,"+
          "\"He gave black blood to Sambo, blue to me:"+
          "\"All men we hold – too plain a fact to show –"+ 
          "\"Born free and equal – that is, if ‘tis so;"+
          "\"All men the scriptures prove are near of kin – "+
          "\"That is, all men who have a common skin;"+
          "\"Freedom’s the birth-right of all men that be,"+
          "\"Provided men can manage to be free."+
          "\"The law’s repealed against a pair of stools – "+
          "\"Four millions of exceptions prove all rules. "+
          "\"Extremes must meet, and thus you clearly see"+
          "\"Freedom is Slavery, and slaves are free; "
        },
        {
          "header": "United Fraternity, Meeting Minutes 1860-1870. DO-4, Box 6256, folder 1, page 8",
          "image": "",
          "text": "In 1864, members of Dartmouth’s United Fraternity approved anti-slavery minister Henry Ward Beecher as their first choice of orator for upcoming commencement exercises. Alternates included pro-Union attorney Caleb Cushing, abolitionist poet Anna Dickens, and radical abolitionist William Lloyd Garrison."
          },  
          {
            "header": "Social Friends, Meeting Minutes, DO-2, box 6250, folder 4 ",
            "image": "",
            "text": "The Social Friends Literary Society debated current issues such as the fugitive slave bill. Social Friends member Jonathan C. Gibbs (Class of1852) was one of the few black students attending Dartmouth at the time and later became Florida’s first black Secretary of State during the Reconstruction period."
          },
          {
            "header": "Social Friends and United Fraternity Keys. Uncat Realia",
            "image": "",
            "text": "The Social Friends and United Fraternity Literary Societies’ members received personally engraved “keys” that were typically worn on watch chains."
          },
          {
            "header": "United Fraternity Key. DO-4, Box 6256, Folder 1",
            "image": "",
            "text": "The center “key” encased in a locket belonged to Daniel Webster. He became a member of the United Fraternity during his first year on campus and was eventually elected as Vice-President and orator."
          },
          {
            "header": "Jesse Hutchinson, Daniel Decatur Emmett, and the Hutchinson Family (Singers), Get off the track!: a song for Emancipation, Boston: Published by the Author, 1844. Sheet Music HF 21",
            "image": "",
            "text": "This song was dedicated to Nathaniel Peabody Rogers, Dartmouth Class of 1816, \"As a mark of esteem for his intrepidity in the cause of Human Rights.\"  Rodgers was the editor of an abolitionist newspaper, Herald of Freedom in Concord, NH. He also served as a station-master on the Underground Railroad for fugitive slaves heading to Canada, and a delegate to the 1840 World Anti-Slavery Convention in London. He is notable because he withdrew from the Convention when women delegates were not seated.  Rogers was also a co-founder of the racially integrated, co-ed Noyes Academy in nearby Canaan, N.H. The academy was short-lived however, as in 1935, a mob of five hundred, including some from Hanover, used seventy oxen to pull the building from its foundation, and later burned it. Several prominent future African American leaders were among the students who attended Noyes: Alexander Crummell, Henry Highland Garnet, Julia Williams, and Thomas Paul, Jr. Dartmouth Class of 1841."
          },
          {
            "header": "William F. Wallis to Lewis Sawyer. October 4, 1838. MS 838554",
            "image": "",
            "text": "In this letter, William Wallis (Class of 1841) reported that he had joined an Abolition society which engaged the \"best portion of the students\" and that \"[m]ost of the faculty here are warm abolitionists.\" Perhaps Willis is alluding to their membership in the American Colonization Society. "
          },
          {
            "header": "Roger Moses Sargent to John Houston. April 2, 1844. MS 844252",
            "image": "",
            "text": "Roger Moses Sargent (Class of 1846) writes of anti-slavery meetings in his hometown Lowell, Massachusetts, stating: \"I do not agree with the measures of some who would make their antislavery meetings places to...slander the church…\""+
            "Quote: \"Last August when I was at home I found there was quite an excitement about slavery and non-resistance. They had an anti-slavery discussion as they called it every Monday night, and a lot of…no-governments and no-church and no-nothing men deemed to take the lead. Finally, during the fall, they acted so bad that the church had to refuse the use of the vestry. Then some of them attacked Mr. Hanks in February, when I was at home…and some other ministers refused to read the notice in their churches. "+
            "The first day they passed a resolution to this effect: “Resolved that Rev…Hanks and Rev. Mr. Naylor are opposers of the cause of human liberty, …hypocrites and ministers of the evil one. And such…abuse was heaped upon the poor men, I never heard equaled…The cause of anti-slavery is still prospering well at Lowell, thought there are some that overshoot the mark…I do not agree with the measures of some who would make their antislavery meetings places to attack and slander the church and ministers…\""
          },
          {
            "header": "David Youngman, Jr. to David Youngman Sr., February 13, 1837. MS 837163",
            "image": "",
            "text": "David Youngman Jr., Class of 1839, wrote a letter to his father David Youngman Sr. in 1837. He informs his father that he has become an abolitionist. Youngman Sr. was a slaveowner living in Tennessee at the time."+
                    "Quote: \"About half of the present members of college believe it a sin, for one man to hold another in slavery.  Thus rendering him liable to be bought and sold with other property, at the will of the owner, considering there that, slavery, as it now exists at the South is a direct violation of the laws of God. Without saying anything of the comparative happiness. In the condition of the slave and free black: we believe a remedy should be provided and speedily applied. And believing that nothing short of an entire emancipation can ever do this, we have formed ourselves into a society. Thus, cooperating with others similar throughout our country: I am one of their number.\""              
          },
          {
            "header": "David Youngman Sr. to David Youngman Jr. April 1837. MS 837251",
            "image": "",
            "text": "David Youngman Sr. wrote this letter in response to his son, informing him of God’s divine justification for slavery. He continues on to write about the 3 new slaves he recently acquired."+
            "Quote: \"I do not write this because I am an advocate for slavery, no for if I know my own heart I would rejoice to all the human race elevated converted from the slavery of sin and made perfectly happy both for time and eternity--but the judge of all the earth will do right and we find our selves surrounded with slavery under the superintending providence of the Almighty and whenever it is his will to remove them I am ready to say let them go free-- I have bought a man and wife and 3 children--they are both professors of religion and I assure you we live harmoniously together we have 3 black men and one white man hired . Two of the black men are church members and I question if you can find many families composed of as many members more [unclear] in a free state--tho I would not be thought to boast.\""
          },
        ];        
    }
    else if (data === '5') {
      this.pageTitle="SLAVERY IS WHAT IT IS; AND IT IS NOTHING ELSE\" -NATHAN LORD";
      this.pageData = [
        {
          "header": "SLAVERY IS WHAT IT IS; AND IT IS NOTHING ELSE\" -NATHAN LORD",
          "image": "",
          "text": "Dartmouth’s extended public engagement with slavery discourse through its alumni body further illustrates the distinction between radical abolitionist thought and reformist compromise. The founding of the American Colonization society by Dartmouth alumni, which established the Christian colony of Liberia as the prospective home for freed black people, and Daniel Webster’s Senate speech in support of the 1850 Compromise, both demonstrate that Dartmouth’s engagement with anti-slavery politics was driven by a pragmatic confluence of political, economic, and social factors."
          //It consists of two separate playlets-one entitled.  “A Dialogue Between an Englishman and an Indian“, date March 4, 1779 , the other, “A Little Teatable Chitchat, alamode:—or an ancient discovery reduced to modern practice :—Being a Dialogue and a Dish of Tea. Parturiuntmontes, nancetur ridiculus mus“, dated June, 1781.”"
        },
        {
          "header": "Nathan Lord, sermon, n. d. MS-510, Box 1, Folder 34",
          "image": "",
          "text": "In this undated sermon, Dartmouth’s sixth President Nathan Lord addressed the issue of whether slavery was right or wrong. The sermon appears to have been written after Lord transitioned from being an abolitionist to being pro-slavery."+
          "Quote: \"Slavery exists de facto. It has always existed since the curse was pronounced on Canaan, and Canaan has been the means of carrying on the civilization of 'shem japeth' during their appointed time.\"" 
        },
        {
          "header": " A Letter of Inquiry to Ministries of the Gospel of all Denomination, on Slavery by A Northern Presbyter, 4thedition, Hanover, NH. : Dartmouth Press, 1860. MS-510, Box 1, Folder 27",
          "image": "",
          "text": "In this anonymously published pamphlet, Nathan Lord addresses the question of whether slavery is in accordance with Christianity. Lord desired readers to think critically about the institution of slavery in accordance with their faith, moral, and spiritual beliefs."+
          "Quote: \"Whether it does not especially concern ministers of the Gospel to consider the questions of slavery from its origin and foundations, as a question of Divine right, rather than of prudence, policy, or economy,--- a question of the moral sense and judgements, rather than of the sensibilities and sympathies — of the divinities rather than humanities?\""
        },
        {
          "header": "Nathan Lord, A True Picture of Abolition, Boston: Press of the Daily courier, 1863. MS-510, Box 1, Folder 27",
          "image": "",
          "text": "In this pamphlet, Nathan Lord describes abolitionism as dishonorable, false, and the greatest danger to the Constitution and society. Lord states, “We find that, before the era of abolition, this whole country enjoyed remarkable union, peace, and prosperity for half a century.”"
        },
        {
          "header": "The Dartmouth Oestrus, Volume 1, 1855, Hanover, N.H. DC Hist LH1.D3 D282",
          "image": "",
          "text": "An editorial cartoon in this student satirical newspaper depicts President Nathan Lord chasing a runaway slave.  This illustration shows the discontent students felt for Lord’s support of slavery."
        },
        {
          "header": "Daniel Webster on Slavery",
          "image": "",
          "text": "Daniel Webster, Daniel Webster on Slavery: extracts from some of the speeches of Mr. Webster, on the subject of slavery; together with his great compromise speech of March 7, 1850, entire, and the Boston memorial, on the subject of slavery, drawn up by Mr. Webster ; to which is added the Constitution of the United States, Boston: W. Carter & Brother, 1861. Webster E449.W37 1861"+
          "Daniel Webster, Class of 1801, is heralded as the legal champion of Dartmouth College because of his strategic thinking and oratory prowess in the case The Trustees of Dartmouth College v. Woodward. Webster saw himself as anti-slavery but was also pro-Union. In 1850, Webster voted in favor of the Fugitive Slave Act. This booklet contains Webster’s infamous Seventh of March speech before the Senate delivered in support of the Compromise of 1850. In his speech Webster stated,"+
          "\"I put it to all the sober and sound minds at the North, as a question of morals and a question of conscience, what right have they, in their legislative capacity, or any other, to endeavor to get round this Constitution, to embarrass the free exercise of the rights secured by the Constitution, to the persons whose slaves escape from them? None at all-none at all.\""
        },
        {
          "header": "Portrait of Daniel Webster, Class of 1801. Iconography 1647-1965.",
          "image": "",
          "text": "Portrait of Daniel Webster, Class of 1801. Iconography 1647-1965."
        },
        {
          "header": "Portrait of Nathan Lord, President of the College 1828-1863. Iconography 1647-1217",
          "image": "",
          "text": "Portrait of Nathan Lord, President of the College 1828-1863. Iconography 1647-1217"
        },
        {
          "header": "American Colonization Society membership certificate, signed blank. Madison, James. 01 December 1833. MS 001939",
          "image": "",
          "text": "The Society for the Colonization of Free People of Color of America, commonly known as the American Colonization Society (ACS), was established in 1816. Daniel Webster was a founding member of the ACS in addition to Dartmouth Presidents Daniel Dana, Bennett Tyler, and Nathan Lord as well as many faculty members and alumni."
        },
        {
          "header": "Carey, Mathew, and Mercer, Charles Fenton. Letters on the Colonization Society",
          "image": "",
          "text": " Carey, Mathew, and Mercer, Charles Fenton. Letters on the Colonization Society : with a View of Its Probable Results, Under the Following Heads: The Origin of the Society; Increase of the Coloured Population; Manumission of Slaves in This Country; Declarations of Legislatures, and Other Assembled Bodies, in Favour of the Society; Situation of the Colonists at Monrovia and Other Towns ... Addressed to the Hon. Charles F. Mercer ... Third edition, enlarged and improved. Philadelphia: Young, printer, 1832. Rare E448.C277 1832"+
          "This book is comprised of a series of letters directed to top politicians and possible supporters of the American Colonization Society. In one of the letters, the authors proudly boast that, “The legislatures of fourteen states, New Hampshire, Vermont, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, Georgia, Tennessee, Kentucky, Ohio and Indiana, have passed resolutions distinctly recommending the scheme of colonizing the free colored population, and most of them approving the objects of the Society. Eleven of those states have instructed their senators, and requested their representatives in Congress, to promote in the general government, measures for removing such free persons of color as are desirous of emigrating to Africa."
        },
        {
          "header": "Tyler Bennet,The third annual report of the New Hampshire Auxiliary Colonisation [sic] Society",
          "image": "",
          "text": "Tyler Bennet,The third annual report of the New Hampshire Auxiliary Colonisation [sic] Society: presented and read at the meeting of the Society, held in Concord, June 7, 1827, Concord, N.H. : The Society, 1827. DC Hist E446 .N46 1827"+
          "This pamphlet was revised by vice president of the state chapter, Bennet Tyler, who served as the President of Dartmouth College at the time of this meeting.  A large part of the pamphlet is dedicated to outlining the vision and goals of the American Colonization Society. The society was set on resettling freed Black people and illegally traded slaves in a Christian colony named Liberia. ACS members viewed Africa as a God-designated site for Black people. The report contains an update on the Liberian colony proclaiming that \"The prosperous condition of the Colony at Liberia is almost, if not altogether unparalleled in all colonial history.\""         
        },
        {
          "header": "Daniel Dana, A discourse addressed to the New-Hampshire Auxiliary Colonization Society, at their first annual meeting. Concord, June 2, 1825, Concord",
          "image": "",
          "text": "Daniel Dana, A discourse addressed to the New-Hampshire Auxiliary Colonization Society, at their first annual meeting. Concord, June 2, 1825, Concord: Printed by Shepard and Bannister. Rare E448 .D17 1825"+
          "Former Dartmouth President Daniel Dana addressed the first meeting of the New Hampshire Auxiliary Colonization Society. He writes that \"The aim of the American Colonization Society, you now clearly perceive. It is to sever the free blacks of our country from the mass of our population and reunite them to their kindred in Africa. It is to take them away from a region to which they do not belong, and where they can never feel themselves at home; and give them back to the land for themselves at home: and give them back to the land for which the kind Author of their being framed and designed for them.\" Members of the ASC and NHACS felt that their organizations were \"benevolent\" because they were granting Black people an opportunity to prosper."
        }
      ];
    }
    else if (data === '6') {
      this.pageTitle="Latino Art on Campus";
      this.pageData = [
            {
              "header": "Latino Art on Campus",
              "image": "./assets/nativeartspaper.jpg",
              "text": "First, March 4, 1779: The first theater production at Dartmouth was titled “A Dialogue between an Englishman and an Indian.” It was spearheaded by Professor John Smith who taught “Greek, Latin, Hebrew and Oriental Languages.” Professor Smith’s script for the play made a Native American character call himself “uncultivated and unpolished.” His screenplay characterizes Native Americans as “savages” and “cruel people.” Such a portrayal reflects the prevalent prejudice against the Native Americans at Dartmouth and sentiments of European chauvinism. Early Dartmouth’s theater scene was a brainchild of charged sentiments of caucasian supremacy."+
              "The Dartmouth Alumni Magazine covered this production as early as 1921 reporting on a previous article by John A. Bellows of the class of 1870. The article plainly reported on the screenplay without much commentary on the representation of Native Americans in the play. The play is presented as a glorious first and not precisely condemned for its hijacking of Native American identity."
             },
             {
              "header": "Red Thunder Native Dance Theater, 1816",
              "image": "",
              "text": ""
              },
             {
              "header": "Tide changes, March 16, 1973",
              "image": "./assets/petersmith.png",
              "text": "Two centuries after the first appearance of Native Americans in Arts on campus, a set of letters from Peter Smith who worked at the Hopkins Center for the Arts foreshadow a more positive future. The letter shown here was set to a Stu Tonemah with President Kemeny copied on it. The letter discusses the Hop’s willingness and hope to host Native American artists. The letter outlines the Hop’s ambition of hosting a Native American for each of the three terms. Further, Peter Smith lays down other prospective Native American art events that can be hosted by the Hop. Such a vast breadth of prospective events reflects a willingness for change and growing positive representation of Native Americans on campus. This moment also signifies the agency that Native American artists had won for themselves through the verve of their art and the rigor of their struggle."
             },
             {
              "header": "Allan Houser, 1979",
              "image": "./assets/allenhouser.png",
              "text": "Native American history has been one of oppression, attempted annihilation and destruction of cultural markers. Such a fraught memory has informed Native American art since the start of the colonial period. Allan C. Houser, the artist-in-residence at the Hopkins Center for the year 1979, represents such an instance of an artist shining through their life of resistance to oppression. A group of Chiricahua tribe members were imprisoned for staging a resistance movement in 1886. One of the first Chiricahua tribe members born out of captivity was Allan C. Houser. Houser’s modernist sculpting work captured sensibilities nationally and marked a moment of robust Native American agency in art. Allan C. Houser’s residency on campus lives past his life as one of his sculpture’s called Peaceful Serenity stands on the lawn in front of the Native American Studies Program Building."
            },
            {
              "header": "Alanis Obamsawin, 1988",
              "image": "",
              "text": "Alanis Obamsawin is a filmmaker of Abenaki origin who shot her film “A Way of Learning” on campus in 1988 documenting the lives of Native American students on campus. The film was co-produced by the Native American Council of Dartmouth College and supported by Professor Bruce Duthu. TBD upon access to film footage."
            },
            {
              "header": "Kent Monkman At the Hood, April 8 – December 16, 2023",
              "image": "./assets/kentmonkman.png",
              "text": "Cree artist Kent Monkman was hosted at the Hood Museum of the Art in 2023. Monkman’s work is a sharp, pointed and glorious monument of Native American agency. Presented through the style of Modernist Abstraction, Monkman’s work shines at the intersection of the Native American identity and queerness. The Hood Museum also commissioned two works from him for their permanent collection. Monkman’s exhibition represents a moment for Native American arts on campus that gives voice to the Native American identity and is fearless in its execution. It is the reclaimed agency that sticks out both in his work and the presentation of it on campus."
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
