import random
print("******************************************")
print("* Welcome to the Guess the Number!   *")
print("******************************************")
print("\nI'm thinking of a number between 1 and 100.")
print("Let's see if you can guess it!\n")
secret_number = random.randint(1, 100)
guess = -1
guess_count = 0
while guess != secret_number:
    try:
        guess = int(input("🤔 Guess a number: "))
        guess_count += 1
        if guess > secret_number:
            print("⬇️ Too high! Try a lower number.")
        elif guess < secret_number:
            print("⬆️ Too low! Try a higher number.")

    except ValueError:
        print("⚠️ Oops! That's not a valid number. Please enter a whole number.")
print("-" * 42)
print(f"🎉 You got it! The correct number was {secret_number}! 🎉")
print(f"You guessed it in {guess_count} attempts.")
if guess_count <= 5:
    print("\nWow! You're a mind reader! 🔮")
elif guess_count <= 10:
    print("\nExcellent job! That was some solid guessing. 👍")
else:
    print("\nGood effort! You got there in the end. 😊")

print("\n--- Thanks for playing! ---")
