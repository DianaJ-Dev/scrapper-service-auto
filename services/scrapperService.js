import { NotFoundException } from "../exceptions/NotFoundException.js";
import { closeBrowser, initializeBrowser, scrapeOpinions } from "../helpers/puppeteerHelper.js";


const BRAND_URL_LIST = [
    { nombre: 'Chevrolet Sail', url: 'https://www.opinautos.com/co/chevrolet/sail/opiniones' },
    { nombre: 'Volkswagen Gol', url: 'https://www.opinautos.com/co/volkswagen/gol/opiniones' },
    { nombre: 'Toyota Hilux', url: 'https://www.opinautos.com/co/toyota/hilux/opiniones' }
];

const getOpinions = async (url) => {
    let browser, page;
    try {
        ({ browser, page } = await initializeBrowser());
        const results = await scrapeOpinions(page, url);
        return results;
    } catch (error) {
        console.error('Error in fuction getOpinions:', error);
        throw error
    } finally {
        if (browser) {
            await closeBrowser(browser);
        }
    }
};

export const getScrapperInfo = async(brandName) => {
    const allResults = {};
    const model = BRAND_URL_LIST.find(model => model.nombre == brandName);

    if (!model) {
        console.error(`Model ${brandName} not found`);
        throw new NotFoundException(`Modelo ${brandName} not found.`, 404)
    }

    console.log(`Getting information about ${brandName}`); 
    const results = await getOpinions(model.url);

    allResults[model.nombre] = results;
    console.log('Saved information in information.json');
    return allResults;
}