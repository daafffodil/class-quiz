# Classroom Quiz Tool PRD

## 1. Product Overview

The Classroom Quiz Tool is a lightweight quiz website that generates quizzes from a local question bank.

Teachers prepare a question set in advance, and the system parses the data file to generate a quiz flow. Users answer questions one by one, receive immediate feedback, and see a final accuracy result.

Key principles:

- Clean quiz experience
- Single-question focus
- Instant feedback
- Fast deployment

The first version does not include a backend system or database.

---

## 2. Product Goal

In classrooms, multiple-choice questions are usually presented via:

- PowerPoint
- Printed worksheets
- Verbal questions

These methods lack:

- Interactivity
- Real-time feedback
- Engagement

This product provides:

A quiz experience similar to personality-test websites.

Features:

- One question at a time
- Instant answer validation
- Progress statistics
- Final accuracy report

---

## 3. User Roles

### Teacher

Responsibilities:

- Prepare question sets
- Select quiz set
- Display quiz during class

### Student

Responsibilities:

- Read question
- Select answer
- Receive feedback

---

## 4. Product Structure

The MVP includes four pages:

1. Home Page
2. Quiz Page
3. Result Page
4. Admin Entry (placeholder)

---

## 5. Page Description

### 1 Home Page

Purpose:

Display available quiz sets.

Content:

- Website title
- Quiz set list
- Start quiz button
- Admin entry button

Example quiz sets:

Chinese Practice  
History Quiz  
DSE Characters  

Click a quiz set to start.

---

### 2 Quiz Page

Core page of the application.

Top-right statistics:

- Current question
- Total questions
- Correct answers
- Wrong answers

Example:

Question 3 / 10  
Correct: 2  
Wrong: 1  

Center area:

Question stem

Below:

Option buttons.

Example:

A  
B  
C  
D  

---

### Answer Logic

When the user selects an option:

The system immediately checks the answer.

If correct:

- Option turns green
- Checkmark icon appears
- Small confetti animation

If incorrect:

- Option turns red
- Correct answer is shown

After 1 second:

Automatically move to the next question.

---

### 3 Result Page

Displayed after all questions are completed.

Information shown:

- Total questions
- Correct answers
- Wrong answers
- Accuracy percentage

Example:

Total: 10  
Correct: 7  
Wrong: 3  
Accuracy: 70%

Buttons:

Retry  
Back to Home

---

### 4 Admin Entry (Placeholder)

The home page includes a button:

Admin

This page is a placeholder for future features.

Future capabilities:

- Upload question bank
- Manage quiz sets
- View classroom statistics

No backend functionality is included in the MVP.

---

## 6. Question Source

All questions in the first version come from a local data file.

Directory structure:

```

/data

```

Example file:

```

quizSets.ts

```

---

## 7. Data Structure

### QuizSet

Represents a set of questions.

Fields:

- id
- title
- description
- questions

Example:

```

{
id: "chinese-basic",
title: "Chinese Character Practice",
description: "Common DSE characters",
questions: [...]
}

```

---

### Question

Represents a single question.

Fields:

- id
- stem
- options
- correctIndex
- explanation (optional)

Example:

```

{
id: "1",
stem: "What is the traditional form of '说'?",
options: ["说","語","說","話"],
correctIndex: 2,
explanation: "The traditional form is '說'."
}

```

---

## 8. Interaction Principles

### Single Question Focus

Only one question is displayed at a time.

This reduces distraction.

---

### Instant Feedback

Answer validation happens immediately after selection.

---

### Automatic Progression

After answering:

Wait 1 second → next question.

---

### Fixed Statistics

The top-right statistics panel always shows:

- Current question
- Total questions
- Correct answers
- Wrong answers

---

## 9. MVP Scope

### Included

- Load local question bank
- Quiz set selection
- Single-question answering
- Instant feedback
- Progress statistics
- Result page

---

### Not Included

- Database
- Login system
- Teacher input system
- Excel import
- Classroom management
- Score storage

---

## 10. Visual Direction

Inspired by quiz / personality-test websites.

Design principles:

- Clean layout
- Large question text
- Large option buttons
- Minimal UI distractions

Suggested animations:

- Checkmark animation
- Small confetti effect

Avoid heavy animations to maintain classroom focus.
