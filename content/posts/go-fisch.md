---
title: gofisch
cover_image: ./images/gofisch-cover.jpg
canonical_url: false
description: "An easy way to start playing Fischer Random/960 chess."
---

# gofisch

I got hooked on playing chess ever since the pandemic started. I wanted a way to play Fischer Random chess, but there was no convenient way to do so on any popular chess websites. Thus, I made my own website to help others more easily play Fischer Random chess.

You can see the live project [here](https://gofisch.tech) or [here](https://gofisch.netlify.app).

## What is Fischer Random Chess?

Fischer Random chess, also known as Chess960, is a variation of chess invented by Bobby Fischer. The deviation from regular chess is that the starting position of the pieces on the back ranks is randomized following certain rules.

- The bishops must be placed on opposite-colour squares
- The King must be placed on a square between the rooks

# Features

The first feature is the essence of Fischer Random chess, a variation of standard chess where the starting position of the pieces on the back ranks is randomized following certain rules. When users hit the randomize button, the sample starting position will be randomized

Next, users can play that specific randomized position in a game on Lichess.org, a popular online chess website. Before playing the game, users are able to change the initial amount of time for the chess, and the amount of time gained for each move played. When pressing play, a new tab will be opened on Lichess, and the user will be able to join the game, and can share the link with a friend to start the game.

Lastly, the FEN position, a way to represent a position on a chessboard, is always available to the user. The user can copy the FEN position to their clipboard and can use that FEN position on other chess websites or programs, such as on Chess.com.

# Stack

- This project was bootstrapped with Create React App
- Utilized the [Lichess](https://lichess.org/api) API for the open challenge creation
- Used [react-simple-chessboard](https://www.npmjs.com/package/react-simple-chessboard) for displaying the chessboard
