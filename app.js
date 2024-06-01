#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define the questions
const questions = [
    {
        type: "list",
        name: "Q1",
        message: "Which of the following is a basic type in TypeScript?",
        choices: ["a) string", "b) object", "c) array", "d) all of the above"],
        correctAnswer: "d) all of the above",
    },
    {
        type: "list",
        name: "Q2",
        message: "How do you explicitly type a variable as a number in TypeScript?",
        choices: [
            "a) let num: number;",
            "b) let num: Number;",
            "c) let num: num;",
            "d) let num: int;",
        ],
        correctAnswer: "a) let num: number;",
    },
    {
        type: "list",
        name: "Q3",
        message: "Which keyword is used to define an interface in TypeScript?",
        choices: ["a) class", "b) interface", "c) type", "d) module"],
        correctAnswer: "b) interface",
    },
    {
        type: "list",
        name: "Q4",
        message: "What does the 'tsc' command do?",
        choices: [
            "a) Runs TypeScript code",
            "b) Compiles TypeScript to JavaScript",
            "c) Installs TypeScript",
            "d) Starts a TypeScript server",
        ],
        correctAnswer: "b) Compiles TypeScript to JavaScript",
    },
    {
        type: "list",
        name: "Q5",
        message: "How do you denote a TypeScript file?",
        choices: ["a) .js", "b) .jsx", "c) .ts", "d) .tsx"],
        correctAnswer: "c) .ts",
    },
];
// Introduction message
const introduction = () => {
    console.log(chalk.yellowBright.bold("**********************************************"));
    console.log(chalk.yellowBright.bold("**                                          **"));
    console.log(chalk.yellowBright.bold("**      🌟  WELCOME TO THE QUIZ! 🌟         **"));
    console.log(chalk.yellowBright.bold("**     Test your TypeScript knowledge!      **"));
    console.log(chalk.yellowBright.bold("**                                          **"));
    console.log(chalk.yellowBright.bold("**********************************************\n"));
};
// Check answer function
const checkAnswer = (question, userAnswer) => {
    if (userAnswer === question.correctAnswer) {
        console.log(chalk.greenBright(`✅ Correct! You nailed it!\n`));
        return true;
    }
    else {
        console.log(chalk.redBright(`❌ Incorrect! The right answer is ${chalk.cyanBright(question.correctAnswer)}. Better luck next time!\n`));
        return false;
    }
};
// Separator
const printSeparator = () => {
    console.log(chalk.gray("────────────────────────────────────────────────────────────────────────────────"));
};
// Main quiz function
const main = async () => {
    introduction();
    let score = 0;
    const results = [];
    for (const question of questions) {
        const answer = await inquirer.prompt([question]);
        const isCorrect = checkAnswer(question, answer[question.name]);
        results.push({ question: question.message, correct: isCorrect });
        score += isCorrect ? 10 : 0;
        printSeparator();
    }
    // Summary of results
    console.log(chalk.greenBright.bold("\nQuiz Summary:\n"));
    results.forEach((result, index) => {
        console.log(`${index + 1}. ${result.question} - ${result.correct ? chalk.green("Correct") : chalk.red("Incorrect")}`);
    });
    // Display the total score
    console.log(chalk.yellowBright.bold(`
    ╭──────────────────────────────────────────────╮
    │ 🌟  Congratulations on completing the quiz!  │
    │ 📝  Your total score is: ${chalk.cyanBright.bold(score)} / 50             │
    ╰──────────────────────────────────────────────╯
 `));
};
main();
