import puppeteer from 'puppeteer';
import { BrowserInitializationException } from '../exceptions/BrowserInitializationException.js';
import {config} from 'dotenv';

config()

export const initializeBrowser = async () => {
    try {
        const browser = await puppeteer.launch({
            executablePath : 
                process.env.NODE_ENV === 'production' 
                    ? process.env.PUPPETEER_EXECUTABLE_PATH
                    : puppeteer.executablePath(),
            args : [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--single-process',
                '--no-zygote',
            ],
        });
        const page = await browser.newPage();
        return { browser, page };
    } catch (error) {
        console.error('Failed to initialize the browser:', error);
        throw new BrowserInitializationException('Failed to initialize the browser', 500);
    }
};

export const scrapeOpinions = async (page, url) => {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const results = await page.evaluate(() => {
        const data = [];
        const reviewElements = document.querySelectorAll('.WhiteCard');
        reviewElements.forEach((element, index) => {
            if (index < 20) {  
                // 1. Obtener la puntuación
                const stars = element.querySelectorAll('.LeftRightBox__left img[src*="icon_star--gold.svg"]');
                const rating = stars.length; 

                // 2. Obtener el texto de "Lo mejor"
                const bestTextElement = element.querySelector('span.color-text-solved');
                const bestText = bestTextElement ? bestTextElement.nextElementSibling.textContent.trim() : 'No especificado';

                // 3. Obtener el texto de "Lo peor"
                const worstTextElement = element.querySelector('img[src*="icon_dislike--red.svg"] + span.align-middle');
                const worstText = worstTextElement ? worstTextElement.nextElementSibling.textContent.trim() : 'No especificado';

                data.push({
                    rating,
                    bestText,
                    worstText
                });
            }
        });
        return data;
    });
    return results;
};

export const closeBrowser = async (browser) => {
    await browser.close();
};