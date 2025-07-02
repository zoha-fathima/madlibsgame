const storyData = {
  1: {
    inputs: [
      { id: "place", prompt: "Name a spooky place where you'd NOT want to be at midnight:" },
      { id: "noun", prompt: "Give me a weird object you’d find in a wizard’s pocket:" },
      { id: "object", prompt: "Name an everyday object that might suddenly become scary:" },
      { id: "food", prompt: "What's a silly food that could talk to you?" },
    ],
    template: ({place, noun, object, food}) => `
You sneaked into the ${place} at midnight to grab a ${noun}, but the ${object} slammed shut behind you.
Suddenly, the ${food} whispered, “You shouldn’t have taken my last slice.”
Moral: Never steal ${food} after dark.
`
  },
  2: {
    inputs: [
      { id: "verb", prompt: "Give me an action you do when you’re REALLY scared:" },
      { id: "object", prompt: "Name an everyday object that might suddenly become scary:" },
      { id: "object2", prompt: "Name a strange machine you’d see in a sci-fi movie:" },
      { id: "animal", prompt: "Name a mischievous animal that might cause trouble:" },
      { id: "profession", prompt: "Give me a weird job title (real or fake):" },
      { id: "noun", prompt: "Give me a weird object you’d find in a wizard’s pocket:" },
    ],
    template: ({verb, object, object2, animal, profession, noun}) => `
Every time you tried to ${verb} your ${object}, the ${object2} spit out pictures of a ${animal} dressed as a ${profession}.
Turns out, the ${object} just wanted you to solve the mystery of the missing ${noun}.
Moral: Sometimes technology just wants attention.
`
  },
  3: {
    inputs: [
      { id: "plural_noun", prompt: "Name a group of things that could mysteriously disappear:" },
      { id: "plural_noun2", prompt: "Another set of weird things that might leave a trail:" },
      { id: "household_item", prompt: "Name a creepy household item that might hide secrets:" },
      { id: "creatures", prompt: "Invent a funny or spooky creature:" },
    ],
    template: ({plural_noun, plural_noun2, household_item, creatures}) => `
Your ${plural_noun} started disappearing one by one.
One night, you followed a trail of ${plural_noun2} fluff into a secret portal behind the ${household_item}.
Inside, ${creatures} were having a party.
Moral: Always check your ${household_item} for weird portals.
`
  },
  4: {
    inputs: [
      { id: "plant", prompt: "Name a plant that might have a sassy personality:" },
      { id: "plant2", prompt: "Another plant that’s probably jealous:" },
    ],
    template: ({plant, plant2}) => `
You watered your ${plant}, and it suddenly said, “Stop staring at me like that.”
It warned you that the ${plant2} next door was plotting revenge.
Moral: Be nice to plants — you never know who’s listening.
`
  },
  5: {
    inputs: [
      { id: "vehicle", prompt: "Name a weird mode of transport you’d never want to take:" },
      { id: "place", prompt: "Name a place you want to get to:" },
      { id: "plural_place", prompt: "Name multiple places inside a building (floors, rooms, etc.):" },
      { id: "noun", prompt: "Give me a noun (something tricky or mysterious):" },
    ],
    template: ({vehicle, place, plural_place, noun}) => `
You got in the ${vehicle} and pressed the button for your ${place}, but the ${vehicle} stopped between ${plural_place} and the lights flickered.
A robotic voice said, “Answer me this ${noun} or stay here forever.”
Moral: Always be ready for unexpected quizzes.
`
  },
  6: {
    inputs: [
      { id: "object", prompt: "Name an object that could go missing mysteriously:" },
      { id: "place", prompt: "Name a cold place where things might hide:" },
    ],
    template: ({object, place}) => `
The ${object} vanished, and you found a note saying, “Catch me if you can.”
After hours of searching, you discovered the ${object} had been hiding in the ${place}.
Moral: Sometimes the answer is colder than you think.
`
  },
  7: {
    inputs: [
      { id: "room", prompt: "Name a room where weird things happen:" },
      { id: "object", prompt: "Name an object that could unlock secrets:" },
      { id: "plural_object", prompt: "Name a set of objects that would make great prank tools:" },
    ],
    template: ({room, object, plural_object}) => `
You left your ${room}, and the door locked behind you with no ${object} in sight.
Suddenly, the door creaked open, and a tiny voice said, “Gotcha!”
Moral: Never underestimate the cleverness of your ${plural_object}.
`
  },
  8: {
    inputs: [
      { id: "place", prompt: "Name a place where ghosts might hang out:" },
      { id: "food", prompt: "Name a favorite food to share:" },
      { id: "topping", prompt: "Name the weirdest pizza topping you can think of:" },
    ],
    template: ({place, food, topping}) => `
A ghost haunted your ${place} every night, but only to steal your ${food} .
When you offered him , he said, “Thanks, I’m just here for the ${topping}.”
Moral: Sharing is caring, even with ghosts.
`
  },
  9: {
    inputs: [
      { id: "animal", prompt: "Name a sneaky animal:" },
      { id: "adjective", prompt: "Give me an adjective that sounds suspicious:" },
      { id: "verb", prompt: "Name a sneaky action:" },
    ],
    template: ({animal, adjective, verb}) => `
Your ${animal} started following you everywhere, but then it blinked and said, “I’m actually an ${adjective} spy.”
Moral: Don’t trust the ones who ${verb} the loudest.
`
  },
  10: {
    inputs: [
      { id: "object", prompt: "Name an object that can ring:" },
      { id: "verb", prompt: "Name a verb describing what you do before bed:" },
      { id: "noun", prompt: "Name an embarrassing thing:" },
    ],
    template: ({object, verb, noun}) => `
Your ${object} started ringing before you even went to ${verb}.
Turns out, it was trying to warn you about tomorrow’s embarrassing ${noun}.
Moral: Sometimes, the future knocks earlier than expected.
`
  }
};

const chooseBtn = document.getElementById('choose-btn');
const storyChoiceInput = document.getElementById('story-choice');
const form = document.getElementById('madlib-form');
const inputsContainer = document.getElementById('inputs-container');
const storyResult = document.getElementById('story-result');

chooseBtn.addEventListener('click', () => {
  const choice = parseInt(storyChoiceInput.value);
  if (!choice || choice < 1 || choice > 10) {
    alert('Please enter a valid story number between 1 and 10.');
    return;
  }

  // Clear previous inputs and result
  inputsContainer.innerHTML = '';
  storyResult.textContent = '';
  
  const story = storyData[choice];
  if (!story) {
    alert('Story not found.');
    form.style.display = 'none';
    return;
  }

  // Show the form and generate input fields
  form.style.display = 'block';
  for (const input of story.inputs) {
    const label = document.createElement('label');
    label.textContent = input.prompt;
    label.htmlFor = input.id;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = input.id;
    inputField.name = input.id;
    inputField.required = true;

    inputsContainer.appendChild(label);
    inputsContainer.appendChild(inputField);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const choice = parseInt(storyChoiceInput.value);
  const story = storyData[choice];

  // Collect values
  const formData = new FormData(form);
  const values = {};
  for (const input of story.inputs) {
    const val = formData.get(input.id).trim();
    if (!val) {
      alert('Please fill all fields.');
      return;
    }
    values[input.id] = val;
  }

  // Generate story text
  const resultText = story.template(values);
  storyResult.textContent = resultText;
});