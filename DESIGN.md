# Design Notes

The purpose of this document is to set out a definitive reference as to the
features we plan to implement, and then the technological design that is most
appropriate to implement those features.

## Features

We can differentiate the planned features into a number of stages that are
self-contained and which can be completed in sequence. We follow the
[Semantic Versioning](https://semver.org/) scheme. The basic flow is based
around the interaction between **Timed Events** and **User Actions** which
interfere with the flow of these events. We initially implement very basic
events and actions, with the knowledge that we can increase the complexity
of these if desirable later on.

### v0.1.0 : Fabagotchi MVP

* There is user interface which displays a static (non-animated) fabagotchi
sprite

* This sprite represents a creature who has three attributes: hunger, health, 
and age.

* The sprite includes visual indicators which represent the status of these
attributes.

* **Timed Events** will occur that cause these attributes to change:
    1. Droppings will periodically appear on the screen, and if they are not
    cleaned up then health will decrease.
    2. Hunger is always increasing. When it reaches a threshold, a "hungry"
    event is fired which causes a steady decrease in health.
    3. Age increments by 1 every hour.
    4. When health reaches zero, the fabagotchi dies and a new fabagotchi
    appears. It is inactive until activated on screen by the user.

* **User Actions** can interfere with the flow of timed events:
    1. Feeding will cause the hunger to decrease.
    2. Cleaning droppings will prevent them from decreasing health.

### v0.2.0 : Persistence

* The fabagotchi and its state can be persisted into a database.

* The state does note evolve during persistence.

* An authenticated user identity is required to use the software.

* Each fabagotchi is associated with an authenticated user identity.

### v.0.3.0 : Lifecycles

* The fabagotchi has a number of different stages in its life which are keyed
to different number ranges in its age.

* The timing of events, and consequent difficulty of keeping the fabagotchi
alive, increases with life stages.

* The sprite that represents the fabagotchi changes with its life-cycle.

### Potenital features in future

* Interaction between users
* Animated sprites
* Minigames
* Diverging lifecycle paths and the discipline stat which governs the path taken
* Evolution in state during persistence of fabgotchi

## Technology

We will use ReactJS for the UI. We can use component state to control the
attributes of the fabagotchi, and include component methods which keep track
of time elapsed and fire events when this is necessary.