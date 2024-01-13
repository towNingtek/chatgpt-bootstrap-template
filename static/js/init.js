function get_weather_from_opendata() {
  try {
    const URL_WEATHER_OPENDATA = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314&format=JSON";
    $.getJSON(URL_WEATHER_OPENDATA, function(data) {
      let objToday = new Date();
      $("#today").text(objToday.getFullYear() + "/" + (objToday.getMonth() + 1) + "/" + objToday.getDate());

      let list_location = data.result.records.location;
      list_location.forEach(function(obj) {
        if (obj.locationName == "南投縣") {
          $("#weather_0").text("早上: " + obj.weatherElement[0].time[0].parameter.parameterName +
            ", 氣溫: " + obj.weatherElement[2].time[0].parameter.parameterName + "-" +
	    obj.weatherElement[4].time[0].parameter.parameterName + " C, " +
	    obj.weatherElement[3].time[0].parameter.parameterName)
          $("#weather_1").text("下午: " + obj.weatherElement[0].time[1].parameter.parameterName +
	    ", 氣溫: " + obj.weatherElement[2].time[1].parameter.parameterName +
	    "-" + obj.weatherElement[4].time[1].parameter.parameterName + " C, " +
            obj.weatherElement[3].time[1].parameter.parameterName)
          $("#weather_2").text("晚上: " + obj.weatherElement[0].time[2].parameter.parameterName +
  	    ", 氣溫: " + obj.weatherElement[2].time[2].parameter.parameterName + "-" +
	    obj.weatherElement[4].time[2].parameter.parameterName + " C, " +
            obj.weatherElement[3].time[2].parameter.parameterName)
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
}

function init() {
  get_weather_from_opendata();
  list_avatar();
}

$(document).ready(function() {
  $("#messageInput").on("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      $("#submitButton").click();
    }
  });

  $("#submitButton").on("click", function() {
    let apiKey = $('#password').val();
    if (apiKey == "") {
      alert("請先填入 API key");
      return;
    }

    var message = $("#messageInput").val();
    add_human_chat(message);
    chat_to_ai(message);
    $("#messageInput").val("");
  });
});
