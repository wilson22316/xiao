var areaoption = document.querySelector('#area');
var shopoption = document.querySelector('#shop');

var arealist = [
    {
        'area': '無',
        'value': '無'
    },
    {
        'area': '基隆市',
        'value': '基隆市'
    },
    {
        'area': '台北市',
        'value': '台北市'
    },
    {
        'area': '新北市',
        'value': '新北市'
    },
    {
        'area': '桃園市',
        'value': '桃園市'
    },
    {
        'area': '新竹市',
        'value': '新竹市'
    },
    {
        'area': '新竹縣',
        'value': '新竹縣'
    },
    {
        'area': '苗栗縣',
        'value': '苗栗縣'
    },
    {
        'area': '台中市',
        'value': '台中市'
    },
    {
        'area': '彰化縣',
        'value': '彰化縣'
    },
    {
        'area': '南投縣',
        'value': '南投縣'
    },
    {
        'area': '雲林縣',
        'value': '雲林縣'
    },
    {
        'area': '嘉義市',
        'value': '嘉義市'
    },
    {
        'area': '嘉義縣',
        'value': '嘉義縣'
    },
    {
        'area': '台南市',
        'value': '台南市'
    },
    {
        'area': '高雄市',
        'value': '高雄市'
    },
    {
        'area': '屏東縣',
        'value': '屏東縣'
    },
    {
        'area': '臺東縣',
        'value': '臺東縣'
    },
    {
        'area': '花蓮縣',
        'value': '花蓮縣'
    },
    {
        'area': '宜蘭縣',
        'value': '宜蘭縣'
    },
    {
        'area': '澎湖縣',
        'value': '澎湖縣'
    },
    {
        'area': '金門縣',
        'value': '金門縣'
    }
]

