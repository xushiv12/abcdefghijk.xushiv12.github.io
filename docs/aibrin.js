const a={
	"你好":["你好呀,今天要聊点什么呢","我会说你好",],
  "太阳":"太阳是一颗恒星,他有橘色的外表,外部拥有火焰,它的燃料是氢气,外部为日冕层。",
  "宇宙":"宇宙是一个神秘的东西,不知道宇宙是几维,宇宙拥有很多恒星,行星和卫星,以及数不清的小行星，矮行星，星云以及黑洞, 还有很多射线。",
  "你是谁":"我是像素AI",
  "今天的日期":Date(),
  "天气":"周一-周末的天气是:"+c,
  "再见":["再见啊！","我会说再见"],
}
var b=document.getElementById("x").value;
let c=Array.from(document.querySelectorAll("xu")).map(a => a.textContent);
function A(){
fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer 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",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content:b}]
  })
})
.then(res => res.json())
.then(data => {
  alert("AI 回复：", data.choices[0].message.content);
});
}
