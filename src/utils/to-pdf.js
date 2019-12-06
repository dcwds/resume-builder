const puppeteer = require("puppeteer")

// Puppeteer will launch a headless Chromium browser in memory
// and navigate to the webpage listed as `RESUME_URL`.
const RESUME_URL = "http://localhost:8000"

// If changes are made to this, I suggest updating .gitignore
const PDF_PATH = "pdf/resume.pdf"

// See Puppeteer docs for supported formats.
// https://github.com/puppeteer/puppeteer
const PDF_FILE_FORMAT = "A4"
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(RESUME_URL, { waitUntil: "networkidle2" })
  await page.pdf({ path: PDF_PATH, format: PDF_FILE_FORMAT })

  await browser.close()
})()
