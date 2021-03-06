// JSON raw data, logic to generate csv file written at the end of the file. See userList.csv

const converter = require('json-2-csv');
const fs = require('fs')

const userList = [
    {
      id: "wiumfo",
      contact: {
        name: "Vitia Minnie",
        email: "VitiaMinnie298@email.com"
      },
      account: {
        balance: 500
      },
      charges: [
        {
          id: "3608t0",
          amount: 254.03,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "m03sw3",
      contact: {
        name: "Fancy Lynnett",
        email: "FancyLynnett388@email.com"
      },
      account: {
        balance: 656.35
      },
      charges: [
        {
          id: "gj5mq9",
          amount: 628.13,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "yxpx4a",
      contact: {
        name: "Marla Dolores",
        email: "MarlaDolores78@email.com"
      },
      account: {
        balance: 209.66
      },
      charges: [
        {
          id: "3pcvtm",
          amount: 274.58,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        },
        {
          id: "5spemj",
          amount: 274.59,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cjrs8a",
      contact: {
        name: "Elnora Tiffanie",
        email: "ElnoraTiffanie356@email.com"
      },
      account: {
        balance: 2.27
      },
      charges: [
        {
          id: "yu9nh6",
          amount: 489.91,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "sjk084",
      contact: {
        name: "Colene Jeniece",
        email: "ColeneJeniece98@email.com"
      },
      account: {
        balance: 836.52
      },
      charges: [
        {
          id: "gfm7in",
          amount: 236.78,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "c95lle",
      contact: {
        name: "Reina Norri",
        email: "ReinaNorri356@email.com"
      },
      account: {
        balance: 143.96
      },
      charges: [
        {
          id: "han6xq",
          amount: 570.96,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "hqb99r",
      contact: {
        name: "Gaye Natka",
        email: "GayeNatka230@email.com"
      },
      account: {
        balance: 13.38
      },
      charges: [
        {
          id: "ihmwqq",
          amount: 341.33,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "27t06g",
      contact: {
        name: "Helenka Stacy",
        email: "HelenkaStacy329@email.com"
      },
      account: {
        balance: 9.63
      },
      charges: [
        {
          id: "vmz3ur",
          amount: 554.26,
          datetime: "2020-11-30T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "w5nc3m",
      contact: {
        name: "Fay Billie",
        email: "FayBillie269@email.com"
      },
      account: {
        balance: 1236.83
      },
      charges: [
        {
          id: "lri4zb",
          amount: 689.45,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "01mk2s",
      contact: {
        name: "Chastity Rafaelia",
        email: "ChastityRafaelia295@email.com"
      },
      account: {
        balance: 16.87
      },
      charges: [
        {
          id: "6w4bxa",
          amount: 233,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "17wjd7",
      contact: {
        name: "Lurline Kathleen",
        email: "LurlineKathleen236@email.com"
      },
      account: {
        balance: 170.74
      },
      charges: [
        {
          id: "yfrljy",
          amount: 262.47,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "tpnutt",
      contact: {
        name: "Brear Merrili",
        email: "BrearMerrili365@email.com"
      },
      account: {
        balance: 799.41
      },
      charges: [
        {
          id: "5pk0c9",
          amount: 518.43,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "pnxyjs",
      contact: {
        name: "Bridgette Lyndsay",
        email: "BridgetteLyndsay175@email.com"
      },
      account: {
        balance: 478.61
      },
      charges: [
        {
          id: "byrlo5",
          amount: 480.47,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "wt2d8j",
      contact: {
        name: "Violet Berty",
        email: "VioletBerty376@email.com"
      },
      account: {
        balance: 145.84
      },
      charges: [
        {
          id: "7c5rnp",
          amount: 533.07,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "gfsx75",
      contact: {
        name: "Blancha Coretta",
        email: "BlanchaCoretta263@email.com"
      },
      account: {
        balance: 642.43
      },
      charges: [
        {
          id: "dcdow1",
          amount: 513.77,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "f054j2",
      contact: {
        name: "Dinnie Cindy",
        email: "DinnieCindy76@email.com"
      },
      account: {
        balance: 66.31
      },
      charges: [
        {
          id: "qcu5j7",
          amount: 287.15,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "84u6ea",
      contact: {
        name: "Bamby Valenka",
        email: "BambyValenka222@email.com"
      },
      account: {
        balance: 337.63
      },
      charges: [
        {
          id: "1n5wah",
          amount: 300.6,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "zsp59o",
      contact: {
        name: "Kala Bobbette",
        email: "KalaBobbette163@email.com"
      },
      account: {
        balance: 11.74
      },
      charges: [
        {
          id: "83bxbn",
          amount: 447,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "3t7id8",
      contact: {
        name: "Evangeline Steffane",
        email: "EvangelineSteffane293@email.com"
      },
      account: {
        balance: -184.63
      },
      charges: [
        {
          id: "mcl62l",
          amount: 544.98,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "v5sl5g",
      contact: {
        name: "Bobby Flossie",
        email: "BobbyFlossie150@email.com"
      },
      account: {
        balance: 1357.86
      },
      charges: [
        {
          id: "oadwra",
          amount: 467.77,
          datetime: "2020-11-13T00:00:00.000Z",
          status: "New"
        },
        {
          id: "kyrtw6",
          amount: 467.77,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "htigeq",
      contact: {
        name: "Sonny Lucretia",
        email: "SonnyLucretia115@email.com"
      },
      account: {
        balance: 174.29
      },
      charges: [
        {
          id: "9lxcng",
          amount: 202.72,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ecyb67",
      contact: {
        name: "Juline Genia",
        email: "JulineGenia241@email.com"
      },
      account: {
        balance: 26.56
      },
      charges: [
        {
          id: "t0fo2i",
          amount: 257.92,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "7fjxt0",
      contact: {
        name: "Wynny Philippa",
        email: "WynnyPhilippa408@email.com"
      },
      account: {
        balance: 10.94
      },
      charges: [
        {
          id: "1lqcvh",
          amount: 556.49,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "qx58j4",
      contact: {
        name: "Sallee Justinn",
        email: "SalleeJustinn181@email.com"
      },
      account: {
        balance: 231.21
      },
      charges: [
        {
          id: "2e3jzc",
          amount: 237.53,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "rrkagj",
      contact: {
        name: "Elysha Phil",
        email: "ElyshaPhil148@email.com"
      },
      account: {
        balance: 185.9
      },
      charges: [
        {
          id: "q3594x",
          amount: 253.43,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "79x0l1",
      contact: {
        name: "Yvette Bridget",
        email: "YvetteBridget323@email.com"
      },
      account: {
        balance: 3.14
      },
      charges: [
        {
          id: "qjx4e2",
          amount: 672.63,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        },
        {
          id: "5axj78",
          amount: 672.63,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "sb8hxf",
      contact: {
        name: "Georgie Peggie",
        email: "GeorgiePeggie297@email.com"
      },
      account: {
        balance: 671.2
      },
      charges: [
        {
          id: "t4885x",
          amount: 482.03,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ejhcay",
      contact: {
        name: "Cate Lorri",
        email: "CateLorri297@email.com"
      },
      account: {
        balance: 669.95
      },
      charges: [
        {
          id: "2f1boe",
          amount: 267.68,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "j6i3pl",
      contact: {
        name: "Maible Crysta",
        email: "MaibleCrysta166@email.com"
      },
      account: {
        balance: 556.4
      },
      charges: [
        {
          id: "l7ug9x",
          amount: 600.61,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ei1jv4",
      contact: {
        name: "Anjela Arleyne",
        email: "AnjelaArleyne343@email.com"
      },
      account: {
        balance: 32.76
      },
      charges: [
        {
          id: "3xjz9m",
          amount: 440.93,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "g46zdx",
      contact: {
        name: "Jessalyn Deeanne",
        email: "JessalynDeeanne388@email.com"
      },
      account: {
        balance: 90.53
      },
      charges: [
        {
          id: "b2dy2k",
          amount: 196.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "7mvgsc",
      contact: {
        name: "Carlye Elnora",
        email: "CarlyeElnora197@email.com"
      },
      account: {
        balance: 3602.75
      },
      charges: [
        {
          id: "eatyun",
          amount: 383.09,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cxady1",
      contact: {
        name: "Doro Kellia",
        email: "DoroKellia175@email.com"
      },
      account: {
        balance: 464.81
      },
      charges: [
        {
          id: "egckud",
          amount: 464,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "vicw5b",
      contact: {
        name: "Cori Bathsheba",
        email: "CoriBathsheba394@email.com"
      },
      account: {
        balance: 1145.24
      },
      charges: [
        {
          id: "p9xym3",
          amount: 397.5,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "apep9i",
      contact: {
        name: "Crissy Evelyn",
        email: "CrissyEvelyn333@email.com"
      },
      account: {
        balance: 125.68
      },
      charges: [
        {
          id: "dyhnn5",
          amount: 575,
          datetime: "2020-11-16T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "m7nfo8",
      contact: {
        name: "Heidie Bonnibelle",
        email: "HeidieBonnibelle175@email.com"
      },
      account: {
        balance: 289.54
      },
      charges: [
        {
          id: "mz4ryc",
          amount: 309.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "fx1q4o",
      contact: {
        name: "Benita Ophelia",
        email: "BenitaOphelia145@email.com"
      },
      account: {
        balance: 15.43
      },
      charges: [
        {
          id: "euaxr9",
          amount: 360.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "pl9ll2",
      contact: {
        name: "Hannie Ellen",
        email: "HannieEllen297@email.com"
      },
      account: {
        balance: -2.51
      },
      charges: [
        {
          id: "xd5ncw",
          amount: 197.25,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "3d7j16",
      contact: {
        name: "Marcella Lory",
        email: "MarcellaLory406@email.com"
      },
      account: {
        balance: 9841.04
      },
      charges: [
        {
          id: "568isq",
          amount: 534.89,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "zkalv2",
      contact: {
        name: "Carlota Fern",
        email: "CarlotaFern407@email.com"
      },
      account: {
        balance: 2817.83
      },
      charges: [
        {
          id: "3tmxgm",
          amount: 680.72,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "dlplzp",
      contact: {
        name: "Devin Korney",
        email: "DevinKorney338@email.com"
      },
      account: {
        balance: 409.8
      },
      charges: [
        {
          id: "z2jald",
          amount: 210,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "d3pjaw",
      contact: {
        name: "Laurella Doretta",
        email: "LaurellaDoretta232@email.com"
      },
      account: {
        balance: 63.75
      },
      charges: [
        {
          id: "4hx4w9",
          amount: 390.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "eo3vnb",
      contact: {
        name: "Gwyn Amelie",
        email: "GwynAmelie192@email.com"
      },
      account: {
        balance: 24.81
      },
      charges: [
        {
          id: "87oexp",
          amount: 505,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        },
        {
          id: "j0aq9a",
          amount: 505,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "9dkfyp",
      contact: {
        name: "Haley Adore",
        email: "HaleyAdore402@email.com"
      },
      account: {
        balance: 2125.23
      },
      charges: [
        {
          id: "vx4l48",
          amount: 302.18,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "vw3p9p",
      contact: {
        name: "Coraline Rozanna",
        email: "CoralineRozanna76@email.com"
      },
      account: {
        balance: 30.01
      },
      charges: [
        {
          id: "8c63kp",
          amount: 429.06,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "3cfmvs",
      contact: {
        name: "Mariann Nolana",
        email: "MariannNolana165@email.com"
      },
      account: {
        balance: 400.64
      },
      charges: [
        {
          id: "opvmtv",
          amount: 115,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "jgtpwe",
      contact: {
        name: "Gusty Christabel",
        email: "GustyChristabel293@email.com"
      },
      account: {
        balance: 441.26
      },
      charges: [
        {
          id: "o5ufbh",
          amount: 275.25,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cdk8jd",
      contact: {
        name: "Peri Mirabella",
        email: "PeriMirabella376@email.com"
      },
      account: {
        balance: 105.15
      },
      charges: [
        {
          id: "jre8x1",
          amount: 459,
          datetime: "2020-11-30T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "bj53he",
      contact: {
        name: "Fredra Ethyl",
        email: "FredraEthyl112@email.com"
      },
      account: {
        balance: 256.94
      },
      charges: [
        {
          id: "h0etee",
          amount: 749.7,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ieih37",
      contact: {
        name: "Tabatha Reena",
        email: "TabathaReena168@email.com"
      },
      account: {
        balance: 3986.29
      },
      charges: [
        {
          id: "1rovb0",
          amount: 164.75,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "sjdc01",
      contact: {
        name: "Barbara-anne Marcia",
        email: "Barbara-anneMarcia321@email.com"
      },
      account: {
        balance: 1.75
      },
      charges: [
        {
          id: "qwnwhf",
          amount: 621.87,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ifp4c7",
      contact: {
        name: "Vida Tiffani",
        email: "VidaTiffani168@email.com"
      },
      account: {
        balance: 2541.4
      },
      charges: [
        {
          id: "oi344k",
          amount: 653.97,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "tb1q5s",
      contact: {
        name: "Gretal Winnie",
        email: "GretalWinnie170@email.com"
      },
      account: {
        balance: -164.98
      },
      charges: [
        {
          id: "k4wxgu",
          amount: 357.99,
          datetime: "2020-11-30T00:00:00.000Z",
          status: "New"
        },
        {
          id: "ed5y4z",
          amount: 358,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "2vr5hc",
      contact: {
        name: "Darbie Charmine",
        email: "DarbieCharmine410@email.com"
      },
      account: {
        balance: 128.36
      },
      charges: [
        {
          id: "npv536",
          amount: 443.82,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "h7ow0i",
      contact: {
        name: "Dorette Erminie",
        email: "DoretteErminie344@email.com"
      },
      account: {
        balance: 127.01
      },
      charges: [
        {
          id: "o4ad19",
          amount: 315.82,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cm1fwa",
      contact: {
        name: "Tally Dorice",
        email: "TallyDorice289@email.com"
      },
      account: {
        balance: 13.71
      },
      charges: [
        {
          id: "z992i2",
          amount: 622.17,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "djim81",
      contact: {
        name: "Lorne Shaylynn",
        email: "LorneShaylynn274@email.com"
      },
      account: {
        balance: 221.62
      },
      charges: [
        {
          id: "7cv0is",
          amount: 255.9,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "lkvkbl",
      contact: {
        name: "Alix Mildred",
        email: "AlixMildred405@email.com"
      },
      account: {
        balance: 43.15
      },
      charges: [
        {
          id: "o0gnk3",
          amount: 449.99,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "60wkem",
      contact: {
        name: "Jessi Kendra",
        email: "JessiKendra251@email.com"
      },
      account: {
        balance: 41.94
      },
      charges: [
        {
          id: "3cbfak",
          amount: 389.31,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "6djfs9",
      contact: {
        name: "Blondy Annmaria",
        email: "BlondyAnnmaria149@email.com"
      },
      account: {
        balance: 5.54
      },
      charges: [
        {
          id: "dvdyte",
          amount: 559.13,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "pxuwai",
      contact: {
        name: "Chelsea Dorisa",
        email: "ChelseaDorisa233@email.com"
      },
      account: {
        balance: 2.36
      },
      charges: [
        {
          id: "v2ojpj",
          amount: 518.12,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "u2kbdv",
      contact: {
        name: "Faustine Pavia",
        email: "FaustinePavia355@email.com"
      },
      account: {
        balance: 223.4
      },
      charges: [
        {
          id: "9xecru",
          amount: 487.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "u4pqjn",
      contact: {
        name: "Vinita Wylma",
        email: "VinitaWylma96@email.com"
      },
      account: {
        balance: 414.85
      },
      charges: [
        {
          id: "73xpil",
          amount: 625,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "xy712f",
      contact: {
        name: "Britni Othilie",
        email: "BritniOthilie292@email.com"
      },
      account: {
        balance: 7.19
      },
      charges: [
        {
          id: "cj2o45",
          amount: 221.94,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cnxc2x",
      contact: {
        name: "Dorolice Millie",
        email: "DoroliceMillie159@email.com"
      },
      account: {
        balance: 869.32
      },
      charges: [
        {
          id: "y8e3dc",
          amount: 414.68,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ak7uxe",
      contact: {
        name: "Mariya Van",
        email: "MariyaVan415@email.com"
      },
      account: {
        balance: 682.67
      },
      charges: [
        {
          id: "kmdkfl",
          amount: 173.75,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "j9oia1",
      contact: {
        name: "Michaeline Glad",
        email: "MichaelineGlad318@email.com"
      },
      account: {
        balance: 66.55
      },
      charges: [
        {
          id: "be10i2",
          amount: 575,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "c546g1",
      contact: {
        name: "Eve Eden",
        email: "EveEden73@email.com"
      },
      account: {
        balance: 633.96
      },
      charges: [
        {
          id: "1vlxyh",
          amount: 875,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "d03wws",
      contact: {
        name: "Libby Johnath",
        email: "LibbyJohnath126@email.com"
      },
      account: {
        balance: 690.83
      },
      charges: [
        {
          id: "0on2dz",
          amount: 501.49,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "bz4b0v",
      contact: {
        name: "Tobey Barbaraanne",
        email: "TobeyBarbaraanne401@email.com"
      },
      account: {
        balance: 9.44
      },
      charges: [
        {
          id: "pirxso",
          amount: 276.54,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "kk3q2q",
      contact: {
        name: "Drona Winni",
        email: "DronaWinni327@email.com"
      },
      account: {
        balance: 1353
      },
      charges: [
        {
          id: "tp1d0i",
          amount: 626.88,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "xdyhzd",
      contact: {
        name: "Cherlyn Joly",
        email: "CherlynJoly332@email.com"
      },
      account: {
        balance: 56.51
      },
      charges: [
        {
          id: "2xqu2t",
          amount: 539.44,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "x665d2",
      contact: {
        name: "Georgia Kristin",
        email: "GeorgiaKristin238@email.com"
      },
      account: {
        balance: 82.4
      },
      charges: [
        {
          id: "7veg03",
          amount: 556.62,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "5o0i0u",
      contact: {
        name: "Elbertina Lynnelle",
        email: "ElbertinaLynnelle412@email.com"
      },
      account: {
        balance: 169.94
      },
      charges: [
        {
          id: "fmq6h5",
          amount: 565.02,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "qyzcx0",
      contact: {
        name: "Janetta Vally",
        email: "JanettaVally141@email.com"
      },
      account: {
        balance: 513.29
      },
      charges: [
        {
          id: "g8jpnf",
          amount: 369.63,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ta41vu",
      contact: {
        name: "Filide Mame",
        email: "FilideMame88@email.com"
      },
      account: {
        balance: 5495.96
      },
      charges: [
        {
          id: "jo1mzt",
          amount: 577.13,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "hmufyh",
      contact: {
        name: "Maren Elfrida",
        email: "MarenElfrida113@email.com"
      },
      account: {
        balance: 460.12
      },
      charges: [
        {
          id: "2kaf2g",
          amount: 248.55,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "mqheal",
      contact: {
        name: "Jackquelin Judith",
        email: "JackquelinJudith226@email.com"
      },
      account: {
        balance: 606.75
      },
      charges: [
        {
          id: "ic883e",
          amount: 249.9,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "46355g",
      contact: {
        name: "Florella Guillema",
        email: "FlorellaGuillema229@email.com"
      },
      account: {
        balance: 125.26
      },
      charges: [
        {
          id: "05fur3",
          amount: 669.6,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "v75qu4",
      contact: {
        name: "Agace Anatola",
        email: "AgaceAnatola395@email.com"
      },
      account: {
        balance: 199.93
      },
      charges: [
        {
          id: "44sl9t",
          amount: 199.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "oatxh6",
      contact: {
        name: "Dolly Glenna",
        email: "DollyGlenna307@email.com"
      },
      account: {
        balance: 3857.98
      },
      charges: [
        {
          id: "oarwvi",
          amount: 783.22,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "vu2bz6",
      contact: {
        name: "Tana Domini",
        email: "TanaDomini106@email.com"
      },
      account: {
        balance: 820.82
      },
      charges: [
        {
          id: "xzqiob",
          amount: 601.09,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "scs5bf",
      contact: {
        name: "Nessa Ginni",
        email: "NessaGinni118@email.com"
      },
      account: {
        balance: 283.76
      },
      charges: [
        {
          id: "w4e2k0",
          amount: 293.72,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "0qo2eb",
      contact: {
        name: "Belicia Daryl",
        email: "BeliciaDaryl126@email.com"
      },
      account: {
        balance: 420.13
      },
      charges: [
        {
          id: "4lj8nt",
          amount: 441.45,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "a0tgnl",
      contact: {
        name: "Lilia Berta",
        email: "LiliaBerta129@email.com"
      },
      account: {
        balance: -94.06
      },
      charges: [
        {
          id: "564prl",
          amount: 501.79,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "rrzubz",
      contact: {
        name: "Jacintha Leigha",
        email: "JacinthaLeigha305@email.com"
      },
      account: {
        balance: 460.18
      },
      charges: [
        {
          id: "ah5szf",
          amount: 251.29,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "stgwmi",
      contact: {
        name: "Valentia Olenka",
        email: "ValentiaOlenka172@email.com"
      },
      account: {
        balance: 4.91
      },
      charges: [
        {
          id: "nca6do",
          amount: 785.93,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "a87pmh",
      contact: {
        name: "Sharai Roanna",
        email: "SharaiRoanna238@email.com"
      },
      account: {
        balance: 2.32
      },
      charges: [
        {
          id: "ypbif2",
          amount: 459.99,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "nj7lrk",
      contact: {
        name: "Leeann Catherine",
        email: "LeeannCatherine216@email.com"
      },
      account: {
        balance: 3330.9
      },
      charges: [
        {
          id: "hnqvqc",
          amount: 200.02,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "bkly4y",
      contact: {
        name: "Leesa Emlyn",
        email: "LeesaEmlyn311@email.com"
      },
      account: {
        balance: 665.3
      },
      charges: [
        {
          id: "lqy9ol",
          amount: 453.22,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "c3ls8v",
      contact: {
        name: "Joleen Cassondra",
        email: "JoleenCassondra231@email.com"
      },
      account: {
        balance: 1958.96
      },
      charges: [
        {
          id: "bbvuz3",
          amount: 737.64,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "3i9y1g",
      contact: {
        name: "Alleen Jandy",
        email: "AlleenJandy218@email.com"
      },
      account: {
        balance: 46.83
      },
      charges: [
        {
          id: "ujcpn6",
          amount: 236.11,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "bshyff",
      contact: {
        name: "Cayla Trisha",
        email: "CaylaTrisha184@email.com"
      },
      account: {
        balance: 525.31
      },
      charges: [
        {
          id: "fhk2p5",
          amount: 645.88,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "883fkz",
      contact: {
        name: "Amata Catie",
        email: "AmataCatie108@email.com"
      },
      account: {
        balance: 321.41
      },
      charges: [
        {
          id: "xgglg5",
          amount: 797.25,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "2loo50",
      contact: {
        name: "Nyssa Rona",
        email: "NyssaRona391@email.com"
      },
      account: {
        balance: 8.85
      },
      charges: [
        {
          id: "0bhb95",
          amount: 747.45,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "kz0zue",
      contact: {
        name: "Corrina Rochelle",
        email: "CorrinaRochelle332@email.com"
      },
      account: {
        balance: 112.84
      },
      charges: [
        {
          id: "xdbu21",
          amount: 728.84,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "3mi9b2",
      contact: {
        name: "Minni Miguela",
        email: "MinniMiguela78@email.com"
      },
      account: {
        balance: -71.89
      },
      charges: [
        {
          id: "uh158z",
          amount: 427.68,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "19g6rz",
      contact: {
        name: "Lilia Willamina",
        email: "LiliaWillamina206@email.com"
      },
      account: {
        balance: 59.68
      },
      charges: [
        {
          id: "7xlhb5",
          amount: 802.75,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "vcws50",
      contact: {
        name: "Lucina Berta",
        email: "LucinaBerta369@email.com"
      },
      account: {
        balance: 18.19
      },
      charges: [
        {
          id: "ps0ltr",
          amount: 566.25,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "vr9ys5",
      contact: {
        name: "Debbie Harriott",
        email: "DebbieHarriott107@email.com"
      },
      account: {
        balance: 0.61
      },
      charges: [
        {
          id: "3cf7yd",
          amount: 564.01,
          datetime: "2020-11-20T00:00:00.000Z",
          status: "New"
        },
        {
          id: "eqp6wf",
          amount: 564.02,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "xzmzh3",
      contact: {
        name: "Elisa Catarina",
        email: "ElisaCatarina293@email.com"
      },
      account: {
        balance: 1285.42
      },
      charges: [
        {
          id: "9n6bsa",
          amount: 751.99,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "edjdgb",
      contact: {
        name: "Gwenneth Kyla",
        email: "GwennethKyla317@email.com"
      },
      account: {
        balance: 232.84
      },
      charges: [
        {
          id: "u63ilx",
          amount: 621.38,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "lybf2o",
      contact: {
        name: "Alethea Koo",
        email: "AletheaKoo148@email.com"
      },
      account: {
        balance: 35.55
      },
      charges: [
        {
          id: "xzqzb1",
          amount: 633.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "y0qhek",
      contact: {
        name: "Roxy Ki",
        email: "RoxyKi283@email.com"
      },
      account: {
        balance: 21.61
      },
      charges: [
        {
          id: "5n3v3p",
          amount: 709.35,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ihbgin",
      contact: {
        name: "Kerstin Ellissa",
        email: "KerstinEllissa316@email.com"
      },
      account: {
        balance: -490.66
      },
      charges: [
        {
          id: "5oaq6n",
          amount: 492.77,
          datetime: "2020-11-19T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "4ujdda",
      contact: {
        name: "Atlanta Jessy",
        email: "AtlantaJessy340@email.com"
      },
      account: {
        balance: 703.01
      },
      charges: [
        {
          id: "kmh9an",
          amount: 460.04,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "kvo1e4",
      contact: {
        name: "Verine Guinna",
        email: "VerineGuinna321@email.com"
      },
      account: {
        balance: -78.9
      },
      charges: [
        {
          id: "04gex5",
          amount: 585.22,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "862vy9",
      contact: {
        name: "Laraine Therine",
        email: "LaraineTherine272@email.com"
      },
      account: {
        balance: 443.17
      },
      charges: [
        {
          id: "w0vnb2",
          amount: 800.04,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ujvbld",
      contact: {
        name: "Eveleen Roberta",
        email: "EveleenRoberta74@email.com"
      },
      account: {
        balance: 126.87
      },
      charges: [
        {
          id: "vpveap",
          amount: 518.13,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ftzipo",
      contact: {
        name: "Kaycee Stacee",
        email: "KayceeStacee278@email.com"
      },
      account: {
        balance: 75.2
      },
      charges: [
        {
          id: "t9t0dp",
          amount: 633,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "wc0ev1",
      contact: {
        name: "Morganne Consuela",
        email: "MorganneConsuela315@email.com"
      },
      account: {
        balance: 283.43
      },
      charges: [
        {
          id: "7ttjvy",
          amount: 219.78,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "xxlko6",
      contact: {
        name: "Harlene Bab",
        email: "HarleneBab224@email.com"
      },
      account: {
        balance: 37.34
      },
      charges: [
        {
          id: "30t4nn",
          amount: 554.43,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "jchl26",
      contact: {
        name: "Sisile Rosella",
        email: "SisileRosella202@email.com"
      },
      account: {
        balance: -27.79
      },
      charges: [
        {
          id: "9jaxq5",
          amount: 298.31,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "8thgjj",
      contact: {
        name: "Coretta Anatola",
        email: "CorettaAnatola160@email.com"
      },
      account: {
        balance: 678.07
      },
      charges: [
        {
          id: "ufhev1",
          amount: 603.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "xc4s5c",
      contact: {
        name: "Kiley Chastity",
        email: "KileyChastity115@email.com"
      },
      account: {
        balance: 153.47
      },
      charges: [
        {
          id: "25t581",
          amount: 150.32,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "z1uua2",
      contact: {
        name: "Martynne Trisha",
        email: "MartynneTrisha386@email.com"
      },
      account: {
        balance: -620.68
      },
      charges: [
        {
          id: "yzwwj7",
          amount: 237.21,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "oykit6",
      contact: {
        name: "Lilith Delia",
        email: "LilithDelia226@email.com"
      },
      account: {
        balance: 480.08
      },
      charges: [
        {
          id: "knhi1w",
          amount: 471.51,
          datetime: "2020-11-18T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "yh7e89",
      contact: {
        name: "Jobyna Sayre",
        email: "JobynaSayre170@email.com"
      },
      account: {
        balance: 958.37
      },
      charges: [
        {
          id: "oxkmmy",
          amount: 406.6,
          datetime: "2020-11-30T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "l81c3i",
      contact: {
        name: "Carmencita Veda",
        email: "CarmencitaVeda208@email.com"
      },
      account: {
        balance: 312.1
      },
      charges: [
        {
          id: "ca3nvh",
          amount: 625.2,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ej94om",
      contact: {
        name: "Aleen Danya",
        email: "AleenDanya382@email.com"
      },
      account: {
        balance: 0
      },
      charges: [
        {
          id: "7k04et",
          amount: 444.38,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "guxuh4",
      contact: {
        name: "Sydney Dulci",
        email: "SydneyDulci204@email.com"
      },
      account: {
        balance: 303.51
      },
      charges: [
        {
          id: "rcp0y2",
          amount: 705.79,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        },
        {
          id: "afr5o7",
          amount: 705.8,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "15e94p",
      contact: {
        name: "Katharine Aime",
        email: "KatharineAime107@email.com"
      },
      account: {
        balance: 7.91
      },
      charges: [
        {
          id: "36xu3l",
          amount: 512.3,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ps59n7",
      contact: {
        name: "Marcela Meghan",
        email: "MarcelaMeghan321@email.com"
      },
      account: {
        balance: 0.46
      },
      charges: [
        {
          id: "uig91r",
          amount: 636.62,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "jzkeie",
      contact: {
        name: "Dorelle Kerstin",
        email: "DorelleKerstin96@email.com"
      },
      account: {
        balance: 1815.88
      },
      charges: [
        {
          id: "etqc1k",
          amount: 282.98,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "r2z6g4",
      contact: {
        name: "Zahara Sibyl",
        email: "ZaharaSibyl99@email.com"
      },
      account: {
        balance: 105.23
      },
      charges: [
        {
          id: "2zf9st",
          amount: 465.37,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "njf4ia",
      contact: {
        name: "Elset Danell",
        email: "ElsetDanell343@email.com"
      },
      account: {
        balance: 42.94
      },
      charges: [
        {
          id: "wewoaa",
          amount: 926.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "4f5pr0",
      contact: {
        name: "Devan Analiese",
        email: "DevanAnaliese406@email.com"
      },
      account: {
        balance: 0.17
      },
      charges: [
        {
          id: "61t9c5",
          amount: 749,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "sm7570",
      contact: {
        name: "Laryssa Leticia",
        email: "LaryssaLeticia391@email.com"
      },
      account: {
        balance: 697.24
      },
      charges: [
        {
          id: "8lxvkp",
          amount: 451.38,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "6vi6h4",
      contact: {
        name: "Nananne Jacquenetta",
        email: "NananneJacquenetta266@email.com"
      },
      account: {
        balance: 1741.08
      },
      charges: [
        {
          id: "bdzjrt",
          amount: 661.47,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "qz0d7a",
      contact: {
        name: "Joann Raeann",
        email: "JoannRaeann380@email.com"
      },
      account: {
        balance: 13410.76
      },
      charges: [
        {
          id: "zx4miu",
          amount: 476.6,
          datetime: "2020-11-30T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ayz077",
      contact: {
        name: "Chickie Jehanna",
        email: "ChickieJehanna355@email.com"
      },
      account: {
        balance: 14.99
      },
      charges: [
        {
          id: "c4jcfx",
          amount: 1030.5,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "tm6i68",
      contact: {
        name: "Storm Bryna",
        email: "StormBryna295@email.com"
      },
      account: {
        balance: 1620.56
      },
      charges: [
        {
          id: "ypon7w",
          amount: 209.96,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "0p1ju4",
      contact: {
        name: "Carey Bren",
        email: "CareyBren408@email.com"
      },
      account: {
        balance: 800
      },
      charges: [
        {
          id: "kwboom",
          amount: 468.92,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "hgmym6",
      contact: {
        name: "Jillie Hyacinthia",
        email: "JillieHyacinthia287@email.com"
      },
      account: {
        balance: 85.57
      },
      charges: [
        {
          id: "sxc56s",
          amount: 772.38,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "4lpadl",
      contact: {
        name: "Ilysa Kitty",
        email: "IlysaKitty309@email.com"
      },
      account: {
        balance: 1251.68
      },
      charges: [
        {
          id: "he9pyr",
          amount: 516.86,
          datetime: "2020-11-30T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "mtim83",
      contact: {
        name: "Eachelle Ardra",
        email: "EachelleArdra173@email.com"
      },
      account: {
        balance: -53.52
      },
      charges: [
        {
          id: "mepcd5",
          amount: 577.66,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "c5xriw",
      contact: {
        name: "Jeanelle Thelma",
        email: "JeanelleThelma272@email.com"
      },
      account: {
        balance: 125.53
      },
      charges: [
        {
          id: "6j0h89",
          amount: 653.06,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "vozeyd",
      contact: {
        name: "Maighdiln Jessika",
        email: "MaighdilnJessika139@email.com"
      },
      account: {
        balance: 168.67
      },
      charges: [
        {
          id: "q0484l",
          amount: 891,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "9m3llx",
      contact: {
        name: "Frank Laureen",
        email: "FrankLaureen156@email.com"
      },
      account: {
        balance: 2321.62
      },
      charges: [
        {
          id: "rtp0js",
          amount: 464.63,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "6xypvp",
      contact: {
        name: "Shandee Olive",
        email: "ShandeeOlive168@email.com"
      },
      account: {
        balance: 93.43
      },
      charges: [
        {
          id: "ry2atq",
          amount: 750.42,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cqoegf",
      contact: {
        name: "Cody Alix",
        email: "CodyAlix154@email.com"
      },
      account: {
        balance: 1279.13
      },
      charges: [
        {
          id: "ywnvt0",
          amount: 526.17,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "9nu3h6",
      contact: {
        name: "Celie Leshia",
        email: "CelieLeshia215@email.com"
      },
      account: {
        balance: 226.68
      },
      charges: [
        {
          id: "buxyv1",
          amount: 609.36,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "hvef5m",
      contact: {
        name: "Ardine Annecorinne",
        email: "ArdineAnnecorinne259@email.com"
      },
      account: {
        balance: 988.63
      },
      charges: [
        {
          id: "0use72",
          amount: 700.74,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "xvuqfa",
      contact: {
        name: "Vittoria Maddie",
        email: "VittoriaMaddie253@email.com"
      },
      account: {
        balance: 20.4
      },
      charges: [
        {
          id: "09qn18",
          amount: 465.27,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "4g0fcu",
      contact: {
        name: "Valeda Nadean",
        email: "ValedaNadean351@email.com"
      },
      account: {
        balance: 0
      },
      charges: [
        {
          id: "q81fe8",
          amount: 350.56,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "9o0sv3",
      contact: {
        name: "Norine Shellie",
        email: "NorineShellie299@email.com"
      },
      account: {
        balance: 335
      },
      charges: [
        {
          id: "a31jp8",
          amount: 334.52,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        },
        {
          id: "tqs70k",
          amount: 334.52,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "kwyvzq",
      contact: {
        name: "Dotti Caryn",
        email: "DottiCaryn363@email.com"
      },
      account: {
        balance: 764.53
      },
      charges: [
        {
          id: "x270jp",
          amount: 385.66,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "9sdmw1",
      contact: {
        name: "Marylou Harli",
        email: "MarylouHarli143@email.com"
      },
      account: {
        balance: 439.69
      },
      charges: [
        {
          id: "ah4ut2",
          amount: 360.46,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "agyrz0",
      contact: {
        name: "Miguelita Hilary",
        email: "MiguelitaHilary180@email.com"
      },
      account: {
        balance: 458.12
      },
      charges: [
        {
          id: "ygqyet",
          amount: 414.3,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ty9y1n",
      contact: {
        name: "Angelica Beatrisa",
        email: "AngelicaBeatrisa324@email.com"
      },
      account: {
        balance: 1216.69
      },
      charges: [
        {
          id: "h2rqen",
          amount: 413.94,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "76pmb8",
      contact: {
        name: "Ryann Bertina",
        email: "RyannBertina327@email.com"
      },
      account: {
        balance: 0
      },
      charges: [
        {
          id: "ma2uh7",
          amount: 783.01,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "yevucq",
      contact: {
        name: "Joscelin Cecily",
        email: "JoscelinCecily221@email.com"
      },
      account: {
        balance: 212.73
      },
      charges: [
        {
          id: "np5vcp",
          amount: 219.25,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "73k1pp",
      contact: {
        name: "Fayina Zarah",
        email: "FayinaZarah99@email.com"
      },
      account: {
        balance: -17.85
      },
      charges: [
        {
          id: "qvtz2z",
          amount: 832.59,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "yssx9v",
      contact: {
        name: "Danika Alena",
        email: "DanikaAlena290@email.com"
      },
      account: {
        balance: 3268.85
      },
      charges: [
        {
          id: "dym0iu",
          amount: 1054.18,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "r3g6z9",
      contact: {
        name: "Kathlin Bertie",
        email: "KathlinBertie220@email.com"
      },
      account: {
        balance: 573.51
      },
      charges: [
        {
          id: "wdnib5",
          amount: 417.33,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "pu38pl",
      contact: {
        name: "Adore Shanie",
        email: "AdoreShanie350@email.com"
      },
      account: {
        balance: 0.68
      },
      charges: [
        {
          id: "osb9qi",
          amount: 723.38,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ahqrtn",
      contact: {
        name: "Beulah Lorie",
        email: "BeulahLorie311@email.com"
      },
      account: {
        balance: 769.64
      },
      charges: [
        {
          id: "b4agtv",
          amount: 797.01,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "rlwte0",
      contact: {
        name: "Vilhelmina Dorita",
        email: "VilhelminaDorita397@email.com"
      },
      account: {
        balance: 1950.55
      },
      charges: [
        {
          id: "c5pyrs",
          amount: 605.25,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "q9uc2q",
      contact: {
        name: "Maurine Alicea",
        email: "MaurineAlicea385@email.com"
      },
      account: {
        balance: 60.83
      },
      charges: [
        {
          id: "nlofaw",
          amount: 642.9,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "qjn649",
      contact: {
        name: "Goldi Joletta",
        email: "GoldiJoletta364@email.com"
      },
      account: {
        balance: 5.56
      },
      charges: [
        {
          id: "jm9b76",
          amount: 470.96,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "os88ly",
      contact: {
        name: "Dulsea Zondra",
        email: "DulseaZondra202@email.com"
      },
      account: {
        balance: 3810.36
      },
      charges: [
        {
          id: "t7hwdc",
          amount: 1125.5,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "5b3c9a",
      contact: {
        name: "Ursulina Deena",
        email: "UrsulinaDeena377@email.com"
      },
      account: {
        balance: 164.15
      },
      charges: [
        {
          id: "h3okcy",
          amount: 547.57,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "2yjq8f",
      contact: {
        name: "Aggi Fleur",
        email: "AggiFleur339@email.com"
      },
      account: {
        balance: 0
      },
      charges: [
        {
          id: "55guqm",
          amount: 621.35,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cm19r3",
      contact: {
        name: "Aubry Myrta",
        email: "AubryMyrta214@email.com"
      },
      account: {
        balance: -64.87
      },
      charges: [
        {
          id: "g0ywtn",
          amount: 615.35,
          datetime: "2020-11-24T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "xhx7es",
      contact: {
        name: "Aindrea Clarette",
        email: "AindreaClarette281@email.com"
      },
      account: {
        balance: 392.22
      },
      charges: [
        {
          id: "w6l67f",
          amount: 641,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "fix35t",
      contact: {
        name: "Marybelle Mala",
        email: "MarybelleMala248@email.com"
      },
      account: {
        balance: 42.65
      },
      charges: [
        {
          id: "abn3ki",
          amount: 466.1,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "y525wh",
      contact: {
        name: "Joleen Juli",
        email: "JoleenJuli173@email.com"
      },
      account: {
        balance: 543.89
      },
      charges: [
        {
          id: "w6fjgo",
          amount: 505.25,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "a6vl6g",
      contact: {
        name: "Eba Amber",
        email: "EbaAmber83@email.com"
      },
      account: {
        balance: 533.45
      },
      charges: [
        {
          id: "wu5sc9",
          amount: 566.17,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "trmu2g",
      contact: {
        name: "Orly Yoshi",
        email: "OrlyYoshi70@email.com"
      },
      account: {
        balance: 1058.53
      },
      charges: [
        {
          id: "n5ljql",
          amount: 675.4,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "pgjgwf",
      contact: {
        name: "Kelli Leigh",
        email: "KelliLeigh379@email.com"
      },
      account: {
        balance: 700
      },
      charges: [
        {
          id: "li8lob",
          amount: 755.72,
          datetime: "2020-11-30T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "345aqa",
      contact: {
        name: "Florida Bella",
        email: "FloridaBella145@email.com"
      },
      account: {
        balance: 1210.41
      },
      charges: [
        {
          id: "1doi9s",
          amount: 620.63,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "23qn7p",
      contact: {
        name: "Maud Shae",
        email: "MaudShae404@email.com"
      },
      account: {
        balance: 272.62
      },
      charges: [
        {
          id: "qotiy5",
          amount: 527.65,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "jv04q7",
      contact: {
        name: "Freida Misha",
        email: "FreidaMisha141@email.com"
      },
      account: {
        balance: 142.88
      },
      charges: [
        {
          id: "qz8zrt",
          amount: 366.22,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "dgvq9i",
      contact: {
        name: "Steffane Fanya",
        email: "SteffaneFanya261@email.com"
      },
      account: {
        balance: 1109.2
      },
      charges: [
        {
          id: "5717vz",
          amount: 275.57,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "reyay7",
      contact: {
        name: "Bennie Kelci",
        email: "BennieKelci156@email.com"
      },
      account: {
        balance: 81.13
      },
      charges: [
        {
          id: "a79ht5",
          amount: 664.67,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "4x4ak2",
      contact: {
        name: "Clio Joya",
        email: "ClioJoya200@email.com"
      },
      account: {
        balance: 1889.13
      },
      charges: [
        {
          id: "92fzgl",
          amount: 552.5,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "a370ba",
      contact: {
        name: "Gianna Brande",
        email: "GiannaBrande166@email.com"
      },
      account: {
        balance: 0.73
      },
      charges: [
        {
          id: "t66yc3",
          amount: 474.1,
          datetime: "2020-11-23T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "6qk6gx",
      contact: {
        name: "Roanna Christian",
        email: "RoannaChristian211@email.com"
      },
      account: {
        balance: 657.98
      },
      charges: [
        {
          id: "x2pyyg",
          amount: 221.5,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "pd5ka9",
      contact: {
        name: "Nolie Janis",
        email: "NolieJanis343@email.com"
      },
      account: {
        balance: 119.1
      },
      charges: [
        {
          id: "hslr1o",
          amount: 689.65,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "lbfvc1",
      contact: {
        name: "Calli Ferne",
        email: "CalliFerne90@email.com"
      },
      account: {
        balance: 85.64
      },
      charges: [
        {
          id: "oai828",
          amount: 1068.74,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "deinmy",
      contact: {
        name: "Missie Suzie",
        email: "MissieSuzie372@email.com"
      },
      account: {
        balance: 25.54
      },
      charges: [
        {
          id: "wq1d7v",
          amount: 506.48,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cx2in0",
      contact: {
        name: "Gracie Katy",
        email: "GracieKaty224@email.com"
      },
      account: {
        balance: 124.53
      },
      charges: [
        {
          id: "523hsy",
          amount: 572.35,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "9pn12c",
      contact: {
        name: "Cosetta Heidie",
        email: "CosettaHeidie177@email.com"
      },
      account: {
        balance: 1.03
      },
      charges: [
        {
          id: "re885c",
          amount: 605.7,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ls9zb7",
      contact: {
        name: "Ronni Lusa",
        email: "RonniLusa166@email.com"
      },
      account: {
        balance: 1910.94
      },
      charges: [
        {
          id: "dgf17b",
          amount: 647.19,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "g1cmrv",
      contact: {
        name: "Ronalda Glenine",
        email: "RonaldaGlenine120@email.com"
      },
      account: {
        balance: 613.87
      },
      charges: [
        {
          id: "u23trb",
          amount: 737.66,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "cnxgjw",
      contact: {
        name: "Xylia Sharon",
        email: "XyliaSharon200@email.com"
      },
      account: {
        balance: -602.67
      },
      charges: [
        {
          id: "hmposf",
          amount: 770.32,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "0sv897",
      contact: {
        name: "Tawsha Shela",
        email: "TawshaShela280@email.com"
      },
      account: {
        balance: 6.91
      },
      charges: [
        {
          id: "8y897q",
          amount: 443.99,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "6kzml6",
      contact: {
        name: "Suzie Lynnett",
        email: "SuzieLynnett296@email.com"
      },
      account: {
        balance: 35.34
      },
      charges: [
        {
          id: "nx8ql4",
          amount: 485.63,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "rq45hp",
      contact: {
        name: "Rebeca Tate",
        email: "RebecaTate148@email.com"
      },
      account: {
        balance: 382.4
      },
      charges: [
        {
          id: "gwsi9d",
          amount: 312.3,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "38h974",
      contact: {
        name: "Jennee Violetta",
        email: "JenneeVioletta81@email.com"
      },
      account: {
        balance: 2.13
      },
      charges: [
        {
          id: "zlgaxe",
          amount: 548.56,
          datetime: "2020-11-25T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "ev4582",
      contact: {
        name: "Mireille Doretta",
        email: "MireilleDoretta102@email.com"
      },
      account: {
        balance: 62.57
      },
      charges: [
        {
          id: "gyy4b2",
          amount: 282.76,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "m5o3jj",
      contact: {
        name: "Wallis Heloise",
        email: "WallisHeloise389@email.com"
      },
      account: {
        balance: -397.88
      },
      charges: [
        {
          id: "ryyfb5",
          amount: 828.48,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "mper6g",
      contact: {
        name: "Bobette Goldi",
        email: "BobetteGoldi142@email.com"
      },
      account: {
        balance: 413.61
      },
      charges: [
        {
          id: "h564t6",
          amount: 540.38,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "l8619r",
      contact: {
        name: "Cass Gabi",
        email: "CassGabi250@email.com"
      },
      account: {
        balance: -363.13
      },
      charges: [
        {
          id: "xh9j7s",
          amount: 578.48,
          datetime: "2020-11-20T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "h4n6yr",
      contact: {
        name: "Morgana Kassey",
        email: "MorganaKassey365@email.com"
      },
      account: {
        balance: 17.16
      },
      charges: [
        {
          id: "7nmorj",
          amount: 252.2,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "yp5bz8",
      contact: {
        name: "Hayley Darby",
        email: "HayleyDarby388@email.com"
      },
      account: {
        balance: 413.27
      },
      charges: [
        {
          id: "bw6l8a",
          amount: 690.18,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "1shdis",
      contact: {
        name: "Meta Josephina",
        email: "MetaJosephina170@email.com"
      },
      account: {
        balance: 7.92
      },
      charges: [
        {
          id: "yyabwb",
          amount: 610.32,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "eh3xd4",
      contact: {
        name: "Dolores Ayn",
        email: "DoloresAyn306@email.com"
      },
      account: {
        balance: 71.77
      },
      charges: [
        {
          id: "2o84nn",
          amount: 256.25,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "3wl72s",
      contact: {
        name: "Rivkah Marni",
        email: "RivkahMarni250@email.com"
      },
      account: {
        balance: 899.37
      },
      charges: [
        {
          id: "5lxuh3",
          amount: 575.98,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    },
    {
      id: "fjb0se",
      contact: {
        name: "Carolynn Kelci",
        email: "CarolynnKelci101@email.com"
      },
      account: {
        balance: 101.35
      },
      charges: [
        {
          id: "lz5s1w",
          amount: 380.5,
          datetime: "2020-11-27T00:00:00.000Z",
          status: "New"
        }
      ]
    }
  ]
  
  converter.json2csv(userList, (err, csv) => {
      if(err) {
          throw err;
      }

      console.log(csv);

      fs.writeFileSync('userList.csv', csv)
  });