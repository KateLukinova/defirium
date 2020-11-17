
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

    $('.advantages-carousel').slick({
        loop: true,
        infinite: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 3.5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.8,
                    centerMode: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.2,
                    centerMode: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    dots: true
                }
            }
        ]
    });

    $(".carousel-button-prev").click(function () {
        $('.advantages-carousel').slick('slickPrev');
    });
    $(".carousel-button-next").click(function () {
        $('.advantages-carousel').slick('slickNext');
    });

    $(document).scroll(function() {
        var scrollY= $(window).scrollTop();

        if (scrollY > 850 && scrollY <= 1250) {
            $('#tn1').css('opacity', '1')
            $('#tn2').css('opacity', '0')
            $('#tn3').css('opacity', '0')
            $('#tn4').css('opacity', '0')
            $('#tn5').css('opacity', '0')
        } else {
            if (scrollY > 1250 && scrollY <= 1450) {
                $('#tn2').css('opacity', '1')
                $('#tn1').css('opacity', '0')
                $('#tn3').css('opacity', '0')
                $('#tn4').css('opacity', '0')
                $('#tn5').css('opacity', '0')
            } else {
                if (scrollY > 1450 && scrollY <= 1650) {
                    $('#tn3').css('opacity', '1')
                    $('#tn2').css('opacity', '0')
                    $('#tn1').css('opacity', '0')
                    $('#tn4').css('opacity', '0')
                    $('#tn5').css('opacity', '0')
                } else {
                    if (scrollY > 1650 && scrollY <= 1850) {
                        $('#tn4').css('opacity', '1')
                        $('#tn2').css('opacity', '0')
                        $('#tn3').css('opacity', '0')
                        $('#tn1').css('opacity', '0')
                        $('#tn5').css('opacity', '0')
                    } else {
                        if (scrollY > 1850 && scrollY <= 2400) {
                            $('#tn5').css('opacity', '1')
                            $('#tn2').css('opacity', '0')
                            $('#tn3').css('opacity', '0')
                            $('#tn4').css('opacity', '0')
                            $('#tn1').css('opacity', '0')
                        } else {
                            $('#tn1').css('opacity', '0')
                            $('#tn2').css('opacity', '0')
                            $('#tn3').css('opacity', '0')
                            $('#tn4').css('opacity', '0')
                            $('#tn5').css('opacity', '0')
                        }
                    }
                }
            }
        }

        if (scrollY > 350 && scrollY <= 1000) {
            $('#ln1').css('opacity', '1')
            $('#ln2').css('opacity', '0')
            $('#ln3').css('opacity', '0')
            $('#ln4').css('opacity', '0')
            $('#ln5').css('opacity', '0')
        } else {
            if (scrollY > 1000 && scrollY <= 1200) {
                $('#ln2').css('opacity', '1')
                $('#ln1').css('opacity', '0')
                $('#ln3').css('opacity', '0')
                $('#ln4').css('opacity', '0')
                $('#ln5').css('opacity', '0')
            } else {
                if (scrollY > 1200 && scrollY <= 1400) {
                    $('#ln3').css('opacity', '1')
                    $('#ln2').css('opacity', '0')
                    $('#ln1').css('opacity', '0')
                    $('#ln4').css('opacity', '0')
                    $('#ln5').css('opacity', '0')
                } else {
                    if (scrollY > 1400 && scrollY <= 1600) {
                        $('#ln4').css('opacity', '1')
                        $('#ln2').css('opacity', '0')
                        $('#ln3').css('opacity', '0')
                        $('#ln1').css('opacity', '0')
                        $('#ln5').css('opacity', '0')
                    } else {
                        if (scrollY > 1600 && scrollY <= 2000) {
                            $('#ln5').css('opacity', '1')
                            $('#ln2').css('opacity', '0')
                            $('#ln3').css('opacity', '0')
                            $('#ln4').css('opacity', '0')
                            $('#ln1').css('opacity', '0')
                        } else {
                            $('#ln1').css('opacity', '0')
                            $('#ln2').css('opacity', '0')
                            $('#ln3').css('opacity', '0')
                            $('#ln4').css('opacity', '0')
                            $('#ln5').css('opacity', '0')
                        }
                    }
                }
            }
        }

        if (scrollY > 1900 && scrollY <= 2750) {
            $('#sn1').css('opacity', '1')
            $('#sn2').css('opacity', '0')
            $('#sn3').css('opacity', '0')
        } else {
            if (scrollY > 2750 && scrollY <= 2950) {
                $('#sn2').css('opacity', '1')
                $('#sn1').css('opacity', '0')
                $('#sn3').css('opacity', '0')
            } else {
                if (scrollY > 2950 && scrollY <= 3750) {
                    $('#sn3').css('opacity', '1')
                    $('#sn2').css('opacity', '0')
                    $('#sn1').css('opacity', '0')
                } else {
                        $('#sn3').css('opacity', '0')
                        $('#sn1').css('opacity', '0')
                        $('#sn2').css('opacity', '0')
                    }
                }
            }
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
            menuItemOne: 'DeFi',
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
            mainPBlockOne: 'All market changes and opportunites are monitored 24/7 by bots and other special tools for your convience. See your earnings and redeem your funds and interest in one place online',
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
            joinButtonThree: 'Connect wallet',
            joinH2One: 'Join DAO',
            joinH2Two: 'My Account',
            joinCaptionOne: 'Token calculator request',
            joinCaptionTwo: 'requested amount*',
            joinCaptionThree: 'offered amount*',
            joinButtonTwo: 'Create request',
            img: 'img/shema.svg',
            defiH2One: 'Learn more about our strategy and start working with DeFi now',
            defiItemOne: 'Total Value Locked (TLV)',
            defiItemTwo: 'Annual Percentage Yield (APY)',
            defiItemThree: 'Stable coins are deposited across best DeFi protocols',
            defiItemFour: 'Get income due to increasing the value of the asset in comparison with the previous period',
            defiH2Two: 'How it works',
            howItemOne: 'Buy USDT via your wallet',
            howItemTwo: 'Join our DAO and put your assets on the deposit',
            howItemThree: 'Get TBQ on account of your USDT',
            howItemFour: 'Monitor how the price changes',
            howItemFive: 'Get your profit',
            defiH2Three: 'Main advantages',
            carouselH4One: 'Decentralized assets',
            carouselPOne: 'Manage your savings from any place in the world, in any time. Defirium is a decentralized app, that means that your are the only person who can control your assets.',
            carouselH4Two: 'No government control',
            carouselPTwo: 'Assets that you receive can\'t be under the control from government regulators.',
            carouselH4Three: 'Low fees',
            carouselPThree: 'We give you an opportunity to make transactions with low fees for maximum convenience',
            carouselH4Four: 'Digital DeFi with automated control',
            carouselPFour: 'Distribution work with protocols is performed online with the help of special mechanisms',
            carouselH4Five: 'Sectional',
            carouselPFive: 'Our innovative mechanism can combine several strategies in one in order to maximize your profit.',
            profitH2One: 'Profit',
            profitPOne: 'Check out DeFi scenarious those we use in Defirium.',
            profitH4One: 'Flash loans',
            profitH4Two: 'Deposit assets across DeFi protocols',
            profitH4Three: ' Yield Farming',
            profitH2Two: 'Flash loans',
            profitPTwo: 'Instant loans without collateral, those can be obtained by any user. The main advantage of flash loans is the lack of necessity for start-up capital for the begging of work with DeFi. The liquidity has to be returned to the pool within one transaction block',
            profitH2Three: 'How it works',
            profitItemOne: 'Take out a flash loan of the needed amount',
            profitItemTwo: 'Use the loan to buy tokens on DEX A',
            profitItemThree: 'Resell tokens on DEX B',
            profitItemFour: 'Return the loan (plus any interest)',
            profitItemFive: 'Keep your profit',
            profitH2Four: 'Deposit assets across DeFi protocols',
            profitPThree: 'We are always in a search for best strategies those will be as profitable as can be',
            profitH2Five: 'Principle of work',
            workItemOne: 'Choosing the strategy',
            workItemTwo: 'Deposit tokens with the offered conditions',
            workItemThree: 'Gain interest on the deposit',
            profitH2Six: 'Yield Farming',
            profitPFour: 'Way to generate rewards with cryptocurrency holdings. It involves you lending your funds to others through smart contracts. In return for your service, you earn fees in the form of crypto. It means locking up cryptocurrencies and getting rewards with the use of different strategies',
            profitH2Seven: ' Types of strategies for Yield Farming',
            strategiesH4One: 'Earning interest through loan funds and fees',
            strategiesItemOne: 'To do this, the farmer needs to register in a DeFi project that issues loans. The commission received is the crypto farmer\'s income from participating in the project',
            strategiesH4Two: 'Mining (extraction) of liquidity',
            strategiesItemTwo: 'Users are rewarded for working with a specific protocol. They act as liquidity providers by promoting the project.',
            strategiesH4Three: 'Conducting swaps - the exchange of tokens of one protocol for tokens of another',
            strategiesItemThree: 'An important part of profitable farming is constant market research in order to find alternative strategies. As soon as a community member finds a new, more profitable investment option, he reallocates funds',
            profitH2Last: 'Ready to get your profit?'
        },
        RU: {
            menuItemOne: 'DeFi',
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
            joinButtonThree: 'Подключить кошелек',
            joinH2One: 'Присоединиться к DAO',
            joinH2Two: 'Мой аккаунт',
            joinCaptionOne: 'Калькулятор запроса токенов',
            joinCaptionTwo: 'ЗАПРАШИВАЕМАЯ СУММА*',
            joinCaptionThree: 'ПРЕДЛОЖЕННАЯ СУММА*',
            joinButtonTwo: 'Создать заявку',
            img: 'img/shemaru.svg',
            defiH2One: 'Узнайте больше о нашей стратегии и начни работать с DeFi прямо сейчас',
            defiItemOne: 'Общая Заблокированная Стоимость (TLV)',
            defiItemTwo: 'Годовая Процентная Доходность (APY)',
            defiItemThree: 'Стейблкоины депонируются между лучшими протоколам DeFi',
            defiItemFour: 'Получайте доход за счет увеличения стоимости актива по сравнению с предыдущим периодом',
            defiH2Two: 'Как это работает',
            howItemOne: 'Купите USDT при помощи своего кошелька',
            howItemTwo: 'Присоединяйтесь к нашему DAO и положите свои активы на депозит',
            howItemThree: 'Получите TBQ вместо ваших USDT',
            howItemFour: 'Следите за изменением цены',
            howItemFive: 'Получите свою прибыль',
            defiH2Three: 'Основные достоинства',
            carouselH4One: 'Децентрализованные активы',
            carouselPOne: 'Управляйте своими сбережениями из любой точки мира в любое время. Defirium - это децентрализованное приложение, а это означает, что вы единственный человек, который может контролировать ваши активы.',
            carouselH4Two: 'Отсутсвие государственного контроля',
            carouselPTwo: 'Активы, которые вы получаете, не могут находиться под контролем государственных регулирующих органов.',
            carouselH4Three: 'Низкие комиссии',
            carouselPThree: 'Мы даем вам возможность совершать транзакции с низкими комиссиями для максимального удобства.',
            carouselH4Four: 'Цифровой DeFi с автоматическим управлением',
            carouselPFour: 'Распределительная работа с протоколами осуществляется онлайн с помощью специальных механизмов.',
            carouselH4Five: 'Секционный',
            carouselPFive: 'Наш инновационный механизм может объединить несколько стратегий в одну, чтобы максимизировать вашу прибыль.',
            profitH2One: 'Доход',
            profitPOne: 'Ознакомьтесь со сценариями DeFi, которые мы используем в Defirium',
            profitH4One: 'Флэш-займы',
            profitH4Two: 'Депонирование активов между протоколами DeFi',
            profitH4Three: 'Урожайное Земледелие',
            profitH2Two: 'Флэш-займы',
            profitPTwo: 'Мгновенные займы без залога, которые может получить любой пользователь. Основным преимуществом флэш-кредитов является отсутствие необходимости в стартовом капитале для начала работы с DeFi. Ликвидность должна быть возвращена в пул в пределах одного блока транзакции.',
            profitH2Three: 'Как это работает',
            profitItemOne: 'Возьмите флэш-займ на необходимую сумму',
            profitItemTwo: 'Используйте займ для покупки токенов на DEX A',
            profitItemThree: 'Перепродайте токены на DEX B',
            profitItemFour: 'Верните займ (плюс проценты)',
            profitItemFive: 'Получите вашу прибыль',
            profitH2Four: 'Депонирование активов между протоколами DeFi',
            profitPThree: 'We are always in a search for best strategies those will be as profitable as can be',
            profitH2Five: 'Принцип работы',
            workItemOne: 'Выберите стратегию',
            workItemTwo: 'Депонируйте токены с предложенными условиями',
            workItemThree: 'Получите проценты по депозиту',
            profitH2Six: 'Урожайное Земледелие',
            profitPFour: 'Способ получения вознаграждения за счет владений криптовалютой. Это предполагает, что вы ссужаете свои средства другим людям через смарт-контракты. В обмен на свои услуги вы получаете комиссию в виде криптовалюты. Это означает блокировку криптовалют и получение вознаграждений с использованием различных стратегий',
            profitH2Seven: 'Типы стратегий для Урожайного Земледелия',
            strategiesH4One: 'Получение процентов за счет заемных средств и комиссий',
            strategiesItemOne: 'Для этого фермеру необходимо зарегистрироваться в проекте DeFi, который выдает кредиты. Полученная комиссия - это доход криптофермера от участия в проекте',
            strategiesH4Two: 'Добыча ликвидности',
            strategiesItemTwo: 'Пользователи получают вознаграждение за работу с определенным протоколом. Они выступают в качестве поставщиков ликвидности, продвигая проект',
            strategiesH4Three: 'Проведение свопов - обмена токенов одного протокола на токены другого',
            strategiesItemThree: 'Важной частью прибыльного фармерства является постоянное исследование рынка с целью поиска альтернативных стратегий. Как только член сообщества находит новый, более выгодный вариант инвестирования, он перераспределяет средства',
            profitH2Last: 'Готовы получить вашу прибыль?'
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
    $('#joinH2Two').text(dictionary[language].joinH2Two);
    $('#joinCaptionOne').text(dictionary[language].joinCaptionOne);
    $('#joinCaptionTwo').text(dictionary[language].joinCaptionTwo);
    $('#joinCaptionThree').text(dictionary[language].joinCaptionThree);
    $('#joinButtonTwo').text(dictionary[language].joinButtonTwo);
    $('#joinButtonThree').text(dictionary[language].joinButtonThree);
    $("#img").attr('src',dictionary[language].img);
    $("#defiH2One").text(dictionary[language].defiH2One);
    $("#defiItemOne").text(dictionary[language].defiItemOne);
    $("#defiItemTwo").text(dictionary[language].defiItemTwo);
    $("#defiItemThree").text(dictionary[language].defiItemThree);
    $("#defiItemFour").text(dictionary[language].defiItemFour);
    $("#defiH2Two").text(dictionary[language].defiH2Two);
    $("#howItemOne").text(dictionary[language].howItemOne);
    $("#howItemTwo").text(dictionary[language].howItemTwo);
    $("#howItemThree").text(dictionary[language].howItemThree);
    $("#howItemFour").text(dictionary[language].howItemFour);
    $("#defiH2Three").text(dictionary[language].defiH2Three);
    $("#carouselH4One").text(dictionary[language].carouselH4One);
    $("#carouselH4Two").text(dictionary[language].carouselH4Two);
    $("#carouselH4Three").text(dictionary[language].carouselH4Three);
    $("#carouselH4Four").text(dictionary[language].carouselH4Four);
    $("#carouselH4Five").text(dictionary[language].carouselH4Five);
    $("#carouselPOne").text(dictionary[language].carouselPOne);
    $("#carouselPTwo").text(dictionary[language].carouselPTwo);
    $("#carouselPThree").text(dictionary[language].carouselPThree);
    $("#carouselPFour").text(dictionary[language].carouselPFour);
    $("#carouselPFive").text(dictionary[language].carouselPFive);
    $("#profitH2One").text(dictionary[language].profitH2One);
    $("#profitPOne").text(dictionary[language].profitPOne);
    $("#profitH4One").text(dictionary[language].profitH4One);
    $("#profitH4Two").text(dictionary[language].profitH4Two);
    $("#profitH4Three").text(dictionary[language].profitH4Three);
    $("#profitH2Two").text(dictionary[language].profitH2Two);
    $("#profitPTwo").text(dictionary[language].profitPTwo);
    $("#profitH2Three").text(dictionary[language].profitH2Three);
    $("#profitItemOne").text(dictionary[language].profitItemOne);
    $("#profitItemTwo").text(dictionary[language].profitItemTwo);
    $("#profitItemThree").text(dictionary[language].profitItemThree);
    $("#profitItemFour").text(dictionary[language].profitItemFour);
    $("#profitItemFive").text(dictionary[language].profitItemFive);
    $("#profitH2Four").text(dictionary[language].profitH2Four);
    $("#profitPThree").text(dictionary[language].profitPThree);
    $("#profitH2Five").text(dictionary[language].profitH2Five);
    $("#workItemOne").text(dictionary[language].workItemOne);
    $("#workItemTwo").text(dictionary[language].workItemTwo);
    $("#workItemThree").text(dictionary[language].workItemThree);
    $("#profitH2Six").text(dictionary[language].profitH2Six);
    $("#profitPFour").text(dictionary[language].profitPFour);
    $("#profitH2Seven").text(dictionary[language].profitH2Seven);
    $("#strategiesH4One").text(dictionary[language].strategiesH4One);
    $("#strategiesH4Three").text(dictionary[language].strategiesH4Three);
    $("#strategiesH4Two").text(dictionary[language].strategiesH4Two);
    $("#strategiesItemOne").text(dictionary[language].strategiesItemOne);
    $("#strategiesItemThree").text(dictionary[language].strategiesItemThree);
    $("#strategiesItemTwo").text(dictionary[language].strategiesItemTwo);
    $("#profitH2Last").text(dictionary[language].profitH2Last);
}

const colors = {
    green: {
        default: "rgba(82, 189, 149, 0.2)",
        half: "rgba(92, 300, 149, 0.2)",
        quarter: "rgba(62, 300, 149, 0.2)",
        zero: "rgba(255, 255, 255, 0)"
    },
    indigo: {
        default: "rgba(80, 102, 120, 1)",
        quarter: "rgba(80, 102, 120, 0.25)"
    }
};

const weight = [1.171, 1.172, 1.173, 1.174, 1.189, 1.176, 1.18, 1.185, 1.195, 1.185, 1.171];

const labels = [
    "31 oct",
    "1 nov",
    "2 nov",
    "3 nov",
    "4 nov",
    "5 nov",
    "6 nov",
    "7 nov",
    "8 nov",
    "9 nov",
    "10 nov"
];

const ctx = document.getElementById("chart1-canvas").getContext("2d");
ctx.canvas.height = 100;

gradient = ctx.createLinearGradient(0, 25, 0, 300);
gradient.addColorStop(0, colors.green.half);
gradient.addColorStop(0.35, colors.green.quarter);
gradient.addColorStop(1, colors.green.zero);

const options = {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                fill: true,
                backgroundColor: gradient,
                pointBackgroundColor: colors.green.default,
                borderColor: colors.green.default,
                data: weight,
                lineTension: 0.2,
                borderWidth: 2,
                pointRadius: 0
            }
        ]
    },
    options: {
        layout: {
            padding: 10
        },
        responsive: true,
        legend: {
            display: false
        },

        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        padding: 10,
                        autoSkip: false,
                        maxRotation: 15,
                        minRotation: 15
                    }
                }
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Price, USD",
                        padding: 10
                    },
                    gridLines: {
                        display: true,
                        color: colors.indigo.quarter
                    },
                    ticks: {
                        beginAtZero: false,
                        max: 1.2,
                        min: 1.17,
                        padding: 0
                    }
                }
            ]
        }
    }
};

