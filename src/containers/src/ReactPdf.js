import { setOptions } from 'react-pdf/dist/umd/entry.webpack';
export * from 'react-pdf';

setOptions({
    workerSrc:
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.305/pdf.worker.min.js'
});
