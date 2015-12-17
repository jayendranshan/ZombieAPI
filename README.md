# Project Title

### Zombie Translator

# Description

This is the first assignment of Advanced Javascript course. This application translates human language to zombie language based on set of rules designed in the project.

# Rules used

1. Converts lower-case "r" at the end of words to be "rh".
2. Converts "a" or "A" is replaced with "hra".
3. Converts the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.).
4. Converts "e" or "E" to be "rr".
5. Converts "i" or "I" to be "rrRr".
6. Converts "o" or "O" to be "rrrRr".
7. Converts "u" or "U" to be "rrrrRr"
8. Converts any number of numerics to be "00000".
9. Converts "s" in any place only if it is lower case to be "sasa"
10. Converts "t" in any place only if it is lower case to be "tartaa".

Note: Rule 3 was implemented as Step 8 (Rule8).

# Rules Used:

1. toBeDefined
2. toBe
3. toEqual
4. not.toBe
5. not.toEqual
6. toMatch

# Where rules are tested:

1. Valid sentence doesnt throw error for the translator- toBeDefined()
2. No input doesnt throw error - toBe()
3. Zombies knows only Zero - toBe()
4. Zombies cant count - not.toBe()
5. Rule1 - toEqual and not.toEqual.
6. Rule2 - toBeDefined() ,toBe() and not.toBe()
7. Rule3 - toBe, not.toBe() , toEqual and not.toEqual.
8. Rule4 - toBe and not.toBe
9. Rule5 - toBe and not.toBe
10. Rule6 - toBe and not.toBe
11. Rule7 - toBe and not.toBe
12. Rule8 - toBe and not.toBe
13. Rule9 - toBe and toBeDefined
14. Rule10 - toBe, toMatch and not.toMatch.

# Technology used

* Javascript, JQuery and RequireJS modules design.
* BootstrapCSS

# Testing

* This application was tested using Jasmine
* Karma is used to run the testing.

# Results:

1. Application works.
2. Jasmine test success for all the tests.
3. Karma test successful.

