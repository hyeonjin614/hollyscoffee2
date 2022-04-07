
$(function(){
    var mainVisual = $('.main_visual');
    var slideWrap = mainVisual.find('.slide_wrap');
    var slide = slideWrap.find('a');

    //슬라이드 갯수 구하기
    var slideIndex = slide.length;

    //좌우버튼
    var nav = mainVisual.find('.slide_nav');

    //페이징
    var pager = mainVisual.find('.pager_wrap');
    var pagerHtml='';

    var currentIndex = 0; //현재의 위치값

    //1. 슬라이드 가로 나열
    // 첫번째 left값 0 , 두번째 left 100%, 세번째는 200% ...

    slide.each(function(index){
        var slideLeft = index * 100 + '%';
        $(this).css({'left' : slideLeft});

        //<a href="#">1</a>
        //<a href="#">2</a>
        //var index = 4 =>index = index +4
        //index += 4

        pagerHtml += '<a href="#">' + (index + 1) + '</a>'

    });

    pager.html(pagerHtml);
    
    //2. 슬라이드 이동
    //슬라이드 이동함수

    function slideGo(index){
        slideWrap.animate({left: -100 * index + '%'});
        currentIndex = index;

    }//slideGo
    // slideGo(3);


    //3. 페이징 클릭했을 때 페이징, 슬라이드 이동
    pager.find('a').click(function(e){
        e.preventDefault();
        
        var idx = $(this).index();
        console.log(idx);

        //a 태그를 클릭하면 0, 1, 2, 3 순서

         slideGo(idx);
         //slideGo(index => $(this).index();)

    });

    //4. 좌우버튼 클릭
    //이전버튼 클릭 현재페이지 앞에 있는 슬라이드가 보임
    //slideGo(currentIndex + 1)

    //다음버튼 클릭 현재페이지 뒤에 있는 슬라이드가 보임
    //slideGo(currentIndex + 1)
    //변수명 nav a 클릭했을 때
    //a 태그가 클래스명 prev가 있으면, slideGo(currentIndex -1)
    //그렇지 않으면 slideGo(currentIndex +1)
    nav.find('a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('prev')){
            slideGo(currentIndex - 1);

        } else {
            slideGo(currentIndex + 1)


        }

        //5. 첫번째 페이지에서 이전버튼,
        //마지막페이지에서 다음버튼 없애기

        function navNone() {
            //첫번째 페이지 currentIndex = 0;

            if(currentIndex ==0) {
                $('.prev').addClass('none');

            } else {
                $('.prev').removeClass('none');

            }

            //마지막 페이지일떼 currentIndex = 3
            console.log(slideIndex); //4
            //slideIndex - 1 = 마지막페이지 currentIndex
            if(currentIndex == slideIndex -1 ){

                $('.next').addClass(none);
                        }

        }//navNone
        navNone();

    });


});//jquery end