// 服务视图，理解为插件的环境
let color = 'red';
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('服务启动')
});