var shoplist = [
    {
        'area': '基隆市',
        'shop': '七堵',
        'value': '七堵'
    },
    {
        'area': '基隆市',
        'shop': '大武崙',
        'value': '大武崙'
    },
    {
        'area': '台北市',
        'shop': '內湖',
        'value': '內湖'
    },
    {
        'area': '台北市',
        'shop': '八德',
        'value': '八德'
    },
    {
        'area': '台北市',
        'shop': '北投',
        'value': '北投'
    },
    {
        'area': '台北市',
        'shop': '南京',
        'value': '南京'
    },
    {
        'area': '台北市',
        'shop': '台北木新',
        'value': '台北木新'
    },
    {
        'area': '台北市',
        'shop': '台北龍江',
        'value': '台北龍江'
    },
    {
        'area': '台北市',
        'shop': '士林',
        'value': '士林'
    },
    {
        'area': '台北市',
        'shop': '大安',
        'value': '大安'
    },
    {
        'area': '台北市',
        'shop': '景美',
        'value': '景美'
    },
    {
        'area': '台北市',
        'shop': '松德',
        'value': '松德'
    },
    {
        'area': '台北市',
        'shop': '民生東路',
        'value': '民生東路'
    },
    {
        'area': '台北市',
        'shop': '石牌',
        'value': '石牌'
    },
    {
        'area': '台北市',
        'shop': '興隆',
        'value': '興隆'
    },
    {
        'area': '台北市',
        'shop': '萬華',
        'value': '萬華'
    },
    {
        'area': '台北市',
        'shop': '西門町',
        'value': '西門町'
    },
    {
        'area': '台北市',
        'shop': '通化',
        'value': '通化'
    },
    {
        'area': '新北市',
        'shop': '三峽',
        'value': '三峽'
    },
    {
        'area': '新北市',
        'shop': '三峽北大',
        'value': '三峽北大'
    },
    {
        'area': '新北市',
        'shop': '三重三和',
        'value': '三重三和'
    },
    {
        'area': '新北市',
        'shop': '三重中正',
        'value': '三重中正'
    },
    {
        'area': '新北市',
        'shop': '三重五華',
        'value': '三重五華'
    },
    {
        'area': '新北市',
        'shop': '三重正北',
        'value': '三重正北'
    },
    {
        'area': '新北市',
        'shop': '三重自強',
        'value': '三重自強'
    },
    {
        'area': '新北市',
        'shop': '中和',
        'value': '中和'
    },
    {
        'area': '新北市',
        'shop': '中和員山',
        'value': '中和員山'
    },
    {
        'area': '新北市',
        'shop': '中和環球',
        'value': '中和環球'
    },
    {
        'area': '新北市',
        'shop': '五股',
        'value': '五股'
    },
    {
        'area': '新北市',
        'shop': '南勢角',
        'value': '南勢角'
    },
    {
        'area': '新北市',
        'shop': '土城',
        'value': '土城'
    },
    {
        'area': '新北市',
        'shop': '土城學府',
        'value': '土城學府'
    },
    {
        'area': '新北市',
        'shop': '土城明德',
        'value': '土城明德'
    },
    {
        'area': '新北市',
        'shop': '安康',
        'value': '安康'
    },
    {
        'area': '新北市',
        'shop': '新店中正',
        'value': '新店中正'
    },
    {
        'area': '新北市',
        'shop': '新莊中港',
        'value': '新莊中港'
    },
    {
        'area': '新北市',
        'shop': '新莊幸福',
        'value': '新莊幸福'
    },
    {
        'area': '新北市',
        'shop': '新莊民安',
        'value': '新莊民安'
    },
    {
        'area': '新北市',
        'shop': '板橋中山',
        'value': '板橋中山'
    },
    {
        'area': '新北市',
        'shop': '板橋新埔板橋新埔',
        'value': '板橋新埔板橋新埔'
    },
    {
        'area': '新北市',
        'shop': '板橋重慶',
        'value': '板橋重慶'
    },
    {
        'area': '新北市',
        'shop': '林口',
        'value': '林口'
    },
    {
        'area': '新北市',
        'shop': '林口文化',
        'value': '林口文化'
    },
    {
        'area': '新北市',
        'shop': '樹林',
        'value': '樹林'
    },
    {
        'area': '新北市',
        'shop': '永和中山',
        'value': '永和中山'
    },
    {
        'area': '新北市',
        'shop': '永和中正',
        'value': '永和中正'
    },
    {
        'area': '新北市',
        'shop': '汐止中興',
        'value': '汐止中興'
    },
    {
        'area': '新北市',
        'shop': '汐止新台五',
        'value': '汐止新台五'
    },
    {
        'area': '新北市',
        'shop': '泰山',
        'value': '泰山'
    },
    {
        'area': '新北市',
        'shop': '淡水',
        'value': '淡水'
    },
    {
        'area': '新北市',
        'shop': '蘆洲',
        'value': '蘆洲'
    },
    {
        'area': '新北市',
        'shop': '蘆洲長榮',
        'value': '蘆洲長榮'
    },
    {
        'area': '桃園市',
        'shop': '中壢中原',
        'value': '中壢中原'
    },
    {
        'area': '桃園市',
        'shop': '中壢崇光',
        'value': '中壢崇光'
    },
    {
        'area': '桃園市',
        'shop': '中壢新生',
        'value': '中壢新生'
    },
    {
        'area': '桃園市',
        'shop': '中壢站前',
        'value': '中壢站前'
    },
    {
        'area': '桃園市',
        'shop': '中壢龍岡',
        'value': '中壢龍岡'
    },
    {
        'area': '桃園市',
        'shop': '內壢',
        'value': '內壢'
    },
    {
        'area': '桃園市',
        'shop': '南崁',
        'value': '南崁'
    },
    {
        'area': '桃園市',
        'shop': '南崁忠孝',
        'value': '南崁忠孝'
    },
    {
        'area': '桃園市',
        'shop': '埔心',
        'value': '埔心'
    },
    {
        'area': '桃園市',
        'shop': '大園',
        'value': '大園'
    },
    {
        'area': '桃園市',
        'shop': '大湳',
        'value': '大湳'
    },
    {
        'area': '桃園市',
        'shop': '平鎮中豐',
        'value': '平鎮中豐'
    },
    {
        'area': '桃園市',
        'shop': '桃園中正',
        'value': '桃園中正'
    },
    {
        'area': '桃園市',
        'shop': '桃園二店',
        'value': '桃園二店'
    },
    {
        'area': '桃園市',
        'shop': '桃園寶山',
        'value': '桃園寶山'
    },
    {
        'area': '桃園市',
        'shop': '桃園更寮腳',
        'value': '桃園更寮腳'
    },
    {
        'area': '桃園市',
        'shop': '桃園武陵',
        'value': '桃園武陵'
    },
    {
        'area': '桃園市',
        'shop': '桃園藝文',
        'value': '桃園藝文'
    },
    {
        'area': '桃園市',
        'shop': '桃鶯',
        'value': '桃鶯'
    },
    {
        'area': '桃園市',
        'shop': '楊梅',
        'value': '楊梅'
    },
    {
        'area': '桃園市',
        'shop': '龍潭',
        'value': '龍潭'
    },
    {
        'area': '桃園市',
        'shop': '龜山',
        'value': '龜山'
    },
    {
        'area': '新竹市',
        'shop': '新竹南大',
        'value': '新竹南大'
    },
    {
        'area': '新竹市',
        'shop': '新竹東門',
        'value': '新竹東門'
    },
    {
        'area': '新竹市',
        'shop': '新竹民生',
        'value': '新竹民生'
    },
    {
        'area': '新竹市',
        'shop': '新竹西大',
        'value': '新竹西大'
    },
    {
        'area': '新竹市',
        'shop': '竹科',
        'value': '竹科'
    },
    {
        'area': '新竹市',
        'shop': '竹科二店',
        'value': '竹科二店'
    },
    {
        'area': '新竹縣',
        'shop': '新竹新埔',
        'value': '新竹新埔'
    },
    {
        'area': '新竹縣',
        'shop': '新豐',
        'value': '新豐'
    },
    {
        'area': '新竹縣',
        'shop': '湖口',
        'value': '湖口'
    },
    {
        'area': '新竹縣',
        'shop': '竹北',
        'value': '竹北'
    },
    {
        'area': '新竹縣',
        'shop': '竹北二店',
        'value': '竹北二店'
    },
    {
        'area': '新竹縣',
        'shop': '竹北光明',
        'value': '竹北光明'
    },
    {
        'area': '新竹縣',
        'shop': '竹北喜來',
        'value': '竹北喜來'
    },
    {
        'area': '新竹縣',
        'shop': '竹東',
        'value': '竹東'
    },
    {
        'area': '苗栗縣',
        'shop': '竹南',
        'value': '竹南'
    },
    {
        'area': '苗栗縣',
        'shop': '苑裡',
        'value': '苑裡'
    },
    {
        'area': '苗栗縣',
        'shop': '苗栗',
        'value': '苗栗'
    },
    {
        'area': '苗栗縣',
        'shop': '頭份',
        'value': '頭份'
    },
    {
        'area': '台中市',
        'shop': '中科',
        'value': '中科'
    },
    {
        'area': '台中市',
        'shop': '南屯',
        'value': '南屯'
    },
    {
        'area': '台中市',
        'shop': '台中三民',
        'value': '台中三民'
    },
    {
        'area': '台中市',
        'shop': '台中北屯',
        'value': '台中北屯'
    },
    {
        'area': '台中市',
        'shop': '台中大墩',
        'value': '台中大墩'
    },
    {
        'area': '台中市',
        'shop': '台中學士',
        'value': '台中學士'
    },
    {
        'area': '台中市',
        'shop': '台中崇德',
        'value': '台中崇德'
    },
    {
        'area': '台中市',
        'shop': '台中復興',
        'value': '台中復興'
    },
    {
        'area': '台中市',
        'shop': '台中東山',
        'value': '台中東山'
    },
    {
        'area': '台中市',
        'shop': '台中東海',
        'value': '台中東海'
    },
    {
        'area': '台中市',
        'shop': '台中東興',
        'value': '台中東興'
    },
    {
        'area': '台中市',
        'shop': '台中權美',
        'value': '台中權美'
    },
    {
        'area': '台中市',
        'shop': '台中水湳',
        'value': '台中水湳'
    },
    {
        'area': '台中市',
        'shop': '台中烏日',
        'value': '台中烏日'
    },
    {
        'area': '台中市',
        'shop': '台中美村',
        'value': '台中美村'
    },
    {
        'area': '台中市',
        'shop': '台中頭家厝',
        'value': '台中頭家厝'
    },
    {
        'area': '台中市',
        'shop': '台中黎明',
        'value': '台中黎明'
    },
    {
        'area': '台中市',
        'shop': '后里',
        'value': '后里'
    },
    {
        'area': '台中市',
        'shop': '大甲',
        'value': '大甲'
    },
    {
        'area': '台中市',
        'shop': '大里',
        'value': '大里'
    },
    {
        'area': '台中市',
        'shop': '大里大明',
        'value': '大里大明'
    },
    {
        'area': '台中市',
        'shop': '大里成功',
        'value': '大里成功'
    },
    {
        'area': '台中市',
        'shop': '大雅學府',
        'value': '大雅學府'
    },
    {
        'area': '台中市',
        'shop': '太平',
        'value': '太平'
    },
    {
        'area': '台中市',
        'shop': '太平中山',
        'value': '太平中山'
    },
    {
        'area': '台中市',
        'shop': '昌平',
        'value': '昌平'
    },
    {
        'area': '台中市',
        'shop': '沙鹿',
        'value': '沙鹿'
    },
    {
        'area': '台中市',
        'shop': '清水',
        'value': '清水'
    },
    {
        'area': '台中市',
        'shop': '漢口',
        'value': '漢口'
    },
    {
        'area': '台中市',
        'shop': '潭子',
        'value': '潭子'
    },
    {
        'area': '台中市',
        'shop': '神岡',
        'value': '神岡'
    },
    {
        'area': '台中市',
        'shop': '西屯太原',
        'value': '西屯太原'
    },
    {
        'area': '台中市',
        'shop': '豐原',
        'value': '豐原'
    },
    {
        'area': '台中市',
        'shop': '豐原向陽',
        'value': '豐原向陽'
    },
    {
        'area': '台中市',
        'shop': '逢甲',
        'value': '逢甲'
    },
    {
        'area': '台中市',
        'shop': '霧峰',
        'value': '霧峰'
    },
    {
        'area': '彰化縣',
        'shop': '和美',
        'value': '和美'
    },
    {
        'area': '彰化縣',
        'shop': '員林',
        'value': '員林'
    },
    {
        'area': '彰化縣',
        'shop': '彰化',
        'value': '彰化'
    },
    {
        'area': '彰化縣',
        'shop': '彰化二林',
        'value': '彰化二林'
    },
    {
        'area': '彰化縣',
        'shop': '彰化民族',
        'value': '彰化民族'
    },
    {
        'area': '彰化縣',
        'shop': '溪湖',
        'value': '溪湖'
    },
    {
        'area': '彰化縣',
        'shop': '鹿港',
        'value': '鹿港'
    },
    {
        'area': '南投縣',
        'shop': '南投',
        'value': '南投'
    },
    {
        'area': '南投縣',
        'shop': '埔里',
        'value': '埔里'
    },
    {
        'area': '南投縣',
        'shop': '草屯',
        'value': '草屯'
    },
    {
        'area': '雲林縣',
        'shop': '北港',
        'value': '北港'
    },
    {
        'area': '雲林縣',
        'shop': '斗六',
        'value': '斗六'
    },
    {
        'area': '雲林縣',
        'shop': '虎尾',
        'value': '虎尾'
    },
    {
        'area': '雲林縣',
        'shop': '西螺',
        'value': '西螺'
    },
    {
        'area': '嘉義市',
        'shop': '嘉義中山',
        'value': '嘉義中山'
    },
    {
        'area': '嘉義市',
        'shop': '嘉義新生',
        'value': '嘉義新生'
    },
    {
        'area': '嘉義市',
        'shop': '嘉義興業',
        'value': '嘉義興業'
    },
    {
        'area': '嘉義縣',
        'shop': '朴子',
        'value': '朴子'
    },
    {
        'area': '嘉義縣',
        'shop': '民雄',
        'value': '民雄'
    },
    {
        'area': '台南市',
        'shop': '台南仁德',
        'value': '台南仁德'
    },
    {
        'area': '台南市',
        'shop': '台南佳里',
        'value': '台南佳里'
    },
    {
        'area': '台南市',
        'shop': '台南大同',
        'value': '台南大同'
    },
    {
        'area': '台南市',
        'shop': '台南安和',
        'value': '台南安和'
    },
    {
        'area': '台南市',
        'shop': '台南崇明',
        'value': '台南崇明'
    },
    {
        'area': '台南市',
        'shop': '台南東安',
        'value': '台南東安'
    },
    {
        'area': '台南市',
        'shop': '台南歸仁',
        'value': '台南歸仁'
    },
    {
        'area': '台南市',
        'shop': '台南海安',
        'value': '台南海安'
    },
    {
        'area': '台南市',
        'shop': '台南華平',
        'value': '台南華平'
    },
    {
        'area': '台南市',
        'shop': '台南金華',
        'value': '台南金華'
    },
    {
        'area': '台南市',
        'shop': '台南開元',
        'value': '台南開元'
    },
    {
        'area': '台南市',
        'shop': '台南關廟',
        'value': '台南關廟'
    },
    {
        'area': '台南市',
        'shop': '善化',
        'value': '善化'
    },
    {
        'area': '台南市',
        'shop': '大灣',
        'value': '大灣'
    },
    {
        'area': '台南市',
        'shop': '新化',
        'value': '新化'
    },
    {
        'area': '台南市',
        'shop': '新市',
        'value': '新市'
    },
    {
        'area': '台南市',
        'shop': '新營',
        'value': '新營'
    },
    {
        'area': '台南市',
        'shop': '永康中山',
        'value': '永康中山'
    },
    {
        'area': '台南市',
        'shop': '永康中華',
        'value': '永康中華'
    },
    {
        'area': '台南市',
        'shop': '海佃',
        'value': '海佃'
    },
    {
        'area': '台南市',
        'shop': '麻豆',
        'value': '麻豆'
    },
    {
        'area': '高雄市',
        'shop': '三多',
        'value': '三多'
    },
    {
        'area': '高雄市',
        'shop': '三多新光',
        'value': '三多新光'
    },
    {
        'area': '高雄市',
        'shop': '中庄',
        'value': '中庄'
    },
    {
        'area': '高雄市',
        'shop': '五甲',
        'value': '五甲'
    },
    {
        'area': '高雄市',
        'shop': '仁武',
        'value': '仁武'
    },
    {
        'area': '高雄市',
        'shop': '仁雄登發',
        'value': '仁雄登發'
    },
    {
        'area': '高雄市',
        'shop': '光遠',
        'value': '光遠'
    },
    {
        'area': '高雄市',
        'shop': '右昌',
        'value': '右昌'
    },
    {
        'area': '高雄市',
        'shop': '和平',
        'value': '和平'
    },
    {
        'area': '高雄市',
        'shop': '大勇',
        'value': '大勇'
    },
    {
        'area': '高雄市',
        'shop': '富農裕誠',
        'value': '富農裕誠'
    },
    {
        'area': '高雄市',
        'shop': '岡山',
        'value': '岡山'
    },
    {
        'area': '高雄市',
        'shop': '岡山二店',
        'value': '岡山二店'
    },
    {
        'area': '高雄市',
        'shop': '左營',
        'value': '左營'
    },
    {
        'area': '高雄市',
        'shop': '建工',
        'value': '建工'
    },
    {
        'area': '高雄市',
        'shop': '文藻鼎中',
        'value': '文藻鼎中'
    },
    {
        'area': '高雄市',
        'shop': '旗山',
        'value': '旗山'
    },
    {
        'area': '高雄市',
        'shop': '梓官',
        'value': '梓官'
    },
    {
        'area': '高雄市',
        'shop': '楠梓後勁',
        'value': '楠梓後勁'
    },
    {
        'area': '高雄市',
        'shop': '楠梓站前',
        'value': '楠梓站前'
    },
    {
        'area': '高雄市',
        'shop': '橋頭',
        'value': '橋頭'
    },
    {
        'area': '高雄市',
        'shop': '瑞隆',
        'value': '瑞隆'
    },
    {
        'area': '高雄市',
        'shop': '自由',
        'value': '自由'
    },
    {
        'area': '高雄市',
        'shop': '赤山',
        'value': '赤山'
    },
    {
        'area': '高雄市',
        'shop': '路竹',
        'value': '路竹'
    },
    {
        'area': '高雄市',
        'shop': '高鐵華夏',
        'value': '高鐵華夏'
    },
    {
        'area': '高雄市',
        'shop': '高雄七賢',
        'value': '高雄七賢'
    },
    {
        'area': '高雄市',
        'shop': '高雄內惟',
        'value': '高雄內惟'
    },
    {
        'area': '高雄市',
        'shop': '高雄大昌',
        'value': '高雄大昌'
    },
    {
        'area': '高雄市',
        'shop': '高雄大發',
        'value': '高雄大發'
    },
    {
        'area': '高雄市',
        'shop': '高雄小港',
        'value': '高雄小港'
    },
    {
        'area': '高雄市',
        'shop': '高雄建國',
        'value': '高雄建國'
    },
    {
        'area': '高雄市',
        'shop': '高雄建興',
        'value': '高雄建興'
    },
    {
        'area': '高雄市',
        'shop': '高雄文化',
        'value': '高雄文化'
    },
    {
        'area': '高雄市',
        'shop': '高雄新富',
        'value': '高雄新富'
    },
    {
        'area': '高雄市',
        'shop': '高雄林園',
        'value': '高雄林園'
    },
    {
        'area': '高雄市',
        'shop': '高雄林森',
        'value': '高雄林森'
    },
    {
        'area': '高雄市',
        'shop': '高雄榮總',
        'value': '高雄榮總'
    },
    {
        'area': '高雄市',
        'shop': '高雄自強',
        'value': '高雄自強'
    },
    {
        'area': '高雄市',
        'shop': '高雄茄萣',
        'value': '高雄茄萣'
    },
    {
        'area': '高雄市',
        'shop': '高雄草衙',
        'value': '高雄草衙'
    },
    {
        'area': '高雄市',
        'shop': '高雄華榮',
        'value': '高雄華榮'
    },
    {
        'area': '高雄市',
        'shop': '高雄陽明',
        'value': '高雄陽明'
    },
    {
        'area': '高雄市',
        'shop': '鳳山',
        'value': '鳳山'
    },
    {
        'area': '屏東縣',
        'shop': '屏東',
        'value': '屏東'
    },
    {
        'area': '屏東縣',
        'shop': '屏東二店',
        'value': '屏東二店'
    },
    {
        'area': '屏東縣',
        'shop': '屏東內埔',
        'value': '屏東內埔'
    },
    {
        'area': '屏東縣',
        'shop': '恆春',
        'value': '恆春'
    },
    {
        'area': '屏東縣',
        'shop': '東港',
        'value': '東港'
    },
    {
        'area': '屏東縣',
        'shop': '潮州',
        'value': '潮州'
    },
    {
        'area': '屏東縣',
        'shop': '萬丹',
        'value': '萬丹'
    },
    {
        'area': '屏東縣',
        'shop': '里港',
        'value': '里港'
    },
    {
        'area': '臺東縣',
        'shop': '台東',
        'value': '台東'
    },
    {
        'area': '花蓮縣',
        'shop': '花蓮',
        'value': '花蓮'
    },
    {
        'area': '花蓮縣',
        'shop': '花蓮建國',
        'value': '花蓮建國'
    },
    {
        'area': '宜蘭縣',
        'shop': '宜蘭',
        'value': '宜蘭'
    },
    {
        'area': '澎湖縣',
        'shop': '澎湖',
        'value': '澎湖'
    },
    {
        'area': '金門縣',
        'shop': '金湖山外',
        'value': '金湖山外'
    },
    {
        'area': '金門縣',
        'shop': '金門',
        'value': '金門'
    },
]

