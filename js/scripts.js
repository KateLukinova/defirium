
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
    })

    $(".collapse-button").click(function () {
        $(this).toggleClass('show')
        $('.collapse-content').slideToggle()
    });

    if (screen.width > 990) {
        $('.lang-select').select2();
    } else {
        $('.lang-select-mobile').select2();
    }


    var dictionary = {
        EN: {
            menuItemOne: ' Products',
            menuItemTwo: 'Profit',
            menuItemThree: 'About',
            menuItemFour: 'Dashboard',
            menuItemFive: 'Join DAO',
            mainH1: 'Defirium - DeFi Yield Earners.  Start  to gain now',
            mainH2One: 'Join DAO today',
            mainH3One: 'Choose the strategy that will fits you best',
            tradeTextOne: 'Total value locked (TLV)',
            tradeTextTwo: 'Total value locked (TLV)',
            tradeTextThree: 'Total value locked (TLV)',
            hintOne: 'APY (Annual Percentage Yield)',
            hintTwo: 'APY (Annual Percentage Yield)',
            hintThree: 'APY (Annual Percentage Yield)',
            textButtonOne: 'Deposit',
            textButtonTwo: 'Coming soon',
            textButtonThree: 'Coming soon',
            textButtonFour: 'Details',
            textButtonFive: 'Details',
            textButtonSix: 'Details',
            mainCaptionOne: 'Track your DeFi portfolio in real time',
            mainPBlockOne: 'All market changes and opportunites are monitored 24/7 by bots ans other special tools for your convience. See your earnings and redeem your funds and interest in one place online',
            mainH2Two: '3 steps to start earning on your deposit',
            mainCaptionTwo: 'Step 1',
            mainPBlockTwo: 'Choose one or several strategies that fits you best. Create your own portfolio of digital assets that will maximize your income.',
            mainCaptionThree: 'Step 2',
            mainPBlockThree: 'Put your assets on a deposit. All your investments will be allocated across DeFi protocols automatically.',
            mainCaptionFour: 'Step 3',
            mainPBlockFour: 'You will start earning immediately aftrer you put your assets on the deposit. Monitor the rate, your income, other strategies, to make more investments and to wide you digital portfolio in order to create your personal strategy of earning.',
            mainCaptionFive: 'We are using leading audited protocols',
            mainPBlockFive: 'Just choose your best strategy and see how assets are automatically allocated across best DeFi protocols',
            textButtonSeven: 'Join DAO',
            mainCaptionSix: 'Ready to get started with Defirium?',
            formEmail: 'Your email',
            formButton: 'Subscribe',
            copyright: '2020 defirium. All rights reserved',
            terms: 'Terms of use',
            police: 'Privacy Policy'
        },
        RU: {
            menuItemOne: 'Продукты',
            menuItemTwo: 'Доход',
            menuItemThree: 'О нас',
            menuItemFour: 'Приборная панель',
            menuItemFive: 'Присоединиться к DAO',
            mainH1: 'Defirium - DeFi доходность, Начните зарабатывать сейчас.',
            mainH2One: 'Присоединиться к DAO сегодня',
            mainH3One: 'Выберите стратегию, которая подходит вам больше всего',
            tradeTextOne: 'Общая заблокированная сумма',
            tradeTextTwo: 'Общая заблокированная сумма',
            tradeTextThree: 'Общая заблокированная сумма',
            hintOne: 'Годовая процентная доходность',
            hintTwo: 'Годовая процентная доходность',
            hintThree: 'Годовая процентная доходность',
            textButtonOne: 'Депонировать',
            textButtonTwo: 'В разработке',
            textButtonThree: 'В разработке',
            textButtonFour: 'Детали',
            textButtonFive: 'Детали',
            textButtonSix: 'Детали',
            mainCaptionOne: 'Отслеживайте ваш DeFi портфель в реальном времени',
            mainPBlockOne: 'Все рыночные изменения и возможности отслеживаются круглосуточно, без выходных, с помощью ботов и других специальных инструментов для вашего удобства. Следите за своими доходами, выкупайте свои средства и получайте проценты в одном месте в Интернете',
            mainH2Two: '3 шага, чтобы начать зарабатывать на своем депозите',
            mainCaptionTwo: 'Шаг 1',
            mainPBlockTwo: 'Выберите одну или несколько стратегий, которые вам больше всего подходят. Создайте свой собственный портфель цифровых активов, который максимизирует ваш доход.',
            mainCaptionThree: 'Шаг 2',
            mainPBlockThree: 'Положите свои активы на депозит. Все ваши инвестиции будут автоматически распределены между протоколам DeFi.',
            mainCaptionFour: 'Шаг 3',
            mainPBlockFour: 'Вы начнете зарабатывать сразу после того, как положите свои активы на депозит. Следите за ставкой, своим доходом, другими стратегиями, чтобы делать больше инвестиций и расширять свой цифровой портфель, чтобы создать свою личную стратегию заработка.',
            mainCaptionFive: 'Мы используем ведущие проверенные протоколы',
            mainPBlockFive: 'Просто выберите свою лучшую стратегию и посмотрите, как активы автоматически распределяются по лучшим протоколам DeFi',
            textButtonSeven: 'Присоединиться к DAO',
            mainCaptionSix: 'Готовы начать работу с Defirium?',
            formEmail: 'Ваша электронная почта',
            formButton: 'Подписаться',
            copyright: '2020 Defirium. Все права защищены',
            terms: 'Условия пользования',
            police: 'Политика конфиденциальности'
            },
        CH: {
            menuItemOne: '使用方法',
            menuItemTwo: 'VTBC令牌',
            menuItemThree: '关于服务',
            menuItemFour: '选择语言',
            tbccVPN: '关于TBCC VPN',
            mainH2: '请开始使用第一个去中心化的区块链VPN。 甚至超级计算机也无法访问您的数据。',
            mainCaptionOne: '新的安全时代',
            mainPBlockOne: 'TBCC VPN建立在Cellframe平台上。 与其他VPN服务不同，我们实施了量子安全加密，可以保护您的所有交易和信息。 由于存在多个路由，TBCC VPN是完全匿名的。',
            mainCaptionTwo: '主要优点',
            mainUlBlockLiOne: '• 简单易用的界面',
            mainUlBlockLiTwo: '• 比集中式VPN应用程序更安全-放心，所有数据和操作都将是安全的',
            mainUlBlockLiThree: '• TBCC VPN不收集延迟',
            mainUlBlockLiFour: '• 它没有单点故障，因此无法阻止',
            mainUlBlockLiFive: '• 由于付款或流量无法识别TBCC VPN用户',
            mainUlBlockLiSix: ' • 快速的互联网连接',
            mainCaptionThree: '不再有边界',
            mainPBlockTwo: '从世界任何地方无限访问音乐，社交媒体，视频，应用程序和其他Internet资源。 忘记地理障碍，享受无网络边界的互联网',
            textButton: '开始使用',
            footerItemOne: '联系我们',
            footerItemTwo: '关注并订阅我们的社交网络',
            footerItemThree: '退货政策',
            footerItemFour: '使用条款',
            footerItemFive: '隐私政策',
            footerItemSix: '提供服务的完整说明',
            tokenH1: '什么是VTBC？',
            tokenH2: 'VTBC令牌是TBCC VPN服务发行的一种新型数字资产。 它是完全去中心化的，可以在与BNB配对的Binance DEX上进行交易。 VTBC在Binance Chain平台上可用。',
            tokenCaptionOne: 'VTBC-区块链中的新代币',
            tokenUlBlockOne: '可接受的价格',
            tokenUlBlockTwo: '固定数量的1,000,000令牌',
            tokenUlBlockThree: '与新的BEP8协议无缝运行',
            tokenUlBlockFour: '可在Binance DEX或TBCC钱包上购买',
            tokenCaptionTwo: '使用VTBC',
            tokenPItemOne: '支付VPN密钥以激活TBCC VPN应用',
            tokenPItemTwo: '使用VTBC令牌，您可以在Binance DEX上进行交易',
            tokenPItemThree: '通过AirDrop接收VTBC令牌',
            tokenCaptionThree: 'VTBC的市场数据',
            totalMarketCap: '总市值',
            priceText: '价钱',
            volumeText: '24小时成交量',
            globalRankText: '世界排名（在BEP8协议中）五',
            howH1: '如何使用TBCC VPN？',
            howH2: '为了开始使用TBCC VPN，您只需采取2个步骤',
            howPBlockOne: '要开始使用TBCC VPN应用，您需要安装移动应用程序（目前仅Android版本暂时可用）',
            howPBlockTwo: '为了激活VPN应用程序，您需要有一个VPN密钥',
            howCaptionOne: '如何获得TBCC VPN的密钥？',
            howPBlockThree: '很简单。 您需要安装TBCC Wallet移动应用程序并使用VTBC令牌购买密钥。 登录钱包',
            howPBlockFour: 'VTBC令牌可以在VTBC / BNB对中的Binance DEX上获得，也可以在手机上的TBCC Wallet应用中获得',
            key: '个VPN密钥',
            howPBlockFive: '注意：您的余额中需要有Binance Coin（BNB）',
            aboutH1: '关于TBCC VPN',
            aboutH2: 'TBCC VPN是TBCC Labs向用户提供的服务之一。TBCC VPN的使命是提供安全，快速的Internet连接，而不会出现任何滞后，被监视或被出售数据的情况。 ',
            globalServers: '国际服务器',
            aboutPBlockOne: '我们不使用像常规VPN服务这样的服务器。 TBCC VPN已完全分散。 您可以在世界任何地方使用我们的VPN，您的位置不受限制。',
            aboutCaptionOne: '与其他VPN服务不同，TBCC VPN具有以下鲜明特征',
            aboutUlBlockOne: 'IP黑名单（IP黑名单）',
            aboutUlBlockTwo: 'QoS保证',
            aboutUlBlockThree: '无需登录-您无需提供个人数据即可使用该服务',
            aboutUlBlockFour: '内部VPN径流',
            aboutUlBlockFive: '可变加密',
            keyFeatures: '关键特征',
            aboutCaptionTwo: '为什么TBCC VPN比其他更好？',
            aboutPBlockTwo: 'TBCC VPN比其他VPN安全得多，因为我们使用的原始加密技术不同于其他VPN。 您的互联网连接将非常快速-您不必担心无法立即在Binance DEX上进行购买。 此外，TBCC VPN具有简单易用的界面。',
            aboutH3One: '进阶网路冲浪',
            aboutH3Two: '完全匿名',
            aboutH3Three: '去中心化',
            aboutPBlockThree: '使用TBCC VPN，可以完全保护您免受跟踪和监视。您可以浏览互联网，观看视频或使用任何应用程序。',
            aboutPBlockFour: 'TBCC VPN可保护您免受间谍网站和烦人的广告商的不必要的关注。访问网站没有问题-您的真实IP将永远不会在Internet上可见。',
            aboutPBlockFive: 'TBCC VPN基于Cellframe分散式区块链平台。分散化使您可以独立于服务器位置，并且连接将尽可能快！'
        }

    }

    var language = 'EN';

    if(localStorage.getItem('todoLang')){
        $('.lang').val(localStorage.getItem('todoLang'));
        console.log('kdjdj')
        setLanguage(dictionary, localStorage.getItem('todoLang'));
        language = localStorage.getItem('todoLang');
    } else {
        setLanguage(dictionary, language);
    }

    $('.lang').change(function () {
        language = $(this).val();
        setLanguage(dictionary, language);
        localStorage.setItem('todoLang', language);
    });



});

