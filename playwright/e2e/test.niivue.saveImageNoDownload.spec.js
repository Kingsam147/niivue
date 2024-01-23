import { test, expect } from '@playwright/test'
import { httpServerAddress, testOptions } from './helpers'

// The header is the first 352 bytes, and the image data is dim1 * dim2 * dim3 * nbyper.
// So for the test case with the mni152 image we have 352 + (207 * 256 * 215 * 1).
const expectedImgLength = 11393632

test.beforeEach(async ({ page }) => {
  await page.goto(httpServerAddress)
})

test('save image no download trigger', async ({ page }) => {
  const imgLength = await page.evaluate(async (testOptions) => {
    // eslint-disable-next-line no-undef
    const nv = new Niivue(testOptions)
    await nv.attachTo('gl', false)
    // load one volume object in an array
    const volumeList = [
      {
        url: './images/mni152.nii.gz', // "./RAS.nii.gz", "./spm152.nii.gz",
        volume: { hdr: null, img: null },
        name: 'mni152.nii.gz',
        colormap: 'gray',
        opacity: 1,
        visible: true
      }
    ]
    await nv.loadVolumes(volumeList)
    const img = nv.saveImage()
    return img.length
  })
  expect(imgLength).toBe(expectedImgLength)
})

test('save image no download trigger partial options', async ({ page }) => {
  const imgLength = await page.evaluate(async (testOptions) => {
    // eslint-disable-next-line no-undef
    const nv = new Niivue(testOptions)
    await nv.attachTo('gl', false)
    // load one volume object in an array
    const volumeList = [
      {
        url: './images/mni152.nii.gz', // "./RAS.nii.gz", "./spm152.nii.gz",
        volume: { hdr: null, img: null },
        name: 'mni152.nii.gz',
        colormap: 'gray',
        opacity: 1,
        visible: true
      }
    ]
    await nv.loadVolumes(volumeList)
    const img = nv.saveImage({ filename: '' })
    return img.length
  })
  expect(imgLength).toBe(expectedImgLength)
})