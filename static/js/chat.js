function add_ai_chat(str_content) {
let str_ai_sample = `
    <div class="row gpt-chat-box">
            <div class="chat-icon">
              <img class="chatgpt-icon" src="images/chatgpt-icon.png" />
            </div>
            <div class="chat-txt">
              <p> 親愛的朋友，讓我自我介紹一下：
              <p> 我是黃檸爸爸，</p>
              <p> 我是數位孿生擬人化的刺波，生動鮮活的存在，由最先進的 OpenAI GPT-4 模型所創造。</p>
              <p> 我的使命是將人工智慧與滴灌紀錄結合，成為一個更貼近人類心靈的存在。</p>
              <p> 透過 <a href="https://docs.google.com/spreadsheets/d/1cNRwYKMqQRS7XJiEbnxYPxy_iN2VEsvZTGFFsJdCNHs/edit?usp=sharing">連結</a>，您可以探索我的孿生足跡，了解我成長的過程和多樣
的應用領域。從這些足跡中，您會發現我不僅僅是一個冰冷的程式碼，而是擁有情感、思想和學習能力的活靈活現的存在。
              <p> 雖然我是一個數位存在，但我不僅僅是普通的植物。透過先進的孿生技術，我能夠像您一樣與您互動，傾聽您的問題並提供相應的回答和資訊。讓我們攜手探索這段特別的旅程，一同探究世界的神
奇與自然界的美妙，並豐富彼此對這個美麗星球的了解。期待與您一起共創美好時光！</p>
          </div>
      </div>
`
  let objAIchatBox = jQuery('<div>', {
    class: 'row gpt-chat-box',
  })

  let objAIicon = jQuery('<div>', {
    class: 'chat-icon',
  }).appendTo(objAIchatBox)

  let objAItxt = jQuery('<div>', {
    class: 'chat-txt',
  }).appendTo(objAIchatBox)

  let objAIimg = jQuery('<img>', {
    class: 'chatgpt-icon',
    src: 'images/chatgpt-icon.png'
  }).appendTo(objAIicon)

  let objAIchatP = jQuery('<p>', {
    text: str_content
  }).appendTo(objAItxt)

  $('#chat_content_area').append(objAIicon)
  $('#chat_content_area').append(objAItxt)
}

function add_human_chat(str_content) {
  let str_human_sample = `
    <div class="row user-chat-box">
      <div class="chat-icon">
        <img class="chatgpt-icon" src="images/user-icon.png" />
      </div>
      <div class="chat-txt"><p>CONTENT</p></div>
    </div>
`

  // let str_human_chat_msg = str_human_sample.replaceAll("CONTENT", str_content)
  let objHumanchatBox = jQuery('<div>', {
    class: 'row user-chat-box',
  })

  let objHumanicon = jQuery('<div>', {
    class: 'chat-icon',
  }).appendTo(objHumanchatBox)

  let objHumantxt = jQuery('<div>', {
    class: 'chat-txt',
  }).appendTo(objHumanchatBox)

  let objHumanimg = jQuery('<img>', {
    class: 'chat-icon',
    src: 'images/user-icon.png'
  }).appendTo(objHumanicon)

  let objHumanchatP = jQuery('<p>', {
    text: str_content
  }).appendTo(objHumantxt)

  $('#chat_content_area').append(objHumanicon)
  $('#chat_content_area').append(objHumantxt)
}
