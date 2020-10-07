import {demoProfile, appProfile, casinoProfile} from './data.js'

// lightbox
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

let slider = document.getElementById('main');
var lan = slider.dataset.lan;
// demo
var demo = '';

// var demoProfile = {
//     tw: [
//         {
//             name: '電子娛樂',
//             url: 'https://www.gtdemo.vip/home.php',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//                 'demomimg3'
//             ]
//         },
//         {
//             name: '戰神',
//             url: 'https://gp03.gtdemo.vip',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//             ]
//         },
//         {
//             name: '彩票',
//             url: 'https://gp04.gtdemo.vip',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//                 'demomimg3'
//             ]
//         },
//         {
//             name: '百老匯',
//             url: 'https://gp05.gtdemo.vip',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//                 'demomimg3'
//             ]
//         },
//         {
//             name: '澳門永利皇宮',
//             url: 'https://gp06.gtdemo.vip',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//                 'demomimg3'
//             ]
//         },
//         {
//             name: '奇蹟電遊',
//             url: 'https://gp07.gtdemo.vip',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//                 'demomimg3'
//             ]
//         },
//         {
//             name: '太陽城',
//             url: 'https://gp08.gtdemo.vip',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//                 'demomimg3'
//             ]
//         },
//         {
//             name: 'Light-bet365',
//             url: 'https://gp09.gtdemo.vip',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//                 'demomimg3'
//             ]
//         },
//         {
//             name: 'Limit',
//             url: 'https://gp10.gtdemo.vip',
//             updatetime: '2019-11-19',
//             img: [
//                 'demoimg2',
//                 'demoimg3',
//                 'demomimg1',
//                 'demomimg2',
//                 'demomimg3'
//             ]
//         }
//     ],
//     cn: [
//         {
//             name: '電子娛樂',
//             url: 'https://www.gtdemo.vip/home.php',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '戰神',
//             url: 'https://gp03.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '彩票',
//             url: 'https://gp04.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '百老匯',
//             url: 'https://gp05.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '澳門永利皇宮',
//             url: 'https://gp06.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '奇蹟電遊',
//             url: 'https://gp07.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '太陽城',
//             url: 'https://gp08.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: 'Light-bet365',
//             url: 'https://gp09.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: 'Limit',
//             url: 'https://gp10.gtdemo.vip',
//             updatetime: '2019-11-19'
//         }
//     ],
//     en: [
//         {
//             name: '電子娛樂',
//             url: 'https://www.gtdemo.vip/home.php',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '戰神',
//             url: 'https://gp03.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '彩票',
//             url: 'https://gp04.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '百老匯',
//             url: 'https://gp05.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '澳門永利皇宮',
//             url: 'https://gp06.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '奇蹟電遊',
//             url: 'https://gp07.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '太陽城',
//             url: 'https://gp08.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: 'Light-bet365',
//             url: 'https://gp09.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: 'Limit',
//             url: 'https://gp10.gtdemo.vip',
//             updatetime: '2019-11-19'
//         }
//     ],
//     vit: [
//         {
//             name: '電子娛樂',
//             url: 'https://www.gtdemo.vip/home.php',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '戰神',
//             url: 'https://gp03.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '彩票',
//             url: 'https://gp04.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '百老匯',
//             url: 'https://gp05.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '澳門永利皇宮',
//             url: 'https://gp06.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '奇蹟電遊',
//             url: 'https://gp07.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '太陽城',
//             url: 'https://gp08.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: 'Light-bet365',
//             url: 'https://gp09.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: 'Limit',
//             url: 'https://gp10.gtdemo.vip',
//             updatetime: '2019-11-19'
//         }
//     ],
//     ind: [
//         {
//             name: '電子娛樂',
//             url: 'https://www.gtdemo.vip/home.php',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '戰神',
//             url: 'https://gp03.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '彩票',
//             url: 'https://gp04.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '百老匯',
//             url: 'https://gp05.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '澳門永利皇宮',
//             url: 'https://gp06.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '奇蹟電遊',
//             url: 'https://gp07.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: '太陽城',
//             url: 'https://gp08.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: 'Light-bet365',
//             url: 'https://gp09.gtdemo.vip',
//             updatetime: '2019-11-19'
//         },
//         {
//             name: 'Limit',
//             url: 'https://gp10.gtdemo.vip',
//             updatetime: '2019-11-19'
//         }
//     ]
// }


let demoList = document.querySelector('.demo');

for (let i = 0; i < demoProfile[lan].length; i++) {

    var demoPicture = '';
    var gp = '';

    if (i < 8) {
        gp = 'gp0' + (i + 2)
    } else {
        gp = 'gp' + (i + 2)
    }
    var pictureLightbox = '';
    for(let j = 0; j < demoProfile[lan][i].img.length ; j++){
        pictureLightbox += `
        <div data-toggle="lightbox" data-gallery="hidden-images${i}"
            data-remote="img/${gp}/${lan}/${demoProfile[lan][i].img[j]}.png" style="width: 200px;">
        </div>
        `
    }

    demoPicture = `
        <a href="img/${gp}/${lan}/demoimg1.png" class="w-100" data-toggle="lightbox"
            data-gallery="hidden-images${i}">
            <img src="img/${gp}/${lan}/demo.png" style="width: 500px;" class="img-fluid">
        </a>
        <!-- elements not showing, use data-remote -->
        ${pictureLightbox}
        `

    demo += `
        <div class="col-4 mb-3">
            <div class="card">
                ${demoPicture}
                <div class="card-body">
                    <div>
                        <small>展示名稱：${demoProfile[lan][i].name}</small>
                    </div>
                    <div>
                        <small>展示網址：<a href="${demoProfile[lan][i].url}">${demoProfile.tw[i].url}</a></small>
                    </div>
                    <div>
                        <small>更新日期：${demoProfile[lan][i].updatetime}</small>
                    </div>
                </div>
            </div>
        </div>
        `
    demoList.innerHTML = demo;
}