var productlist = [
    {
        'product': '藥水',
        'value': '藥水'
    },
    {
        'product': '眼鏡',
        'value': '眼鏡'
    },
    {
        'product': '隱形眼鏡',
        'value': '隱形眼鏡'
    },
    {
        'product': '太陽眼鏡',
        'value': '太陽眼鏡'
    },
    {
        'product': '食品',
        'value': '食品'
    },
    {
        'product': '其他',
        'value': '其他'
    }
]


// 縣市
var arealeng = arealist.length;

var str = '<option value="">請選擇縣市</option>';
for (var i = 0; i < arealeng; i++) {
    // console.log(arealist[i].area);
    str += '<option value="' + arealist[i].value + '" >' + arealist[i].area + '</option>';
    // console.log(str);
}

// console.log(str);
areaoption.innerHTML = str;

// 門市
var shopleng = shoplist.length;
var select = document.querySelector('.select');

update = function (e) {
    var str2 = '<option value="">請選擇門市</option>';
    for (i = 0; i < shopleng; i++) {
        if (e.target.value == shoplist[i].area) {
            shopoption.disabled = false;
            // console.log(shoplist[i].shop);
            str2 += '<option value="' + shoplist[i].value + '" >' + shoplist[i].shop + '</option>';
        } else if (e.target.value == '無') {
            shopoption.disabled = true;
            str2 = '<option value="無">請選擇門市</option>';
        }
        shopoption.innerHTML = str2;
    }
}

