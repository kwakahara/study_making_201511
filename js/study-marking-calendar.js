// 日時オブジェクトを作成
var nObj = new Date();
var year = nObj.getFullYear();			// 年
var month = nObj.getMonth() + 1;		// 月
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

	// 当月の月末日
	var lastDay = new Date(nObj.getFullYear(), nObj.getMonth() + 1, 0);
	var maxDay = lastDay.getDate();
	var firstDay = new Date(year, month-1, 1);		// 当月の一日
	var day = firstDay.getDay();					// 一日の曜日
	
	var dayCnt = 0;
	
	// k : カレンダーに表示する日付
	var k = 0 - day + 1;
	while (k <= maxDay) {
		
		var tr = $("<tr>");
		
		for (var l = 0; l < 7; l++) {
			// TDの生成
			var td = $("<td>");
			
			if (k > 0 && k <= maxDay) {
				// kが正の値の時に日付として設定
				td.text(k);
				
				if (l == 0) {
					// 日曜日の色付け
					td.css('color','red');
				} else if ( l == 6 ) {
					// 土曜日の色付け
					td.css('color','blue');
				}
				
				if (k == date) {
					// 今日の日付の色付け
					td.css('background-color','yellow');
				}
			}
			// 生成したデータの追加
			tr.append(td);
			
			++k;
			
		}
		
		// 生成した行の追加
		$('#calendar TBODY').append(tr);
		
	}
	
	// ----- Initialize.

	showOnloadMessage();
});



// onclickイベント
$(function() {
	$("td").on('click', function() {
		var innerText = $(this).text();
		if (innerText != '') {
			alert(year + '/' + month + '/' + innerText + 'がクリックされました');
		}
	});
});

// 当日の色つけ
$(function() {
	$("#"+date).css('background-color', 'yellow');
});

