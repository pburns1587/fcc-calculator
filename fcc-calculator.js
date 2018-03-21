/*

Free Code Camp - Build a JS Calculator
Created by Patrick Burns

DONE - Basic Calculator UI
        DONE-Buttons (0-9, ., plus, minus, mult, div, equal, clear)
        DONE-Text based Input, Current Expression, and Result Fields

DONE - User Story: I can add, subtract, multiply and divide two numbers.
        DONE-Clickable buttons
        DONE-Mapping clicks to input, expression
        DONE-Current Input and Expression populate as I click numbers
        DONE-Result generated when I hit equal

DONE - User Story: I can clear the input field with a clear button.
        DONE-Clear button wipes Input(DONE), expression, and result

DONE - User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.
        DONE-Calculate result when I hit the equal button (eval handles OOO)

TODO - Style UI

Github test line !!!
*/

function drawInput(value) {
        var input = $('#calc_input').html();
        input = input + value.toString();
        $('#calc_input').html(input);
}

function drawExpression(value) {
        var exp = $('#calc_exp').html();
        exp = exp + value.toString();
        $('#calc_exp').html(exp);
}

function drawResult(result) {
        $('#calc_res').html(result);
        clearInput();
        drawInput(result);
}

function clearInput() {
        $('#calc_input').html('');
}

function clearExpression() {
        $('#calc_exp').html('');
}

function clearResult() {
        $('#calc_res').html('');
}

function clickController(buttonValue, state) {
        if (state === "result") {
                clearExpression();
                drawExpression($('#calc_input').html());
        }
        if (state === "new_input") {
                clearInput();
        }
        if (Number.isInteger(parseInt(buttonValue)) || buttonValue.toString() === ".") {
                drawInput(buttonValue);
                drawExpression(buttonValue);
        } else if (buttonValue === "C") {
                clearInput();
                clearExpression();
                clearResult();
        } else if (buttonValue.toString() !== "=") {
                drawExpression(buttonValue);
                return "new_input";
        } else {
                //Calculate and return result of expression
                drawResult(eval($('#calc_exp').html()));
                return "result";
        }

        return "input";
}

$(document).ready(function () {
        console.log("ready!");
        var clickState = "input";

        $('.button').click(function () {
                clickState = clickController($(this).html(), clickState);
        });
});