/*
 * @Author: Hhvcg
 * @Date: 2023-08-07 16:03:13
 * @LastEditors: Hhvcg
 */
chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = 'green'
    let video = document.getElementsByTagName('video')[0]
    const aEl = document.createElement('a')
    aEl.href = "https://vdn6.vzuu.com/SD/715c799a-2f9f-11ee-ad28-52d3306dc2a2-v8_f2_t1_DHg5LXTG.mp4?pkey=AAV81_xGuiKAGXRa0X60AnQ2ctsBN9t4a1e92ozotuhVfqUaHzq-KB9kGXc8uHNirUto7m7VXc7KQUvyMVZF4nNq&c=avc.8.0&f=mp4&pu=1513c7c2&bu=http-1513c7c2&expiration=1691401230&v=ks6&pf=Web&pt=zhihu"
    aEl.download = 'test.mp4'
  });