# Rhode Island’s Healthcare System Website

This project is a React-based web application designed to help users navigate Rhode Island's healthcare system. It provides information about different types of healthcare services, mental health resources, and allows users to take notes.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Code Overview](#code-overview)
- [Contributing](#contributing)

## Features
- Login and Sign Up
- PDF Downloading
- Page Downloading
- User Feedback
- Website Walkthrough
- Note Taking 
- Interactive Image Click Through

## Prerequisites
### Node.js and npm
The project is a React application, requiring Node.js and npm for dependency management and script execution.
- [Node.js](https://nodejs.org/)
- Run `npm install` in the terminal

### Firebase Account (if applicable)
If the project interacts with Firebase services (authentication, Firestore, etc.), a Firebase account and project setup are necessary.
- [Firebase Account](https://firebase.google.com/)

### PDF-lib Library
The project utilizes the PDF-lib library for PDF file operations.
- Installation is managed through the project's `package.json` using npm. Execute the following command:

```bash
npm install pdf-lib
```

### Other Dependencies
Ensure all other project dependencies, including React libraries, are installed.
```bash
npm install
```

These prerequisites cover the essential technologies and services required for the project. 

## Installation

[Include step-by-step instructions on how to install your project locally.]

1. Clone the repository:

    ```bash
    git clone https://github.com/[your-username]/[your-repo].git
    ```

2. Change into the project directory:

    ```bash
    cd [your-repo]
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

## Usage

1. Run the application:

    ```bash
    npm start
    ```

2. Open your browser and navigate to [http://localhost:3000/](http://localhost:3000/).


## Code Overview

`Accordion.tsx` is a React component designed to display an accordion UI. It facilitates the creation of collapsible sections, allowing users to toggle between different content sections. The file includes styles, state management, and functionality to handle the accordion's behavior.

Key features:
- Dynamic rendering of accordion sections.
- Clickable titles to expand/collapse content.
- Clean styling for a user-friendly interface.
##

`PDFFiller.tsx` contains functions essential for working with PDF files. It provides functionalities for loading, filling, saving, and downloading PDFs. The file interacts with the `pdf-lib` library to handle PDF manipulation. It can be easily integrated into a React application to handle dynamic PDF generation and modification.

Key functions:
- `loadPDF(link_to_pdf: string): Promise<PDFDocument>`: Loads a fillable PDF from a given link.
- `fillPDF(pdf: PDFDocument, pdf_text: Map<string, string | boolean>): Promise<Uint8Array>`: Fills the PDF with provided data.
- `savePDF(pdf_text: Map<string, string | boolean>, link_to_pdf: string): Promise<void>`: Saves the filled PDF.
- `downloadPDF(pdf_text: Map<string, string | boolean>, link_to_pdf: string): Promise<void>`: Downloads the filled PDF.
##
`SubPage.tsx` is a React component that represents a sub-page within the application. It combines an accordion for organized content display, a sidebar for additional actions, and a PDF container for note-taking. This component is versatile and can be reused for different sub-pages with varying content and functionality.

Key features:
- Integration of the `Accordion` component.
- Sidebar with buttons for taking notes, printing, and saving.
- PDF container for user note-taking with dynamic form fields.
- Responsive design for an optimal user experience.





