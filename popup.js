
// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: downloadVideo,
    },
    () => {
      console.log('wo ni ma')
      let video = document.getElementsByTagName('video')
      console.log('video2>>>', video)

    }
  );
});
// changeColor.addEventListener("click", async () => {
//   console.log('click')
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: downloadVideo,
//   })
// })
function getVideoTitle() {
  let titleDom = document.getElementsByClassName('title')[0]
  console('titleDom>>', titleDom)
}

function downloadVideo() {
  console.log('downloadVideo')
  let targetDom = document.getElementsByTagName('xg-video-container')[0]
  const videoDom = targetDom.childNodes[0]
  console.log('videoDom>>>', videoDom)
  const sourceDom = videoDom.lastChild
  console.log('sourceDom>>>', sourceDom)
  const src = sourceDom.src.slice(8)
  console.log('src>>>', src)

  // const title = getVideoTitle()
  let titleDom = document.getElementsByClassName('j5WZzJdp IoRNNcMW hVNC9qgC')[0]
  const title = titleDom.childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent
  // console.log('titleDom>>', titleDom)
  // console.log('title>>', title)
  // const filename = title + '.mp4'
  const urlObj = new URL(src)
  console.log(urlObj)


  // const url = video.src
  const aEl = document.createElement('a')
  aEl.href = src
  aEl.download = filename
  aEl.click()
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