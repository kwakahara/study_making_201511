// 日時オブジェクトを作成
var nObj = new Date();
var year = nObj.getFullYear();			// 年
var month = nObj.getMonth() + 1;			// 月
var date = nObj.getDate();				// 日


$(document).ready(function() {

  var showOnloadMessage = function() {
  	// alert('読み込みました.');
  }
  

  
    $('#calendar THEAD').append(
    $('<tr>').append(
      $('<th>').text(year + '/' + month + '/' + date).attr('colspan', 7)
    )
  );
  
  
  $('#calendar THEAD').append(
    $('<tr>').append(
      $('<th>').text('Sun').css('color','red'),
      $('<th>').text('Mon'),
      $('<th>').text('Tue'),
      $('<th>').text('Wed'),
      $('<th>').text('Thu'),
      $('<th>').text('Fri'),
      $('<th>').text('Sat').css('color','blue')
    )
  );

  
  var nowDate = new Date();
  var nowYear = nowDate.getFullYear();
  var nowMonth = nowDate.getMonth() + 1;
  var nowDay = nowDate.getDate();
  
  // 翌月の1日目のデータを取得
  var nextMonth = new Date(nowDate.getFullYear(),nowDate.getMonth()+1 , 1);
  // その1日前から、当月の最終日を求める
  nextMonth.setDate(nextMonth.getDate() - 1);
  var maxDay = nextMonth.getDate();
  var firstDay = new Date(year, month-1, 1);	// 当月の一日
  var day = firstDay.getDay();					// 一日の曜日
  
  var dayCnt = 0;
  
  // 日曜日から始まる
  if(day == 0){
    for(var i=0; i<6; i++){
      if (i*7 + 7 <= maxDay) {
        $('#calendar TBODY').append(
          $('<tr>').append(
            $('<td>').text(i*7 + 1).attr('id', i*7+1).css('color', 'red'),
            $('<td>').text(i*7 + 2).attr('id', i*7+2),
            $('<td>').text(i*7 + 3).attr('id', i*7+3),
            $('<td>').text(i*7 + 4).attr('id', i*7+4),
            $('<td>').text(i*7 + 5).attr('id', i*7+5),
            $('<td>').text(i*7 + 6).attr('id', i*7+6),
            $('<td>').text(i*7 + 7).attr('id', i*7+7).css('color', 'blue')
          )
        );
      } else {
        lastWeek(maxDay-((i-1)*7+7) ,maxDay);
        break;
      }
    }
  } else if(day == 1) {
  
  // 月曜日から始まる
   $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(''),
        $('<td>').text(1).attr('id', 1),
        $('<td>').text(2).attr('id', 2),
        $('<td>').text(3).attr('id', 3),
        $('<td>').text(4).attr('id', 4),
        $('<td>').text(5).attr('id', 5),
        $('<td>').text(6).attr('id', 6).css('color', 'blue')
      )
    );
    for(var i=1; i<6; i++){
    if (i*7+6 <= maxDay) {
      $('#calendar TBODY').append(
        $('<tr>').append(
          $('<td>').text((i-1)*7 + 7).attr('id', (i-1)*7+7).css('color', 'red'),
          $('<td>').text(i*7 + 1).attr('id', i*7+1),
          $('<td>').text(i*7 + 2).attr('id', i*7+2),
          $('<td>').text(i*7 + 3).attr('id', i*7+3),
          $('<td>').text(i*7 + 4).attr('id', i*7+4),
          $('<td>').text(i*7 + 5).attr('id', i*7+5),
          $('<td>').text(i*7 + 6).attr('id', i*7+6).css('color', 'blue')
        )
      );
    } else {
      lastWeek(maxDay-((i-1)*7+6) ,maxDay);
      break;
    }
    }
  } else if(day == 2) {
  
  // 火曜日から始まる
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(1).attr('id', 1),
        $('<td>').text(2).attr('id', 2),
        $('<td>').text(3).attr('id', 3),
        $('<td>').text(4).attr('id', 4),
        $('<td>').text(5).attr('id', 5).css('color', 'blue')
      )
    );
    for(var i=1; i<6; i++){
    if (i*7+5 <= maxDay) {
      $('#calendar TBODY').append(
        $('<tr>').append(
          $('<td>').text((i-1)*7 + 6).attr('id', (i-1)*7+6).css('color', 'red'),
          $('<td>').text((i-1)*7 + 7).attr('id', (i-1)*7+7),
          $('<td>').text(i*7 + 1).attr('id', i*7+1),
          $('<td>').text(i*7 + 2).attr('id', i*7+2),
          $('<td>').text(i*7 + 3).attr('id', i*7+3),
          $('<td>').text(i*7 + 4).attr('id', i*7+4),
          $('<td>').text(i*7 + 5).attr('id', i*7+5).css('color', 'blue')
        )
      );
    } else {
      lastWeek(maxDay-((i-1)*7+5) ,maxDay);
      break;
    }
    }
    
  } else if(day == 3) {
  
  // 水曜日から始まる
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(1).attr('id', 1),
        $('<td>').text(2).attr('id', 2),
        $('<td>').text(3).attr('id', 3),
        $('<td>').text(4).attr('id', 4).css('color', 'blue')
      )
    );
    for(var i=1; i<6; i++){
    if (i*7+4 <= maxDay) {
      $('#calendar TBODY').append(
        $('<tr>').append(
          $('<td>').text((i-1)*7 + 5).attr('id', (i-1)*7+5).css('color', 'red'),
          $('<td>').text((i-1)*7 + 6).attr('id', (i-1)*7+6),
          $('<td>').text((i-1)*7 + 7).attr('id', (i-1)*7+7),
          $('<td>').text(i*7 + 1).attr('id', i*7+1),
          $('<td>').text(i*7 + 2).attr('id', i*7+2),
          $('<td>').text(i*7 + 3).attr('id', i*7+3),
          $('<td>').text(i*7 + 4).attr('id', i*7+4).css('color', 'blue')
        )
      );
    } else {
      lastWeek(maxDay-((i-1)*7+4) ,maxDay);
      break;
    }
    }
  } else if(day == 4) {
  
  // 木曜日から始まる
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(1).attr('id', 1),
        $('<td>').text(2).attr('id', 2),
        $('<td>').text(3).attr('id', 3).css('color', 'blue')
      )
    );
    for(var i=1; i<6; i++){
    if (i*7+3 <= maxDay) {
      $('#calendar TBODY').append(
        $('<tr>').append(
          $('<td>').text((i-1)*7 + 4).attr('id', (i-1)*7+4).css('color', 'red'),
          $('<td>').text((i-1)*7 + 5).attr('id', (i-1)*7+5),
          $('<td>').text((i-1)*7 + 6).attr('id', (i-1)*7+6),
          $('<td>').text((i-1)*7 + 7).attr('id', (i-1)*7+7),
          $('<td>').text(i*7 + 1).attr('id', i*7+1),
          $('<td>').text(i*7 + 2).attr('id', i*7+2),
          $('<td>').text(i*7 + 3).attr('id', i*7+3).css('color', 'blue')
        )
      );
    } else {
      lastWeek(maxDay-((i-1)*7+3) ,maxDay);
      break;
    }
    }
  } else if(day == 5) {
  
  // 金曜日から始まる
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(1).attr('id', 1),
        $('<td>').text(2).attr('id', 2).css('color', 'blue')
      )
    );
    for(var i=1; i<6; i++){
    if (i*7+2 <= maxDay) {
      $('#calendar TBODY').append(
        $('<tr>').append(
          $('<td>').text((i-1)*7 + 3).attr('id', (i-1)*7+3).css('color', 'red'),
          $('<td>').text((i-1)*7 + 4).attr('id', (i-1)*7+4),
          $('<td>').text((i-1)*7 + 5).attr('id', (i-1)*7+5),
          $('<td>').text((i-1)*7 + 6).attr('id', (i-1)*7+6),
          $('<td>').text((i-1)*7 + 7).attr('id', (i-1)*7+7),
          $('<td>').text(i*7 + 1).attr('id', i*7+1),
          $('<td>').text(i*7 + 2).attr('id', i*7+2).css('color', 'blue')
        )
      );
    } else {
      lastWeek(maxDay-((i-1)*7+2) ,maxDay);
      break;
    }
    }
  } else if(day == 6) {
  
  // 土曜日から始まる
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(1).attr('id', 1).css('color', 'blue')
      )
    );
    for(var i=1; i<6; i++){
    if (i*7+1 <= maxDay) {
      $('#calendar TBODY').append(
        $('<tr>').append(
          $('<td>').text((i-1)*7 + 2).attr('id', (i-1)*7+2).css('color', 'red'),
          $('<td>').text((i-1)*7 + 3).attr('id', (i-1)*7+3),
          $('<td>').text((i-1)*7 + 4).attr('id', (i-1)*7+4),
          $('<td>').text((i-1)*7 + 5).attr('id', (i-1)*7+5),
          $('<td>').text((i-1)*7 + 6).attr('id', (i-1)*7+6),
          $('<td>').text((i-1)*7 + 7).attr('id', (i-1)*7+7),
          $('<td>').text(i*7 + 1).attr('id', i*7+1).css('color', 'blue')
        )
      );
    } else {
      lastWeek(maxDay-((i-1)*7+1) ,maxDay);
      break;
    }
    }
  }
  

  // ----- Initialize.

  showOnloadMessage();
});



