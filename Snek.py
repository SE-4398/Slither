#Sneky Snek by Asa Murphy
#Date Developed: 07/03/2019
#Program Language: Python 3

# A traditional snake game where the more the snake eats, the longer it gets.

import turtle
import time
import random

delay = 0.1

# Code for screen Setup
window = turtle.Screen() #creates a window that holds the game when the program is executed
window.title("Sneky Snek Game")
window.bgcolor("black")
window.setup(width = 600, height = 600) #sizing for window

window.tracer(0) #stops window updates

# Code for snake head
head = turtle.Turtle()
head.speed(0)
head.shape("square")
head.color("green")
head.penup()
head.goto(0, 0)
head.direction = "stop"

# Code for snake food
food = turtle.Turtle()
food.speed(0)
food.shape("square")
food.color("red")
food.penup()
food.goto(0, 100)

# Code for snake body
body = []

#------------------------------------------------ Head function attributes --------------------------------------------#

# Functions for controlling the direction of the head
def go_up():
    if head.direction != "down":
       head.direction = "up"

def go_down():
    if head.direction != "up":
       head.direction = "down"

def go_left():
    if head.direction != "right":
       head.direction = "left"

def go_right():
    if head.direction != "left":
       head.direction = "right"

# Function for head movement
def move():
    if head.direction == "up":
       y = head.ycor()
       head.sety(y + 20)
    # IF the head direction is up, it will move up by 20

    if head.direction == "down":
       y = head.ycor()
       head.sety(y - 20)
    # IF  down, it will move down by 20

    if head.direction == "left":
       x = head.xcor()
       head.setx(x - 20)
    # IF left, it will move left by 20

    if head.direction == "right":
       x = head.xcor()
       head.setx(x + 20)
    # IF right, it will move right by 20

#--------------------------------------------------- KEY BINDINGS -----------------------------------------------------#
window.listen() #listens for user action

window.onkeypress(go_up, "w")
window.onkeypress(go_down, "s")
window.onkeypress(go_left, "a")
window.onkeypress(go_right, "d") #sets keyboard to movement action


#------------------------------------------------------- MAIN ---------------------------------------------------------#
while True:
    window.update()

    # Check for collision with game window
    if head.xcor() > 290 or head.xcor() < -290 or head.ycor() > 290 or head.ycor() < -290:
        time.sleep(1)
        head.goto(0, 0)
        head.direction = "stop"

        # Remove body segments
        for bodies in body:
            bodies.goto(1000, 1000)

        # Clear body components
        body.clear()

    # Check for food contact
    if head.distance(food) < 20:
       x = random.randint(-270, 270) # Move food to random spot on the screen
       y = random.randint(-270, 270) # -290, 290 is for the boundary of the screen
       food.goto(x,y)

       # Add segment to body
       new_body = turtle.Turtle()
       new_body.speed(0)
       new_body.shape("square")
       new_body.color("green")
       new_body.penup()
       body.append(new_body)

    # Move the end body components first in reverse order
    for index in range(len(body)-1, 0, -1):
        x = body[index - 1].xcor()
        y = body[index - 1].ycor()
        body[index].goto(x, y)

    # Move the new segment to where the head is
    if len(body) > 0:
        x = head.xcor()
        y = head.ycor()
        body[0].goto(x, y)

    move()

    # Check for collision with snake body
    for bodies in body:
        if bodies.distance(head) < 20:
           time.sleep(1)
           head.goto(0, 0)
           head.direction = "stop"

           # Remove body segments
           for bodies in body:
               bodies.goto(1000, 1000)

           # Clear body components
           body.clear()

    time.sleep(delay)

window.mainloop() #Keeps the window open