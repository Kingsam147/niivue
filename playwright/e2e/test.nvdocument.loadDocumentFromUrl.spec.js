import { test, expect } from '@playwright/test'
import { httpServerAddress, testOptions } from './helpers'

test.beforeEach(async ({ page }) => {
  await page.goto(httpServerAddress)
})

test('nvdocument loadFromUrl load preview', async ({ page }) => {
    const loadedDocuments = await page.evaluate(async (testOptions) => {
        const documents = []
        const documentUrls = [
          './images/document/niivue.basic.nvd',
          './images/document/niivue.drawing.nvd',
          './images/document/niivue.mesh.nvd'
        ]
        for (const documentUrl of documentUrls) {
          const doc = await niivue.NVDocument.loadFromUrl(documentUrl)
          documents.push(doc)
        }

        const demo = document.getElementById('demo')
        demo.style.margin = 'auto'
        demo.style.display = 'flex'
        demo.style.flexDirection = 'column'
        demo.style.alignItems = 'center'
   
        //get rid of our canvas element for the test
        let gl = document.getElementById("gl");
        gl.remove()
        for(const doc of documents) {
            const img = document.createElement('img');
            img.src = doc.previewImageDataURL
            img.style.height = '150px';
            demo.appendChild(img)
        }


        return documents
  })
  expect(loadedDocuments.length).toBe(3)
  await expect(page).toHaveScreenshot({ timeout: 30000 })
})