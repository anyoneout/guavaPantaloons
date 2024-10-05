import { input } from '@inquirer/prompts';
import { select } from '@inquirer/prompts';
import { checkbox } from '@inquirer/prompts';
import { say } from 'cowsay';


const name = await input({ message: 'What is your name?'});

const iceCream = await select({
  message: 'What is your favorite ice cream',
  choices: [
    {
      name: 'Chocolate',
      value: 'Chocolate',
      description: 'Chocolate ice cream was created in the 1690s in Naples, Italy',
    },
    {
      name: 'Vanilla',
      value: 'Vanilla',
      description: 'The type of vanilla used to flavor ice cream varies by location. In North America and Europe, people prefer a more smoky flavor, while in Ireland, people prefer a more anise-like flavor.',
    },
    {
      name: 'Pistachio',
      value: 'Pistachio',
      description: 'Pistachio ice cream is usually green in color. However, most commercial pistachio ice cream does not contain pistachios, and instead uses almond paste and green food dye to achieve the desired color.',
    },
    {
      name: 'Rocky Road',
      value: 'Rocky Road',
      description: 'Dreyer and Edy named the flavor "Rocky Road" to cheer people up during the Great Depression. The tagline at the time was "share a scoop, share a smile"',
    },
  ],
});

const planet = await checkbox({
  message: 'What is your favorite planet?',
  choices: [
    { name: 'Mercury', value: 'Mercury' },
    { name: 'Venus', value: 'Venus' },
    { name: 'Earth', value: 'Earth', disabled: true },
    { name: 'Mars', value: 'Mars' },
    { name: 'Jupiter', value: 'Jupiter' },
    { name: 'Saturn', value: 'Saturn' },
    { name: 'Uranus', value: 'Uranus' },
    { name: 'Neptune', value: 'Neptune' },
    { name: 'Pluto', value: 'Pluto', disabled: true }
  ],
});


const yell = await input({ message: 'What is a good thing for a cow on another planet to yell?'});



console.log(say({ text: `Hello, nice ${name} to meet you! ${iceCream} is mooey delicioso. I enjoy eating it while yelling the words "${yell}" on ${planet}.` }));
