# Sunny Portal CSV Downloader

This project is work in progress!

Currently, it downloads the CSV for the current day for the 
[SMA Sunny Portal powered by ennexOS](https://ennexos.sunnyportal.com).

## Prerequisites

* Install NodeJS v14 or later

## Installation

    $ git clone https://github.com/thorsten/sunnyportal-csv-downloader.git
    $ cd sunnyportal-csv-downloader
    $ npm install
    
## Add credentials

Please set your SMA credentials in the file credentials.original.ts and rename the file to credentials.ts. The file
should look the following code:

    export const SMA_USERNAME = 'you@example.com'; // the email address for sunnyportal.com
    export const SMA_PASSWORD = 'your-password'; // your password
    export const SMA_PLANT_ID = 123456789; // the plant ID

## Run the tests without the GUI
    
    $ npm run cypress

## Run the tests with the GUI

    $ npm run cypress:gui

## License

MIT License

Copyright © 2020-2021 Thorsten Rinne

Made with ❤️ and ☕️