function compare( a, b ) {
    if ( a.capitalization < b.capitalization ){
        return -1;
    }
    if ( a.capitalization > b.capitalization ){
        return 1;
    }
    return 0;
}

function setLanguage(dictionary, language)
{
    $('#menuItemOne').text(dictionary[language].menuItemOne);
    $('#menuItemTwo').text(dictionary[language].menuItemTwo);
    $('#menuItemThree').text(dictionary[language].menuItemThree);
    $('#menuItemFour').text(dictionary[language].menuItemFour);
    $('#menuItemFive').text(dictionary[language].menuItemFive);
    $('#mainH1').text(dictionary[language].mainH1);
    $('#mainH2One').text(dictionary[language].mainH2One);
    $('#mainH3One').text(dictionary[language].mainH3One);
    $('#tradeTextOne').text(dictionary[language].tradeTextOne);
    $('#tradeTextTwo').text(dictionary[language].tradeTextTwo);
    $('#tradeTextThree').text(dictionary[language].tradeTextThree);
    $('#hintOne').text(dictionary[language].hintOne);
    $('#hintTwo').text(dictionary[language].hintTwo);
    $('#hintThree').text(dictionary[language].hintThree);
    $('#textButtonOne').text(dictionary[language].textButtonOne);
    $('#textButtonTwo').text(dictionary[language].textButtonTwo);
    $('#textButtonThree').text(dictionary[language].textButtonThree);
    $('#textButtonFour').text(dictionary[language].textButtonFour);
    $('#textButtonFive').text(dictionary[language].textButtonFive);
    $('#textButtonSix').text(dictionary[language].textButtonSix);
    $('#mainCaptionOne').text(dictionary[language].mainCaptionOne);
    $('#mainPBlockOne').text(dictionary[language].mainPBlockOne);
    $('#mainH2Two').text(dictionary[language].mainH2Two);
    $('#mainCaptionTwo').text(dictionary[language].mainCaptionTwo);
    $('#mainPBlockTwo').text(dictionary[language].mainPBlockTwo);
    $('#mainCaptionThree').text(dictionary[language].mainCaptionThree);
    $('#mainPBlockThree').text(dictionary[language].mainPBlockThree);
    $('#mainCaptionFour').text(dictionary[language].mainCaptionFour);
    $('#mainPBlockFour').text(dictionary[language].mainPBlockFour);
    $('#mainCaptionFive').text(dictionary[language].mainCaptionFive);
    $('#mainPBlockFive').text(dictionary[language].mainPBlockFive);
    $('#textButtonSeven').text(dictionary[language].textButtonSeven);
    $('#mainCaptionSix').text(dictionary[language].mainCaptionSix);
    $('#formEmail').attr('placeholder', dictionary[language].formEmail);
    $('#formButton').attr('value', dictionary[language].formButton);
    $('#copyright').text(dictionary[language].copyright);
    $('#terms').text(dictionary[language].terms);
    $('#police').text(dictionary[language].police);

    $('#textButton').text(dictionary[language].textButton);
    $('#footerItemOne').text(dictionary[language].footerItemOne);
    $('#footerItemFour').text(dictionary[language].footerItemFour);
    $('#footerItemFive').text(dictionary[language].footerItemFive);
    $('#tokenH1').text(dictionary[language].tokenH1);
    $('#tokenH2').text(dictionary[language].tokenH2);
    $('#tokenCaptionOne').text(dictionary[language].tokenCaptionOne);
    $('#tokenUlBlockOne').text(dictionary[language].tokenUlBlockOne);
    $('#tokenUlBlockTwo').text(dictionary[language].tokenUlBlockTwo);
    $('#tokenUlBlockThree').text(dictionary[language].tokenUlBlockThree);
    $('#tokenUlBlockFour').text(dictionary[language].tokenUlBlockFour);
    $('#tokenCaptionTwo').text(dictionary[language].tokenCaptionTwo);
    $('#tokenPItemOne').text(dictionary[language].tokenPItemOne);
    $('#tokenPItemTwo').text(dictionary[language].tokenPItemTwo);
    $('#tokenPItemThree').text(dictionary[language].tokenPItemThree);
    $('#tokenCaptionThree').text(dictionary[language].tokenCaptionThree);
    $('#totalMarketCap').text(dictionary[language].totalMarketCap);
    $('#priceText').text(dictionary[language].priceText);
    $('#volumeText').text(dictionary[language].volumeText);
    $('#globalRankText').text(dictionary[language].globalRankText);
    $('#howH1').text(dictionary[language].howH1);
    $('#howH2').text(dictionary[language].howH2);
    $('#howPBlockOne').text(dictionary[language].howPBlockOne);
    $('#howPBlockTwo').text(dictionary[language].howPBlockTwo);
    $('#howCaptionOne').text(dictionary[language].howCaptionOne);
    $('#howPBlockThree').text(dictionary[language].howPBlockThree);
    $('#howPBlockFour').text(dictionary[language].howPBlockFour);
    $('#key').text(dictionary[language].key);
    $('#howPBlockFive').text(dictionary[language].howPBlockFive);
    $('#aboutH1').text(dictionary[language].aboutH1);
    $('#aboutH2').text(dictionary[language].aboutH2);
    $('#globalServers').text(dictionary[language].globalServers);
    $('#aboutPBlockOne').text(dictionary[language].aboutPBlockOne);
    $('#aboutCaptionOne').text(dictionary[language].aboutCaptionOne);
    $('#aboutUlBlockOne').text(dictionary[language].aboutUlBlockOne);
    $('#aboutUlBlockTwo').text(dictionary[language].aboutUlBlockTwo);
    $('#aboutUlBlockThree').text(dictionary[language].aboutUlBlockThree);
    $('#aboutUlBlockFour').text(dictionary[language].aboutUlBlockFour);
    $('#aboutUlBlockFive').text(dictionary[language].aboutUlBlockFive);
    $('#keyFeatures').text(dictionary[language].keyFeatures);
    $('#aboutCaptionTwo').text(dictionary[language].aboutCaptionTwo);
    $('#aboutPBlockTwo').text(dictionary[language].aboutPBlockTwo);
    $('#aboutH3One').text(dictionary[language].aboutH3One);
    $('#aboutH3Two').text(dictionary[language].aboutH3Two);
    $('#aboutH3Three').text(dictionary[language].aboutH3Three);
    $('#aboutPBlockThree').text(dictionary[language].aboutPBlockThree);
    $('#aboutPBlockFour').text(dictionary[language].aboutPBlockFour);
    $('#aboutPBlockFive').text(dictionary[language].aboutPBlockFive);
}
