import {PDFDocument, fill} from 'pdf-lib'

/*
functon that loads a PDF

inputs:
    link_to_pdf: a link that leads to a fillable PDF

outputs:
    a PDFDocument representing the PDF at the link given
*/

async function loadPDF(link_to_pdf : string) {
    const uint8Array = await (await fetch(link_to_pdf)).arrayBuffer()
    const pdf = await PDFDocument.load(uint8Array)
    return pdf
}

/*
function that fills a PDF

inputs: 
    pdf: a PDF Document that hold our fillable pdf
    pdf_text: a map of field names to field values. field names should match those in fillable pdf
        the two types of variables we have are text fields and checkboxes (booleans)

outputs:
    uint8array representing the PDF, now filled in, which can be saved or downloaded
*/

async function fillPDF(pdf: PDFDocument, pdf_text : Map<string, string|boolean>) {
    //we should try to make sure we have a well formed dictionart
    //but do we have to do that if i'm harcoding the dictionary?
    const form = pdf.getForm()

    pdf_text.forEach((field_value, field_name) => {
        if (typeof field_value === 'boolean') {
            const form_field = form.getCheckBox(field_name)
            if (field_value === true) {
                form_field.check()
            }
        }
        if (typeof field_value === 'string') {
            const form_field = form.getTextField(field_name)
            form_field.setText(field_value)
        }
    })
    const output = await pdf.save()
    return output
}

/*
function that saves a PDF to a user's account

inputs: 
    pdf-text: a map of field names to field values. field names should match those in fillable pdf
        the two types of variables we have are text fields and checkboxes (booleans)
    link_to_pdf: link to where the fillable PDF is stored. if in public, '/name.pdf' should do

outputs:
    none, but a file should be sent to the backend for safekeeping
*/


export async function savePDF(pdf_text : Map<string, string|boolean>, link_to_pdf : string) {
    const output = await loadPDF(link_to_pdf)

    const pdf_array = await fillPDF(output, pdf_text)

    //here we would send it back to the backend to be saved!
    console.log("PDF saved!")
}

/*
function that downloads a PDF to a user's computer

inputs: 
    pdf-text: a map of field names to field values. field names should match those in fillable pdf
        the two types of variables we have are text fields and checkboxes (booleans)
    link_to_pdf: link to where the fillable PDF is stored. if in public, '/name.pdf' should do

outputs:
    none, but a file should be downloaded with the appropriate text in the fields
*/

export async function downloadPDF(pdf_text : Map<string, string|boolean>, link_to_pdf : string) {
    const output = await loadPDF(link_to_pdf)

    const pdf_array = await fillPDF(output, pdf_text)
    

    let blob = new Blob([pdf_array], {"type": "application/pdf"});

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = 'medical_information_form_filled';

    link.click();
}

