import puppeteer from 'puppeteer-core';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = 'c:\\Users\\admmin\\Downloads\\Source Code\\Dự án Mã nguồn\\Porfolio-K3mdenz-Ver2\\Portfolio\\public\\images';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  });

  const page = await browser.newPage();

  console.log('Capturing Spin Quizz Homepage / Lobby...');
  await page.goto('https://spin-ran-dom.vercel.app/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 4000));
  await page.screenshot({ path: path.join(outDir, 'spin_quizz_real.png'), type: 'png' });
  console.log('Spin Quizz Homepage saved!');

  await browser.close();
}

run();
