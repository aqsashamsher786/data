import React from 'react';
import { Button } from 'react-bootstrap';
import DocumentPreview from './DocumentPreview';
import FillerContent from './FillerContent';
import multiPagePdf from './multiPagePdf';
//import mixedOrientationPdf from './mixedOrientationPdf';
import mixedOrientationPdf from './mixedOrientationPdf';
const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};

const multiPagePdfFile = `data:application/pdf;base64,${multiPagePdf}`;
const mixedOrientationPdfFile = `data:application/pdf;base64,${mixedOrientationPdf}`;

export default  class App extends React.Component {
    state = {
        show: true,
        file: multiPagePdfFile
    };
    preview = file => {
        return this.setState({ show: true, file: file });
    };
    render = () => (
        <div style={styles}>
            <Button
                bsstyle="primary"
                options={{ workerSrc:
                    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.305/pdf.worker.min.js'
             }}
                onClick={this.preview.bind(this, multiPagePdfFile)}
            >
                Show Multi Page Pdf
            </Button>
            <Button
                bsstyle="primary"
                onClick={this.preview.bind(this, mixedOrientationPdfFile)}
            >
                Show Mixed Orientation Pdf
            </Button>
            <FillerContent />
            {this.state.show && (
                
                <DocumentPreview
                    show={this.state.show}
                    file={this.state.file}
                    onClose={() => this.setState({ show: false })}
                    toolbar={
                        <div>
                        <a href='Cv.pdf' 
                         download="Cv.pdf"> 
                    <button className="btn btn-primary">
                           Download
                       </button>
                       </a>
                   </div>
                    }
                    footer={<div>my footer</div>}
                />
            )}
        </div>
    );
}

;