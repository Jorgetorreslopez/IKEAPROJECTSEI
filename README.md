# IKEA SEI Project 
![Logo](https://dynamex.az/frontend/web/uploads/images/ikea-logo.png)
#

Welcome to the IKEA SEI Project! This beginner-friendly coding project, developed as part of the Software Engineering Immersive (SEI) program, aims to replicate the functionality and design of the popular IKEA website. If you're new to coding and eager to learn, you're in the right place. With guidance from our team of talented engineers, including Jorge Torres Lopez, Diego Vasquez, Shumar McPherson, Terrance Hill, Yamileth Narvaez, Jamal Mayson, Jake Carlson, and Manuel Ventura, you'll embark on a journey to recreate the functionality and design of the IKEA website.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [MongoDB Connection](#mongodb-connection)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)

## Introduction

The IKEA SEI Project is a perfect starting point for beginners in coding. It's designed to teach you the basics while giving you a tangible project to work on. By recreating the user experience of the IKEA website, you'll gain hands-on experience with HTML, CSS, JavaScript, and more.

## Features

- Browse through a catalog of furniture and home accessories.
- View detailed product information and images.
- Add products to a virtual shopping cart.
- Simulate a checkout process.

## Getting Started

### Prerequisites

Before you start, make sure you have:

- Basic computer skills.
- A code editor (like Visual Studio Code) installed.
- Eagerness to learn!

### Installation

1. **Clone the repository:**

   Open your terminal or command prompt and run:

   ```bash
   git clone https://github.com/your-username/ikea-sei-project.git
   ```

2. **Navigate to the project directory:**

   Change your working directory to the project folder:

   ```bash
   cd ikea-sei-project
   ```

3. **Install project dependencies:**

   Install the necessary tools and libraries:

   ```bash
   npm install
   ```

### MongoDB Connection

To enable MongoDB functionality, follow these steps:

1. **Switch to the `dev` branch on GitHub:**

   ![Dev Branch](https://cdn.discordapp.com/attachments/973091238175711262/1148786378537185321/ikea_dev_branch_image.png)

2. **After pulling the updated changes to your local repository**, you should be able to connect to your MongoDB database by following these steps:

   - Run the following command to install the necessary packages:

     ```bash
     npm install
     npm install morgan
     ```

   - Update your `.env` file with your own MongoDB connection string. Make sure to change the name of your collection in the connection string if necessary.

   - Run the project with the following command:

     ```bash
     npm run start
     ```

## Usage

To start using the IKEA SEI Project, follow these steps:

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

2. **Access the project in your web browser** by visiting `http://localhost:3000`.

3. **Explore the project** by browsing through the catalog, viewing product details, and experimenting with the features of the application.


3. **Explore the project** by browsing through the catalog, viewing product details, and experimenting with the features of the application.

 ![HomePage](https://media.discordapp.net/attachments/973091238175711262/1152400665310670940/IKEAXDONNA_and_17_more_pages_-_Personal_-_Microsoft_Edge_9_15_2023_5_26_27_PM.png?width=930&height=905)

 ![Shopping Page](https://media.discordapp.net/attachments/973091238175711262/1152401153905143828/IKEAXDONNA_and_17_more_pages_-_Personal_-_Microsoft_Edge_9_15_2023_5_29_12_PM.png?width=1070&height=904)

![Loggin Page](https://media.discordapp.net/attachments/973091238175711262/1152401492502921236/IKEAXDONNA_and_17_more_pages_-_Personal_-_Microsoft_Edge_9_15_2023_5_31_07_PM.png?width=796&height=905)


### Technologies

This project makes use of the following technologies:

- HTML5, CSS3, and JavaScript for structuring, styling, and interactivity.
- [Bootstrap](https://getbootstrap.com) for responsive design and UI components.
- [Gulp](https://gulpjs.com) for task automation.
- MongoDB for database functionality.
- MERN Stack, MongoDB, Express, React, Node.js
- Pexels API (runs the small videos on the home screen)
- Stripe API (runs the credit card in checkout)
- Custom Pexel API (had to make custom API for CORS to connect to backend)
- Youtube Wireframe API (used to play music when you enter site)
- Group API (Used for all the items on the website)
- Bigpoppacode is starter code that has all the dependicies needed for this project. Run this "lets-code" to install it. 


### Contributing

This project is beginner-friendly, and contributions are welcome! If you'd like to contribute to the project, follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes and commit them** with descriptive messages.
4. **Push your changes to your fork.**
5. **Open a pull request** detailing your changes.

### Links

Wireframe - https://files.slack.com/files-pri/T0351JZQ0-F05SPV77REY/image.png

Powerpoint - https://docs.google.com/presentation/d/1w3uQSM_yr4H7RbBALjSeKd4bR-mCx_k8Szef3qlddMM/edit#slide=id.g25f6af9dd6_0_0

Trello Board - https://trello.com/b/FGjsDEj3/ikea-project
