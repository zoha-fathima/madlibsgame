def story1():
    place = input("Name a spooky place where you'd NOT want to be at midnight: ")
    noun = input("Give me a weird object you’d find in a wizard’s pocket: ")
    object_ = input("Name an everyday object that might suddenly become scary: ")
    food = input("What's a silly food that could talk to you? ")
    return f"""
You sneaked into the {place} at midnight to grab a {noun}, but the {object_} slammed shut behind you.
Suddenly, the {food} whispered, “You shouldn’t have taken my last slice.”
Moral: Never steal {food} after dark.
"""

def story2():
    verb = input("Give me an action you do when you’re REALLY scared: ")
    object_ = input("Name an everyday object that might suddenly become scary: ")
    object2 = input("Name a strange machine you’d see in a sci-fi movie: ")
    animal = input("Name a mischievous animal that might cause trouble: ")
    profession = input("Give me a weird job title (real or fake): ")
    noun = input("Give me any object  ")
    return f"""
Every time you tried to {verb} your {object_}, the {object2} spit out pictures of a {animal} dressed as a {profession}.
Turns out, the {object_} just wanted you to solve the mystery of the missing {noun}.
Moral: Sometimes technology just wants attention.
"""

def story3():
    plural_noun = input("Name a group of things that could mysteriously disappear: ")
    plural_noun2 = input("Another set of weird things that might leave a trail: ")
    household_item = input("Name a creepy household item that might hide secrets: ")
    creatures = input("Invent a funny or spooky creature: ")
    return f"""
Your {plural_noun} started disappearing one by one....
One night, you followed a trail of {plural_noun2} fluff into a secret portal behind the {household_item}.
Inside, {creatures} were having a party.
Moral: Always check your {household_item} for weird portals.
"""

def story4():
    plant = input("Name a plant that might have a sassy personality: ")
    plant2 = input("Another plant that’s probably jealous: ")
    return f"""
You watered your {plant}, and it suddenly said, “Stop staring at me like that.”
It warned you that the {plant2} next door was plotting revenge.
Moral: Be nice to plants — you never know who’s listening.
"""

def story5():
    vehicle = input("Name a weird mode of transport you’d never want to take: ")
    place = input("Name a place you want to get to: ")
    plural_place = input("Name multiple places inside a building (floors, rooms, etc.): ")
    noun = input("Give me a noun (something tricky or mysterious): ")
    return f"""
You got in the {vehicle} and pressed the button for your {place}, but the {vehicle} stopped between {plural_place} and the lights flickered.
A robotic voice said, “Answer me this {noun} or stay here forever.”
Moral: Always be ready for unexpected quizzes.
"""

def story6():
    object_ = input("Name an object that could go missing mysteriously: ")
    place = input("Name a cold place where things might hide: ")
    return f"""
The {object_} vanished, and you found a note saying, “Catch me if you can.”
After hours of searching, you discovered the {object_} had been hiding in the {place}.
Moral: Sometimes the answer is colder than you think.
"""

def story7():
    room = input("Name a room where u dont go often in ur house ")
    object_ = input("Name an object that could unlock secrets: ")
    plural_object = input("Name a set of objects that would make great prank tools: ")
    return f"""
You left your {room}, and the door locked behind you with no {object_} in sight.
Suddenly, the door creaked open, and a tiny voice said, “Gotcha!”
Moral: Never underestimate the cleverness of your {plural_object}.
"""

def story8():
    place = input("Name a place where ghosts might hang out: ")
    food = input("Name a favorite food to share: ")
    topping = input("Name the weirdest pizza topping you can think of: ")
    return f"""
A ghost haunted your {place} every night, but only to steal your {food} slices.
When you offered him a slice, he said, “Thanks, I’m just here for the {topping}.”
Moral: Sharing is caring, even with ghosts.
"""

def story9():
    animal = input("Name a sneaky animal: ")
    adjective = input("Give me an adjective that sounds suspicious: ")
    verb = input("Name a sneaky action: ")
    return f"""
Your {animal} started following you everywhere, but then it blinked and said, “I’m actually an {adjective} spy.”
Moral: Don’t trust the ones who {verb} the loudest.
"""

def story10():
    object_ = input("Name an object that can ring: ")
    verb = input("Name a verb describing what you do before bed: ")
    noun = input("Name an embarrassing thing: ")
    return f"""
Your {object_} started ringing before you even went to {verb}.
Turns out, it was trying to warn you about tomorrow’s embarrassing {noun}.
Moral: Sometimes, the future knocks earlier than expected.
"""



print("Pick a story number from 1 to 10:")
choice = int(input("Your choice: ").strip())

if choice == 1:
        story = story1()
elif choice == 2:
    story = story2()
elif choice == 3:
    story = story3()
elif choice == 4:
    story = story4()
elif choice == 5:
    story = story5()
elif choice == 6:
    story = story6()
elif choice == 7:
    story = story7()
elif choice == 8:
    story = story8()
elif choice == 9:
    story = story9()
elif choice == 10:
    story = story10()
else:
    print("Invalid choice. Please enter a number from 1 to 10.")


print("\n" + story)