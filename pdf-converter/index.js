const express = require('express');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.text({ type: 'text/html', limit: '50mb' })); // Accept HTML as plain text

// Function to get timestamp in IST format (dd/mm/yyyy HH:mm:ss.sss)
function getISTTimestamp() {
    const now = new Date();
    const istOffset = 330; // IST offset in minutes (UTC +5:30)
    const localTime = new Date(now.getTime() + istOffset * 60 * 1000);

    const day = localTime.getUTCDate().toString().padStart(2, '0');
    const month = (localTime.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = localTime.getUTCFullYear();

    const hours = localTime.getUTCHours().toString().padStart(2, '0');
    const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = localTime.getUTCSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


// POST route to receive HTML and generate PDF with optional orientation and footer details
app.post('/generate-pdf', async (req, res) => {
    const htmlContent = req.body;
    const orientation = req.query.orientation || 'portrait'; // Default to portrait if not specified
    const author = req.query.author || ''; // Accept author as a query parameter

    try {
        const browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();

        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        // Apply inline styles to markers directly
        await page.evaluate(() => {
            document.querySelectorAll('.marker-yellow').forEach(el => el.style.backgroundColor = '#FFFF99'); // Light yellow
            document.querySelectorAll('.marker-green').forEach(el => el.style.backgroundColor = '#CCFFCC');  // Light green
            document.querySelectorAll('.marker-pink').forEach(el => el.style.backgroundColor = '#FFCCEB');   // Light pink
            document.querySelectorAll('.marker-blue').forEach(el => el.style.backgroundColor = '#CCFFFF');    // Light cyan
            document.querySelectorAll('.pen-red').forEach(el => {
                el.style.color = 'red';
                el.style.backgroundColor = 'transparent';  // Make the background transparent
            });

            document.querySelectorAll('.pen-green').forEach(el => {
                el.style.color = 'green';
                el.style.backgroundColor = 'transparent';  // Make the background transparent
            });
        });

        // Add custom CSS for text colors and table styling without affecting existing backgrounds
        await page.addStyleTag({
            content: `
                table { border-collapse: collapse; width: 100%; max-width: 100%; }
                th, td { 
                    border: 1px solid black; 
                    padding: 2px;
                    word-wrap: break-word;     
                    word-break: break-word;    
                    white-space: normal;       
                }
                th { 
                    padding: 0.5px;
                    background-color: #f2f2f2; /* Light gray background for table header */
                }

                ${orientation === 'landscape' ? `
                    table th:nth-child(1), table td:nth-child(1) { width: 5%; }
                    table th:nth-child(2), table td:nth-child(2) { width: 5%; }
                    table th:nth-child(3), table td:nth-child(3) { width: 24%; }
                    table th:nth-child(4), table td:nth-child(4) { width: 50%; }
                    table th:nth-child(5), table td:nth-child(5) { width: 8%; }
                    table th:nth-child(6), table td:nth-child(6) { width: 8%; }
                ` : `
                    table th:nth-child(1), table td:nth-child(1) { width: 5%; }
                    table th:nth-child(2), table td:nth-child(2) { width: 5%; }
                    table th:nth-child(3), table td:nth-child(3) { width: 23%; }
                    table th:nth-child(4), table td:nth-child(4) { width: 47%; }
                    table th:nth-child(5), table td:nth-child(5) { width: 10%; }
                    table th:nth-child(6), table td:nth-child(6) { width: 10%; }
                `}

                /* Hide editor-specific elements to remove artifacts */
                .ck-widget__selection-handle,
                .ck-widget__type-around,
                .ck-icon__selected-indicator,
                .ck-table-column-resizer {
                    display: none;
                }
            `,
        });

        // Remove unwanted editor artifacts from the DOM before generating the PDF
        await page.evaluate(() => {
            document.querySelectorAll('.ck-widget__selection-handle, .ck-widget__type-around, .ck-icon__selected-indicator, .ck-table-column-resizer').forEach(el => el.remove());
        });

        // Get current timestamp in IST format
        const timestamp = getISTTimestamp();

        // Generate PDF with the specified orientation and footer information
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '10mm', bottom: '12mm', left: '0mm', right: '0mm' },
            landscape: orientation === 'landscape', // Set landscape to true if orientation is landscape
            displayHeaderFooter: true,
            footerTemplate: `
                <div style="font-size:10px; width:100%; padding:0 10mm; position:relative;">
                    <span style="float:left;">${timestamp}</span>
                    <span style="float:right;">${author ? author : ''}</span>
                    <span style="position:absolute; left:50%; transform:translateX(-50%);">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
                </div>
            `,
            headerTemplate: '<div></div>', // Empty header
        });

        await browser.close();

        // Set headers and send PDF as response
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Length': pdfBuffer.length,
        });
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});