// 最終週作成
function lastWeek(rest, maxDay){
 if(rest == 0){
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(maxDay - 6).attr('id', maxDay - 6).css('color', 'red'),
        $('<td>').text(maxDay - 5).attr('id', maxDay - 5),
        $('<td>').text(maxDay - 4).attr('id', maxDay - 4),
        $('<td>').text(maxDay - 3).attr('id', maxDay - 3),
        $('<td>').text(maxDay - 2).attr('id', maxDay - 2),
        $('<td>').text(maxDay - 1).attr('id', maxDay - 1),
        $('<td>').text(maxDay).attr('id', maxDay).css('color', 'blue')
      )
    );
 }
 if(rest == 1) {
   $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(maxDay).attr('id', maxDay).css('color', 'red'),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text('')
      )
    );
  } else if(rest == 2) {
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(maxDay-1).attr('id', maxDay - 1).css('color', 'red'),
        $('<td>').text(maxDay).attr('id', maxDay),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text('')
      )
    );
  } else if(rest == 3) {
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(maxDay-2).attr('id', maxDay - 2).css('color', 'red'),
        $('<td>').text(maxDay-1).attr('id', maxDay - 1),
        $('<td>').text(maxDay).attr('id', maxDay),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text('')
      )
    );
  } else if(rest == 4) {
   $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(maxDay - 3).attr('id', maxDay - 3).css('color', 'red'),
        $('<td>').text(maxDay - 2).attr('id', maxDay - 2),
        $('<td>').text(maxDay - 1).attr('id', maxDay - 1),
        $('<td>').text(maxDay).attr('id', maxDay),
        $('<td>').text(''),
        $('<td>').text(''),
        $('<td>').text('')
      )
    );
  } else if(rest == 5) {
  
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(maxDay - 4).attr('id', maxDay - 4).css('color', 'red'),
        $('<td>').text(maxDay - 3).attr('id', maxDay - 3),
        $('<td>').text(maxDay - 2).attr('id', maxDay - 2),
        $('<td>').text(maxDay - 1).attr('id', maxDay - 1),
        $('<td>').text(maxDay).attr('id', maxDay),
        $('<td>').text(''),
        $('<td>').text('')
      )
    );
  } else if(rest == 6) {
  
    $('#calendar TBODY').append(
      $('<tr>').append(
        $('<td>').text(maxDay - 5).attr('id', maxDay - 5).css('color', 'red'),
        $('<td>').text(maxDay - 4).attr('id', maxDay - 4),
        $('<td>').text(maxDay - 3).attr('id', maxDay - 3),
        $('<td>').text(maxDay - 2).attr('id', maxDay - 2),
        $('<td>').text(maxDay - 1).attr('id', maxDay - 1),
        $('<td>').text(maxDay).attr('id', maxDay),
        $('<td>').text('')
      )
    );
  }
}





// onclickイベント
$(function(){
  $("td").on('click', function() {
    var innerText = $(this).text();
    if(innerText != ''){
      alert(year + '/' + month + '/' + innerText + 'がクリックされました');
    }
  });
});

// 当日の色つけ
$(function(){
  $("#"+date).css('background-color', 'yellow');
});

