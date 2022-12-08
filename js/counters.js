const counter = [
    { "count1": 1, "count2": 1, "groupName": "Momoland", "imageName": "AHIN_MOMOLAND", "artistName": "Ahin", "countTotal": 2 }
    , { "count1": 3, "count2": 0, "groupName": "Everglow", "imageName": "AISHA_EVERGLOW", "artistName": "Aisha", "countTotal": 3 }
    , { "count1": 1, "count2": 0, "groupName": "ily:1", "imageName": "ARA_ILY1", "artistName": "Ara", "countTotal": 1 }
    , { "count1": 17, "count2": 13, "groupName": "Oh My Girl", "imageName": "ARIN_OHMYGIRL", "artistName": "Arin", "countTotal": 30 }
    , { "count1": 3, "count2": 0, "groupName": "NMIXX", "imageName": "BAE_NMIXX", "artistName": "Bae", "countTotal": 3 }
    , { "count1": 0, "count2": 1, "groupName": "Kep1er", "imageName": "BAHIYYIH_KEP1ER", "artistName": "Bahiyyih", "countTotal": 1 }
    , { "count1": 4, "count2": 0, "groupName": "CLASS:y", "imageName": "BOEUN_CLASSY", "artistName": "Boeun", "countTotal": 4 }
    , { "count1": 3, "count2": 0, "groupName": "Dream Note", "imageName": "BONI_DREAMNOTE", "artistName": "Boni", "countTotal": 3 }
    , { "count1": 6, "count2": 3, "groupName": "Cherry Bullet", "imageName": "BORA_CHERRYBULLET", "artistName": "Bora", "countTotal": 9 }
    , { "count1": 3, "count2": 0, "groupName": "Kep1er", "imageName": "CHAEHYUN_KEP1ER", "artistName": "Chaehyun", "countTotal": 3 }
    , { "count1": 21, "count2": 2, "groupName": "Purple Kiss", "imageName": "CHAEIN_PURPLEKISS", "artistName": "Chaein", "countTotal": 23 }
    , { "count1": 5, "count2": 1, "groupName": "ITZY", "imageName": "CHAERYEONG_ITZY", "artistName": "Chaeryeong", "countTotal": 6 }
    , { "count1": 6, "count2": 1, "groupName": "cignature", "imageName": "CHAESOL_CIGNATURE", "artistName": "Chaesol", "countTotal": 7 }
    , { "count1": 9, "count2": 5, "groupName": "LE SSERAFIM", "imageName": "CHAEWON_LESSERAFIM", "artistName": "Chaewon", "countTotal": 14 }
    , { "count1": 8, "count2": 4, "groupName": "CLASS:y", "imageName": "CHAEWON_CLASSY", "artistName": "Chaewon", "countTotal": 12 }
    , { "count1": 3, "count2": 1, "groupName": "soloist", "imageName": "CHAEYEON_SOLOIST", "artistName": "Chaeyeon", "countTotal": 4 }
    , { "count1": 1, "count2": 0, "groupName": "tripleS", "imageName": "CHAEYEON_TRIPLES", "artistName": "Chaeyeon", "countTotal": 1 }
    , { "count1": 5, "count2": 0, "groupName": "fromis_9", "imageName": "CHAEYOUNG_FROMIS9", "artistName": "Chaeyoung", "countTotal": 5 }
    , { "count1": 1, "count2": 0, "groupName": "Lapillus", "imageName": "CHANTY_LAPILLUS", "artistName": "Chanty", "countTotal": 1 }
    , { "count1": 5, "count2": 0, "groupName": "LOONA", "imageName": "CHOERRY_LOONA", "artistName": "Choerry", "countTotal": 5 }
    , { "count1": 1, "count2": 0, "groupName": "Lightsum", "imageName": "CHOWON_LIGHTSUM", "artistName": "Chowon", "countTotal": 1 }
    , { "count1": 1, "count2": 0, "groupName": "ichillin", "imageName": "CHOWON_ICHILLIN", "artistName": "Chowon", "countTotal": 1 }
    , { "count1": 0, "count2": 1, "groupName": "bugAboo", "imageName": "CHOYEON_BUGABOO", "artistName": "Choyeon", "countTotal": 1 }
    , { "count1": 2, "count2": 0, "groupName": "soloist", "imageName": "CHUNGHA_SOLOIST", "artistName": "Chungha", "countTotal": 2 }
    , { "count1": 3, "count2": 0, "groupName": "LOONA", "imageName": "CHUU_LOONA", "artistName": "Chuu", "countTotal": 3 }
    , { "count1": 2, "count2": 1, "groupName": "Rocket Punch", "imageName": "DAHYUN_ROCKETPUNCH", "artistName": "Dahyun", "countTotal": 3 }
    , { "count1": 4, "count2": 1, "groupName": "Pixy", "imageName": "DAJEONG_PIXY", "artistName": "Dajeong", "countTotal": 5 }
    , { "count1": 2, "count2": 4, "groupName": "NewJeans", "imageName": "DANIELLE_NEWJEANS", "artistName": "Danielle", "countTotal": 6 }
    , { "count1": 22, "count2": 16, "groupName": "Kep1er", "imageName": "DAYEON_KEP1ER", "artistName": "Dayeon", "countTotal": 38 }
    , { "count1": 6, "count2": 2, "groupName": "Pixy", "imageName": "DIA_PIXY", "artistName": "Dia", "countTotal": 8 }
    , { "count1": 11, "count2": 0, "groupName": "Purple Kiss", "imageName": "DOSIE_PURPLEKISS", "artistName": "Dosie", "countTotal": 11 }
    , { "count1": 3, "count2": 1, "groupName": "CSR", "imageName": "DUNA_CSR", "artistName": "Duna", "countTotal": 4 }
    , { "count1": 1, "count2": 0, "groupName": "Everglow", "imageName": "EU_EVERGLOW", "artistName": "E:U", "countTotal": 1 }
    , { "count1": 1, "count2": 1, "groupName": "ichillin", "imageName": "EJI_ICHILLIN", "artistName": "E.JI", "countTotal": 2 }
    , { "count1": 1, "count2": 0, "groupName": "ily:1", "imageName": "ELVA_ILY1", "artistName": "Elva", "countTotal": 1 }
    , { "count1": 13, "count2": 2, "groupName": "soloist", "imageName": "EUNBI_SOLOIST", "artistName": "Eunbi", "countTotal": 15 }
    , { "count1": 1, "count2": 0, "groupName": "bugAboo", "imageName": "EUNCHAE_BUGABOO", "artistName": "Eunchae", "countTotal": 1 }
    , { "count1": 6, "count2": 1, "groupName": "LE SSERAFIM", "imageName": "EUNCHAE_LESSERAFIM", "artistName": "Eunchae", "countTotal": 7 }
    , { "count1": 14, "count2": 4, "groupName": "VIVIZ", "imageName": "EUNHA_VIVIZ", "artistName": "Eunha", "countTotal": 18 }
    , { "count1": 4, "count2": 0, "groupName": "Dream Note", "imageName": "EUNJO_DREAMNOTE", "artistName": "Eunjo", "countTotal": 4 }
    , { "count1": 1, "count2": 0, "groupName": "WJSN", "imageName": "EUNSEO_WJSN", "artistName": "Eunseo", "countTotal": 1 }
    , { "count1": 2, "count2": 2, "groupName": "IVE", "imageName": "GAEUL_IVE", "artistName": "Gaeul", "countTotal": 4 }
    , { "count1": 2, "count2": 11, "groupName": "Dreamcatcher", "imageName": "GAHYEON_DREAMCATCHER", "artistName": "Gahyeon", "countTotal": 13 }
    , { "count1": 1, "count2": 4, "groupName": "LE SSERAFIM", "imageName": "GARAM_LESSERAFIM", "artistName": "Garam", "countTotal": 5 }
    , { "count1": 3, "count2": 0, "groupName": "CSR", "imageName": "GEUMHEE_CSR", "artistName": "Geumhee", "countTotal": 3 }
    , { "count1": 2, "count2": 0, "groupName": "Purple Kiss", "imageName": "GOEUN_PURPLEKISS", "artistName": "Goeun", "countTotal": 2 }
    , { "count1": 3, "count2": 0, "groupName": "LOONA", "imageName": "GOWON_LOONA", "artistName": "Gowon", "countTotal": 3 }
    , { "count1": 4, "count2": 1, "groupName": "NewJeans", "imageName": "HAERIN_NEWJEANS", "artistName": "Haerin", "countTotal": 5 }
    , { "count1": 2, "count2": 1, "groupName": "Lapillus", "imageName": "HAEUN_LAPILLUS", "artistName": "Haeun", "countTotal": 3 }
    , { "count1": 6, "count2": 2, "groupName": "NMIXX", "imageName": "HAEWON_NMIXX", "artistName": "Haewon", "countTotal": 8 }
    , { "count1": 9, "count2": 4, "groupName": "Dreamcatcher", "imageName": "HANDONG_DREAMCATCHER", "artistName": "Handong", "countTotal": 13 }
    , { "count1": 2, "count2": 0, "groupName": "NewJeans", "imageName": "HANNI_NEWJEANS", "artistName": "Hanni", "countTotal": 2 }
    , { "count1": 20, "count2": 5, "groupName": "Billlie", "imageName": "HARAM_BILLLIE", "artistName": "Haram", "countTotal": 25 }
    , { "count1": 2, "count2": 0, "groupName": "Billlie", "imageName": "HARUNA_BILLLIE", "artistName": "Haruna", "countTotal": 2 }
    , { "count1": 11, "count2": 0, "groupName": "LOONA", "imageName": "HASEUL_LOONA", "artistName": "Haseul", "countTotal": 11 }
    , { "count1": 14, "count2": 7, "groupName": "LOONA", "imageName": "HEEJIN_LOONA", "artistName": "Heejin", "countTotal": 21 }
    , { "count1": 1, "count2": 0, "groupName": "Kep1er", "imageName": "HIKARU_KEP1ER", "artistName": "Hikaru", "countTotal": 1 }
    , { "count1": 1, "count2": 0, "groupName": "Lightsum", "imageName": "HINA_LIGHTSUM", "artistName": "Hina", "countTotal": 1 }
    , { "count1": 2, "count2": 0, "groupName": "H1-KEY", "imageName": "HWISEO_H1KEY", "artistName": "Hwiseo", "countTotal": 2 }
    , { "count1": 2, "count2": 0, "groupName": "NewJeans", "imageName": "HYEIN_NEWJEANS", "artistName": "Hyein", "countTotal": 2 }
    , { "count1": 5, "count2": 0, "groupName": "CLASS:y", "imageName": "HYEJU_CLASSY", "artistName": "Hyeju", "countTotal": 5 }
    , { "count1": 2, "count2": 1, "groupName": "soloist", "imageName": "HYEWON_SOLOIST", "artistName": "Hyewon", "countTotal": 3 }
    , { "count1": 11, "count2": 4, "groupName": "Oh My Girl", "imageName": "HYOJUNG_OHMYGIRL", "artistName": "Hyojung", "countTotal": 15 }
    , { "count1": 13, "count2": 19, "groupName": "TRI.BE", "imageName": "HYUNBIN_TRIBE", "artistName": "Hyunbin", "countTotal": 32 }
    , { "count1": 6, "count2": 0, "groupName": "CLASS:y", "imageName": "HYUNGSEO_CLASSY", "artistName": "Hyungseo", "countTotal": 6 }
    , { "count1": 4, "count2": 3, "groupName": "LOONA", "imageName": "HYUNJIN_LOONA", "artistName": "Hyunjin", "countTotal": 7 }
    , { "count1": 1, "count2": 0, "groupName": "Purple Kiss", "imageName": "IREH_PURPLEKISS", "artistName": "Ireh", "countTotal": 1 }
    , { "count1": 24, "count2": 22, "groupName": "Stayc", "imageName": "ISA_STAYC", "artistName": "ISA", "countTotal": 46 }
    , { "count1": 13, "count2": 2, "groupName": "Stayc", "imageName": "J_STAYC", "artistName": "J", "countTotal": 15 }
    , { "count1": 5, "count2": 0, "groupName": "ichillin", "imageName": "JACKIE_ICHILLIN", "artistName": "Jackie", "countTotal": 5 }
    , { "count1": 3, "count2": 0, "groupName": "Weeekly", "imageName": "JAEHEE_WEEEKLY", "artistName": "Jaehee", "countTotal": 3 }
    , { "count1": 1, "count2": 1, "groupName": "cignature", "imageName": "JEEWON_CIGNATURE", "artistName": "Jeewon", "countTotal": 2 }
    , { "count1": 2, "count2": 8, "groupName": "Blackpink", "imageName": "JENNIE_BLACKPINK", "artistName": "Jennie", "countTotal": 10 }
    , { "count1": 2, "count2": 0, "groupName": "mimiirose", "imageName": "JIA_MIMIIROSE", "artistName": "Jia", "countTotal": 2 }
    , { "count1": 2, "count2": 0, "groupName": "Purple Kiss", "imageName": "JIEUN_PURPLEKISS", "artistName": "Jieun", "countTotal": 2 }
    , { "count1": 3, "count2": 6, "groupName": "Weeekly", "imageName": "JIHAN_WEEEKLY", "artistName": "Jihan", "countTotal": 9 }
    , { "count1": 3, "count2": 1, "groupName": "fromis_9", "imageName": "JIHEON_FROMIS9", "artistName": "Jiheon", "countTotal": 4 }
    , { "count1": 1, "count2": 1, "groupName": "Oh My Girl", "imageName": "JIHO_OHMYGIRL", "artistName": "Jiho", "countTotal": 2 }
    , { "count1": 0, "count2": 1, "groupName": "Twice", "imageName": "JIHYO_TWICE", "artistName": "Jihyo", "countTotal": 1 }
    , { "count1": 12, "count2": 5, "groupName": "CLASS:y", "imageName": "JIMIN_CLASSY", "artistName": "Jimin", "countTotal": 17 }
    , { "count1": 1, "count2": 1, "groupName": "TRI.BE", "imageName": "JINHA_TRIBE", "artistName": "Jinha", "countTotal": 2 }
    , { "count1": 8, "count2": 1, "groupName": "NMIXX", "imageName": "JINNI_NMIXX", "artistName": "Jinni", "countTotal": 9 }
    , { "count1": 8, "count2": 2, "groupName": "Secret Number", "imageName": "JINNY_SECRETNUMBER", "artistName": "Jinny", "countTotal": 10 }
    , { "count1": 5, "count2": 6, "groupName": "LOONA", "imageName": "JINSOUL_LOONA", "artistName": "Jinsoul", "countTotal": 11 }
    , { "count1": 10, "count2": 3, "groupName": "Blackpink", "imageName": "JISOO_BLACKPINK", "artistName": "Jisoo", "countTotal": 13 }
    , { "count1": 2, "count2": 0, "groupName": "fromis_9", "imageName": "JISUN_FROMIS9", "artistName": "Jisun", "countTotal": 2 }
    , { "count1": 10, "count2": 3, "groupName": "Dreamcatcher", "imageName": "JIU_DREAMCATCHER", "artistName": "Jiu", "countTotal": 13 }
    , { "count1": 1, "count2": 0, "groupName": "Cherry Bullet", "imageName": "JIWON_CHERRYBULLET", "artistName": "Jiwon", "countTotal": 1 }
    , { "count1": 3, "count2": 0, "groupName": "NMIXX", "imageName": "JIWOO_NMIXX", "artistName": "Jiwoo", "countTotal": 3 }
    , { "count1": 1, "count2": 0, "groupName": "ichillin", "imageName": "JIYOON_ICHILLIN", "artistName": "Jiyoon", "countTotal": 1 }
    , { "count1": 1, "count2": 0, "groupName": "Weeekly", "imageName": "JIYOON_WEEEKLY", "artistName": "Jiyoon", "countTotal": 1 }
    , { "count1": 1, "count2": 1, "groupName": "Momoland", "imageName": "JOOE_MOMOLAND", "artistName": "Jooe", "countTotal": 2 }
    , { "count1": 2, "count2": 0, "groupName": "Lightsum", "imageName": "JUHYEON_LIGHTSUM", "artistName": "Juhyeon", "countTotal": 2 }
    , { "count1": 4, "count2": 1, "groupName": "Rocket Punch", "imageName": "JURI_ROCKETPUNCH", "artistName": "Juri", "countTotal": 5 }
    , { "count1": 3, "count2": 4, "groupName": "aespa", "imageName": "KARINA_AESPA", "artistName": "Karina", "countTotal": 7 }
    , { "count1": 7, "count2": 1, "groupName": "LE SSERAFIM", "imageName": "KAZUHA_LESSERAFIM", "artistName": "Kazuha", "countTotal": 8 }
    , { "count1": 1, "count2": 3, "groupName": "TRI.BE", "imageName": "KELLY_TRIBE", "artistName": "Kelly", "countTotal": 4 }
    , { "count1": 6, "count2": 0, "groupName": "LOONA", "imageName": "KIMLIP_LOONA", "artistName": "KimLip", "countTotal": 6 }
    , { "count1": 5, "count2": 3, "groupName": "NMIXX", "imageName": "KYUJIN_NMIXX", "artistName": "Kyujin", "countTotal": 8 }
    , { "count1": 2, "count2": 0, "groupName": "Dream Note", "imageName": "LARA_DREAMNOTE", "artistName": "Lara", "countTotal": 2 }
    , { "count1": 8, "count2": 1, "groupName": "IVE", "imageName": "LEESEO_IVE", "artistName": "Leeseo", "countTotal": 9 }
    , { "count1": 1, "count2": 2, "groupName": "ITZY", "imageName": "LIA_ITZY", "artistName": "Lia", "countTotal": 3 }
    , { "count1": 3, "count2": 0, "groupName": "Blackpink", "imageName": "LISA_BLACKPINK", "artistName": "Lisa", "countTotal": 3 }
    , { "count1": 2, "count2": 3, "groupName": "IVE", "imageName": "LIZ_IVE", "artistName": "Liz", "countTotal": 5 }
    , { "count1": 1, "count2": 2, "groupName": "Pixy", "imageName": "LOLA_PIXY", "artistName": "Lola", "countTotal": 3 }
    , { "count1": 1, "count2": 1, "groupName": "woo!ah!", "imageName": "LUCY_WOOAH", "artistName": "Lucy", "countTotal": 2 }
    , { "count1": 2, "count2": 0, "groupName": "WJSN", "imageName": "LUDA_WJSN", "artistName": "Luda", "countTotal": 2 }
    , { "count1": 0, "count2": 1, "groupName": "Everglow", "imageName": "MIA_EVERGLOW", "artistName": "Mia", "countTotal": 1 }
    , { "count1": 3, "count2": 1, "groupName": "NewJeans", "imageName": "MINJI_NEWJEANS", "artistName": "Minji", "countTotal": 4 }
    , { "count1": 2, "count2": 0, "groupName": "soloist", "imageName": "MINJU_SOLOIST", "artistName": "Minju", "countTotal": 2 }
    , { "count1": 1, "count2": 0, "groupName": "(g)i-dle", "imageName": "MINNIE_GIDLE", "artistName": "Minnie", "countTotal": 1 }
    , { "count1": 3, "count2": 0, "groupName": "woo!ah!", "imageName": "MINSEO_WOOAH", "artistName": "Minseo", "countTotal": 3 }
    , { "count1": 1, "count2": 1, "groupName": "TRI.BE", "imageName": "MIRE_TRIBE", "artistName": "Mire", "countTotal": 2 }
    , { "count1": 6, "count2": 2, "groupName": "Dream Note", "imageName": "MISO_DREAMNOTE", "artistName": "Miso", "countTotal": 8 }
    , { "count1": 15, "count2": 7, "groupName": "(g)i-dle", "imageName": "MIYEON_GIDLE", "artistName": "Miyeon", "countTotal": 22 }
    , { "count1": 0, "count2": 3, "groupName": "Twice", "imageName": "MOMO_TWICE", "artistName": "Momo", "countTotal": 3 }
    , { "count1": 6, "count2": 6, "groupName": "Weeekly", "imageName": "MONDAY_WEEEKLY", "artistName": "Monday", "countTotal": 12 }
    , { "count1": 2, "count2": 0, "groupName": "Billlie", "imageName": "MOONSUA_BILLLIE", "artistName": "Moon Sua", "countTotal": 2 }
    , { "count1": 1, "count2": 0, "groupName": "tripleS", "imageName": "NAKYOUNG_TRIPLES", "artistName": "Nakyoung", "countTotal": 1 }
    , { "count1": 2, "count2": 2, "groupName": "woo!ah!", "imageName": "NANA_WOOAH", "artistName": "Nana", "countTotal": 4 }
    , { "count1": 2, "count2": 2, "groupName": "Momoland", "imageName": "NANCY_MOMOLAND", "artistName": "Nancy", "countTotal": 4 }
    , { "count1": 2, "count2": 0, "groupName": "Twice", "imageName": "NAYEON_TWICE", "artistName": "Nayeon", "countTotal": 2 }
    , { "count1": 5, "count2": 0, "groupName": "Lightsum", "imageName": "NAYOUNG_LIGHTSUM", "artistName": "Nayoung", "countTotal": 5 }
    , { "count1": 0, "count2": 1, "groupName": "ily:1", "imageName": "NAYU_ILY1", "artistName": "Nayu", "countTotal": 1 }
    , { "count1": 2, "count2": 1, "groupName": "aespa", "imageName": "NINGNING_AESPA", "artistName": "Ning Ning", "countTotal": 3 }
    , { "count1": 3, "count2": 0, "groupName": "LOONA", "imageName": "OLIVIAHYE_LOONA", "artistName": "Olivia Hye", "countTotal": 3 }
    , { "count1": 7, "count2": 2, "groupName": "IVE", "imageName": "REI_IVE", "artistName": "Rei", "countTotal": 9 }
    , { "count1": 2, "count2": 0, "groupName": "H1-KEY", "imageName": "RIINA_H1KEY", "artistName": "Riina", "countTotal": 2 }
    , { "count1": 1, "count2": 0, "groupName": "ily:1", "imageName": "RIRIKA_ILY1", "artistName": "Ririka", "countTotal": 1 }
    , { "count1": 4, "count2": 0, "groupName": "CLASS:y", "imageName": "RIWON_CLASSY", "artistName": "Riwon", "countTotal": 4 }
    , { "count1": 6, "count2": 13, "groupName": "ily:1", "imageName": "RONA_ILY1", "artistName": "Rona", "countTotal": 19 }
    , { "count1": 0, "count2": 1, "groupName": "Blackpink", "imageName": "ROSE_BLACKPINK", "artistName": "Rose", "countTotal": 1 }
    , { "count1": 0, "count2": 1, "groupName": "ITZY", "imageName": "RYUJIN_ITZY", "artistName": "Ryujin", "countTotal": 1 }
    , { "count1": 1, "count2": 3, "groupName": "fromis_9", "imageName": "SAEROM_FROMIS9", "artistName": "Saerom", "countTotal": 4 }
    , { "count1": 0, "count2": 1, "groupName": "LE SSERAFIM", "imageName": "SAKURA_LESSERAFIM", "artistName": "Sakura", "countTotal": 1 }
    , { "count1": 3, "count2": 4, "groupName": "Twice", "imageName": "SANA_TWICE", "artistName": "Sana", "countTotal": 7 }
    , { "count1": 10, "count2": 2, "groupName": "Lightsum", "imageName": "SANGAH_LIGHTSUM", "artistName": "Sangah", "countTotal": 12 }
    , { "count1": 3, "count2": 0, "groupName": "Stayc", "imageName": "SEEUN_STAYC", "artistName": "Seeun", "countTotal": 3 }
    , { "count1": 1, "count2": 0, "groupName": "H1-KEY", "imageName": "SEOI_H1KEY", "artistName": "Seoi", "countTotal": 1 }
    , { "count1": 1, "count2": 0, "groupName": "WJSN", "imageName": "SEOLA_WJSN", "artistName": "Seola", "countTotal": 1 }
    , { "count1": 1, "count2": 1, "groupName": "CLASS:y", "imageName": "SEONYU_CLASSY", "artistName": "Seonyu", "countTotal": 2 }
    , { "count1": 1, "count2": 0, "groupName": "fromis_9", "imageName": "SEOYEON_FROMIS9", "artistName": "Seoyeon", "countTotal": 1 }
    , { "count1": 1, "count2": 2, "groupName": "Lapillus", "imageName": "SHANA_LAPILLUS", "artistName": "Shana", "countTotal": 3 }
    , { "count1": 15, "count2": 12, "groupName": "Billlie", "imageName": "SHEON_BILLLIE", "artistName": "Sheon", "countTotal": 27 }
    , { "count1": 4, "count2": 1, "groupName": "(g)i-dle", "imageName": "SHUHUA_GIDLE", "artistName": "Shuhua", "countTotal": 5 }
    , { "count1": 9, "count2": 3, "groupName": "Stayc", "imageName": "SIEUN_STAYC", "artistName": "Sieun", "countTotal": 12 }
    , { "count1": 8, "count2": 0, "groupName": "CSR", "imageName": "SIHYEON_CSR", "artistName": "Sihyeon", "countTotal": 8 }
    , { "count1": 3, "count2": 0, "groupName": "Everglow", "imageName": "SIHYEON_EVERGLOW", "artistName": "Sihyeon", "countTotal": 3 }
    , { "count1": 41, "count2": 10, "groupName": "VIVIZ", "imageName": "SINB_VIVIZ", "artistName": "SinB", "countTotal": 51 }
    , { "count1": 2, "count2": 0, "groupName": "Dreamcatcher", "imageName": "SIYEON_DREAMCATCHER", "artistName": "Siyeon", "countTotal": 2 }
    , { "count1": 2, "count2": 2, "groupName": "Billlie", "imageName": "SIYOON_BILLLIE", "artistName": "Siyoon", "countTotal": 4 }
    , { "count1": 23, "count2": 8, "groupName": "Weeekly", "imageName": "SOEUN_WEEEKLY", "artistName": "Soeun", "countTotal": 31 }
    , { "count1": 0, "count2": 1, "groupName": "Alice", "imageName": "SOHEE_ALICE", "artistName": "Sohee", "countTotal": 1 }
    , { "count1": 1, "count2": 0, "groupName": "ichillin", "imageName": "SOHEE_ICHILLIN", "artistName": "Sohee", "countTotal": 1 }
    , { "count1": 3, "count2": 0, "groupName": "soloist", "imageName": "SOMI_SOLOIST", "artistName": "Somi", "countTotal": 3 }
    , { "count1": 2, "count2": 0, "groupName": "Secret Number", "imageName": "SOODAM_SECRETNUMBER", "artistName": "Soodam", "countTotal": 2 }
    , { "count1": 3, "count2": 0, "groupName": "Weeekly", "imageName": "SOOJIN_WEEEKLY", "artistName": "Soojin", "countTotal": 3 }
    , { "count1": 2, "count2": 1, "groupName": "woo!ah!", "imageName": "SORA_WOOAH", "artistName": "Sora", "countTotal": 3 }
    , { "count1": 2, "count2": 6, "groupName": "Gfriend", "imageName": "SOWON_GFRIEND", "artistName": "Sowon", "countTotal": 8 }
    , { "count1": 1, "count2": 0, "groupName": "(g)i-dle", "imageName": "SOYEON_GIDLE", "artistName": "Soyeon", "countTotal": 1 }
    , { "count1": 2, "count2": 0, "groupName": "CSR", "imageName": "SUA_CSR", "artistName": "Sua", "countTotal": 2 }
    , { "count1": 2, "count2": 0, "groupName": "Pixy", "imageName": "SUA_PIXY", "artistName": "Sua", "countTotal": 2 }
    , { "count1": 1, "count2": 10, "groupName": "Dreamcatcher", "imageName": "SUA_DREAMCATCHER", "artistName": "Sua", "countTotal": 11 }
    , { "count1": 4, "count2": 3, "groupName": "Billlie", "imageName": "SUHYEON_BILLLIE", "artistName": "Suhyeon", "countTotal": 7 }
    , { "count1": 8, "count2": 0, "groupName": "NMIXX", "imageName": "SULLYOON_NMIXX", "artistName": "Sullyoon", "countTotal": 8 }
    , { "count1": 7, "count2": 5, "groupName": "Dream Note", "imageName": "SUMIN_DREAMNOTE", "artistName": "Sumin", "countTotal": 12 }
    , { "count1": 15, "count2": 14, "groupName": "Stayc", "imageName": "SUMIN_STAYC", "artistName": "Sumin", "countTotal": 29 }
    , { "count1": 2, "count2": 0, "groupName": "Rocket Punch", "imageName": "SUYUN_ROCKETPUNCH", "artistName": "Suyun", "countTotal": 2 }
    , { "count1": 2, "count2": 0, "groupName": "Purple Kiss", "imageName": "SWAN_PURPLEKISS", "artistName": "Swan", "countTotal": 2 }
    , { "count1": 7, "count2": 1, "groupName": "Billlie", "imageName": "TSUKI_BILLLIE", "artistName": "Tsuki", "countTotal": 8 }
    , { "count1": 1, "count2": 3, "groupName": "Twice", "imageName": "TZUYU_TWICE", "artistName": "Tzuyu", "countTotal": 4 }
    , { "count1": 10, "count2": 3, "groupName": "VIVIZ", "imageName": "UMJI_VIVIZ", "artistName": "Umji", "countTotal": 13 }
    , { "count1": 1, "count2": 0, "groupName": "LOONA", "imageName": "VIVI_LOONA", "artistName": "Vivi", "countTotal": 1 }
    , { "count1": 2, "count2": 0, "groupName": "aespa", "imageName": "WINTER_AESPA", "artistName": "Winter", "countTotal": 2 }
    , { "count1": 34, "count2": 23, "groupName": "IVE", "imageName": "WONYOUNG_IVE", "artistName": "Wonyoung", "countTotal": 57 }
    , { "count1": 6, "count2": 1, "groupName": "woo!ah!", "imageName": "WOOYEON_WOOAH", "artistName": "Wooyeon", "countTotal": 7 }
    , { "count1": 26, "count2": 11, "groupName": "Kep1er", "imageName": "XIAOTING_KEP1ER", "artistName": "Xiaoting", "countTotal": 37 }
    , { "count1": 9, "count2": 5, "groupName": "ITZY", "imageName": "YEJI_ITZY", "artistName": "Yeji", "countTotal": 14 }
    , { "count1": 5, "count2": 0, "groupName": "ichillin", "imageName": "YEJU_ICHILLIN", "artistName": "Yeju", "countTotal": 5 }
    , { "count1": 2, "count2": 0, "groupName": "H1-KEY", "imageName": "YEL_H1KEY", "artistName": "Yel", "countTotal": 2 }
    , { "count1": 1, "count2": 0, "groupName": "soloist", "imageName": "YENA_SOLOIST", "artistName": "Yena", "countTotal": 1 }
    , { "count1": 31, "count2": 6, "groupName": "LOONA", "imageName": "YEOJIN_LOONA", "artistName": "Yeojin", "countTotal": 37 }
    , { "count1": 6, "count2": 0, "groupName": "Rocket Punch", "imageName": "YEONHEE_ROCKETPUNCH", "artistName": "Yeonhee", "countTotal": 6 }
    , { "count1": 1, "count2": 3, "groupName": "WJSN", "imageName": "YEONJUNG_WJSN", "artistName": "Yeonjung", "countTotal": 4 }
    , { "count1": 2, "count2": 1, "groupName": "WJSN", "imageName": "YEOREUM_WJSN", "artistName": "Yeoreum", "countTotal": 3 }
    , { "count1": 1, "count2": 1, "groupName": "Gfriend", "imageName": "YERIN_GFRIEND", "artistName": "Yerin", "countTotal": 2 }
    , { "count1": 3, "count2": 0, "groupName": "Kep1er", "imageName": "YESEO_KEP1ER", "artistName": "Yeseo", "countTotal": 3 }
    , { "count1": 7, "count2": 5, "groupName": "Everglow", "imageName": "YIREN_EVERGLOW", "artistName": "Yiren", "countTotal": 12 }
    , { "count1": 6, "count2": 0, "groupName": "Oh My Girl", "imageName": "YOOA_OHMYGIRL", "artistName": "Yooa", "countTotal": 6 }
    , { "count1": 7, "count2": 6, "groupName": "Dreamcatcher", "imageName": "YOOHYEON_DREAMCATCHER", "artistName": "Yoohyeon", "countTotal": 13 }
    , { "count1": 19, "count2": 1, "groupName": "Stayc", "imageName": "YOON_STAYC", "artistName": "Yoon", "countTotal": 20 }
    , { "count1": 1, "count2": 0, "groupName": "tripleS", "imageName": "YOOYEON_TRIPLES", "artistName": "Yooyeon", "countTotal": 1 }
    , { "count1": 3, "count2": 1, "groupName": "Dream Note", "imageName": "YOUI_DREAMNOTE", "artistName": "YOUI", "countTotal": 4 }
    , { "count1": 6, "count2": 0, "groupName": "Kep1er", "imageName": "YOUNGEUN_KEP1ER", "artistName": "Youngeun", "countTotal": 6 }
    , { "count1": 4, "count2": 0, "groupName": "Oh My Girl", "imageName": "YUBIN_OHMYGIRL", "artistName": "Yubin", "countTotal": 4 }
    , { "count1": 3, "count2": 0, "groupName": "Lapillus", "imageName": "YUE_LAPILLUS", "artistName": "Yue", "countTotal": 3 }
    , { "count1": 0, "count2": 1, "groupName": "Brave Girls", "imageName": "YUJEONG_BRAVEGIRLS", "artistName": "Yujeong", "countTotal": 1 }
    , { "count1": 2, "count2": 0, "groupName": "Kep1er", "imageName": "YUJIN_KEP1ER", "artistName": "Yujin", "countTotal": 2 }
    , { "count1": 11, "count2": 2, "groupName": "IVE", "imageName": "YUJIN_IVE", "artistName": "Yujin", "countTotal": 13 }
    , { "count1": 2, "count2": 0, "groupName": "Gfriend", "imageName": "YUJU_GFRIEND", "artistName": "Yuju", "countTotal": 2 }
    , { "count1": 3, "count2": 0, "groupName": "Purple Kiss", "imageName": "YUKI_PURPLEKISS", "artistName": "Yuki", "countTotal": 3 }
    , { "count1": 5, "count2": 2, "groupName": "ITZY", "imageName": "YUNA_ITZY", "artistName": "Yuna", "countTotal": 7 }
    , { "count1": 12, "count2": 2, "groupName": "LE SSERAFIM", "imageName": "YUNJIN_LESSERAFIM", "artistName": "Yunjin", "countTotal": 14 }
    , { "count1": 5, "count2": 0, "groupName": "Rocket Punch", "imageName": "YUNKYOUNG_ROCKETPUNCH", "artistName": "Yunkyoung", "countTotal": 5 }
    , { "count1": 8, "count2": 5, "groupName": "(g)i-dle", "imageName": "YUQI_GIDLE", "artistName": "Yuqi", "countTotal": 13 }
    , { "count1": 3, "count2": 0, "groupName": "soloist", "imageName": "YURI_SOLOIST", "artistName": "Yuri", "countTotal": 3 }
    , { "count1": 6, "count2": 0, "groupName": "LOONA", "imageName": "YVES_LOONA", "artistName": "Yves", "countTotal": 6 }
    , { "count1": 2, "count2": 0, "groupName": "bugAboo", "imageName": "ZIN_BUGABOO", "artistName": "Zin", "countTotal": 2 }
    , { "count1": 5, "count2": 4, "groupName": "Weeekly", "imageName": "ZOA_WEEEKLY", "artistName": "Zoa", "countTotal": 9 }
];