areaoption.addEventListener('change', update, false);

// 年份

var yearoption = document.querySelector('#year');
var year = 2022;
var str3 = '<option value="">年</option>';
for (var i = 0; i < 122; i++) {

    year -= 1;
    str3 += '<option value="' + year + '" >' + year + '</option>';
    // console.log(str3);
}

yearoption.innerHTML = str3;

// 月份

var monthoption = document.querySelector('#month');
var month = 0;
var str4 = '<option value="">月</option>';
for (var i = 0; i < 12; i++) {
    month += 1;
    str4 += '<option value="' + month + '" >' + month + '</option>';
    // console.log(str4);
}

monthoption.innerHTML = str4;

// 日

var dateoption = document.querySelector('#date');
var date = 0;
var str5 = '<option value="">日</option>';
for (var i = 0; i < 31; i++) {
    date += 1;
    str5 += '<option value="' + date + '" >' + date + '</option>';
    // console.log(str5);
}

dateoption.innerHTML = str5;

// 消費類別

var productoption = document.querySelector('#product');
var productleng = productlist.length;

var str6 = '<option value="">請選擇分類</option>';
for (var i = 0; i < productleng; i++) {
    // console.log(arealist[i].area);
    str6 += '<option value="' + productlist[i].value + '" >' + productlist[i].product + '</option>';
    // console.log(str);
}

