function list_avatar() {
  let apiKey = $('#password').val()

  var settings = {
    "url": "https://beta-openai.4impact.cc/list_avatar",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "api_key": apiKey
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    var newOption = $("<option></option>").attr("value", "model4").text("模型4");
    // obj_avatar = JSON.parse(response);

    $.each(response.avatar, function(index, value) {
      console.log("Index: " + index + ", Value: " + value);
      var newOption = $("<option></option>").attr("value", value).text(value);
      $('#gpt-model').append(newOption);

    });
  });
}

function welcome() {
  if (getLocalStorage("avatar") === "") {
    return
  }

  $("#avatar").show()
  let obj_avatar = JSON.parse(getLocalStorage("avatar"))
  $('#partner').text(obj_avatar.partner)
  $('#name').text(obj_avatar.name)
  $('#location').text(obj_avatar.location)
  $('#recording').text(obj_avatar.recording)
}

$(document).ready(function() {
  // 監聽 select 元素的變化事件
  $('#gpt-model').change(function() {
    let apiKey = $('#password').val()
    if (apiKey == "") {
      alert("請先填入 API key")
      return
    }

    // 獲取所選的值
    var selectedValue = $(this).val();

    // 經過適當的處理，例如組合成 JSON 格式
    var data = { gptModel: selectedValue };

    // 發送 POST 請求

    var settings = {
      "url": "https://beta-openai.4impact.cc/get_avatar",
      "method": "POST",
      "timeout": 0,
      "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "api_key": apiKey,
      "name": selectedValue
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      setLocalStorage("avatar", JSON.stringify(response));
      welcome();
    });
  });

  // 監聽按鈕的點擊事件
  $('#submit-btn').click(function() {
    // 觸發 select 元素的變化事件
    $('#gpt-model').trigger('change');
    alert("talk!")
  });
});

