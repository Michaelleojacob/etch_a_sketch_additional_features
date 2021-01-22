# EtchASketch version 2.

# Live website: https://michaelleojacob.github.io/etch_a_sketch_additional_features/

## This version features a dynamic grid table that is created when the user gives input through the slider.

## I also added buttons so the user may pick between 3 different options. One applies purple to each mouse over. Another applies black to each mouse over. And finally one adds gray to each mouse over, acting as an eraser.

# Highlights:

> grid is created dynamically

> mouse over works. Color can be adjusted using the buttons at the top.

> reset button works.

# Some of my biggest challenges for this project:

> Making the grid dynamic. Solution I implemented was to move the css to javascript so I may use the setproperty with a js variable.

> Allowing the mouse over to work on the different grids, be the default grid (on page load), or larger/smaller grids. I wasn't exactly sure how to tackle going through each grid item and adding a mouseover effect.

> the buttons to change color

# The end of this version, and what is in store for the next version

> this version:

I really enjoy the fact that the buttons can change the color of each and every grid item that has been moused over. (at least default and black both do this.)

> future version:

The next version I will refactor the code. The goal is to implement a way to use a rainbow color option as a button. I believe in order to achieve this; I will have to remove the logic that changes the way the current mouse overs work.

Currently the mouse over adds a class. And by pressing a button you manipulate the current items that have been mousedover and any new ones as well.

The next version will most likely set the style property to a color. Thus removing a lot of the code needed for changing the color of each mouseovered item.

I am unsure if I want to invest the time into the next version to allow this more dynamic way of adding style to each grid item that is moused over to change the colors of current moused over items on a color switch.

I think the goal will be to just hit the reset button each time the user wants to change colors in the next version.
