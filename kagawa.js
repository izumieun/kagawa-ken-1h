if (confirm('18歳未満ですか？')) {
    if (confirm('香川県にいますか？')) {
        var interval = 5 * 1000;
        setInterval(checktime,interval, interval)
    }
}

function checktime(interval){
    var stay_time = 0;
    var now = new Date();
    document.cookie.split(';').forEach(function(value) {
        var cookie = value.split('=');
        if (cookie[0].trim() == "staytime_" + now.getDate()) {
            stay_time = parseInt(cookie[1]) + parseInt(interval / 1000);
        }
    })
    document.cookie = "staytime_" + now.getDate() + "=" + stay_time + "; max-age=86400";
    if ( stay_time > 60 ) {
        alert('１８歳未満の香川県民は１時間以上サイトを閲覧できません');
    }
}
