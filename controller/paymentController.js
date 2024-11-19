import { v4 as uuidv4 } from 'uuid';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: 'rzp_test_esSRYdqK5z6yfi', //test key
    key_secret: '7Id6iMnLEGlYxekY0C8JZfBC'
});

export const orderIDGeneration = async (req, res) => {
    try {
        const amountInPaise = Math.round(parseFloat(req.body.amount) * 100);

        const options = {
            amount: amountInPaise, 
            currency: 'INR',
            receipt: uuidv4(),
            payment_capture: 1
        };

        const response = await razorpay.orders.create(options);

        res.json({
            orderID: response.id,
            orderAmount: response.amount / 100, 
            orderCurrency: response.currency
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to generate order ID' });
    }
};

export const getStatus = async (req, res) => {
    const { paymentId } = req.params;

    try {
        const payment = await razorpay.payments.fetch(paymentId);

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.json({
            status: payment.status,
            method: payment.method,
            currency: payment.currency,
            amount: payment.amount / 100 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get payment status' });
    }
};
