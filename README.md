# ClearcodeRecruitment

Tasks made during recruitment into Clearcode

## Task1

Simple navbar with dropdown list made with pure HTML and CSS.

## Task2

Solution for guardian's of the chamber riddle, written in JS. Main function is riddleSolver in Task2/example.js.
Content of riddle:
> "Mortal! I am the guardian of the chamber you're about to enter. Inside the
> chamber you can find what you seek, but I'll not let you simply pass through. First
> you must solve my riddle. This is a two-dimensional board with multiple types of
> jewels. The rules are simple. If three or more jewels of the same type are adjacent
> vertically or horizontally, you may remove the jewels from the board. After removing
> them, if an empty space has other jewels on top of itself, these jewels will drop until
> they land at the top of remaining jewel or bottom of the board. Repeat those steps
> until no more jewels can be removed from the board then i might let you in into the
> chamber with the stone.”

### Installing

Task2 hasn't got any external dependencies, but in directory Task2/tests there are tests which require Jest library. To run them you need npm:

```
npm i
npm test
```

### Documentation

I prepared basic documentation in JSDoc for Task2. To see it, open Task2/out/example.js.html in browser.
