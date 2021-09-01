---
title: Teach Assist Bot
canonical_url: true
description: "A bot to help students track their marks as they update."
---

# Teach Assist Bot

As a student, I've always found myself checking my marks every hour for any update. To save time, I wanted a way to notify myself whether my marks updated. Thus, I made a Python script that runs in combination with a shell script to email myself with any mark updates once a day.

Check out the repo [here](https://github.com/nathan-louie/teach-assist).

# Features

The Python script scrapes the Teach Assist website with login credentials for the marks of the student. Then, it compares the marks with marks saved on the local file system, for any mark updates.

Next, it creates the email and sends a mark update email to the user from the Teach Assist Bot email. This acts as the notification for the user, as there are email notifications on one's phone.

# Stack

- This project was created with Python
- Utilized the [BeautifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/) library for HTML parsing
