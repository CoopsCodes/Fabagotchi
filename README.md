# Fabagotchi
>***A joint project by***

| Name  | Email |
|-------|-------|
|Andy Sims|acsims@tuta.io|
|Cooper Viktor|im.cooperviktor@gmail.com|
---

Our *~~Tamagotchi~~* **Fabagotchi** is an homage to the simple days of 90s browser games, gameboys, Pokémon and such awesome things.

It is a chance for us to work on a joint project that isn't a marked requirment under a strict time frame, so we can prepare ourselves for a project based future.

And a chance to build something totally fun!

---
---
# Links

[GitHub](https://github.com/CoopsCodes/Fabagotchi "Repo")

[Figma](https://www.figma.com/file/P8r9jN8lomtu1y5WtGlSSgTJ/Fabagotchi?node-id=0%3A1 "Design Board")

[Trello](https://trello.com/b/dS9CduKA/fabagotchi "Project Management Board")

---
---
# Concept

The Fabagotchi is a web based digital pet that you Adopt from the Fabagotchi Pound.

Once you see an egg you like, you adopt it and care for it through the various stages of its lifecycle.

But beware, if you dont look after it it'll die!

---

# Design: first iteration

## Backend

We have an express server that has a Fabagotchi resource and three routes.

### FabagotchiSchema:

* _id (number)
* name (string)
* age (number)
* hunger (number)
* alive (boolean)

### GET /fabagotchi

* Takes no parameters
* Returns all fabagotchi objects

### GET /fabagotchi/:id

* Accepts an id parameter
* Returns a fabagotchi resource with that id in JSON format

### POST /fabagotchi

* Accepts a fabagotchi resource in JSON format
* Returns the id of the fabagotchi that has been persisted to database

## Frontend

We have a react app that makes API calls to our express server to get
a Fabagotchi object, makes this part of its state, applies game rules
to this state while it is running, and re-POSTs the object to
the server after some indefinite time.

* It displays a welcome screen and a list of fabagotchis available
* When a fabagotchi is selected it displays the fabagotchi and saves it into state
* As time passes it runs games rules on its state

### Game rules

* Every 30 seconds, the hunger of the fabagotchi increases by one
* If hunger reaches 20 then the fabagotchi dies
* The user can click a button to lower the hunger by 1

* The user can click a button to save the Fabagotchi into the database. This also
returns the user to the welcome screen.