//chart 2

const weight2 = [1.171, 1.172, 1.173, 1.174, 1.189, 1.176, ];

const labels2 = [
    "31 oct",
    "1 nov",
    "2 nov",
    "3 nov",
    "4 nov",
    "5 nov"
];

const ctx2 = document.getElementById("chart2-canvas").getContext("2d");
ctx2.canvas.height = 120;

gradient = ctx2.createLinearGradient(0, 25, 0, 300);
gradient.addColorStop(0, colors.green.half);
gradient.addColorStop(0.35, colors.green.quarter);
gradient.addColorStop(1, colors.green.zero);

const options2 = {
    type: "line",
    data: {
        labels: labels2,
        datasets: [
            {
                fill: true,
                backgroundColor: gradient,
                pointBackgroundColor: colors.green.default,
                borderColor: colors.green.default,
                data: weight2,
                lineTension: 0.2,
                borderWidth: 2,
                pointRadius: 0
            }
        ]
    },
    options: {
        layout: {
            padding: 10
        },
        responsive: true,
        legend: {
            display: false
        },

        tooltips: {
            titleFontSize: 14,
            borderWidth: 1,
            borderColor: "green",
            backgroundColor: 'white',
            titleFontColor: 'black'
        },

        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        padding: 10,
                        autoSkip: false,
                        maxRotation: 5,
                        minRotation: 5
                    }
                }
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Price, USD",
                        padding: 10
                    },
                    gridLines: {
                        display: true,
                        color: colors.indigo.quarter
                    },
                    ticks: {
                        beginAtZero: false,
                        max: 1.2,
                        min: 1.17,
                        padding: 0
                    }
                }
            ]
        }
    }
};


window.onload = function () {
    window.myLine = new Chart(ctx, options);
    window.myLine = new Chart(ctx2, options2);
};

