# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

# Running Docusaurus Documentation Locally in VSCode

Follow these steps to run a Docusaurus documentation site that you've cloned from GitHub on your local machine using VSCode.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager)

## Step 1: Clone the Repository

Clone the Docusaurus documentation repository from GitHub to your local machine.

## Step 2: Open VSCode and Terminal

Open Visual Studio Code (VSCode) and navigate to the cloned repository's root folder. To do this, go to the top menu and select `Terminal` > `New Terminal`.

## Step 3: Install Dependencies

In the terminal, run the following command to install all the required dependencies for the Docusaurus documentation site:

```bash
npm install && npm run build
```

## Step 4: Start the Local Development Server

After the dependencies are installed, start the local development server using the following command:
```bash
npm run serve
```

## Step 5: Access the Local Site

Once the server is up and running, open your web browser and visit http://localhost:3000/ to see the locally running Docusaurus documentation site.

Now, you can explore and interact with the documentation website on your local machine. Any changes you make to the Markdown files will automatically trigger a refresh on the site, allowing you to preview your changes in real-time.
