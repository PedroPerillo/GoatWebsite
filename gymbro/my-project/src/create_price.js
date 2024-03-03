const stripe = require('stripe')('sk_test_51NVofuL8g4I0K7uVPos3HBYBimznvpwKuV6Cb6VcGrT8wr16FTWJaRFos2QIiuDj099vHOOipTWdQ7KLzk48ZrKa00hjTbC6LY');

stripe.products.create({
    name: 'Starter Subscription',
    description: '$12/Month subscription',
}).then(product => {
    stripe.prices.create({
        unit_amount: 1200,
        currency: 'usd',
        recurring: {
            interval: 'month',
        },
        product: product.id,
    }).then(price => {
        console.log('Success! Here is your starter subscription product id: ' + product.id);
        console.log('Success! Here is your starter subscription price id: ' + price.id);
    });
});