// BMI CALCULATOR USING INQUIRER PROMPT
import inquirer from "inquirer";
const question = [
    { type: 'number', name: 'weight', message: 'weight(Kg):' },
    { type: 'number', name: 'height', message: 'height(m):' },
];
const calculationBMI = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(question);
    console.log(`BMI: ${calculationBMI(weight, height).toFixed(4)}`);
};
main();