// app
var app = ''
// var appProfile = [
//     {
//         logo: 'gpk2demo-03-apk.png',
//         name: 'GPK演示站',
//         code: ['gpk2demo-03-apk','gpk2demo-03-ios'],
//         download: ['http://andl.gpk17.com/gapp.php?c=Z3BrMmRlbW8tMDMtYXBr',
//                     'https://ios.gpk17.com/gios.php?g=Z3BrMmRlbW8tMDMtaW9z',
//                     'http://andl.gpk17.com/download/app.php?c=Z3BrMmRlbW8tMDM=',
//                     'https://ios.gpk17.com/download/app.php?g=Z3BrMmRlbW8tMDM='
//                     ],
//         updatetime: '2019-11-19'
//     },
//     {
//         logo: 'gpk2demo-apk.png',
//         name: 'GPK2DEMO',
//         code: ['gpk2demo-apk','gpk2demo-ios'],
//         download: ['https://andl.gpk17.com/gapp.php?c=Z3BrMmRlbW8tYXBr',
//                     'https://ios.gpk17.com/gios.php?g=Z3BrMmRlbW8taW9z',
//                     'https://andl.gpk17.com/download/app.php?c=Z3BrMmRlbW8=',
//                     'https://ios.gpk17.com/download/app.php?g=Z3BrMmRlbW8='
//                     ],
//         updatetime: '2019-11-19'
//     },
//     {
//         logo: 'gpk2demo-w-apk.png',
//         name: 'GPK2DEMO橫向',
//         code: ['gpk2demo-w-apk','gpk2demo-w-ios'],
//         download: ['https://andl.gpk17.com/gapp.php?c=Z3BrMmRlbW8tdy1hcGs=',
//                     'https://ios.gpk17.com/gios.php?g=Z3BrMmRlbW8tdy1pb3M=',
//                     'https://andl.gpk17.com/download/app.php?c=Z3BrMmRlbW8tdw==',
//                     'https://ios.gpk17.com/download/app.php?g=Z3BrMmRlbW8tdw=='
//                     ],
//         updatetime: '2019-11-19'
//     }
// ]

let appList = document.querySelector('.app');

for (let i = 0; i < appProfile.length; i++) {
    var downloadSite = '';
    for(let j = 0; j < appProfile[i].download.length ; j++){
        downloadSite += `
        <a href="${appProfile[i].download[j]}">${appProfile[i].download[j]}</a>
        `
    }
    
    app += `
    <div class="col-4 mb-3">
        <div class="card">
            <img src="img/APP/${appProfile[i].logo}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <div>
                    <small>APP名稱：${appProfile[i].name}</small>
                </div>
                <div>
                    <small>API代碼：${appProfile[i].code}</small>
                </div>
                <div>
                    <small>${downloadSite}</small>
                </div>
                <div>
                    <small>更新日期：2019-11-19</small>
                </div>
            </div>
        </div>
    </div>
    `

    appList.innerHTML = app;
}

// casinoList
var casino = ''
// var casinoProfile = [
//     {
//         logo: 'CQ9.png',
//         name: 'CQ9'
//     },
//     {
//         logo: 'gpk2.png',
//         name: 'gpk2'
//     },
//     {
//         logo: 'IG.png',
//         name: 'IG'
//     },
//     {
//         logo: 'JDB.png',
//         name: 'JDB'
//     },
//     {
//         logo: 'KG.png',
//         name: 'KG'
//     },
//     {
//         logo: 'MEGA.png',
//         name: 'MEGA'
//     },
//     {
//         logo: 'MG.png',
//         name: 'MG'
//     },
//     {
//         logo: 'MGPLUS.png',
//         name: 'MGPLUS'
//     },
//     {
//         logo: 'NWG.png',
//         name: 'NWG'
//     },
//     {
//         logo: 'PGS.png',
//         name: 'PGS'
//     },
//     {
//         logo: 'PT.png',
//         name: 'PT'
//     },
//     {
//         logo: 'RG.png',
//         name: 'RG'
//     },
//     {
//         logo: 'VG.png',
//         name: 'VG'
//     }
// ]

let casinoList = document.querySelector('.casino');

for (let i = 0; i < casinoProfile.length; i++) {
    casino += `
    <div class="col-3">
        <div class="card mb-3">
            <div class ="casinopic px-2"><img src="img/casinologo/${casinoProfile[i].logo}" class="card-img-top" alt="${casinoProfile[i].logo}"></div>
            <div class="card-body">
                <p class="card-text text-center">${casinoProfile[i].name}</p>
            </div>
        </div>
    </div>
    `

    casinoList.innerHTML = casino;
}