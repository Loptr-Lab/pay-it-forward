export type StoryNode = {
  title: string;
  text: string;
  choices?: { label: string; next: string; note?: string }[];
  ending?: boolean;
};

export const story: Record<string, StoryNode> = {
  start: {
    title: "A VERY QUESTIONABLE BUTTON",
    text: "You have the comic, a sketchbook, a phone, and one hour. A glowing button offers to do everything for you. It promises a perfect story, perfect art, perfect campaign—no decisions required. The button is suspiciously confident.",
    choices: [
      { label: "Keep the weird idea. Make the choices myself.", next: "author" },
      { label: "Ask a tool for options, then judge them.", next: "tool" },
      { label: "Close the button. Start with the comic.", next: "comic" },
    ],
  },
  author: {
    title: "YOU ARE THE AUTHOR",
    text: "You choose the point of view, what belongs in the world, what feels funny, what feels wrong, and what stays unfinished. A tool can help with a task. It cannot decide what the work means to you.",
    choices: [
      { label: "Make a tiny thing with what I have.", next: "make" },
      { label: "Ask a collaborator for a human perspective.", next: "collab" },
    ],
  },
  tool: {
    title: "THE TOOL IS A TOOL",
    text: "You ask for three possible directions—not a finished answer. One is dull, one is useful, one sparks a completely different idea. You keep the spark, reject the rest, and make the next decision.",
    choices: [
      { label: "Use the spark; change it until it is mine.", next: "make" },
      { label: "Reject all three. My original idea wins.", next: "author" },
    ],
  },
  comic: {
    title: "SOURCE MATERIAL, NOT A SHORTCUT",
    text: "You return to the actual FILTHY YUCK! comic. Its art, characters, and creators are the source of truth. You can explore it, respond to it, or make a new side quest—but you do not invent canon, copy assets, or pretend permission exists.",
    choices: [
      { label: "Explore the comic and make a response.", next: "make" },
      { label: "Listen first; let the music set a mood.", next: "music" },
    ],
  },
  make: {
    title: "MAKE SOMETHING SMALL",
    text: "A sketch, a one-panel joke, a playlist, a photo, a tiny interactive scene. You use what you have. If AI helps, you record where it helped and make the creative decisions yourself. If it does not help, leave it out.",
    choices: [
      { label: "Share the discovery with someone.", next: "share" },
      { label: "Keep it private; learn from it.", next: "learn" },
    ],
  },
  collab: {
    title: "A HUMAN IN THE LOOP—BY CHOICE",
    text: "Your collaborator notices a detail you missed. You credit them, agree on what can be shared, and keep the parts that make the work yours together. Collaboration is a relationship, not a checkbox.",
    choices: [{ label: "Pass the idea forward.", next: "share" }],
  },
  music: {
    title: "FOLLOW THE SOUND",
    text: "A song changes the mood of the scene. Music is another doorway into the world—but listening is not a funnel with only one exit. You can explore, skip, share, or simply enjoy it.",
    choices: [{ label: "Return to the story with a new idea.", next: "make" }],
  },
  share: {
    title: "PLAY IT FORWARD",
    text: "You share the comic, an official music link, your own creation, or a useful discovery. You do not have to buy anything, post anything, or prove you used a machine. The value is what you chose to make and pass on.",
    ending: true,
  },
  learn: {
    title: "YOU STILL OWN THE DECISION",
    text: "You learned something, even if the result stays in your notebook. The machine did not set the goal, choose the meaning, or decide whether the work was worth making. You did.",
    ending: true,
  },
};

export const storyStart = "start";
