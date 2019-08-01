# Design Notes

The purpose of this document is to set out a definitive reference as to the
features we plan to implement, and then the technological design that is most
appropriate to implement those features.

## Features

We can differentiate the planned features into a number of stages that are
self-contained and which can be completed in sequence. The basic game flow is based
around the interaction between **Timed Events** and **User Actions** which
interfere with the flow of these events. We initially implement very basic
events and actions, with the knowledge that we can increase the complexity
of these if desirable later on.

### Potential future features

* Interaction between users
* Animated sprites
* Minigames
* Diverging lifecycle paths and the discipline stat which governs the path taken
* Evolution in state during persistence of fabgotchi

## Technology

We will use ReactJS for the UI. We can use component state to control the
attributes of the fabagotchi, and include component methods which keep track
of time elapsed and fire events when this is necessary.