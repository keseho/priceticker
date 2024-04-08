# Price Ticker App

This is a price ticker app built with Next.js, MongoDB, and Mongoose. It scrapes product prices from Amazon and implements a cron job to send emails when the price drops or returns to normal. Users can track their favorite products and receive notifications via email when the price drops.

## Features
**Web Scraping**: The app uses web scraping to get the price of selected products from Amazon.

**Price Tracking**: Users can track their favorite products and receive notifications via email when the price drops.

**Cron Job**: Implements a cron job to periodically check the prices and send email notifications accordingly

## Usage


Add the URLs of the products you want to track.

Set the desired price at which you want to be notified.

The app will periodically check the prices and send you an email when the price drops below your set threshold.

## Technologies Used
*Next.js*: Next.js is used as the framework for building the app.

*MongoDB*: MongoDB is used as the database to store product and user information.

*Mongoose*: Mongoose is used as the MongoDB object modeling tool.

*Node.js*: Node.js is used as the backend runtime environment.

*React*: React is used for building the user interface of the app.

## Installation


Clone the repository:
bash
Copy code
```
git clone https://github.com/your/repo.git
```
Install dependencies:
bash
```
Copy code
cd price-ticker-app
npm install
```
Set up environment variables:
Create a .env file in the root of the project and add the following variables:
```
makefile
Copy code
MONGODB_URI=your_mongodb_uri
```
Run the app:
bash
Copy code
```
npm run dev
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
