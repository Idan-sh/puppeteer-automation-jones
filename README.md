<p align="center">
    <strong>Puppeteer Automation</strong><br>
    <img width="50%" align="center" alt="image" src="https://github.com/user-attachments/assets/4df1792b-ef63-4c4f-bfd0-4f9e1013f2f9">   
</p>

## About this project
This is a simple testing automation, that uses the `Puppeteer` JavaScript library.  


This automation is used to test the following web-form: [`https://testsite.getjones.com/ExampleForm/`](https://testsite.getjones.com/ExampleForm/)   

<br>
   
### The automation flow:
- `Open` the form website at: [`https://testsite.getjones.com/ExampleForm/`](https://testsite.getjones.com/ExampleForm/) 
- `Type` values in the `Name`, `Email`, `Phone` and `Company` fields.
- `Screenshot` the filled form.
- `Select` the Number of `Employees` as `51-500`.
- `Click` the `Request a call back` button.
- `Validate` that the reached page is the `thank you page`, after the redirect process is complete.
- `Log` to the `console` indicating whether the redirect was successful.
- `Screenshot` the reached page.


<br>   
   
## What is Puppeteer?   
Puppeteer is a Node.js library that provides a high-level API for automating interactions with web browsers, specifically Google Chrome or Chromium.   
It is built and maintained by the Google Chrome team and is widely used for tasks such as web scraping, automated testing, and generating PDFs or screenshots of web pages.

> Useful Links:  
> * Puppeteer library:    [`https://github.com/GoogleChrome/puppeteer`](https://github.com/GoogleChrome/puppeteer)  
> * API guide:            [`https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md`](https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md)  
> * Examples:           [`https://github.com/checkly/puppeteer-examples`](https://github.com/checkly/puppeteer-examples)

   
