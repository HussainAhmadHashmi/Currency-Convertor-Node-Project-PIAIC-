import inquirer from "inquirer";

let Conversion = {
    PKR: {
        USD: 0.0036,
        GBP: 0.0028,
        PKR: 1
    },
    GBP: {
        PKR: 350.40,
        USD: 1.27,
        GBP: 1,
    },
    USD: {
        PKR: 276.91,
        GBP: 0.79,
        USD: 1
    }
}

const currency: {
    from: "PKR" | "GBP" | "USD",
    to: "PKR" | "GBP" | "USD",
    amount: number,
} = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
        message: "Enter your currency"
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
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
