#! /usr/bin/env node

import inquirer from "inquirer";
async function AskQuestion() {
    const answer = await inquirer.prompt([
        {
            name: "questionno1",
            type: "list",
            message: "Which of the following companies has developed Typescript?",
            choices: ["Amazon", "Microsoft", "oracle", "Typescript"]
        },
        {
            name: "questionno2",
            type: "list",
            message: "What is the typing principal of typescript",
            choices: ["Gradual", "Duck", "Dynamic", "All of te above"]
        },
        {
            name: "questionno3",
            type: "list",
            message: "Which of the following filename is the extension for Typescript",
            choices: [".tt", ".txs", ".nod", ".ts"]
        },
        {
            name: "questionno4",
            type: "list",
            message: "Which of the computer programming languages below has influenced the creation of Typescript",
            choices: ["Javascript", "c", "Java", "All of the above"]
        }
    ]);
    const marks = 10;
    const fail = 0;
    if (answer.questionno1 === "Microsoft") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answer.questionno2 === "Dynamic") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
    if (answer.questionno3 === ".ts") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
    if (answer.questionno4 === "Javascript") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is  not correct");
    }
}
AskQuestion();