// console.log(str6);
productoption.innerHTML = str6;

// 串接

$('#submitBtn').click(function () {

    let fullname = $('#fullname').val();
    let gender = $("input[name='gender']:checked").val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    let area = $('#area').val();
    let shop = $("#shop").val();
    let year = $("#year").val();
    let month = $("#month").val();
    let date = $("#date").val();
    let product = $("#product").val();
    let message = $('#message').val();

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    console.log(validateEmail(email));

    $('.formblock p').removeClass('formblock__required--active');
    $('.formblock__errorhint').removeClass('formblock__errorhint--active');


    var response = grecaptcha.getResponse();

    if (fullname == "") {
        //全名
        $('.formblock:nth-child(1) p').addClass('formblock__required--active');
        alert("資料填寫尚未完成");
    } else if (!gender) {　//性別
        $('.formblock:nth-child(2) p').addClass('formblock__required--active');
        alert("資料填寫尚未完成");
    } else if (phone == "") {　//電話
        $('.formblock:nth-child(3) p').addClass('formblock__required--active');
        alert("資料填寫尚未完成");
    } else if (email == "") {　//電子信箱
        $('.formblock:nth-child(4) p').addClass('formblock__required--active');
        alert("資料填寫尚未完成");
    } else if (validateEmail(email) == false) {
        //驗證電子信箱格式
        // 抄來的正規表示式
        $('.formblock__errorhint').addClass('formblock__errorhint--active');
        alert("資料填寫尚未完成");
    } else if (area == "" || shop == "") {　//地區
        $('.formblock:nth-child(5) p').addClass('formblock__required--active');
        alert("資料填寫尚未完成");
    } else if (year == "" || month == "" || date == "") {　//年
        $('.formblock:nth-child(6) p').addClass('formblock__required--active');
        alert("資料填寫尚未完成");
    } else if (product == "") {　//產品類別
        $('.formblock:nth-child(7) p').addClass('formblock__required--active');
        alert("資料填寫尚未完成");
    } else if (message == "") {　//訊息
        $('.formblock:nth-child(8) p').addClass('formblock__required--active');
        alert("資料填寫尚未完成");
    } else if (response.length == 0) {　
        // 訊息
        console.log('robot valid');
        alert("請勾選驗證");
    } else {　//否則就執行子句三

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxi2RwhpLcVt_LYgEP46lA8lqNGB3EjeLTIx1XDG4VvINyIBCwcf1n6RKlQ0KzQNcYt/exec",
            data: {
                "name": fullname,
                "gender": gender,
                "phone": phone,
                "email": email,
                "area": area,
                "shop": shop,
                "year": year,
                "month": month,
                "date": date,
                "product": product,
                "message": message,
                // "reasons": reasons.toString(),
            },
            success: function (response) {
                if (response == "成功") {
                    $('input[name="gender"]').prop('checked', false);
                    $(".formblock__textblock").val("");
                    $('select').prop('selectedIndex', 0);
                    $("textarea").val("");
                    alert("已收到您的訊息");
                    console.log(fullname, gender, phone, email, area, shop, year, month, date, product)
                }
            },
        });
    }

}
)

//   全部重填
$('#resetBtn').click(function () {
    // alert('reset');
    $('input[name="gender"]').prop('checked', false);
    $(".formblock__textblock").val("");
    $('select').prop('selectedIndex', 0);
    $("textarea").val("");
})
