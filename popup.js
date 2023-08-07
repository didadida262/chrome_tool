
// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  console.log('click---1')
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('tab>>>', tab)
  let video = document.getElementsByTagName('video')
  console.log('video>>>', video)
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['script.js']
    // function: setPageBackgroundColor,
  });
});
// changeColor.addEventListener("click", async () => {
//   console.log('click')
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: downloadVideo,
//   })
// })

function downloadVideo() {
  console.log('downloadVideo')
  let video = document.getElementsByTagName('video')[0]
  console.log('video>>>', video)
  const url = video.src
  const aEl = document.createElement('a')
  aEl.href = url
  aEl.download = 'test.mp4'
}

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  console.log('setPageBackgroundColor---1')
  chrome.storage.sync.get("color", ({ color }) => {
  console.log('setPageBackgroundColor---2')
    document.body.style.backgroundColor = color
  });
}