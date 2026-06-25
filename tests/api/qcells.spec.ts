import { test, expect } from '@playwright/test';

test('Qcells homepage returns 200', async ({ request}) => {

    const response = await request.get('https://us.qcells.com');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBe(true);
});


const pages = [
    'https://us.qcells.com/get-started/',
    'https://us.qcells.com/get-started/get-started-homeowner/',
    'https://us.qcells.com/get-started/get-started-residential-installer/',
    'https://us.qcells.com/get-started/get-started-commercial-industrial/',
    'https://us.qcells.com/get-started/get-started-utility/'
    
    //in case error non existent 'https://us.qcells.com/get-started/get-started-utility-solutions/'
];

test('Qcells get started pages are working', async ({ request }) => {

    for (const url of pages) {
        const response = await request.get(url);

        expect(response.status()).toBe(200);
        expect(response.ok()).toBe(true);
    }
}); 