const { snapshot, httpServerAddress, seconds } = require("./helpers")
beforeEach(async () => {
  await page.goto(httpServerAddress, {timeout:0})
  await page.setViewport({width: 1440, height: 900, deviceScaleFactor: 1});
})
test('loadSingleImage', async () => {
  let nv = await page.evaluate(async () => {
    let nv = new niivue.Niivue()
    await nv.attachTo('gl')
    // load one volume object in an array
    var volumeList = [
      {
        url: "../images/mni152.nii.gz",//"./RAS.nii.gz", "./spm152.nii.gz",
        volume: { hdr: null, img: null },
        name: "mni152",
        colorMap: "gray",
        opacity: 1,
        visible: true,
      },
    ]
    await nv.loadVolumes(volumeList)
    return nv
  })
  expect(nv.volumes).toHaveLength(1)
  await snapshot()
})