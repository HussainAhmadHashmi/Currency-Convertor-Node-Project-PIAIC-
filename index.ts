import inquirer from "inquirer";

let Conversion = {
    PKR: {
        PKR: 1,
        USD: 0.0036,
        GBP: 0.0028,
        EURO: 0.00332,
        INR: 0.29679
    },
    GBP: {
        GBP: 1,
        PKR: 350.40,
        USD: 1.27,
        EURO: 1.16906,
        INR: 104.598
    },
    USD: {
        USD: 1,
        PKR: 276.91,
        GBP: 0.79,
        EURO: 0.92778,
        INR: 83.0155
    },
    EURO: {
        EURO: 1,
        PKR: 300.806,
        GBP: 0.85515,
        USD: 1.07753,
        INR: 89.4517
    },
    INR: {
        INR: 1,
        PKR: 3.36276,
        GBP: 0.00956,
        USD: 0.01205,
        EURO: 0.01118
    }
}

const currency: {
    from: "PKR" | "GBP" | "USD" | "EURO" | "INR",
    to: "PKR" | "GBP" | "USD" | "EURO" | "INR",
    amount: number,
} = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "GBP", "EURO", "INR"],
        message: "Enter your currency"
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "GBP", "EURO", "INR"],
        message: "Select your Conversion"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your Conversion amount"
    }
]);

const { from, to, amount } = currency;

if (from && to && amount) {
    const result = Conversion[from][to] * amount;
    console.log(`Your Currency Conversion from ${from} to ${to} is ${result}`);
} else {
    console.log("Invalid Inputs");
}
