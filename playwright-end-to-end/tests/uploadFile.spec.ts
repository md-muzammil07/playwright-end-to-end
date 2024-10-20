/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import { Browser, BrowserContext, chromium, Page, test, expect } from '@playwright/test'
test.describe.configure({ mode: 'serial' })

test.describe('Create private offer via API', async () => {
  let browser: Browser
  let context: BrowserContext
  let page: Page
  const filePath = 'videos/a.webm.mp4';
  const filePath1 = 'videos/b.webm.mp4';


  test.beforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext()
    page = await context.newPage()

  })

  test.afterAll(async () => {
    await page.close()
    await browser.close()
  })


  test.only('upload file using input files', async () => {

    await page.goto("https://www.sendgb.com/");
    await page.click("button button-dark")
    await page.setInputFiles("i.fa-solid.fa-file-circle-plus.fa-xl]", filePath);
    //for multiple file upload , put in the []
    //    await page.setInputFiles("input[name='qqfile']", [filePath, filePath1] );

  })

  test('upload file using on function', async () => {  //upload file from pop up


    await page.goto("https://the-internet.herokuapp.com/upload");
    page.on("filechooser", async (filechooser) => {
      // await filechooser.isMultiple();
      await filechooser.setFiles([filePath, filePath1]);
    })
    await page.click(".example + div#drag-drop-upload", { force: true })

    await context.close();
    await browser.close();

  })

})