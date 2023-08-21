function chat_to_ai(message) {
  // 顯示 loading 畫面
  $("#loading-overlay").show();
  
  if (getLocalStorage("avatar") === "") {
    return
  }

  let obj_avatar = JSON.parse(getLocalStorage("avatar"))

  var settings = {
    "url": "https://beta-openai.4impact.cc/chat_to_avatar",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "api_key": "2ulidgoo",
      "name": obj_avatar.name,
      "message": message
    }),
    // 在 request 開始前觸發
    beforeSend: function() {
      $("#loading-overlay").show();
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response.message);
    let obj_result = JSON.parse(response.message);
    add_ai_chat(obj_result.content);
  }).always(function() {
    // 在 done 事件後關閉 loading 畫面
    $("#loading-overlay").hide();
  });
}
