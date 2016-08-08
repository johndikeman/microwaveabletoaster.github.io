---
layout: post
title: I Made A Game
tags: programming
description: in which i talk about a game that i wrote & programmed
image:
  feature: happysmolgoats.jpg
  thumb: happysmolgoatsthumb.jpg
---

tl;dr: I wrote & programmed a game in coffeescript that you can play in your browser <a href="https://microwaveabletoaster.itch.io/mississippi">here</a>.

mississippi: origins
====================

What does one do when one is riding in a car from Texas to North Carolina? They write a surrealist short story, of course. I wrote the story itself in a sort of free-verse style, building a narrative that's composed of short lines. I like doing this, and I've written other stuff like it before- it feels almost like cheating, though. I can forgo messy annoying things like proper sentence structure and grammar to get to the heart of what I want the reader to feel at any point. I originally intended to turn the story into a gameboy advanced game using some old assemblers I scraped off of websites that looked like they hadn't been updated since the early 2000s, but after digging around the documentation for a while and realizing that I know literally nothing about low-level programming in C I decided that it might be better to switch to a different medium before I got discouraged and abandoned the project altogether.

drink the coffeescript
======================

Enter: coffeescript and the html5 canvas element. I'm absolutely in love with coffeescript. For the uninitiated, coffeescript is a language that "transpiles" straight into javascript- basically, it's training wheels. Well, I say that, but that analogy would only work if training wheels allowed your bike to go faster, be easier to ride, and look 10000% prettier- because that's what coffeescript does to javascript code. Seriously, a normal python-style class system complete with inheritance in vanilla javascript? `for element in list` style for loops? I can't imagine any compelling reason to go back to wrestling with javascript after having all that. I also decided that I didn't want to mess with any javascript framework for making games, because for some reason I was in the mood to reinvent the wheel and revisit my old friend the \<canvas\>.

work begins
===========

I didn't have much trouble throwing down a basic physics system- acceleration, velocity and all that jazz. the problem came when I plugged everything in and started to test rendering: the player and the boxes were antialiased (read: they looked fuzzy and bad). I wasn't fazed, I just googled "how to disable antialiasing html5 canvas"- but that changed when I read that there wasn't really a way to. A few sources told me to translate the images like a half pixel, which didn't work. Eventually, I found someone that recommended using an ImageData object, then blitting the object onto the screen as opposed to stroking it with the canvas api. That finally worked, and I think I took a nap in celebration (most of the programming was done in the car). Once the basics were done- the player could jump, the platforms will fall & collide with the player- I started to integrate the actual story feature. my pseudo-inspiration for the actual concept of the game- player completes a certain action, then receives another part of the story- comes from the Portal franchise. I spent hours trying to figure out the puzzles, motivated by not only the inherent drive to complete an objective, but the urge to hear GLaDOS and/or Wheatly and/or Cave Johnson speak and give me another section of the plot of the game. It was a really cool feeling, and something that I wanted to maybe come close to reproducing in mississippi. Every seven seconds, I made it so that a different color platform will spawn, and if the player lands on this platform, it will trigger a screen that the next piece of the story will scroll across. Displaying the text was a headache as well. I used a relatively blocky font- something that definitely /shouldn't/ be antialiased- but again, the canvas does it by default- and on text, there's literally no way to turn it off. Consequently, I wasn't happy with the final look of the text, but I wasn't unhappy enough with it to implement it some other way. If I did something like this again, I would handle text with floating fixed-position <div> elements or something. After it was all done, I spent some time squashing bugs and revising the story a little bit, and then put it away for a while.

polish and publish
==================

After playing the game for a little bit, I realized that I wanted the game to be fullscreen. With a little bit of modification to the onLoad method on the page and the inclusion of the only third-party js library in the project- [screenfull](https://github.com/sindresorhus/screenfull.js/) (which is great, by the way) we had pretty painlessly made the game fullscreen. I toyed with the idea of hosting the project on this repository, but I eventually decided to publish it on [itch.io](itch.io), a hub for indie games that I'd used a couple years ago to make a silly game for the john cena game jam. I also figured it would be cool to write something on here about it, so I did. Enjoy the weird game that I made in a van.
