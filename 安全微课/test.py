# encoding=utf-8

file = open('questions.txt', 'r')
data = file.read()
questions_answers = eval(data)

print(type(questions_answers))

print(len(questions_answers))
