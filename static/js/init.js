function get_weather_from_opendata() {
  try {
    const URL_WEATHER_OPENDATA = "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=rdec-key-123-45678-011121314&format=JSON"
    $.getJSON(URL_WEATHER_OPENDATA, function(data) {
      // Set weather fetch date
      let objToday = new Date(data.cwbopendata.sent)
      $("#today").text(objToday.getFullYear() + "/" + (objToday.getMonth()+1) + "/" + objToday.getDate())

      // Set weather
      let list_location = data.cwbopendata.dataset.location
      list_location.forEach(function(obj) {
        if (obj.locationName == "南投縣") {
          $("#weather_0").text("早上: " + obj.weatherElement[0].time[0].parameter.parameterName +
            ", 氣溫: " + obj.weatherElement[2].time[0].parameter.parameterName + "-" +
	    obj.weatherElement[1].time[0].parameter.parameterName + " C, " +
	    obj.weatherElement[3].time[0].parameter.parameterName)
          $("#weather_1").text("下午: " + obj.weatherElement[0].time[1].parameter.parameterName +
	    ", 氣溫: " + obj.weatherElement[2].time[1].parameter.parameterName +
	    "-" + obj.weatherElement[1].time[1].parameter.parameterName + " C, " +
            obj.weatherElement[3].time[1].parameter.parameterName)
          $("#weather_2").text("晚上: " + obj.weatherElement[0].time[2].parameter.parameterName +
  	    ", 氣溫: " + obj.weatherElement[2].time[2].parameter.parameterName + "-" +
	    obj.weatherElement[1].time[2].parameter.parameterName + " C, " +
            obj.weatherElement[3].time[2].parameter.parameterName)
        }
      });
    });
  } catch (e) {
    console.log(e); // 把例外物件傳給錯誤處理器
  }
}

function init() {
  get_weather_from_opendata()
}

$(document).ready(function() {

  // 監聽 textarea 的按下 Enter 鍵事件
  $("#messageInput").on("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // 阻止預設的換行行為
      $("#submitButton").click(); // 觸發提交按鈕的點擊事件
    }
  });

  // 監聽提交按鈕的點擊事件
  $("#submitButton").on("click", function() {
    // 在這裡處理提交的動作
    var message = $("#messageInput").val();
    // Dialog
    add_human_chat(message);
    // API
    chat_to_ai(message);
    // 清空輸入框
    $("#messageInput").val("");
  });
});
