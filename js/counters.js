const countersData = [

    {"artistName":"Ahin","groupName":"Momoland","imageName":"AHIN_MOMOLAND","counter1":1,"counter2":1,"counterTotal":2}
    , {"artistName":"Ahyeon","groupName":"Babymonster","imageName":"AHYEON_BABYMONSTER","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Aisha","groupName":"Everglow","imageName":"AISHA_EVERGLOW","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Ara","groupName":"ily:1","imageName":"ARA_ILY1","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Arin","groupName":"Oh My Girl","imageName":"ARIN_OHMYGIRL","counter1":31,"counter2":19,"counterTotal":50}
    , {"artistName":"Asa","groupName":"Babymonster","imageName":"ASA_BABYMONSTER","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Bae","groupName":"NMIXX","imageName":"BAE_NMIXX","counter1":5,"counter2":0,"counterTotal":5}
    , {"artistName":"Bahiyyih","groupName":"Kep1er","imageName":"BAHIYYIH_KEP1ER","counter1":1,"counter2":2,"counterTotal":3}
    , {"artistName":"Belle","groupName":"cignature","imageName":"BELLE_CIGNATURE","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Belle","groupName":"KISS OF LIFE","imageName":"BELLE_KISSOFLIFE","counter1":4,"counter2":1,"counterTotal":5}
    , {"artistName":"Bian","groupName":"others","imageName":"BIAN_OTHERS","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Boeun","groupName":"CLASS:y","imageName":"BOEUN_CLASSY","counter1":19,"counter2":2,"counterTotal":21}
    , {"artistName":"Boni","groupName":"Dream Note","imageName":"BONI_DREAMNOTE","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Bora","groupName":"Cherry Bullet","imageName":"BORA_CHERRYBULLET","counter1":9,"counter2":3,"counterTotal":12}
    , {"artistName":"Chaeeun","groupName":"ADYA","imageName":"CHAEEUN_ADYA","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Chaehyun","groupName":"Kep1er","imageName":"CHAEHYUN_KEP1ER","counter1":4,"counter2":0,"counterTotal":4}
    , {"artistName":"Chaein","groupName":"Purple Kiss","imageName":"CHAEIN_PURPLEKISS","counter1":27,"counter2":6,"counterTotal":33}
    , {"artistName":"Chaerin","groupName":"Cherry Bullet","imageName":"CHAERIN_CHERRYBULLET","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Chaerin","groupName":"ichillin","imageName":"CHAERIN_ICHILLIN","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Chaeryeong","groupName":"ITZY","imageName":"CHAERYEONG_ITZY","counter1":5,"counter2":1,"counterTotal":6}
    , {"artistName":"Chaesol","groupName":"cignature","imageName":"CHAESOL_CIGNATURE","counter1":9,"counter2":1,"counterTotal":10}
    , {"artistName":"Chaewon","groupName":"CLASS:y","imageName":"CHAEWON_CLASSY","counter1":14,"counter2":4,"counterTotal":18}
    , {"artistName":"Chaewon","groupName":"LE SSERAFIM","imageName":"CHAEWON_LESSERAFIM","counter1":48,"counter2":17,"counterTotal":65}
    , {"artistName":"Chaeyeon","groupName":"soloist","imageName":"CHAEYEON_SOLOIST","counter1":3,"counter2":1,"counterTotal":4}
    , {"artistName":"Chaeyeon","groupName":"tripleS","imageName":"CHAEYEON_TRIPLES","counter1":3,"counter2":4,"counterTotal":7}
    , {"artistName":"Chaeyoung","groupName":"fromis_9","imageName":"CHAEYOUNG_FROMIS9","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Chanty","groupName":"Lapillus","imageName":"CHANTY_LAPILLUS","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Chloe","groupName":"cignature","imageName":"CHLOE_CIGNATURE","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Choerry","groupName":"ARTMS","imageName":"CHOERRY_ARTMS","counter1":9,"counter2":0,"counterTotal":9}
    , {"artistName":"Chowon","groupName":"ichillin","imageName":"CHOWON_ICHILLIN","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Chowon","groupName":"Lightsum","imageName":"CHOWON_LIGHTSUM","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Choyeon","groupName":"bugAboo","imageName":"CHOYEON_BUGABOO","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Chungha","groupName":"soloist","imageName":"CHUNGHA_SOLOIST","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Chuu","groupName":"soloist","imageName":"CHUU_SOLOIST","counter1":4,"counter2":0,"counterTotal":4}
    , {"artistName":"Cocona","groupName":"XG","imageName":"COCONA_XG","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Dahyun","groupName":"Rocket Punch","imageName":"DAHYUN_ROCKETPUNCH","counter1":4,"counter2":2,"counterTotal":6}
    , {"artistName":"Dahyun","groupName":"tripleS","imageName":"DAHYUN_TRIPLES","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Dajeong","groupName":"Pixy","imageName":"DAJEONG_PIXY","counter1":4,"counter2":1,"counterTotal":5}
    , {"artistName":"Danielle","groupName":"NewJeans","imageName":"DANIELLE_NEWJEANS","counter1":21,"counter2":27,"counterTotal":48}
    , {"artistName":"Dayeon","groupName":"Kep1er","imageName":"DAYEON_KEP1ER","counter1":45,"counter2":24,"counterTotal":69}
    , {"artistName":"Dia","groupName":"Pixy","imageName":"DIA_PIXY","counter1":8,"counter2":2,"counterTotal":10}
    , {"artistName":"Dosie","groupName":"Purple Kiss","imageName":"DOSIE_PURPLEKISS","counter1":12,"counter2":0,"counterTotal":12}
    , {"artistName":"Duna","groupName":"CSR","imageName":"DUNA_CSR","counter1":7,"counter2":1,"counterTotal":8}
    , {"artistName":"E:U","groupName":"Everglow","imageName":"EU_EVERGLOW","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"E.JI","groupName":"ichillin","imageName":"EJI_ICHILLIN","counter1":7,"counter2":3,"counterTotal":10}
    , {"artistName":"Elva","groupName":"ily:1","imageName":"ELVA_ILY1","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Eunbi","groupName":"soloist","imageName":"EUNBI_SOLOIST","counter1":16,"counter2":4,"counterTotal":20}
    , {"artistName":"Eunchae","groupName":"bugAboo","imageName":"EUNCHAE_BUGABOO","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Eunchae","groupName":"LE SSERAFIM","imageName":"EUNCHAE_LESSERAFIM","counter1":39,"counter2":6,"counterTotal":45}
    , {"artistName":"Eunha","groupName":"VIVIZ","imageName":"EUNHA_VIVIZ","counter1":43,"counter2":8,"counterTotal":51}
    , {"artistName":"Eunjo","groupName":"Dream Note","imageName":"EUNJO_DREAMNOTE","counter1":5,"counter2":0,"counterTotal":5}
    , {"artistName":"Eunseo","groupName":"WJSN","imageName":"EUNSEO_WJSN","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Exy","groupName":"WJSN","imageName":"EXY_WJSN","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Gaeul","groupName":"IVE","imageName":"GAEUL_IVE","counter1":20,"counter2":8,"counterTotal":28}
    , {"artistName":"Gahyeon","groupName":"Dreamcatcher","imageName":"GAHYEON_DREAMCATCHER","counter1":7,"counter2":19,"counterTotal":26}
    , {"artistName":"Garam","groupName":"LE SSERAFIM","imageName":"GARAM_LESSERAFIM","counter1":1,"counter2":5,"counterTotal":6}
    , {"artistName":"Geumhee","groupName":"CSR","imageName":"GEUMHEE_CSR","counter1":5,"counter2":0,"counterTotal":5}
    , {"artistName":"Giselle","groupName":"aespa","imageName":"GISELLE_AESPA","counter1":1,"counter2":1,"counterTotal":2}
    , {"artistName":"Goeun","groupName":"Purple Kiss","imageName":"GOEUN_PURPLEKISS","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Gowon","groupName":"LOOSSEMBLE","imageName":"GOWON_LOOSSEMBLE","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Gyuri","groupName":"soloist","imageName":"GYURI_SOLOIST","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Haerin","groupName":"NewJeans","imageName":"HAERIN_NEWJEANS","counter1":29,"counter2":4,"counterTotal":33}
    , {"artistName":"Haeun","groupName":"Lapillus","imageName":"HAEUN_LAPILLUS","counter1":2,"counter2":1,"counterTotal":3}
    , {"artistName":"Haewon","groupName":"NMIXX","imageName":"HAEWON_NMIXX","counter1":13,"counter2":5,"counterTotal":18}
    , {"artistName":"Handong","groupName":"Dreamcatcher","imageName":"HANDONG_DREAMCATCHER","counter1":28,"counter2":5,"counterTotal":33}
    , {"artistName":"Hanni","groupName":"NewJeans","imageName":"HANNI_NEWJEANS","counter1":18,"counter2":7,"counterTotal":25}
    , {"artistName":"Haram","groupName":"Billlie","imageName":"HARAM_BILLLIE","counter1":41,"counter2":11,"counterTotal":52}
    , {"artistName":"Haruna","groupName":"Billlie","imageName":"HARUNA_BILLLIE","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Haseul","groupName":"ARTMS","imageName":"HASEUL_ARTMS","counter1":11,"counter2":0,"counterTotal":11}
    , {"artistName":"Hayeon","groupName":"tripleS","imageName":"HAYEON_TRIPLES","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Hayoung","groupName":"fromis_9","imageName":"HAYOUNG_FROMIS9","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Heejin","groupName":"ARTMS","imageName":"HEEJIN_ARTMS","counter1":24,"counter2":15,"counterTotal":39}
    , {"artistName":"Hikaru","groupName":"Kep1er","imageName":"HIKARU_KEP1ER","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Hina","groupName":"Lightsum","imageName":"HINA_LIGHTSUM","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Hinata","groupName":"XG","imageName":"HINATA_XG","counter1":4,"counter2":0,"counterTotal":4}
    , {"artistName":"Hitomi","groupName":"soloist","imageName":"HITOMI_SOLOIST","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Hwiseo","groupName":"H1-KEY","imageName":"HWISEO_H1KEY","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Hyein","groupName":"NewJeans","imageName":"HYEIN_NEWJEANS","counter1":9,"counter2":2,"counterTotal":11}
    , {"artistName":"Hyeju","groupName":"CLASS:y","imageName":"HYEJU_CLASSY","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Hyeju","groupName":"LOOSSEMBLE","imageName":"HYEJU_LOOSSEMBLE","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Hyewon","groupName":"soloist","imageName":"HYEWON_SOLOIST","counter1":3,"counter2":1,"counterTotal":4}
    , {"artistName":"Hyojung","groupName":"Oh My Girl","imageName":"HYOJUNG_OHMYGIRL","counter1":15,"counter2":5,"counterTotal":20}
    , {"artistName":"Hyunbin","groupName":"TRI.BE","imageName":"HYUNBIN_TRIBE","counter1":21,"counter2":20,"counterTotal":41}
    , {"artistName":"Hyungseo","groupName":"CLASS:y","imageName":"HYUNGSEO_CLASSY","counter1":8,"counter2":0,"counterTotal":8}
    , {"artistName":"Hyunjin","groupName":"LOOSSEMBLE","imageName":"HYUNJIN_LOOSSEMBLE","counter1":8,"counter2":5,"counterTotal":13}
    , {"artistName":"Ireh","groupName":"Purple Kiss","imageName":"IREH_PURPLEKISS","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Iroha","groupName":"I\u0027LL-IT","imageName":"IROHA_ILLIT","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"ISA","groupName":"Stayc","imageName":"ISA_STAYC","counter1":51,"counter2":46,"counterTotal":97}
    , {"artistName":"J","groupName":"Stayc","imageName":"J_STAYC","counter1":27,"counter2":9,"counterTotal":36}
    , {"artistName":"Jackie","groupName":"ichillin","imageName":"JACKIE_ICHILLIN","counter1":9,"counter2":18,"counterTotal":27}
    , {"artistName":"Jaehee","groupName":"Weeekly","imageName":"JAEHEE_WEEEKLY","counter1":4,"counter2":0,"counterTotal":4}
    , {"artistName":"Jeewon","groupName":"cignature","imageName":"JEEWON_CIGNATURE","counter1":2,"counter2":2,"counterTotal":4}
    , {"artistName":"Jennie","groupName":"Blackpink","imageName":"JENNIE_BLACKPINK","counter1":4,"counter2":15,"counterTotal":19}
    , {"artistName":"Jia","groupName":"mimiirose","imageName":"JIA_MIMIIROSE","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Jia","groupName":"TRI.BE","imageName":"JIA_TRIBE","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Jieun","groupName":"Purple Kiss","imageName":"JIEUN_PURPLEKISS","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Jihan","groupName":"Weeekly","imageName":"JIHAN_WEEEKLY","counter1":8,"counter2":8,"counterTotal":16}
    , {"artistName":"Jiheon","groupName":"fromis_9","imageName":"JIHEON_FROMIS9","counter1":4,"counter2":1,"counterTotal":5}
    , {"artistName":"Jiho","groupName":"Oh My Girl","imageName":"JIHO_OHMYGIRL","counter1":1,"counter2":2,"counterTotal":3}
    , {"artistName":"Jihyo","groupName":"Twice","imageName":"JIHYO_TWICE","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Jimin","groupName":"CLASS:y","imageName":"JIMIN_CLASSY","counter1":29,"counter2":15,"counterTotal":44}
    , {"artistName":"Jinha","groupName":"TRI.BE","imageName":"JINHA_TRIBE","counter1":1,"counter2":1,"counterTotal":2}
    , {"artistName":"Jini","groupName":"soloist","imageName":"JINI_SOLOIST","counter1":13,"counter2":1,"counterTotal":14}
    , {"artistName":"Jinny","groupName":"Secret Number","imageName":"JINNY_SECRETNUMBER","counter1":10,"counter2":2,"counterTotal":12}
    , {"artistName":"Jinsoul","groupName":"ARTMS","imageName":"JINSOUL_ARTMS","counter1":7,"counter2":8,"counterTotal":15}
    , {"artistName":"Jisoo","groupName":"Blackpink","imageName":"JISOO_BLACKPINK","counter1":19,"counter2":3,"counterTotal":22}
    , {"artistName":"Jisun","groupName":"fromis_9","imageName":"JISUN_FROMIS9","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Jiu","groupName":"Dreamcatcher","imageName":"JIU_DREAMCATCHER","counter1":23,"counter2":7,"counterTotal":30}
    , {"artistName":"Jiwon","groupName":"Cherry Bullet","imageName":"JIWON_CHERRYBULLET","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Jiwon","groupName":"fromis_9","imageName":"JIWON_FROMIS9","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Jiwoo","groupName":"NMIXX","imageName":"JIWOO_NMIXX","counter1":4,"counter2":0,"counterTotal":4}
    , {"artistName":"Jiwoo","groupName":"tripleS","imageName":"JIWOO_TRIPLES","counter1":1,"counter2":1,"counterTotal":2}
    , {"artistName":"Jiyoon","groupName":"ichillin","imageName":"JIYOON_ICHILLIN","counter1":2,"counter2":1,"counterTotal":3}
    , {"artistName":"Jiyoon","groupName":"Weeekly","imageName":"JIYOON_WEEEKLY","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Joobin","groupName":"tripleS","imageName":"JOOBIN_TRIPLES","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Jooe","groupName":"Momoland","imageName":"JOOE_MOMOLAND","counter1":1,"counter2":1,"counterTotal":2}
    , {"artistName":"Joy","groupName":"Red Velvet","imageName":"JOY_REDVELVET","counter1":2,"counter2":1,"counterTotal":3}
    , {"artistName":"Juhyeon","groupName":"Lightsum","imageName":"JUHYEON_LIGHTSUM","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Julie","groupName":"KISS OF LIFE","imageName":"JULIE_KISSOFLIFE","counter1":5,"counter2":0,"counterTotal":5}
    , {"artistName":"Juri","groupName":"Rocket Punch","imageName":"JURI_ROCKETPUNCH","counter1":6,"counter2":1,"counterTotal":7}
    , {"artistName":"Karina","groupName":"aespa","imageName":"KARINA_AESPA","counter1":7,"counter2":5,"counterTotal":12}
    , {"artistName":"Kazuha","groupName":"LE SSERAFIM","imageName":"KAZUHA_LESSERAFIM","counter1":21,"counter2":10,"counterTotal":31}
    , {"artistName":"Keena","groupName":"Fifty Fifty","imageName":"KEENA_FIFTYFIFTY","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Kelly","groupName":"TRI.BE","imageName":"KELLY_TRIBE","counter1":3,"counter2":4,"counterTotal":7}
    , {"artistName":"KimLip","groupName":"ARTMS","imageName":"KIMLIP_ARTMS","counter1":7,"counter2":0,"counterTotal":7}
    , {"artistName":"Kotone","groupName":"tripleS","imageName":"KOTONE_TRIPLES","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Kyujin","groupName":"NMIXX","imageName":"KYUJIN_NMIXX","counter1":8,"counter2":5,"counterTotal":13}
    , {"artistName":"Lara","groupName":"Dream Note","imageName":"LARA_DREAMNOTE","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Leeseo","groupName":"IVE","imageName":"LEESEO_IVE","counter1":28,"counter2":20,"counterTotal":48}
    , {"artistName":"Lia","groupName":"ITZY","imageName":"LIA_ITZY","counter1":2,"counter2":2,"counterTotal":4}
    , {"artistName":"Lily","groupName":"NMIXX","imageName":"LILY_NMIXX","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Lisa","groupName":"Blackpink","imageName":"LISA_BLACKPINK","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Liz","groupName":"IVE","imageName":"LIZ_IVE","counter1":5,"counter2":22,"counterTotal":27}
    , {"artistName":"Lola","groupName":"Pixy","imageName":"LOLA_PIXY","counter1":4,"counter2":3,"counterTotal":7}
    , {"artistName":"Lucy","groupName":"woo!ah!","imageName":"LUCY_WOOAH","counter1":1,"counter2":1,"counterTotal":2}
    , {"artistName":"Luda","groupName":"WJSN","imageName":"LUDA_WJSN","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Mayu","groupName":"tripleS","imageName":"MAYU_TRIPLES","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Mia","groupName":"Everglow","imageName":"MIA_EVERGLOW","counter1":2,"counter2":2,"counterTotal":4}
    , {"artistName":"Mika","groupName":"Geenius","imageName":"MIKA_GEENIUS","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Minji","groupName":"NewJeans","imageName":"MINJI_NEWJEANS","counter1":19,"counter2":9,"counterTotal":28}
    , {"artistName":"Minju","groupName":"I\u0027LL-IT","imageName":"MINJU_ILLIT","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Minju","groupName":"soloist","imageName":"MINJU_SOLOIST","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Minnie","groupName":"(g)i-dle","imageName":"MINNIE_GIDLE","counter1":5,"counter2":0,"counterTotal":5}
    , {"artistName":"Minseo","groupName":"woo!ah!","imageName":"MINSEO_WOOAH","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Mire","groupName":"TRI.BE","imageName":"MIRE_TRIBE","counter1":5,"counter2":1,"counterTotal":6}
    , {"artistName":"Miso","groupName":"Dream Note","imageName":"MISO_DREAMNOTE","counter1":6,"counter2":2,"counterTotal":8}
    , {"artistName":"Miu","groupName":"Limelight","imageName":"MIU_LIMELIGHT","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Miyeon","groupName":"(g)i-dle","imageName":"MIYEON_GIDLE","counter1":39,"counter2":12,"counterTotal":51}
    , {"artistName":"Moka","groupName":"I\u0027LL-IT","imageName":"MOKA_ILLIT","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Momo","groupName":"Twice","imageName":"MOMO_TWICE","counter1":1,"counter2":3,"counterTotal":4}
    , {"artistName":"Monday","groupName":"Weeekly","imageName":"MONDAY_WEEEKLY","counter1":6,"counter2":6,"counterTotal":12}
    , {"artistName":"Moon Sua","groupName":"Billlie","imageName":"MOONSUA_BILLLIE","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Nagyung","groupName":"fromis_9","imageName":"NAGYUNG_FROMIS9","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Nahyun","groupName":"primrose","imageName":"NAHYUN_PRIMROSE","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Nakyoung","groupName":"tripleS","imageName":"NAKYOUNG_TRIPLES","counter1":3,"counter2":1,"counterTotal":4}
    , {"artistName":"Nana","groupName":"woo!ah!","imageName":"NANA_WOOAH","counter1":7,"counter2":3,"counterTotal":10}
    , {"artistName":"Nancy","groupName":"Momoland","imageName":"NANCY_MOMOLAND","counter1":3,"counter2":2,"counterTotal":5}
    , {"artistName":"Natty","groupName":"KISS OF LIFE","imageName":"NATTY_KISSOFLIFE","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Nayeon","groupName":"Twice","imageName":"NAYEON_TWICE","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Nayoung","groupName":"Lightsum","imageName":"NAYOUNG_LIGHTSUM","counter1":5,"counter2":0,"counterTotal":5}
    , {"artistName":"Nayu","groupName":"ily:1","imageName":"NAYU_ILY1","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Nien","groupName":"tripleS","imageName":"NIEN_TRIPLES","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Ning Ning","groupName":"aespa","imageName":"NINGNING_AESPA","counter1":15,"counter2":3,"counterTotal":18}
    , {"artistName":"Onda","groupName":"Everglow","imageName":"ONDA_EVERGLOW","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Rei","groupName":"IVE","imageName":"REI_IVE","counter1":13,"counter2":6,"counterTotal":19}
    , {"artistName":"Riina","groupName":"H1-KEY","imageName":"RIINA_H1KEY","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Ririka","groupName":"ily:1","imageName":"RIRIKA_ILY1","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Riwon","groupName":"CLASS:y","imageName":"RIWON_CLASSY","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Rona","groupName":"ily:1","imageName":"RONA_ILY1","counter1":7,"counter2":13,"counterTotal":20}
    , {"artistName":"Rora","groupName":"Babymonster","imageName":"RORA_BABYMONSTER","counter1":1,"counter2":1,"counterTotal":2}
    , {"artistName":"Rose","groupName":"Blackpink","imageName":"ROSE_BLACKPINK","counter1":3,"counter2":1,"counterTotal":4}
    , {"artistName":"Ryujin","groupName":"ITZY","imageName":"RYUJIN_ITZY","counter1":0,"counter2":3,"counterTotal":3}
    , {"artistName":"Saerom","groupName":"fromis_9","imageName":"SAEROM_FROMIS9","counter1":6,"counter2":4,"counterTotal":10}
    , {"artistName":"Sakura","groupName":"LE SSERAFIM","imageName":"SAKURA_LESSERAFIM","counter1":20,"counter2":1,"counterTotal":21}
    , {"artistName":"Sana","groupName":"Twice","imageName":"SANA_TWICE","counter1":3,"counter2":5,"counterTotal":8}
    , {"artistName":"Sangah","groupName":"Lightsum","imageName":"SANGAH_LIGHTSUM","counter1":12,"counter2":2,"counterTotal":14}
    , {"artistName":"Seeun","groupName":"Stayc","imageName":"SEEUN_STAYC","counter1":3,"counter2":1,"counterTotal":4}
    , {"artistName":"Sena","groupName":"ADYA","imageName":"SENA_ADYA","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Seoi","groupName":"H1-KEY","imageName":"SEOI_H1KEY","counter1":4,"counter2":0,"counterTotal":4}
    , {"artistName":"Seola","groupName":"WJSN","imageName":"SEOLA_WJSN","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Seonyu","groupName":"CLASS:y","imageName":"SEONYU_CLASSY","counter1":2,"counter2":1,"counterTotal":3}
    , {"artistName":"Seoyeon","groupName":"fromis_9","imageName":"SEOYEON_FROMIS9","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Seoyeon","groupName":"tripleS","imageName":"SEOYEON_TRIPLES","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Shana","groupName":"Lapillus","imageName":"SHANA_LAPILLUS","counter1":1,"counter2":2,"counterTotal":3}
    , {"artistName":"Sheon","groupName":"Billlie","imageName":"SHEON_BILLLIE","counter1":19,"counter2":16,"counterTotal":35}
    , {"artistName":"Shuhua","groupName":"(g)i-dle","imageName":"SHUHUA_GIDLE","counter1":9,"counter2":3,"counterTotal":12}
    , {"artistName":"Sieun","groupName":"Stayc","imageName":"SIEUN_STAYC","counter1":20,"counter2":4,"counterTotal":24}
    , {"artistName":"Sihyeon","groupName":"CSR","imageName":"SIHYEON_CSR","counter1":8,"counter2":0,"counterTotal":8}
    , {"artistName":"Sihyeon","groupName":"Everglow","imageName":"SIHYEON_EVERGLOW","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"SinB","groupName":"VIVIZ","imageName":"SINB_VIVIZ","counter1":87,"counter2":15,"counterTotal":102}
    , {"artistName":"Siyeon","groupName":"Dreamcatcher","imageName":"SIYEON_DREAMCATCHER","counter1":6,"counter2":4,"counterTotal":10}
    , {"artistName":"Siyoon","groupName":"Billlie","imageName":"SIYOON_BILLLIE","counter1":2,"counter2":2,"counterTotal":4}
    , {"artistName":"Soeun","groupName":"Weeekly","imageName":"SOEUN_WEEEKLY","counter1":31,"counter2":16,"counterTotal":47}
    , {"artistName":"Sohee","groupName":"Alice","imageName":"SOHEE_ALICE","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Sohee","groupName":"ichillin","imageName":"SOHEE_ICHILLIN","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Sohyun","groupName":"tripleS","imageName":"SOHYUN_TRIPLES","counter1":7,"counter2":6,"counterTotal":13}
    , {"artistName":"Sojin","groupName":"Hashtag","imageName":"SOJIN_HASHTAG","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Somi","groupName":"soloist","imageName":"SOMI_SOLOIST","counter1":4,"counter2":0,"counterTotal":4}
    , {"artistName":"Soodam","groupName":"Secret Number","imageName":"SOODAM_SECRETNUMBER","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Soojin","groupName":"Weeekly","imageName":"SOOJIN_WEEEKLY","counter1":7,"counter2":0,"counterTotal":7}
    , {"artistName":"Soomin","groupName":"tripleS","imageName":"SOOMIN_TRIPLES","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Sora","groupName":"woo!ah!","imageName":"SORA_WOOAH","counter1":2,"counter2":1,"counterTotal":3}
    , {"artistName":"Sowon","groupName":"Gfriend","imageName":"SOWON_GFRIEND","counter1":9,"counter2":10,"counterTotal":19}
    , {"artistName":"Soyeon","groupName":"(g)i-dle","imageName":"SOYEON_GIDLE","counter1":3,"counter2":1,"counterTotal":4}
    , {"artistName":"Sua","groupName":"CSR","imageName":"SUA_CSR","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Sua","groupName":"Dreamcatcher","imageName":"SUA_DREAMCATCHER","counter1":6,"counter2":30,"counterTotal":36}
    , {"artistName":"Sua","groupName":"Pixy","imageName":"SUA_PIXY","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Suhye","groupName":"Limelight","imageName":"SUHYE_LIMELIGHT","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Suhyeon","groupName":"Billlie","imageName":"SUHYEON_BILLLIE","counter1":4,"counter2":3,"counterTotal":7}
    , {"artistName":"Sullyoon","groupName":"NMIXX","imageName":"SULLYOON_NMIXX","counter1":11,"counter2":4,"counterTotal":15}
    , {"artistName":"Sumin","groupName":"Dream Note","imageName":"SUMIN_DREAMNOTE","counter1":7,"counter2":5,"counterTotal":12}
    , {"artistName":"Sumin","groupName":"Stayc","imageName":"SUMIN_STAYC","counter1":27,"counter2":20,"counterTotal":47}
    , {"artistName":"Suyun","groupName":"Rocket Punch","imageName":"SUYUN_ROCKETPUNCH","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Swan","groupName":"Purple Kiss","imageName":"SWAN_PURPLEKISS","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Takara","groupName":"Busters","imageName":"TAKARA_BUSTERS","counter1":1,"counter2":1,"counterTotal":2}
    , {"artistName":"Tsuki","groupName":"Billlie","imageName":"TSUKI_BILLLIE","counter1":18,"counter2":2,"counterTotal":20}
    , {"artistName":"Tzuyu","groupName":"Twice","imageName":"TZUYU_TWICE","counter1":3,"counter2":5,"counterTotal":8}
    , {"artistName":"Umji","groupName":"VIVIZ","imageName":"UMJI_VIVIZ","counter1":21,"counter2":7,"counterTotal":28}
    , {"artistName":"Vivi","groupName":"LOOSSEMBLE","imageName":"VIVI_LOOSSEMBLE","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Winter","groupName":"aespa","imageName":"WINTER_AESPA","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Wonhee","groupName":"I\u0027LL-IT","imageName":"WONHEE_ILLIT","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Wonyoung","groupName":"IVE","imageName":"WONYOUNG_IVE","counter1":67,"counter2":81,"counterTotal":148}
    , {"artistName":"Wooyeon","groupName":"woo!ah!","imageName":"WOOYEON_WOOAH","counter1":12,"counter2":3,"counterTotal":15}
    , {"artistName":"Xiaoting","groupName":"Kep1er","imageName":"XIAOTING_KEP1ER","counter1":47,"counter2":19,"counterTotal":66}
    , {"artistName":"Xinyu","groupName":"tripleS","imageName":"XINYU_TRIPLES","counter1":2,"counter2":2,"counterTotal":4}
    , {"artistName":"Yaning","groupName":"others","imageName":"YANING_OTHERS","counter1":6,"counter2":1,"counterTotal":7}
    , {"artistName":"Yeji","groupName":"ITZY","imageName":"YEJI_ITZY","counter1":13,"counter2":7,"counterTotal":20}
    , {"artistName":"Yeju","groupName":"ichillin","imageName":"YEJU_ICHILLIN","counter1":8,"counter2":0,"counterTotal":8}
    , {"artistName":"Yel","groupName":"H1-KEY","imageName":"YEL_H1KEY","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Yena","groupName":"soloist","imageName":"YENA_SOLOIST","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Yeojin","groupName":"LOOSSEMBLE","imageName":"YEOJIN_LOOSSEMBLE","counter1":36,"counter2":7,"counterTotal":43}
    , {"artistName":"Yeonhee","groupName":"Rocket Punch","imageName":"YEONHEE_ROCKETPUNCH","counter1":12,"counter2":1,"counterTotal":13}
    , {"artistName":"Yeonji","groupName":"tripleS","imageName":"YEONJI_TRIPLES","counter1":2,"counter2":1,"counterTotal":3}
    , {"artistName":"Yeonjung","groupName":"WJSN","imageName":"YEONJUNG_WJSN","counter1":1,"counter2":3,"counterTotal":4}
    , {"artistName":"Yeoreum","groupName":"WJSN","imageName":"YEOREUM_WJSN","counter1":2,"counter2":1,"counterTotal":3}
    , {"artistName":"Yeram","groupName":"others","imageName":"YERAM_OTHERS","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Yerin","groupName":"Gfriend","imageName":"YERIN_GFRIEND","counter1":2,"counter2":1,"counterTotal":3}
    , {"artistName":"Yeseo","groupName":"Kep1er","imageName":"YESEO_KEP1ER","counter1":12,"counter2":0,"counterTotal":12}
    , {"artistName":"Yiren","groupName":"Everglow","imageName":"YIREN_EVERGLOW","counter1":8,"counter2":8,"counterTotal":16}
    , {"artistName":"Yooa","groupName":"Oh My Girl","imageName":"YOOA_OHMYGIRL","counter1":12,"counter2":5,"counterTotal":17}
    , {"artistName":"Yoohyeon","groupName":"Dreamcatcher","imageName":"YOOHYEON_DREAMCATCHER","counter1":23,"counter2":12,"counterTotal":35}
    , {"artistName":"Yoon","groupName":"Stayc","imageName":"YOON_STAYC","counter1":35,"counter2":1,"counterTotal":36}
    , {"artistName":"Yooyeon","groupName":"tripleS","imageName":"YOOYEON_TRIPLES","counter1":18,"counter2":1,"counterTotal":19}
    , {"artistName":"YOUI","groupName":"Dream Note","imageName":"YOUI_DREAMNOTE","counter1":3,"counter2":1,"counterTotal":4}
    , {"artistName":"Youngeun","groupName":"Kep1er","imageName":"YOUNGEUN_KEP1ER","counter1":9,"counter2":0,"counterTotal":9}
    , {"artistName":"Youngseo","groupName":"I\u0027LL-IT","imageName":"YOUNGSEO_ILLIT","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Yubin","groupName":"Oh My Girl","imageName":"YUBIN_OHMYGIRL","counter1":6,"counter2":1,"counterTotal":7}
    , {"artistName":"Yubin","groupName":"tripleS","imageName":"YUBIN_TRIPLES","counter1":6,"counter2":1,"counterTotal":7}
    , {"artistName":"Yue","groupName":"Lapillus","imageName":"YUE_LAPILLUS","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Yujeong","groupName":"Brave Girls","imageName":"YUJEONG_BRAVEGIRLS","counter1":0,"counter2":1,"counterTotal":1}
    , {"artistName":"Yujin","groupName":"IVE","imageName":"YUJIN_IVE","counter1":37,"counter2":12,"counterTotal":49}
    , {"artistName":"Yujin","groupName":"Kep1er","imageName":"YUJIN_KEP1ER","counter1":10,"counter2":2,"counterTotal":12}
    , {"artistName":"Yuju","groupName":"Gfriend","imageName":"YUJU_GFRIEND","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Yuki","groupName":"Purple Kiss","imageName":"YUKI_PURPLEKISS","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Yuna","groupName":"ITZY","imageName":"YUNA_ITZY","counter1":11,"counter2":3,"counterTotal":14}
    , {"artistName":"Yunah","groupName":"I\u0027LL-IT","imageName":"YUNAH_ILLIT","counter1":1,"counter2":0,"counterTotal":1}
    , {"artistName":"Yunjin","groupName":"LE SSERAFIM","imageName":"YUNJIN_LESSERAFIM","counter1":20,"counter2":4,"counterTotal":24}
    , {"artistName":"Yunkyoung","groupName":"Rocket Punch","imageName":"YUNKYOUNG_ROCKETPUNCH","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Yuqi","groupName":"(g)i-dle","imageName":"YUQI_GIDLE","counter1":22,"counter2":5,"counterTotal":27}
    , {"artistName":"Yuri","groupName":"soloist","imageName":"YURI_SOLOIST","counter1":3,"counter2":0,"counterTotal":3}
    , {"artistName":"Yves","groupName":"soloist","imageName":"YVES_SOLOIST","counter1":6,"counter2":0,"counterTotal":6}
    , {"artistName":"Zin","groupName":"bugAboo","imageName":"ZIN_BUGABOO","counter1":2,"counter2":0,"counterTotal":2}
    , {"artistName":"Zoa","groupName":"Weeekly","imageName":"ZOA_WEEEKLY","counter1":8,"counter2":4,"counterTotal":12}
    
    ];
    
    