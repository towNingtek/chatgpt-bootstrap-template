function chat_to_ai(message) {
  // 显示 loading 界面
  $("#loading-overlay").show();

  if (getLocalStorage("avatar") === "") {
    return;
  }

  let obj_avatar = JSON.parse(getLocalStorage("avatar"));

  var settings = {
    "url": "https://beta-openai.4impact.cc/chat_to_avatar",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "api_key": $('#password').val(),
      "name": obj_avatar.name,
      "message": message
    }),
    // 在请求开始前触发
    beforeSend: function() {
      $("#loading-overlay").show();
    }
  };

  $.ajax(settings)
    .done(function (response) {
      console.log(response.message);
      // let obj_result = JSON.parse(response);
      add_ai_chat(response.message);
    })
    .fail(function (xhr, textStatus, errorThrown) {
      if (xhr.status === 403) {
        // 处理 403 错误，显示自定义警告消息
        alert("Permission denied: 您的 API 金鑰不正確！");
      } else {
        // 处理其他错误，显示通用警告消息
        console.log("Ajax 請求失敗:", textStatus, errorThrown);
        alert("網路錯誤，請檢查您的金鑰是否正確！");
      }
    })
    .always(function() {
      // 在 done 事件后关闭 loading 界面
      $("#loading-overlay").hide();
    });
}
