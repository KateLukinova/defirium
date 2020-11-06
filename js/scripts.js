
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
    })

    $(".collapse-button").click(function () {
        $(this).toggleClass('show')
        $('.collapse-content').slideToggle()
    });

    $('.lang-select').select2();

    $('.join-select').select2({
        templateResult: formatState,
        templateSelection: formatState
    });

    function formatState (opt) {
        if (!opt.id) {
            return opt.text.toUpperCase();
        }

        var optimage = $(opt.element).attr('data-image');
        console.log(optimage)
        if(!optimage){
            return opt.text.toUpperCase();
        } else {
            var $opt = $(
                '<span><img src="' + optimage + '" width="30px" /> ' + opt.text.toUpperCase() + '</span>'
            );
            return $opt;
        }
    };

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $(".wrapper").toggleClass("toggled");
        $(this).toggleClass("toggled");
    });


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
            police: 'Privacy Policy',
            aboutH2One: 'About',
            aboutPBlockOne: 'Defirium is an innovative modern and quite new DAO. Our aim is to make DeFi more clear and understandable for bigger amount of people and to make them work with DeFi with profit and pleasure. We provide user-fiendly interface and use the most popular protocols to make your profit bigger and safer. Our team consists of professionals in differnet spheres.',
            joinButtonOne: 'Connect wallet',
            joinH2One: 'Join DAO',
            joinCaptionOne: 'Token calculator request',
            joinCaptionTwo: 'requested amount*',
            joinCaptionThree: 'offered amount*',
            joinButtonTwo: 'Create request',
            img: 'img/shema.svg'
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
            police: 'Политика конфиденциальности',
            aboutH2One: 'О нас',
            aboutPBlockOne: 'Defirium - это инновационный современный и совершенно новый DAO. Наша цель - сделать DeFi более прозрачным и понятным для большего количества людей и помочь им работать с DeFi с прибылью и удовольствием. Мы предоставляем удобный и простой интерфейс и используем самые популярные протоколы, чтобы сделать вашу прибыль больше и безопаснее. В нашей команде работают профессионалы из разных сфер',
            joinButtonOne: 'Подключить кошелек',
            joinH2One: 'Присоединиться к DAO',
            joinCaptionOne: 'Калькулятор запроса токенов',
            joinCaptionTwo: 'ЗАПРАШИВАЕМАЯ СУММА*',
            joinCaptionThree: 'ПРЕДЛОЖЕННАЯ СУММА*',
            joinButtonTwo: 'Создать заявку',
            img: 'img/shemaru.svg'
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
    $('#aboutH2One').text(dictionary[language].aboutH2One);
    $('#aboutPBlockOne').text(dictionary[language].aboutPBlockOne);
    $('#joinButtonOne').text(dictionary[language].joinButtonOne);
    $('#joinH2One').text(dictionary[language].joinH2One);
    $('#joinCaptionOne').text(dictionary[language].joinCaptionOne);
    $('#joinCaptionTwo').text(dictionary[language].joinCaptionTwo);
    $('#joinCaptionThree').text(dictionary[language].joinCaptionThree);
    $('#joinButtonTwo').text(dictionary[language].joinButtonTwo);
    $("#img").attr('src',dictionary[language].img);

}
