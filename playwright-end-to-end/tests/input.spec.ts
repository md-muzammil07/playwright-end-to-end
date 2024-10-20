import { Browser, BrowserContext, chromium, Page, test, expect } from '@playwright/test'

test.describe('', async()=> {
    let browser: Browser
    let context: BrowserContext
    let page: Page

    test.beforeAll(async () => {
        browser = await chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://letcode.in/edit");

    
      })

    test.skip('test', async() => {
        const name = await page.locator("#fullName");

        await name?.type('md muzamil');

    })

    test('append a text and press keyboard tab', async() => {      //append the text at the end
        const join = await page.locator("#join")
        await join?.focus();  //focus on the element
        await page.keyboard.press("End");
        await join?.type(" QA Engineer");
        await page.pause()
     })

     test('What is inside the text box, get the value', async() => { 
        const text = await page.getAttribute("id=getMe", "value");
        console.log(text);
      })

      test('Clear the text', async() => { 
        await page.fill("#clearMe", "")
       })

})