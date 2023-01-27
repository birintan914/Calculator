# Calculator 
## README to be continued..

# DESIGN:

Calculator Programmed with stacks

Steps:
 1) Learn Stacks for JS
 2) Learn how to evaluate calculator expressions with stacks
 3) Design Calculator with html/css
 4) Give calculator functionality

Concepts:
- Some operators have higher precedence than other (* > +)
- when ")" is entered it must remove an according "(" that was previously entered
- push operands and operators into seperate stacks
- don't push unkown characters/numbers
- Number on the screen is only pushed to stack once the operator is pressed (multi-digit numbers)

Errors:
- pressing enter when operator is at the end (leftover operator in stack)
- ")" entered without a matching "("
- prevent calculator display overflow

Features to implement:
- scientific notation
- units conversion
- currency conversion (API?)
